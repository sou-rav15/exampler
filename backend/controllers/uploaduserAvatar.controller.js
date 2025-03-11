const UserModel = require('../models/user.model');
const uploadImageClodinary= require('../utils/uploadImage')
const uploadAvator=async(request, response)=>{
try {
    const userId=request.userId
    const image=request.file;
    console.log('image', image);
    const upload = await uploadImageClodinary(image)
    const updateUser = await UserModel.findByIdAndUpdate(userId,
        {avatar:upload.url}
    )
    return response.json({
        message : "Upload Profile successfully",
        data : {
            _id:userId,
            avator:upload.url
        },
        success : true,
        error : false
    })
    // console.log('image', image);
} catch (error) {
    return response.status(500).json({
        message:error.message||error,
        error:true,
        success:false
    })
}
}
module.exports= uploadAvator