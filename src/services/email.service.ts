import { /* inject, */ bind, BindingScope} from '@loopback/core';
import {createTransport} from 'nodemailer';
import {EmailTemplate, User} from '../models';
export type SentMessageInfo = any;


@bind({scope: BindingScope.TRANSIENT})
export class EmailService {


   /**
   * If using gmail see https://nodemailer.com/usage/using-gmail/
   */
    private static async setupTransporter() {
      return createTransport({
        host: "smtp.gmail.com",
        port: +587,
        secure: false, // upgrade later with STARTTLS
        auth: {
          user: "crypto2772779@gmail.com",
          pass: "250-5377",
        },
      });
    }


   public async sendMyMail(user: User): Promise<SentMessageInfo> {
      const transporter = await EmailService.setupTransporter();
      const emailTemplate = new EmailTemplate({
        to: user.email,
        subject: 'CryptoWallet Email Verification',
        html: `
        <div>
            <p>Hi "${user.name}", Welcome to CryptoWallet</p>
            <p style="color: red;">We received a registration request and require verify your email</p>
            <p style="color: red;">Your verification code is : "${user.otp}" </p>
           <p>Thanks</p>
            <p>CryptoWallet team</p>
        </div>
        `,
      });
       return transporter.sendMail(emailTemplate);
    }

  constructor(/* Add @inject to inject parameters */) {}

  /*
   * Add service methods here
   */
}
