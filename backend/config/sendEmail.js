const {Resend}= require('resend');
const dotenv= require('dotenv')
dotenv.config()
if(!process.env.RESEND_API){
    console.log("provide RESEND_API in the .env file");
    
}

const resend = new Resend(process.env.RESEND_API);
const sendEmail=async ({ sendTo, subject,html})=>{
    console.log('send to')
    try {
        const { data, error } = await resend.emails.send({
            from: 'Exampler<onboarding@resend.dev>',
            to: sendTo,
            subject: subject,
            html: html,
          });
          if(error){
            return console.error({error});
          }
          return data
    } catch (error) {
        console.log(error);
        
    }
}
module.exports= sendEmail;