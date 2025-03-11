import React from 'react'
import {  FaGithub, FaPhone, FaVoicemail } from 'react-icons/fa'
import { IoIosMail } from "react-icons/io";
import html2canvas from 'html2canvas-pro';
import jsPDF from "jspdf";
import { useLocation } from 'react-router-dom';
function TemplateBlue() {
    //     let data={
    //     phone:"abv/",
    //     email:"abv/",
    //     LinkdinLink:"abv/",
    //     GithubLink:"abv/",
    //     workExperience:{jobTitle:"Sde", companyname:"abc",experience:[" heyy sourav"," how are you"]},
    //     projects:[{projectTitle:"abc", projectDetails:"abac", sourceCode:"abacc"},{projectTitle:"project2", projectDetails:"thiss", sourceCode:"jahah"}],
    //     Technical:{language:"python,jas,cpp",webTechnologies:"Reactjs,HTML,CSS",cloud:"AWS",DevelopersTools:"Postman,Docker"},
    //     honors:[{heading:"ABC",details:"this i have done"},{heading:"abc",details:"abc"}],
    //     achievements:[" i have achived"," i have this things"]
    //         }
    const location = useLocation();
const data = location.state;
console.log('data', data);

    const printRef= React.useRef(null);
    const handleDownloadPDF =async () => {
       const element=printRef.current;
       if(!element){
        return;
       }
       const canvas =await html2canvas(element);
       const data=canvas.toDataURL('image/png');
       const pdf =new jsPDF({
        orientation:"potrait",
        unit:"px",
        format:"a4",
       });
       const imgProperties=pdf.getImageProperties(data);
       const pdfWidth= pdf.internal.pageSize.getWidth();
       const pdfHeight=(imgProperties.height*pdfWidth)/imgProperties.width
       console.log(imgProperties)
       pdf.addImage(data, 'PNG', 0,0, pdfWidth,pdfHeight)
       pdf.save("examplepdf")
    };
  return (
    <>
     <div className='bg-red-400 w-full font-lora h-[1200px] flex justify-center items-center
     '>
     <div ref={printRef} className='w-[816px] h-[1100px] bg-white flex justify-center items-center'>
        <div className='relative bg-gray- w-[95%] h-[98%]'>
            {/* heading */}
            <div className='w-full h-[112px]  flex flex-col justify-center items-center'>
               <div className='mt-2'>
               <h1 className="text-4xl ">{data.firstName||"Amit"} { data.lastName||" Kumar"}</h1>
               </div>
                <div className='flex space-x-2 w-[350px] h-auto flex-wrap text-center justify-center items-center  mb-2'>
                  {data.phone?(
                            <div className='flex justify-center item-center space-x-1'>
                            <h2 className='mt-[5px]'><FaPhone size="12px"/></h2>
                            <h2 className=' mt-[3px] text-[12px]' >{data.phone||"+918076423683"}</h2>
                            </div>
                  ):""}
                   {data.email?(
                    <div className='flex justify-center item-center space-x-1'>
                   <h2 className='mt-[4.2px]'><IoIosMail size="12px"/></h2>
                   <a href="" className='p-0 underline underline-offset-1  text-[12px]'>{data.email||"souravsaran@gmail.com"}</a>
                   </div>
                   ):""}
                   {data.GithubLink?(
                    <div className='flex'>
                    < h2 className='mt-1 mr-1'><FaGithub size="12px" /></h2>
                <a href="" className='underline underline-offset-1 text-[12px]'> Github</a>
                </div>
                   ):""}
                   
                </div>
                
            </div>
            <div>
                {/* education */}
                <h2 className='text-[14px]  font-bold text-blue-700'>Education</h2>
                <div className='border-b-2 border-blue-700'></div>
                <div className=' w-full h- flex justify-between
                 '>
                    <div className='w-[60%]  h-14'>
                        <p className='font-bold text-[12px]'> Netaji Subhas University of Technology , New Delhi</p>
                       <p className='text-[12px] italic'>B.Tech in Computer Science with specialization in Internet of Things</p>
                    </div>
                     <div className='w-[20%] bg-white h-14'>
                        <div> 
                            <h2 className='font-bold text-[12px] ml-24'>2021-2025</h2>
                            <h2 className='ml-23 text-[11px] italic'>{data.education.cgpa||7.0}/10 CGPA</h2>
                        </div>
                     </div>
                </div>
            </div>
            {/* work Experience */}
            <div className='mt-[-10px]'>
               <h2 className='text-[14px] font-bold text-blue-700 '>work Experience</h2>
                <div className='border-b-2 border-blue-700'></div>
                  <div className='flex justify-between'> 
                    <div>
                    <h1 className='font-bold text-[14px]'>{data.workExperience.companyName||"Algouniversity"}</h1>
                    <h2 className='italic'>{data.workExperience.jobTitle||"jobTitle"}</h2>
                    </div>
                    <div>
                    <span className='font-semibold text-[12px]'>{data.workExperience.joiningDate||"may 2024"} - {data.workExperience.leavingDate||"july 2024"}</span>
                    </div>
                  </div>
                  <div className='h-auto p-2 mb-2'>
                  <ul className='list-disc px-2 list-inside '>
                  {data. workExperience.experience.map((expe, index)=>(
                       

                       <li key={index} className='mr-1 text-[12px] text-justify'>{expe}</li>
                     
                    ))}
                  </ul>
                  
                  </div>
            </div>
            {/* project */}
            <div >
            <h2 className='text-[14px] font-bold text-blue-700 mt-2'>{"Project"}</h2>
            <div className='border-b-2 border-blue-700'></div>
            <div className='bg-red h-auto mb-1 p-2'>
                {data.projects.map((project, index)=>(
                        < div key={index}>
                        <div  className='flex justify-between'>
                    
                    <h2>{project.projectTitle||"project heading"}</h2>
                    <a className='font-semibold text-[12px]' href={`${project.sourceCode}` }>Source Code</a>
                    
                    </div>
                    <div  className="flex items-center space-x-2"> 
                        <span className="rounded-full w-1 h-1 bg-black inline-block"></span>
                        <p className='text-[12px] text-justify'>{project.projectDetails}</p>
                       </div>
                        </div>
                    ))}
                </div>
            </div>
            {/* Techincal skills */}
            <div>
                <h2 className='text-[14px] font-bold text-blue-700 mt-2'>Technical Skills</h2>
               <div className='border-b-2 border-blue-700'></div>
               <div>
                    {/* languages */}
                    <div className=' flex space-x-1 text'>
                    <span className='font-bold text-[12px]'>
                        Language: 
                        </span>
                   <p className='text-[12px]'>{data.technicalFields.language||"language"}.</p>
                   
                    </div>
                    {/* webt */}
                    <div className='flex space-x-1 justify-start items-center '>
                    <span className='font-bold text-[12px]'>
                        WebTechnology: {" "} 
                        </span>
                   <p className='text-[12px] '>{data.technicalFields.webTechnologies}.</p>
                   
                    </div>
                   
                    
                     {/*cloud */}
                     <div className='flex space-x-1 text-center'>
                    <span className='font-bold text-[12px] text-center'>
                        Cloud: {" "} 
                        </span>
                   <p className='text-[12px]'>{data.technicalFields.cloud}.</p>
                   
                    </div>
                    {/* DevTools*/}
                    <div className='flex space-x-1 '>
                    <span className='font-bold text-[12px] '>
                        DevelopmentTools: {" "} 
                        </span>
                   <p className='text-[12px]'>{data.technicalFields.tools}.</p>
                   
                    </div>
                </div>
            </div>
            {/* Honors and awards */}
            <div>
            <h2 className='text-[14px] font-bold text-blue-700 mt-2'>Honor and Awards</h2>
            <div className='border-b-2 border-blue-700'></div>
            <div className='h-auto mb-1 p-2' >
                    {data.honors.map((honor, index)=>(
                        <div key={ index} className=''>
                            <h1 className='text-[12px] font-bold'>{honor.heading||"honors-heading"}</h1>
                            <div  className="flex items-center space-x-2"> 
                        <span className="rounded-full t w-1 h-1 bg-black inline-block"></span>
                        <p className='text-[12px] text-justify'>{honor.details}</p>
                       </div>
                          
                        </div>
                    ))}

                </div>
            </div>
            {/* Achivememts */}
            <div>
            <h2 className='text-l font-bold text-blue-700 mt-2'>Achievements</h2>
            <div className='border-b-2 border-blue-700'></div>
            <div className='h-auto mb-1 p-2'>
                    <ul className='achivement-list list-disc'>
                    {data.achievements.map((achievement, index)=>(
                        // <li key={index} className='achivements-data'>{achivemet}</li>
                        <div key={index}
                         className=""> 
                        {/* <span className="rounded-full t w-1 h-1 bg-black inline-block"></span> */}
                        <li className='text-[12px] text-justify'>{achievement}
                      </li>
                       </div>
                      ))}
                    </ul>
                       
                </div>
            </div>

        </div>
   </div>
 </div>
 <button onClick={handleDownloadPDF} className="mt-4 bg-green-500 text-white p-2 rounded">
                Download PDF
            </button>
    </>
  )
}

export default TemplateBlue;
