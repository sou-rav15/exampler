import React from 'react'
import "./Template5.css"
import html2canvas from 'html2canvas-pro';
import jsPDF from "jspdf";
import { IoIosMail } from "react-icons/io";
import {  FaGithub, FaLinkedin, FaPhone, FaVoicemail } from 'react-icons/fa'
import { useLocation } from 'react-router-dom';
function Template5() {
//     let data={
// phone:"abv/",
// email:"abv/",
// LinkdinLink:"abv/",
// GithubLink:"abv/",
// workExperince:{jobTitle:"Sde", companyname:"abc",experience:[]},
// Project:[{projectTitle:"abc", projectDetails:"abac", sourcCode:"abacc"},{}],
// Technical:{language:"python,jas,cpp",webTechnologies:"Reactjs,HTML,CSS",cloud:"AWS",DevelopersTools:"Postman,Docker"},
// Honors:[{heading:"ABC",details:"this i have done"},{heading:"abc",details:"abc"}],
// achivement:[" i have achived"," i have this things"]
//     }

const location = useLocation();
const data = location.state;
// data.honors.map((honor,index)=>{
//     console.log(honor.heading);
//     console.log(honor.detais);
    
// })
    // console.log(data.honors);
    // const handleDownloadPDF = () => {
    //     const element = document.getElementById("resume-preview"); // Element to capture
    //     html2canvas(element).then((canvas) => {
    //         const imgData = canvas.toDataURL("image/png");
    //         const pdf = new jsPDF();
    //         pdf.addImage(imgData, "PNG", 10, 10, 180, 0); // Adjust position and size
    //         pdf.save("resume.pdf");

    //         // Clear the data after download
    //         setData(null);
    //     });
    // };
console.log('form-data->',data)
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
    // const handleDownloadPDF = () => {
    //     const element = document.getElementById("resume-preview"); // Fixed ID
    
    //     html2canvas(element, { scale: 2 }).then((canvas) => {  // Improved quality
    //         const imgData = canvas.toDataURL("image/png");
    //         const pdf = new jsPDF("p", "mm", "a4");
    
    //         const imgWidth = 210; // A4 width in mm
    //         const imgHeight = (canvas.height * imgWidth) / canvas.width; // Maintain aspect ratio
    
    //         pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);

    //         pdf.setFontSize(12);
    //         pdf.setTextColor(0, 0, 255);
    
        
    //         pdf.save("resume.pdf");
    //     });
    // };
  return (
    <>
      <div className='body-container'>
            <div ref={printRef} className='resume-content' id="resume-preview" >
                {/* box 1 */}
                <div className='resume-box1'>
                    <div className='Name-box'>
                        <h2>{data.firstName ||"Amit"} { data.lastName||" Kumar"}</h2>
                    </div>
                    <div className='details-box'> 
                        {/* phone number */}
                      {data.phone?(
                          <div className='phone-number-box'>
                          <h2 className='phone-number-icon'><FaPhone/></h2>
                              <p>{data.phone||"99999999"}</p>
                          </div>
                      ):"91919191"}
                        {/* email */}
                        {data.email?(
                            <div className='mail-box'>
                            <h2 className='mail-box-icon'><IoIosMail/></h2>
                                <p>souravsaran155@gmail.com</p>
                            </div>
                        ):" abcdefghijkl@gmail.com"}
                        {/* Linkdin */}
                      {data.LinkdinLink?(
                          <div className='linkdin'>
                          <h2 className='linkdin-icon'><FaLinkedin/></h2>
                          <a href="">Linkdin</a>
                      </div>
                      ):""}
                        {/* githblink */}
                        {data.GithubLink?(
                            <div className='githublink'>
                            < h2 className='githublink-icon'><FaGithub /></h2>
                                <a href="">Github</a>
                            </div>
                         ):""} 
                    </div>
                    {/* end of box 1 */}

                  
                </div>
                {/* box2 */}
                <div className="resume-box2">
                    <h2 className='resume-education'>Education</h2>
                    <div className='border-line'></div>
                   <div className='resume-education-details'>
                   <div className='resume-left' >
                        <h1 className='college-name'>{data.education.university||"Netaji subhas universtiy of technology, new delhi"},{data.education.address||"kolkata"}</h1>
                         <p className='resume-course-name'>{"Btech"||data.education.degree||"Barch"} in {data.education.branch||"IT"}</p>
                    </div>
                    <div className='resume-right'>
                            <div><h1 className='graduation-year'>{data.startingYear||"2021"}-{data.graduatingYear||"2025"}</h1></div>
                            <div><h1 className='graduation-marks'>{data.education.cgpa||"2"}/{"10"}  CGPA</h1></div>
                    </div>
                   </div>
                    
                </div>
                {/* box3 */}
                <div className='resume-box3'>
                <h2 className='resume-education'>WorkExperience</h2>
               <div className='border-line'></div>
                <div className='resume-workEperince'>
                <div className='resume-heading'>
                    <h1 className='companyname'>{data.workExperience.companyName||"comapanyName"}</h1>
                    <span>{data.workExperience.joiningDate||"may 2024"} - {data.workExperience.leavingDate||"july 2024"}</span>
                    </div>
                    <h3 className='jobTitle'>{data.workExperience.jobTitle||"JobTitle"}</h3>
                   <div className='workexperience'>
                    <ul className='workExperince-list'>
                    {data.workExperience.experience.map((expe, index)=>(
                        <li key={index}>{expe}</li>
                    ))}
                    </ul>
                   
                  
                   </div>
                </div>
                </div>
                {/* box4 */}
                <div className="resume-box4">
                <h2 className='resume-education'>Project</h2>
                <div className='border-line'></div>
                <div>
                {data.projects.map((project, index)=>(
                        <>
                        <div key={index} className='resume-heading'>
                    
                    <h2>{project.projectTitle||"project heading"}</h2>
                    <a href={`${project.sourcecode}`}>Source Code</a>
                    </div>
                    <ul className='project-details'>
                        <p>
                            {project.projectDetails}
                        </p>
                        {/* <li></li> */}
                    </ul>
                        </>
                    ))}
                </div>
                </div>
                {/* box5 */}
                <div className="resume-box5">
                <h2 className='resume-education'>Techincal and skills</h2>
                <div className='border-line'></div>
                <div>
                    {/* languages */}
                    <div className='language'>
                    <span className='language-heading'>
                        Language: {" "} 
                        </span>
                   <p className='technical-details'>{data.technicalFields.languages?data.technicalFields.languages:"language"}.</p>
                   
                    </div>
                    {/* webt */}
                    <div className='webTechnologies'>
                    <span className='Technologies-heading'>
                        WebTechnology: {" "} 
                        </span>
                   <p className='technical-details'>{data.technicalFields.webTechnologies}.</p>
                   
                    </div>
                   
                    
                     {/*cloud */}
                     <div className='cloud'>
                    <span className='cloud-heading'>
                        Cloud: {" "} 
                        </span>
                   <p className='technical-details'>{data.technicalFields.cloud}.</p>
                   
                    </div>
                    {/* DevTools*/}
                    <div className='cloud'>
                    <span className='cloud-heading'>
                        DevelopmentTools: {" "} 
                        </span>
                   <p className='technical-details'>{data.technicalFields.tools}.</p>
                   
                    </div>
                </div>
                </div>
                {/* box6  */}
                <div className='resume-box6'>
                <h2 className='resume-education'>Honors And Awards</h2>
                <div className='border-line'></div>
                <div className='honors-awards' >
                    {data.honors.map((honor, index)=>(
                        <div key={ index} className=''>
                            <h1 className='honors-heading'>{honor.heading||"honors-heading"}</h1>
                            <li className='honors-details'>
                                {honor.details||" honors details"}
                            </li>
                        </div>
                    ))}

                </div>
                </div>
                {/* box7 */}
                <div className='resume-box7'>
                <h2 className='resume-education'>Achivements</h2>
                <div className='border-line'></div>
                <div className='achivements'>
                    <ul className='achivement-list'>
                    {data.achievements.map((achivemet, index)=>(
                        <li key={index} className='achivements-data'>{achivemet}</li>
                      ))}
                    </ul>
                       
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

export default Template5
