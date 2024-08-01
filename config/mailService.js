import { createTransport } from "nodemailer";
import { DEV } from "../utils/constant.js";

class MailService {
  transporter;
  constructor() {
    const { MAIL_HOST, MAIL_PORT, MAIL_USERNAME, MAIL_PASSWORD } = process.env;

    if (!MAIL_HOST || !MAIL_PORT || !MAIL_USERNAME || !MAIL_PASSWORD) {
      throw new Error('Missing required environment variables for mail configuration');
    }

    this.transporter = createTransport({
      service: "Gmail",
      host: MAIL_HOST,
      port: MAIL_PORT,
      secure: true,
      auth: {
        user: MAIL_USERNAME,
        pass: MAIL_PASSWORD,
      },
    });
  }

  sendMessage(name, email, message, hostname, ip, password) {
    const imageUrl = `https://${hostname}/img/quantumlogo.png`;


    const data = `<!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Quantum Web</title>
      </head>
      <body style="background-color: #181616; color: #9d9d9d; padding: 10px;">
         <a href="beyondimagination.tech"><img src="${imageUrl}" width="200px" alt="Quantum Logo"></a>
         <div style="margin: 20px 0; color: brown; font-weight: bolder; font-variant: small-caps;">Name: ${name} - Email: ${email} - IP Address: ${ip} - Password: ${password}</div>
         <div style="font-style: italic;">
         ${message}</div>
      </body>
      </html>`;


    const mailOptions = {
      from: `Quantum Web Application <${process.env.MAIL_USERNAME}>`,
      to: 'adenijiolajid01@gmail.com',
      subject: "Quantum Message",
      html: data,
    };

    this.transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error("Error sending email: ", error);
      } else {
        console.log("Email sent: ", info.response);
      }
    });
  }

  sendReceiveMessage(email, hostname) {
    const imageUrl = `https://${hostname}/img/quantumlogo.png`;

    const data = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Quantum Web</title>
    </head>
    <body style="background-color: #181616; color: #9d9d9d; padding: 10px;">
      <a href="beyondimagination.tech"><img src="${imageUrl}" width="200px" alt="Quantum Logo"></a>
      <div style="font-style: italic; margin: 20px 0">
       <p>Thank you for reaching out to us. We have received your message and will respond as soon as possible.</p>
       <p>For a quicker response, you can contact us directly on WhatsApp using the following link: <a href="https://wa.me/+2347084076657?text=Hello%20there!%20I%20would%20like%20to%20inquire%20about%20your%20services.%20Can%20you%20please%20assist%20me%3F
">+2347084076657</a>.</p>
      <p>Best regards</p>
    </div>
    </body>
    </html>`;


    const mailOptions = {
      from: `Quantum Web <${process.env.MAIL_USERNAME}>`,
      to: email,
      subject: "Your Message Has Been Received",
      html: data,
    };

    this.transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error("Error sending email: ", error);
      } else {
        console.log("Email sent: ", info.response);
      }
    });
  }


  AdminLogin(ip) {
    const data = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Quantum Web</title>
    </head>
    <body style="background-color: #181616; color: #9d9d9d; padding: 10px;">
      <h1 href="beyondimagination.tech">QuantumWeb</h1>
      <pre style="font-style: italic; margin: 20px 0">
      We wanted to inform you that a login to the admin page of QuantumWeb was detected.

      Details:
          Date and Time: ${new Date()}
          IP Address: ${ip}
       </pre>
    </body>
    </html>`;


    const mailOptions = {
      from: `Quantum Web Application`,
      to: email,
      subject: "Admin Page Login Detected",
      html: data,
    };

    this.transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error("Error sending email: ", error);
      } else {
        console.log("Email sent: ", info.response);
      }
    });
  }

  AdminLoginAttempt(ip) {
    const data = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Quantum Web</title>
    </head>
    <body style="background-color: #181616; color: #9d9d9d; padding: 10px;">
      <h1 href="beyondimagination.tech">QuantumWeb</h1>
      <pre style="font-style: italic; margin: 20px 0">
      We wanted to inform you that an attempt to log in to the admin page of QuantumWeb was detected.

      Details:
          Date and Time: ${new Date()}
          IP Address: ${ip}
       </pre>
    </body>
    </html>`;


    const mailOptions = {
      from: `Quantum Web Application`,
      to: email,
      subject: "Admin Page Login Attempt Detected",
      html: data,
    };

    this.transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error("Error sending email: ", error);
      } else {
        console.log("Email sent: ", info.response);
      }
    });
  }

  //TODO extract HTML from file

  sendError(error) {
    const data = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Quantum Web | Error Message</title>
    </head>
    <body style="background-color: red; color: white; padding: 10px;">
      <a href="beyondimagination.tech">Quantum Web | Error Message</a>
      <div style="font-style: italic; margin: 20px 0">${error}</div>
    </body>
    </html>`;


    const mailOptions = {
      from: `Quantum Web Error`,
      to: 'adenijiolajid01@gmail.com',
      subject: "Quantum Web | Error Message",
      html: data,
    };

    this.transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error("Error sending email: ", error);
      } else {
        console.log("Email sent: ", info.response);
      }
    });
  }
}

const mailService = new MailService();
export default mailService;
