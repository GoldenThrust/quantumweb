import Queue from 'bull';
import mailService from './config/mailService.js';

export const mailQueue = new Queue('mailQueue');

mailQueue.process(async (job) => {
    const { name, email, message, host } = job.data;
    mailService.sendMessage(name, email, message, host);
    mailService.sendRecentMessage(email, host)
})