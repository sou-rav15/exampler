const UserModel=require('../models/user.model.js');
const bcrypt= require('bcryptjs');
const generateAccessToken = require('../utils/generateAccessToken.js');
const generateRefreshToken = require('../utils/generateRefreshToken.js');
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
module.exports=loginController