import Queue from 'bull';
import mailService from './config/mailService.js';
import { DEV } from './utils/constant.js';

export const mailQueue =  DEV ? new Queue('mailQueue') : new Queue('mailQueue', {
    redis: {
      host: process.env.REDIS_HOST,
      port: process.env.REDIS_PORT,
      password: process.env.REDIS_PASSWORD
    }
  });

mailQueue.process((job) => {
    const { name, email, message, host, ip } = job.data;
    mailService.sendMessage(name, email, message, host, ip);
    mailService.sendReceiveMessage(email, host)
})
