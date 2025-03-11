const verificationEmail=({name,url})=>{
    console.log('thankyou ', name);
    
return `
<p>Dear ${name}</p>    
<p>Thank you for registering Binkeyit.</p>   
<a href=${url} style="color:black;background :orange;margin-top : 10px,padding:20px,display:block">
    Verify Email
</a>
`
}
module.exports= verificationEmail;