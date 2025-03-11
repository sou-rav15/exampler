// import React from 'react'
// import {  FaGithub, FaPhone, FaVoicemail } from 'react-icons/fa'
// import { IoIosMail } from "react-icons/io";
// import html2canvas from "html2canvas";
// import jsPDF from "jspdf";
// import { useReactToPdf } from "react-to-pdf";
// function Template4({ Data}) {
//                 console.log('name->',Data.firstName,Data.lastName);
//                 Data.projects.map((project)=>{
//                     console.log('project heading->',project.heading);
//                     console.log('project details->',project.details);
                    
//                 })
//                 const targetRef = useRef();
//   const { toPdf } = useReactToPdf({ filename: "resume.pdf" });
//   return (
//     <>
//      <div className='bg-red-400 w-full font-lora h-[1100px] flex justify-center items-center
//      '  id="resume-preview" ref={targetRef}>
//      <div className='w-[816px] h-[1056px] bg-white flex justify-center items-center'>
//         <div className='relative bg-gray- w-[95%] h-[98%]'>
//             {/* heading */}
//             <div className='w-full h-[112px]  flex flex-col justify-center items-center'>
//                <div>
//                <h className="text-4xl">{Data.firstName||""}{+Data.lastName||""}</h>
//                </div>
//                 <div className='flex space-x-2'>
//                    <div className='flex justify-center item-center space-x-1'>
//                    <h2 className='mt-[2px]'><FaPhone/></h2>
//                    <h2 className=' mt-[3px] text-[13px]' >{""||Data.phone}</h2>
//                    </div>
//                    <div className='flex justify-center item-center space-x-1'>
//                    <h2 className='mt-[4px]'><IoIosMail/></h2>
//                    <a href="" className='p-0 underline underline-offset-1  text-[13px]'>{""||Data.email}</a>
//                    </div>
//                 </div>
//                 <div className='flex'>
//                     < h2 className='mt-1 mr-1'><FaGithub /></h2>
//                 <a href={""||`${Data.GithubLink}`} className='underline underline-offset-1 '> Github</a>
//                 </div>
//             </div>
//             <div>
//                 {/* education */}
//                 <h2 className='text-l font-bold '  style={{ color: "#a34534" }}>Education</h2>
//                 <div className='border-b-2 border-[#a34534]' style={{  borderTop: "#a34534" }}></div>
//                 <div className=' w-full h-14 flex justify-between
//                  '>
//                     <div className='w-[50%] bg-white h-16'>
//                         <p className='font-bold'>{Data.collegeName}</p>
//                        <p className='text-[13px] italic'>{""||Data.degree} in {""||Data.branch}</p>
//                     </div>
//                      <div className='w-[20%] bg-white h-16'>
//                         <div> 
//                             <h2 className='font-bold ml-18'>2021-2025</h2>
//                             <h2 className='ml-18 text-[12px] italic'>{""||Data.cgpa}/10 CGPA</h2>
//                         </div>
//                      </div>
//                 </div>
//             </div>
//             {/* work Experience */}
//             <div className=''>
//                <h2 className='text-l font-bold  mt-0' style={{ color: "#a34534" }}>work Experience</h2>
//                 <div className='border-b-2 ' style={{ borderTop: "#a34534" }}></div>
//                   <h1 className='font-bold'>{""||Data.companyName}</h1>
//                   <h2 className='italic'>{""||Data.jobTitle}</h2>
//                   <div>
//                     <ul>
//                         <li>{""||"line-1 of work Experience"}</li>
//                         <li>{""||"line-2 of work Experience"}</li>
//                         <li>{""||"line-3 of work Experience"}</li>
//                         <li>{""||"line-4 of work Experience"}</li>
//                         <li>{""||"line-5 of work Experience"}</li>
//                         <li>{""||"line-6 of work Experience"}</li>
//                     </ul>
//                     <div className=' absolute w-[210px]  right-0 top-58 h-[20px] '>
//                         <h2 className='font-bold text-[14px] ml-18'>
//                             {""||"months"}{""||"year"}-{""||"year"}{""||"year"}</h2>
//                     </div>
//                   </div>
//             </div>
//             {/* project */}
//             <div>
//                 {Data.projects.map((project, index)=>(
//                    <>
//                     <h2 key={index} className='text-l font-bold  mt-2'  style={{ color: "#a34534" }}>{project.heading||"project"}</h2>
//                     <div className='border-b-2 ' style={{  borderTop: "#a34534" }}></div>
//                     <div>
//                         <ul>
//                             <li>{project.details||" project line 1"}</li>
//                             <li>{""||"project line 1 "}</li>
//                             <li>{""||"project line 1 "}</li>
//                             <li>{""||"project line 4 "}</li>
//                         </ul>
//                         <div className=' absolute w-[170px]  right-0 top-118 h-[20px] '>
//                                 <a href='' className='font-bold text-[14px] ml-16'>
//                                     {""||"source-code"}</a>
//                             </div>
//                     </div>
//                    </>
//                 ))}
            
//             </div>
//             {/* Techincal skills */}
//             <div>
//                 <h2 className='text-l font-bold  mt-2'  style={{ color: "#a34534" }}>Technical Skills</h2>
//                <div className='border-b-2 ' style={{  borderTop: "#a34534" }}></div>
//                 <div>
//                 <ul>
//                     <li>{""||"line 1 "}</li>
//                     <li >{""||"line 2 "}</li>
//                     <li>{""||"line 3 "}</li>
//                     <li>{""||"line 4 "}</li>
//                 </ul>
//                 </div>
//             </div>
//             {/* Honors and awards */}
//             <div>
//             <h2 className='text-l font-bold  mt-2'style={{  color: "#a34534" }}>Honor and Awards</h2>
//             <div className='border-b-2 border-[#a34534]' style={{  borderTop: "#a34534" }}></div>
//             <div>
//                 <p className='text-justify'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde mollitia esse sapiente reiciendis dolorem nemo aliquid iusto dolor nobis aut nihil tenetur id fugiat voluptates labore tempora optio illo, consectetur soluta accusantium aperiam quam iste facere architecto. Sit provident in beatae laudantium facere iste repudiandae illum magnam non repellat perspiciatis natus, dolores quae dolorum consequuntur earum asperiores quas saepe! Placeat.
//                 </p>
//             </div>
//             </div>
//             {/* Achivememts */}
//             <div>
//             <h2 className='text-l font-bold  mt-2' style={{  color: "#a34534" }}>Achivements</h2>
//             <div className='border-b-2 border-[#a34534]' style={{ borderTop: "#a34534" }}></div>
//             <p className='text-justify'>
//                 Write your achivement not exceen the 80 words ..

//             </p>
//             </div>

//         </div>
//    </div>
   
//  </div>
//  <button onClick={toPdf} className="mt-4 bg-green-500 px-4 text-white py-1 rounded">
//                 Download PDF
//             </button>
//     </>
//   )
// }

// export default Template4


// import React, { useRef } from "react";
// import ReactToPdf from "react-to-pdf";

// function Template4({ Data }) {
//     console.log('name->', Data.firstName, Data.lastName);
    
//     const targetRef = useRef(); // Ensure targetRef is initialized

//     return (
//         <>
//             <div ref={targetRef} className="bg-red-400 w-full font-lora h-[1100px] flex justify-center items-center" id="resume-preview">
//                 <div className='w-[816px] h-[1056px] bg-white flex justify-center items-center'>
//                     <div className='relative bg-gray- w-[95%] h-[98%]'>
//                         <h2>{Data.firstName} {Data.lastName}</h2>
//                         {/* Rest of your resume template */}
//                     </div>
//                 </div>
//             </div>

//             <ReactToPdf targetRef={targetRef} filename="resume.pdf">
//                 {({ toPdf }) => (
//                     <button onClick={toPdf} className="mt-4 bg-green-500 px-4 text-white py-1 rounded">
//                         Download PDF
//                     </button>
//                 )}
//             </ReactToPdf>
//         </>
//     );
// }

// export default Template4;

import React, { useRef } from 'react';
import { FaGithub, FaPhone } from 'react-icons/fa';
import { IoIosMail } from "react-icons/io";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
// import { useReactToPdf } from "react-to-pdf";
import "./Template4.css";

function Template4({ Data }) {
    console.log('name->', Data.firstName, Data.lastName);
    Data.projects.map((project) => {
        console.log('project heading->', project.heading);
        console.log('project details->', project.details);
    });
        const handleDownloadPDF = () => {
        const element = document.getElementById("resume-preview"); // The element to capture
        html2canvas(element).then((canvas) => {
            const imgData = canvas.toDataURL("image/png");
            const pdf = new jsPDF();
            pdf.addImage(imgData, "PNG", 10, 10, 180, 0); // Adjust position and size
            pdf.save("resume.pdf");
        });
    };

    // const targetRef = useRef();
    // const { toPdf } = ReactToPdf({ filename: "resume.pdf" });

    return (
        <>
            <div className='resume-container' id="resume-preview" >
                <div className='resume-content'>
                    <div className='resume-inner'>
                        {/* Heading */}
                        <div className='resume-heading'>
                            <h className="resume-title">{Data.firstName || ""} {Data.lastName || ""}</h>
                            <div className='resume-contact'>
                                <div className='contact-item'>
                                    <FaPhone className='contact-icon' />
                                    <h2 className='contact-text'>{Data.phone || ""}</h2>
                                </div>
                                <div className='contact-item'>
                                    <IoIosMail className='contact-icon' />
                                    <a href={"mailto:" + Data.email} className='contact-link'>{Data.email || ""}</a>
                                </div>
                            </div>
                            <div className='contact-item'>
                                <FaGithub className='contact-icon' />
                                <a href={Data.GithubLink || "#"} className='contact-link'>Github</a>
                            </div>
                        </div>
                        {/* Education */}
                        <div className='resume-section'>
                            <h2 className='section-title'>Education</h2>
                            <div className='section-divider'></div>
                            <div className='education-content'>
                                <div>
                                    <p className='edu-college'>{Data.collegeName}</p>
                                    <p className='edu-degree'>{Data.degree} in {Data.branch}</p>
                                </div>
                                <div>
                                    <h2 className='edu-year'>2021-2025</h2>
                                    <h2 className='edu-cgpa'>{Data.cgpa}/10 CGPA</h2>
                                </div>
                            </div>
                        </div>
                        {/* Work Experience */}
                        <div className='resume-section'>
                            <h2 className='section-title'>Work Experience</h2>
                            <div className='section-divider'></div>
                            <h1 className='work-company'>{Data.companyName || ""}</h1>
                            <h2 className='work-title'>{Data.jobTitle || ""}</h2>
                            <ul className='work-list'>
                                <li>Line-1 of Work Experience</li>
                                <li>Line-2 of Work Experience</li>
                                <li>Line-3 of Work Experience</li>
                            </ul>
                        </div>
                        {/* Projects */}
                        <div>
                            {Data.projects.map((project, index) => (
                                <div key={index} className='resume-section'>
                                    <h2 className='section-title'>{project.heading || "Project"}</h2>
                                    <div className='section-divider'></div>
                                    <ul>
                                        <li>{project.details || "Project details"}</li>
                                    </ul>
                                </div>
                            ))}
                        </div>
                        {/* Technical Skills */}
                        <div className='resume-section'>
                            <h2 className='section-title'>Technical Skills</h2>
                            <div className='section-divider'></div>
                            <ul>
                                <li>Skill 1</li>
                                <li>Skill 2</li>
                            </ul>
                        </div>
                        {/* Honors and Awards */}
                        <div className='resume-section'>
                            <h2 className='section-title'>Honors and Awards</h2>
                            <div className='section-divider'></div>
                            <p>Lorem ipsum dolor sit amet consectetur.</p>
                        </div>
                        {/* Achievements */}
                        <div className='resume-section'>
                            <h2 className='section-title'>Achievements</h2>
                            <div className='section-divider'></div>
                            <p>Write your achievements here.</p>
                        </div>
                    </div>
                </div>
            </div>
            <button onClick={handleDownloadPDF} className="download-btn">Download PDF</button>
        </>
    );
}

export default Template4;
