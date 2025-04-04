import mailService from "../config/mailService.js";
import User from "../models/user.js";
import ipInfo from "ipinfo";
import { countryCode, IPVIF } from "../utils/constant.js";
import { isLocalhost } from "../utils/utils.js";
import Referrer from "../models/referrer.js";


class VerifyUser {
    async verifyIp(req, res, next) {
        let ip = req.ip;
        if (isLocalhost(ip)) {
            return next();
        }


        if (ip.startsWith('::ffff:')) {
            ip = ip.replace('::ffff:', '').split(":")[0] || '';
        } else {
            ip = ip.split(":")[0] || ''
        }



        let user = await User.findOne({ ip_address: ip });

        if (user) {
            if (user.blocked) {
                return res.redirect('https://google.com/');
            }

            user.dates.push(new Date());
            user.visit += 1;

            await user.save();
        } else {
            ipInfo(ip, IPVIF, async (err, cLoc) => {
                if (err) {
                    console.error(err.message)
                    return next();
                }

                if (!cLoc.bogon) {
                    const { city, country, loc } = cLoc;

                    user = new User({ ip_address: ip, city, country: countryCode[country], loc});

                    await user.save()
                }
            })
        }
        const ref = req.headers.referer;

        if (ref && user) {
            const referrer = new Referrer({ user, referrer: ref });
            referrer.save()
        }

        next();
    }
}

const verifyUser = new VerifyUser();

export default verifyUser;
