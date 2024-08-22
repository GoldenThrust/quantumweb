import { createTransport } from "nodemailer";
import { DEV } from "../utils/constant.js";
import fs from "fs"
import websocket from "./websocket.js";

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

  sendMessage(name, email, message, hostname, ip) {
    const imageUrl = `https://${hostname}/img/quantumlogo.png`;


    const data = `
      <body style="background-color: #181616; color: #9d9d9d; padding: 10px;">
         <a href="beyondimagination.tech"><img src="${imageUrl}" width="200px" alt="Quantum Logo"></a>
         <div style="margin: 20px 0; color: brown; font-weight: bolder; font-variant: small-caps;">Name: ${name} - Email: ${email} - IP Address: ${ip}</div>
         <div style="font-style: italic;">
         ${message}</div>
      </body>`;


    const mailOptions = {
      from: `Quantum Web Application <${process.env.MAIL_USERNAME}>`,
      to: 'adenijiolajid01@gmail.com',
      subject: "Quantum Message",
      html: data,
    };

    this.transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        websocket.mailNotification(false)
        console.error("Error sending email: ", error);
      } else {
        websocket.mailNotification()
        console.log("Email sent: ", info.response);
      }
    });
  }

  sendReceiveMessage(email, hostname) {
    const imageUrl = `https://${hostname}/img/quantumlogo.png`;

    const data = `
<body style="background-color: #181616; color: #9d9d9d; padding: 10px; font-family: Arial, sans-serif;">
  <a href="https://beyondimagination.tech" target="_blank" style="text-decoration: none;">
    <img src="${imageUrl}" width="200px" alt="Quantum Logo" style="display: block; margin: 0 auto;">
  </a>
  <div style="font-style: italic; margin: 20px 0;">
    <p>Thank you for reaching out to us. We have received your message and will respond as soon as possible.</p>
    <p>
      For a faster response, you can contact us directly on WhatsApp using the following link: 
      <a href="https://wa.me/+2347084076657?text=Hi%21%0AI%20would%20like%20to%20inquire%20about%20your%20services.%0ACan%20you%20please%20assist%20me%3F" target="_blank" style="color: #00aaff;">+2347084076657</a>.
    </p>
    <p>Best regards,</p>
    <p>The Quantum Team</p>
  </div>
</body>
`;


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

  sendMessageNotReceivedNotification(email, hostname) {
    const imageUrl = `https://${hostname}/img/quantumlogo.png`;

    const data = `<body style="background-color: #181616; color: #9d9d9d; padding: 10px; font-family: Arial, sans-serif;">
  <a href="https://beyondimagination.tech" target="_blank" style="text-decoration: none;">
    <img src="${imageUrl}" width="200px" alt="Quantum Logo" style="display: block; margin: 0 auto;">
  </a>
  <div style="font-style: italic; margin: 20px 0;">
    <p>Thank you for reaching out to us. We apologize for the inconvenience, but it seems your message did not reach us. Please resend your message.</p>
    <p>
      For a faster response, you can contact us directly on WhatsApp using the following link: 
      <a href="https://wa.me/+2347084076657?text=Hi%21%0AI%20would%20like%20to%20inquire%20about%20your%20services.%0ACan%20you%20please%20assist%20me%3F" target="_blank" style="color: #00aaff;">+2347084076657</a>.
    </p>
    <p>Best regards,</p>
    <p>The Quantum Team</p>
  </div>
</body>
`;


    const mailOptions = {
      from: `Quantum Web <${process.env.MAIL_USERNAME}>`,
      to: email,
      subject: "Apologies for the Inconvenience – Kindly Resend Your Message",
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

  async sendServicesDetails(data) {
    const { name, email, phone, projectName, serviceRequired, projectDescription, paymentType, fromPrice, toPrice, filePath, attachments, hostname } = data;

    const imageUrl = `https://${hostname}/img/quantumlogo.png`;

    const message = `<body style="background-color: #181616; color: #9d9d9d; padding: 10px">
      <a href="beyondimagination.tech"
        ><img src="${imageUrl}" width="200px" alt="Quantum Logo"
      /></a>
      <div style="font-style: italic; margin: 20px 0">
        <h1>Project Details</h1>
        <ul>
          <li>Name: <span style="color: white;">${name}</span></li>
          <li>Email: <span style="color: white;">${email}</span></li>
          <li>Phone Number: <span style="color: white;">${phone}</span></li>
          <li>Project Name: <span style="color: white;">${projectName}</span></li>
          <li>Service Required: <span style="color: white;">${serviceRequired}</span></li>
          <li>Project Description: <p style="color: white;">${projectDescription}</p></li>
          <li>Payment Type: <span style="color: white;">${paymentType}</span></li>
          <li>Budget Range: <span style="color: white;">$${fromPrice} to $${toPrice}</span></li>
        </ul>
      </div>
    </body>`



    const mailOptions = {
      from: `Quantum Web Application <${process.env.MAIL_USERNAME}>`,
      to: 'adenijiolajid01@gmail.com',
      subject: "Quantum Services Request",
      html: message,
      attachments: attachments
    };

    await this.transporter.sendMail(mailOptions, async (error, info) => {
      if (error) {
        websocket.mailNotification(false)
        this.sendMessageNotReceivedNotification(email, hostname);
        console.error("Error sending email: ", error);
      } else {
        websocket.mailNotification()
        this.sendReceiveMessage(email, hostname);
        console.log("Email sent: ", info.response);
      }

      await filePath.forEach(path => {
        fs.unlinkSync(path);
      })
    });
  }


  AdminLogin(ip, userAgent) {
    const data = `
    <body style="background-color: #181616; color: #9d9d9d; padding: 10px;">
      <h1 href="beyondimagination.tech">QuantumWeb</h1>
      <pre style="font-style: italic; margin: 20px 0">
      We wanted to inform you that a login to the admin page of QuantumWeb was detected.

      Details:
          TimeStamp: ${new Date()}
          IP Address: ${ip}
          UserAgent: ${userAgent}
       </pre>
    </body>`;


    const mailOptions = {
      from: `Quantum Web Application <${process.env.MAIL_USERNAME}>`,
      to: 'adenijiolajid01@gmail.com',
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

  AdminLoginAttempt(ip, userAgent) {
    const data = `
    <body style="background-color: #181616; color: #9d9d9d; padding: 10px;">
      <h1 href="beyondimagination.tech">QuantumWeb</h1>
      <pre style="font-style: italic; margin: 20px 0">
      We wanted to inform you that an attempt to log in to the admin page of QuantumWeb was detected.

      Details:
          Date and Time: ${new Date()}
          IP Address: ${ip}
          UserAgent: ${userAgent}
       </pre>
    </body>`;


    const mailOptions = {
      from: `Quantum Web Application <${process.env.MAIL_USERNAME}>`,
      to: 'adenijiolajid01@gmail.com',
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

  sendError(error) {
    const data = `
    <body style="background-color: red; color: white; padding: 10px;">
      <a href="beyondimagination.tech">Quantum Web | Error Message</a>
      <div style="font-style: italic; margin: 20px 0">${error}</div>
    </body>`;


    const mailOptions = {
      from: `Quantum Web Error <${process.env.MAIL_USERNAME}>`,
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
