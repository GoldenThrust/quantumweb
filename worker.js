import Queue from 'bull';
import mailService from './config/mailService.js';

export const mailQueue = new Queue('mailQueue');

mailQueue.process(async (job) => {
    const { name, email, message, host } = job.data;
    console.log(`${name} ${email} ${message}, ${host}`);
    mailService.sendMessage(name, email, message, host);
    mailService.sendReceiveMessage(email, host)
})