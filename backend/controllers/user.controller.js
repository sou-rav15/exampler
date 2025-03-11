const UserModel=require('../models/user.model.js');
const bcrypt= require('bcryptjs');
const sendEmail= require('../config/sendEmail.js')
const verificationEmail = require('../utils/verifyEmail.js');
const generateAccessToken = require('../utils/generateAccessToken.js');
const generateRefreshToken = require('../utils/generateRefreshToken.js');
const registerUserController= async(request,response)=>{
    console.log('get the data->', request.body)
    try {
        const {name, email, password,username}=request.body
        if(!name||!email||!password||!username){
            return response.status(500).json({
                message:"provide email, name, pssword",
                error:true,
                success:false
            })
        }
        const user= await UserModel.findOne({email})
        if(user){
            return response.json({
                message:"Already registered",
                error:true,
                success:false
            })
        }
         const salt = await bcrypt.genSalt(10);
         const hashPassword= await bcrypt.hash(password, salt)
        const payload={
            name,
            email,
            username,
            password:hashPassword
        }
        const newUSer= new UserModel(payload)
        const save= await newUSer.save();
        console.log('dara is updated->', save)
        const verifyEmailUrl=`${process.env.FRONTEND_URL}/verify-email?code=${save?._id}`;
        const verifyEmail= await sendEmail({
            sendTo:email,
            subject:"verify email from exampler",
            html:verificationEmail({name,
                url:verifyEmailUrl
            })
        })
        return response.status(200).json({
            message:"user register successfully",
            error:false,
            success:true,
            data:save
        })
    } catch (error) {
        return response.status(500).json({
            message:error.message||error,
            error:true,
            success:false
        })
    }
}

// login controller
const loginController=async(request,response)=>{
    console.log('data->',request.body);
    
    try {
        const {email, password}=request.body
        const user= await UserModel.findOne({email})
        if(!email||!password){
            return response.status(400).json({
                message:"Provide the email and password",
                error:true,
                succes:false
            })
        }
        if(!user){
            return response.status(400).json({
                message:"User is not register",
                error:true,
                success:false
            })
        }
        if(user.status !=="Active"){
            return response.status(402).json({
                message:"user not register",
                error:true,
                success:false
            })
        }
        const  checkPassword= await bcrypt.compare(password, user.password);
        if(!checkPassword){
            return response.status(400).json({
                message:"check your password",
                error:true,
                success:false
            })
        }

        const accessToken= await generateAccessToken(user._id)
        const refreshToken= await generateRefreshToken(user._id);
        const cookiesOtion={
            httpOnly:true,
            secure:true,
            sameSite:"None"
        }
        response.cookie('accessToken', accessToken,cookiesOtion)
        response.cookie('refreshToken', refreshToken,cookiesOtion)
        return response.status(200).json({
            message:"login successfully",
            error:false,
            success:true,
            data:{
                accessToken,
                refreshToken
            }
        })

    } catch (error) {
        return response.status(500).json({
            message:error.message||error,
            error:true,
            success:false
        })
    }
}
// logout contoller
async function logoutController(request,response){
    try {
        const userid = request.userId //middleware

        const cookiesOption = {
            httpOnly : true,
            secure : true,
            sameSite : "None"
        }

        response.clearCookie("accessToken",cookiesOption)
        response.clearCookie("refreshToken",cookiesOption)

        const removeRefreshToken = await UserModel.findByIdAndUpdate(userid,{
            refresh_token : ""
        })

        return response.json({
            message : "Logout successfully",
            error : false,
            success : true
        })
    } catch (error) {
        return response.status(500).json({
            message : error.message || error,
            error : true,
            success : false
        })
    }
}
module.exports =  registerUserController
//  module.exports=loginController
//  module.exports=logoutController;
