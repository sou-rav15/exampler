// logout contoller
const UserModel=require('../models/user.model.js');
const bcrypt= require('bcryptjs');
const sendEmail= require('../config/sendEmail.js')
const verificationEmail = require('../utils/verifyEmail.js');
const generateAccessToken = require('../utils/generateAccessToken.js');
const generateRefreshToken = require('../utils/generateRefreshToken.js');
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
module.exports=logoutController;