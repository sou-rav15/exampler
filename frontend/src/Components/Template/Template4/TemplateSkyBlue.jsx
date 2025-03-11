import React from 'react'
import {  FaGithub, FaPhone, FaVoicemail } from 'react-icons/fa'
import { IoIosMail } from "react-icons/io";
function TemplateSkyBlue() {

  return (
    <>
     <div className='bg-gray-400 w-full font-lora h-[1100px] flex justify-center items-center
     '>
     <div className='w-[816px] h-[1056px] bg-white flex justify-center items-center'>
        <div className='relative bg-gray- w-[95%] h-[98%]'>
            {/* heading */}
            <div className='w-full h-[112px]  flex flex-col justify-center items-center'>
               <div>
               <h className="text-4xl">{""||"sourav saran"}</h>
               </div>
                <div className='flex space-x-2'>
                   <div className='flex justify-center item-center space-x-1'>
                   <h2 className='mt-[2px]'><FaPhone/></h2>
                   <h2 className=' mt-[3px] text-[13px]' >{""||"+918076423683"}</h2>
                   </div>
                   <div className='flex justify-center item-center space-x-1'>
                   <h2 className='mt-[4px]'><IoIosMail/></h2>
                   <a href="" className='p-0 underline underline-offset-1  text-[13px]'>{""||"souravsaran@gmail.com"}</a>
                   </div>
                </div>
                <div className='flex'>
                    < h2 className='mt-1 mr-1'><FaGithub /></h2>
                <a href="" className='underline underline-offset-1 '> Github</a>
                </div>
            </div>
            <div>
                {/* education */}
                <h2 className='text-l font-bold text-[#47aeff]'>Education</h2>
                <div className='border-b-2 border-[#47aeff]'></div>
                <div className=' w-full h-14 flex justify-between
                 '>
                    <div className='w-[50%] bg-white h-16'>
                        <p className='font-bold'> Netaji Subhas University of Technology , New Delhi</p>
                       <p className='text-[13px] italic'>B.Tech in Computer Science with specialization in Internet of Things</p>
                    </div>
                     <div className='w-[20%] bg-white h-16'>
                        <div> 
                            <h2 className='font-bold ml-18'>2021-2025</h2>
                            <h2 className='ml-18 text-[12px] italic'>{""||7.2}/10 CGPA</h2>
                        </div>
                     </div>
                </div>
            </div>
            {/* work Experience */}
            <div className=''>
               <h2 className='text-l font-bold text-[#47aeff] mt-0'>work Experience</h2>
                <div className='border-b-2 border-[#47aeff]'></div>
                  <h1 className='font-bold'>{""||"Algouniversity"}</h1>
                  <h2 className='italic'>{""||"jobTitle"}</h2>
                  <div>
                    <ul>
                        <li>{""||"line-1 of work Experience"}</li>
                        <li>{""||"line-2 of work Experience"}</li>
                        <li>{""||"line-3 of work Experience"}</li>
                        <li>{""||"line-4 of work Experience"}</li>
                        <li>{""||"line-5 of work Experience"}</li>
                        <li>{""||"line-6 of work Experience"}</li>
                    </ul>
                    <div className=' absolute w-[210px] h-[10px] right-0 top-58 h-[20px] '>
                        <h2 className='font-bold text-[14px] ml-18'>
                            {""||"months"}{""||"year"}-{""||"year"}{""||"year"}</h2>
                    </div>
                  </div>
            </div>
            {/* project */}
            <div>
            <h2 className='text-l font-bold text-[#47aeff] mt-2'>{""||"Project"}</h2>
            <div className='border-b-2 border-[#47aeff]'></div>
            <div>
                <ul>
                    <li>{""||"project line 1 "}</li>
                    <li>{""||"project line 1 "}</li>
                    <li>{""||"project line 1 "}</li>
                    <li>{""||"project line 4 "}</li>
                </ul>
                <div className=' absolute w-[170px] h-[10px] right-0 top-118 h-[20px] '>
                        <a href='' className='font-bold text-[14px] ml-16'>
                            {""||"source-code"}</a>
                    </div>
            </div>
            </div>
            {/* Techincal skills */}
            <div>
                <h2 className='text-l font-bold text-[#47aeff] mt-2'>Technical Skills</h2>
               <div className='border-b-2 border-[#47aeff]'></div>
                <div>
                <ul>
                    <li>{""||"line 1 "}</li>
                    <li >{""||"line 2 "}</li>
                    <li>{""||"line 3 "}</li>
                    <li>{""||"line 4 "}</li>
                </ul>
                </div>
            </div>
            {/* Honors and awards */}
            <div>
            <h2 className='text-l font-bold text-[#47aeff] mt-2'>Honor and Awards</h2>
            <div className='border-b-2 border-[#47aeff]'></div>
            <div>
                <p className='text-justify'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde mollitia esse sapiente reiciendis dolorem nemo aliquid iusto dolor nobis aut nihil tenetur id fugiat voluptates labore tempora optio illo, consectetur soluta accusantium aperiam quam iste facere architecto. Sit provident in beatae laudantium facere iste repudiandae illum magnam non repellat perspiciatis natus, dolores quae dolorum consequuntur earum asperiores quas saepe! Placeat.
                </p>
            </div>
            </div>
            {/* Achivememts */}
            <div>
            <h2 className='text-l font-bold text-[#47aeff] mt-2'>Achivements</h2>
            <div className='border-b-2 border-[#47aeff]'></div>
            <p className='text-justify'>
                Write your achivement not exceen the 80 words ..

            </p>
            </div>

        </div>
   </div>
 </div>
    </>
  )
}

export default TemplateSkyBlue;
