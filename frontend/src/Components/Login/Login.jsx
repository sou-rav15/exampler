import React, {Component, useState} from 'react'
import { FaFacebook, FaFacebookMessenger, FaLinkedin, FaTwitter } from "react-icons/fa";
function Login() {
     const [LoginInfo, setLoginInfo] = useState({
        email: '',
        password: '',
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setLoginInfo((prev) => ({
          ...prev,
          [name]: value,
        }));
      };  

      const handleLogin = async (e) => {
        e.preventDefault();
        console.log('login->', LoginInfo)
        const { email, password } = LoginInfo;
    
        if (!email || !password) {
          // return null;
          return (alert('email and password are required'))
        //   return HandleError('All fields are required', isDark);
        }
    
      
      };
  return (
    <>
      <div className=' w-full lg:h-110 flex justify-center items-center'>
        <div className='mt-20 px-2 lg:mt-0 bg-[#eaedee] lg:w-[45%] w-[90%] h-[80%] flex flex-col justify-around border-2 border-gray-300'>
        <h2 className=' w-full h-20 text-center font-bold text-4xl mt-6 text-blue-700'> Login</h2>
            <div className='w-full h-60 lg:flex flex-col '>
                <input type="email" placeholder='Enter Email' 
                name='email'
                  value={LoginInfo.email}
                  onChange={handleChange}
                className='lg:w-[80%] w-[100%]  mx-auto h-15 p-4 mb-4 
                outline-2 outline-offset-2 outline-blue-400 rounded-lg
                focus:outline-2 focus:outline-offset-2 focus:outline-blue-600
                transition duration-300 ease-in-out
                ' 
                
                />
                <input type="password" placeholder='Enter your password' 
                name='password'
                  value={LoginInfo.password}
                  onChange={handleChange}
              className='lg:w-[80%] w-[100%]  mx-auto h-15 p-4 mb-4 mt-4 
              outline-2 outline-offset-2 outline-blue-400 rounded-lg
              focus:outline-2 focus:outline-offset-2 focus:outline-blue-600
              transition duration-300 ease-in-out
              ' 
                />
                <div className='w-[80%]  mx-auto h-15 flex justify-between'>
            <span className='text-sky-600 font-semibold mt-2
            transition duration-300 ease-in-out
            hover:text-sky-500 cursor-pointer
            '>Already have an account?</span>
            <button
            onClick={(e)=>{handleLogin(e)}}
             className='bg-blue-500 outline-none border-none px-4 py-2 w-[80px]
             cursor-pointer hover:bg-blue-600 hover:text-gray-700
             transition duration-300 ease-in-out
              mt-2 h-[40px] rounded-lg'>login</button>
            </div>
            </div>
            
        </div>
           
      </div>
      <footer className='bg-[#efefef] w-full h-15 fixed bottom-0 left-0 right-0 flex justify-center items-center'>
        <div className=' w-[90%] h-[90%] flex justify-between '>
            <div className='lg:text-[11px] text-[8px] text-[#6f7172] flex justify-center items-center'>
                <h3>© Copyright All Right reserved 2025</h3>
                <span className='border-r-1 h-[20px] lg:m-3 m-2'></span>
                <h3 className='cursor-pointer hover:text-[#080808] transition duration-300 ease-in-out'>Help Center</h3>
                <div className='border-r-1 h-[20px] lg:m-3 m-2'></div>
                <h3 className='cursor-pointer hover:text-[#080808] transition duration-300 ease-in-out'>Contact</h3>
                <div className='border-r-1 h-[20px] lg:m-3 m-2'></div>
                <h3 className='cursor-pointer hover:text-[#080808] transition duration-300 ease-in-out'>FAQ</h3>
                <div className='border-r-1'></div>
            </div>
            <div className=' h-full w-[300px]  '>
                    <div className=' flex justify-around'>
                    <h3 className='text-[14px] text-[#6f7172] mr-5'>Follow us</h3>
                    <ul className='lg:flex hidden space-x-3 '>
                        <li className='cursor-pointer'> <FaFacebook size="26px" color=" black" /></li>
                        <li className='cursor-pointer' > <FaTwitter size="26px" color=" black" /></li>
                        <li className='cursor-pointer'> <FaLinkedin size="26px" color=" black" /></li>
                    </ul>
                    </div>
                    <div className=' w-[90%] m-auto px-4 flex space-x-2 ' >
                        <h1 className='font-bold lg:text-[11px] text-[9px]'>Email:</h1>
                        <h1 className='lg:text-[12px] text-[8px] text-[#6f7172]'>souravsaran155@gmail.com</h1>
                        
                    </div>
            </div>
        </div>

      </footer >
    </>
  )
}

export default Login
