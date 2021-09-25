// Uncomment these imports to begin using these cool features!
import {inject} from '@loopback/core';
import {get, param} from '@loopback/rest';
import {NodeMailer, User} from '../models';
import {EmailService} from '../services/';

export class EmailVerificationController {

  constructor(
    @inject('services.EmailService')
    public emailService: EmailService,
   // @inject(RestBindings.Http.REQUEST)
   // private request: Request
  ) {}


  @get('/verify', {
    responses: {
      '200': {
        description: 'email verification Response',
        content: {
          'application/json': {
            schema: {
              type: 'object',
              title: 'VerificationResponse',
              properties: {
                Object: {type: 'object'},
                date: {type: 'string'},
              },
            },
          },
        },
      },
    },
  })

  verify(@param.query.string('message') msg: string,@param.query.string('email') email: string,@param.query.string('OTP') otp: number,@param.query.string('name') name: string): object {
    return {
      greeting: `Done`,
      date: new Date(),
      Object: this.mailing(otp,email,msg,name),
    };
  }


  async mailing( otp: number, email: string, message: string,name:string){
    const user = new User();
    user.email=email;
    user.message=message;
    user.otp=otp;
    user.name=name;
    const nodeMailer : NodeMailer = await this.emailService.sendMyMail(user);
  }
}
