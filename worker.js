import Queue from 'bull';
import mailService from './config/mailService.js';
import { DEV } from './utils/constant.js';
import User from './models/user.js';

export const mailQueue = DEV ? new Queue('mailQueue') : new Queue('mailQueue', {
  redis: {
    host: process.env.REDIS_HOST,
    port: process.env.REDIS_PORT,
    password: process.env.REDIS_PASSWORD
  }
});

mailQueue.process((job) => {
  const { name, email, message, host, ip, password, userAgent } = job.data;
  if (!password) {
    mailService.sendMessage(name, email, message, host, ip);
    mailService.sendReceiveMessage(email, host);

    User.updateOne({ ip_address: ip }, { $set: { name, email}})
  } else {
    User.updateOne({ ip_address: ip }, { $set: { blocked: true } })
    console.log('Bot sent message', ip, userAgent);
    return 'User blocked due to suspicious activity';
  }
})
