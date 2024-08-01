import mailService from "../config/mailService.js";
import User from "../models/user.js";
import ipInfo from "ipinfo";
import { IPVIF } from "../utils/constant.js";
import { isLocalhost } from "../utils/utils.js";


class VerifyUser {
    async verifyIp(req, res, next) {
        let ip = req.ip;
        if (ip.startsWith('::ffff:')) {
            ip = ip.replace('::ffff:', '');
        }

        const user = await User.findOne({ ip_address: ip });

        if (user) {
            user.dates.push(new Date());
            user.visit += 1;

            await user.save();

            if (user.blocked) {
                return res.redirect('https://google.com/');
            }
        } else {
            if (isLocalhost(ip)) {
                return next();
            }

            ipInfo(ip, IPVIF, (err, cLoc) => {
                if (err) {
                    return res.status(err.code).send(err.message);
                }

                if (!cLoc.bogon) {
                    const { city, country, loc } = cLoc;

                    const user = new User({ ip_address: ip, city, country, loc });

                    user.save((err, user) => {
                        if (err) {
                            return res.status(500).send(err.message);
                        }
                    })
                }
            })
        }


        next();
    }
}

const verifyUser = new VerifyUser();

export default verifyUser;
