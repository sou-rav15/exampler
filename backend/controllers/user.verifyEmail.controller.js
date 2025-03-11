const UserModel=require('../models/user.model.js');
const bcrypt= require('bcryptjs');
const sendEmail= require('../config/sendEmail.js')
const verificationEmail = require('../utils/verifyEmail.js');
const verifyEmailController= async(request, response)=>{
    try {
        const {code}=request.body;
        const user= await UserModel.findOne({_id:code});
        if(!user){
            return response.status(400).json({
                message:"Invalid  code",
                error:true,
                success:false
            })
        }
        const updateUser =await UserModel.updateOne({_id:code},{
            verify_email:true
        })
        return response.json({
            message:"verify the email successully",
            error:false,
            success:true
        })
    } catch (error) {
        return response.status.json({
            message:error.message,
            error:true,
            success:false
        })
    }
}

module.exports =  verifyEmailController;