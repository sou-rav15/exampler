import React , {Component, useState}  from 'react'
import { FaFacebook, FaFacebookMessenger, FaLinkedin, FaTwitter } from "react-icons/fa";
import { NavLink } from 'react-router-dom'

function Home() {
  return (
    <>
    {/* nav */}
      <nav className='z-1 w-full h-17 max-[314px]:h-19 shadow-xl flex justify-center '>
        <div className=' w-[90%] m-auto flex justify-between items-center space-x-2'>
            {/* title */}
            <div className='flex' >
                <a href="#" className='cursor-pointer'>
                <img src="./logo1.png" alt="logo"  className='w-[100px]  lg:w-[170px] lg:h-[60px]'/>
                </a>
                {/* <h1 className='text-4xl  font-bold text-orange-300'>EXAMPLER</h1> */}
            </div>
            {/* links */}
            <div className='bg-white-500  flex justify-center items center space-x-2'>
                <ul className=' hidden lg:flex justify-center items center space-x-3 mx-5 py-3 '>
                    <li className='text-sm cursor-pointer  hover:text-gray-600 transition duration-300 ease-in-out hover:-translate-y-1'>
                    <NavLink  class="nav-link active text-center  " aria-current="page" to="/about">About</NavLink>
                        </li>
                    <li className='text-sm cursor-pointer  hover:text-gray-600 transition duration-300 ease-in-out hover:-translate-y-1'>Comunity</li>
                    <li className='text-sm cursor-pointer  hover:text-gray-600 transition duration-300 ease-in-out hover:-translate-y-1'>Pricing</li>
                    <li className='text-sm cursor-pointer  hover:text-gray-600 transition duration-300 ease-in-out hover:-translate-y-1'>Jobs</li>
                
                </ul>
                <div className='mx-6'>
                    {/* hover:border-indigo-600  hover:shadow-lg hover:shadow-blue-500/50  */}
                <button 
                className='lg:text-sm
                hover:bg-blue-500
                w-[50px] text-[10px]
                 bg-blue-300 lg:w-[70px] py-2 me-2  my-1 rounded-[5px] cursor-pointer transition duration-300 ease-in-out'
                 >
                <NavLink  class="nav-link active text-center  " aria-current="page" to="/login">Login</NavLink>
                 </button>
                <button 
                className=' text-[10px] w-[50px] lg:text-sm lg:ms-2 hover:border-none hover:bg-sky-600 
                hover:text-white lg:w-[70px] border border-indigo-600 py-2 px-2 cursor-pointer transition 
                duration-300 ease-in-out'>
                   <NavLink  class="nav-link active text-center  " aria-current="page" to="/signup">sign up</NavLink>
                    </button>
                </div>
               <div>
                {/* buttons */}
               
               </div>
            </div>
            
            
        </div>
         
      </nav>
      {/* nav */}
      {/* section 1 */}
      <section className='mt-[1px] bg-[#d7ecff] w-full h-140 flex space-x-5 
      max-[927px]:block max-[927px]:h-250 max-[536px]:h-230
      justify-center items-center'>
      {/* start of box1 */}
      <div className=' w-[50%] h-100 px-19 
      max-[937px]:w-full max-[937px]:py-9 max-[937px]:h-110
      max-[937px]:flex justify-center items-center flex-col space-y-5
      max-[766px]:items-start 
       transition-all duration-300 ease-in-out
        '>
        <div className='w-[100%]  text-center
        max-[563px]:text-[32px] transition-all duration-300 ease-in-out
          
        '><h1 className=' text-[#5b5b5e] font-semibold text-[48px] max-[563px]:text-[32px]  max-[563px]:leading-10 max-[324px]:leading-6 max-[324px]:text-[16px]  leading-15
        transition-all duration-300 ease-in-out
        '>Start Your journey now</h1></div>
        <div className=' w-[100%] mt-2 max-[937px]:text-center
        transition-all duration-300 ease-in-out
        
        ' ><p className='text-gray-600 text-[13px] leading-6 max-[358px]:text-[12px]
        transition-all duration-300 ease-in-out
        text-justify'>
        Code your life with Exampler! Create rooms, join coding sessions, and collaborate live with coders. Learn and code together in 
        real-time through live chat and shared coding spaces. Experience coding like never before!
          </p></div>
          <div className='mt-2'><button className=' bg-green-600 px-4 py-2 text-[11px] text-white cursor-pointer shadow-xl hover:bg-green-800 active:translate-y-1
          transition-all duration-300 ease-in-out '>code now</button></div>
      </div>
     {/* end of box1 */}
     {/* start of box2 */}
      <div className=' w-[50%] h-130 max-[934px]:w-[100%] mr-5 mb-4 max-[927px]:h-140
      max-[927px]:w-full max-[927px]:flex justify-center items-center
      '>
        <div className='w-[97%] h-[100%] max-[922px]:mb-22  max-[927px]:w-[84%] max-[927px]:h-[100%]  max-[823px]:w-[90%] max-[630px]:w-[90%] max-[524px]:w-[100%] max-[438px]:h-[90%] max-[356px]:h-[74%] max-[356px]:mb-30 max-[286px]:h-[50%]'><img src="./developer_male.jpg " alt="developer_image" className='w-full h-full mix-blend-multiply
        transition-all duration-300 ease-in-out
         object-fit
         '  /></div>
      </div>
      {/* end of box2 */}
      </section>
      {/* section 2 */}
      <section className=' w-full h-130 flex justify-between 
      max-[949px]:block max-[949px]:h-220   max-[949px]:mb-4
      items-center space-x-2 p-4 mb-7 '  >
        {/* start of box 1 */}
        
        <div className='w-[50%] h-[85%] 
        flex justify-center items-center flex-col
        max-[949px]:w-full max-[949px]:h-[40%]
        '>
        <div  className='w-[93%] h-[83%]  py-10 flex justify-between items-evenly flex-col
          space-y-4 max-[425px]:mb-20 
           transition-all duration-300 ease-in-out
        '>
        <div className='w-[70%]
         transition-all duration-100 ease-in-out
         text-[24px] font-bold max-[616px]:text-[20px] max-[269px]:text-[18px] max-[269px]:leading-5'><h2>Start Build Your Resume</h2></div>
        <div className=' w-[80%]
         transition-all duration-100 ease-in-out
        text-[20px] text-[#5b5b5e] max-[616px]:text-[16px] max-[269px]:text-[14px] max-[269px]:leading-5 font-bold'><h2>From Simple Resume to Professional Resume</h2></div>
        <div className=' w-[90%] 
         transition-all duration-100 ease-in-out
        text-[16px] text-[#5b5b5e] max-[616px]:text-[11px] max-[269px]:text-[10px] max-[269px]:leading-4 text-justify '><p>
        Are you applying for jobs but not getting selected?
         Your resume might be the reason. A well-crafted resume
          is crucial as it represents your skills and experience effectively. 
          Stand out from the competition by creating a professional resume that
           highlights your strengths and achievements in the best possible way.
          </p></div>
          <div><button className='bg-blue-400 px-4 py-2 text-[11px] text-white cursor-pointer
            transition-all duration-100 ease-in-out
           shadow-xl hover:bg-blue-600 active:translate-y-1
          '>Build Now</button></div>
        </div>
        </div>
        {/* end of box 1 */}
        <div className='w-[50%] h-[85%] flex justify-center items-center 
        max-[949px]:w-full max-[949px]:h-[51%]
        max-[362px]:h-[30%]
        max-[292px]:mt-10
       max-[506px]:h-[35%]
        transition-all duration-100 ease-in-out
        '>
        <div className='w-[83%] h-[83%] bg-[#14293b]   rounded-3xl overflow-hidden inner
shadow-[inset_20px_31px_11px_4px_rgba(0,0,0,0.3)]   
 transition-all duration-300 ease-in-out     '>
          <img src="./homepage1.png" alt="homepage1" className=' w-full h-full rounded-3xl  object-fit
           translate-x-9 translate-y-12
            transition-all duration-300 ease-in-out
           max-[362px]:translate-x-7 max-[362px]:translate-y-6
           ' />
        </div>
        </div>

      </section>
      {/* end of section 2 */}
     
     {/* start of section 3 */}
      <section className='bg-red-300'>

      </section>
      {/* start of sesction 3 */}
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
                        <div className=' h-full w-[300px] '>
                                <div className=' flex justify-around'>
                                <h3 className='text-[14px] text-[#6f7172] mr-5'>Follow us</h3>
                                <ul className='lg:flex hidden space-x-3 '>
                                    <li className='cursor-pointer'> <FaFacebook size="26px" color=" black" /></li>
                                    <li className='cursor-pointer' > <FaTwitter size="26px" color=" black" /></li>
                                    <li className='cursor-pointer'> <FaLinkedin size="26px" color=" black" /></li>
                                </ul>
                                </div>
                                <div className=' w-[90%] m-auto px-4 max-[360px]:px-0 flex space-x-2  ' >
                                    <h1 className='font-bold lg:text-[11px] text-[9px]  max-[360px]:hidden'>Email:</h1>
                                   <div className=' '> <h1 className='lg:text-[12px] text-[8px] text-[#6f7172]  '>souravsaran155@gmail.com</h1></div>
                                    
                                </div>
                        </div>
                    </div>
            
                  </footer >
    </>
  )
}

export default Home