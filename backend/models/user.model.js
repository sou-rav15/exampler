const mongoose =require('mongoose');

const userSchema= new mongoose.Schema({
    name:{
        type:String,
        require:[true, "provide name"]
    },
    username:{
        type:String,
        require:[true, "provide user name"]
    },
    email:{
        type:String,
        reuired:[true,"provide password"],
        unique:true
    },
    password:{
        type:String,
        required:[true, "provide password"]
    },
    avatar:{
        type:String,
        default :" "
    },
    mobile:{
        type:Number,
        default:null
    },
    refresh_token:{
        type:String,
        default:""
    },
    verify_email:{
        type:Boolean,
        default :false
    },
    last_login_data:{
        type:Date,
        default:""
    },
    status:{
        type:String,
        enum:["Active","Inactive","Suspended"],
        default:"Active"
    },
    address_details:[
        {
            type:mongoose.Schema.ObjectId,
            ref:'address'
        }
    ],
shooping_cart:[{
    type:mongoose.Schema.ObjectId,
    ref:'cartProduct'
}],
orderHistory:[{
    type:mongoose.Schema.ObjectId,
    ref:'Order'
}],
forgot_password_otp:{
    type:String,
    default:null
},
forgot_password_expiry:{
    type:Date,
    default:""
},
role:{
    type:String,
    enum:['USER', 'ADMIN'],
    default:"USER"
}
},{timestamps:true});
const UserModel= mongoose.model("User", userSchema);
module.exports= UserModel;