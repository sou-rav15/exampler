import React , {Component, useState}  from 'react'
import { FaFacebook, FaFacebookMessenger, FaLinkedin, FaTwitter } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
function Signup() {
  const [signupInfo, setsignupInfo] = useState({
    name: '',
    username: '',
    email: '',
    password: '',
});
const [checkBox, setCheckBox] = useState(false);
const handleCheckBox = () => {
  setCheckBox(prevCheckBox => !prevCheckBox);
  console.log('checkbox', checkBox);
  
};

const handleChange = (e) => {
  const { name, value } = e.target;
  setsignupInfo((prev) => ({
    ...prev,
    [name]: value,
  }));
};

const handleSignup = async (e) => {
 
  
  e.preventDefault();
  const { name, email, password, username, gender } = signupInfo;
  if (!checkBox) {
    return alert("plesase accept the terms and condition")
      // return HandleError('You must accept the terms and conditions', isDark);
  }
  if (!name || !email || !password || !username|| !gender) {
      // return HandleError('All fields are required', isDark);
  }
  console.log(signupInfo);
  // try {
  //     const url = `${apiUrl}/signup`;
  //     const response = await fetch(url, {
  //         method: "POST",
  //         headers: {
  //             'Content-Type': 'application/json',
  //         },
  //         body: JSON.stringify(signupInfo)
  //     });
  //     const result = await response.json();
  //     const { success, message, error } = result;

  //     if (success) {
  //         // HandleSuccess(message, isDark);
  //         // setTimeout(() => {
  //         //     navigate('/Login');
  //         // }, 1000);
  //     } else if (error) {
  //         const details = error?.details[0].message;
  //         // HandleError(details, isDark);
  //     } else {
  //         // HandleError(message, isDark);
  //     }
  // } catch (error) {
  //     // HandleError(error, isDark);
  // }
}
  return (
    <>
      <div className=' :h-150 h-[600px] md:h-150 h-170  flex justify-center items-center mb-15'>
        <div className='mt-3 px-2 lg:mt-0 bg-[#eaedee] lg:w-[45%] w-[90%] md:w-[50%] lg:h-[87%] h-[90%] flex flex-col justify-start border-2 border-gray-300'>
        <h2 className=' w-full h-20 text-center font-bold text-4xl mt-6 text-blue-700'> signup</h2>
            <div className='w-full h-60 lg:flex flex-col '>
                <input 
                type="name"
                name="name" 
                placeholder='Enter your name ' 
                className='lg:w-[80%] w-[100%]  mx-auto h-15 p-4 mb-7
                outline-2 outline-offset-2 outline-blue-400 rounded-lg
                focus:outline-2 focus:outline-offset-2 focus:outline-blue-600
                transition duration-300 ease-in-out
                ' 
                value={signupInfo.name}
                onChange={handleChange}
                />
                <input 
                type="text" 
                name="username" 
                placeholder='Enter Username ' 
                className='lg:w-[80%] w-[100%]  mx-auto h-15 p-4 mb-7
                outline-2 outline-offset-2 outline-blue-400 rounded-lg
                focus:outline-2 focus:outline-offset-2 focus:outline-blue-600
                transition duration-300 ease-in-out
                ' 
                value={signupInfo.username}
                onChange={handleChange}
                />
                <input 
                type="email"
                name="email" 
                placeholder='Enter Email' 
                className='lg:w-[80%] w-[100%]  mx-auto h-15 p-4 mb-4 
                outline-2 outline-offset-2 outline-blue-400 rounded-lg
                focus:outline-2 focus:outline-offset-2 focus:outline-blue-600
                transition duration-300 ease-in-out
                ' 
                value={signupInfo.email}
                onChange={handleChange}
                />
                <input 
                type="password"
                name="password"
                placeholder='Enter your password' 
              className='lg:w-[80%] w-[100%]  mx-auto h-15 p-4 mb-4 mt-4 
              outline-2 outline-offset-2 outline-blue-400 rounded-lg
              focus:outline-2 focus:outline-offset-2 focus:outline-blue-600
              transition duration-300 ease-in-out
              ' 
              value={signupInfo.password}
                onChange={handleChange}
                />
                {/* check box start */}
                        <div className="flex items-center mb-4 mb:text-[14px] font-medium text-[13px] lg:ml-11 w-[90%] ">
    <input id="default-checkbox" type="checkbox" value=""
    checked={checkBox} 
    onChange={handleCheckBox}
    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm 
    cursor-pointer
    focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
    <label for="default-checkbox" 
    className="ms-2 dark:text-gray-300 
    cursor-pointer">I agree to the
    <span>
    <NavLink to="/Terms&conditions" className="  text-sky-500 hover:text-sky-700"> Terms and conditions</NavLink>
      </span>
    </label>
</div>
                                  {/* checkbox end */}
                <div className='w-[80%]  mx-auto h-15 flex justify-between'>
            <span className='text-sky-600 font-semibold mt-2
            transition duration-300 ease-in-out
            hover:text-sky-500 cursor-pointer
            '>Already have an account?</span>
            <button onClick={(e)=>{handleSignup(e)}}
             className='bg-blue-500 outline-none border-none px-4 py-2 w-[80px]
             cursor-pointer hover:bg-blue-600 hover:text-gray-700
             transition duration-300 ease-in-out
              mt-2 h-[40px] rounded-lg'>signup</button>
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

export default Signup
