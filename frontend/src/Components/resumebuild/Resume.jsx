import React, { useEffect, useState } from 'react'
// import { useNavigate } from "react-router-dom"; // For navigation
// import TemplateView from "../TemplatesView/TemplatesView.jsx";
import './Resume.css'
import { useNavigate } from 'react-router-dom';

// import { image } from 'html2canvas/dist/types/css/types/image.js';
function Resume() {
    //    const navigate= useNavigate();
    const [isOpen, setIsOpen] = useState(false);
    const templateLinks = {
        Template1: "./Template1.jpg",
        Template2: "./Template2.jpg",
        Template3: "./Template3.jpg",
        Template4: "/Template4.jpg",
    };
    const templates = [
        {
            id: 1,
            name: "Template1",
            image: "/template1.png",
            fields: ["Full Name", "Email", "Phone Number", "Address", "Github-link", " Skills", "Language",
                "Work Experience", "Education", "Interest"],
        },
        {
            id: 2,
            name: "Template2",
            image: "/template2.png",
            fields: ["Full Name", "Email", "LinkedIn", "Skills", "Projects"],
        },
    ];
    const [selectedTemplate, setSelectedTemplate] = useState("");
    const [imagePath, setImagePath] = useState("");
    const[templateName ,setTemplateName]=useState("");
    // 
    const handleImagePath=(template)=>{
       setTemplateName(template);
        setImagePath(templateLinks[template]);
       
    }
    // 
    const [formData, setFormData] = useState({});
    // 
    const navigate= useNavigate();
    const handleselectedTemplate = (selectedTemplate) => {
        setImagePath(null);
        setSelectedTemplate(templateName);
        const selectedTemplateObj = templates.find(t => t.name === selectedTemplate);
        if (selectedTemplateObj) {
            const initialData = {};
            selectedTemplateObj.fields.forEach(field => {
                initialData[field] = "";
            });
            setFormData(initialData);
        }
        navigate(`/resumeform/${selectedTemplate}`)
    };

    // 
 
    //   close button
    const handleClosebutton = () => {
        setImagePath(null);
        // setTemplateName(null);
    }
 
    
    return (
        <>
            <nav className='w-full h-20  shadow-md flex justify-center '>
                <div className=' w-[90%] m-auto flex justify-between items-center space-x-2'>
                    {/* title */}
                    <div className='flex' >
                        <a href="#" className='cursor-pointer'>
                            <img src="./logo1.png" alt="logo" className='w-[100px]  lg:w-[170px] lg:h-[60px]' />
                        </a>
                        {/* <h1 className='text-4xl  font-bold text-orange-300'>EXAMPLER</h1> */}
                    </div>
                    {/* links */}
                    <div className='bg-white-500  flex justify-center items center space-x-2'>
                        <ul className=' hidden lg:flex justify-center items center space-x-3 mx-5 py-3 '>
                            <li className='text-sm cursor-pointer  hover:text-gray-600 transition duration-300 ease-in-out hover:-translate-y-1'>About</li>
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
                            >Log in</button>
                            <button
                                className=' text-[10px] w-[50px] lg:text-sm lg:ms-2 hover:border-none hover:bg-sky-600 hover:text-white lg:w-[70px] border border-indigo-600 py-2 px-2 cursor-pointer transition duration-300 ease-in-out'>Sign in</button>
                        </div>
                        <div>
                            {/* buttons */}

                        </div>
                    </div>


                </div>

            </nav>
            <section className='w-full h-170 lg:flex md:flex py-2 lg:mb-10 mb-[100px]'>
                <div className='lg:w-[27%] md:w-[40%] w-[99%] lg:h-[100%] h-[88%] flex justify-center items-center'>
                    <div className='bg-[#e9e7e7] shadow-l inset-shadow-sm rounded-sm w-[90%] lg:mt-18 lg:h-[99%] flex flex-col items-center m-12 py-6'>
                        <h2 className='text-black font-bold font-ibm mb-14'>Select Templates</h2>
                        <div>
                            <ul className=' text-[#908986] font-orbitron'>
                                <li className='mt-3 font-orbitron cursor-pointer py-2 border-b-1 hover:text-blue-400 hover:border-b-[#908986] transition duration-300 ease-in-out' onClick={() => {  handleImagePath("Template1") }}>Template 1</li>
                                <li className='mt-3 cursor-pointer py-2 border-b-1 hover:text-blue-400 hover:border-b-[#908986] transition duration-300 ease-in-out' onClick={() => {  handleImagePath("Template2") }}>Template 2</li>
                                <li className='mt-3 cursor-pointer py-2 border-b-1 hover:text-blue-400 hover:border-b-[#908986] transition duration-300 ease-in-out' onClick={() => {  handleImagePath("Template3") }}>Template 3</li>
                                <li className='mt-3 cursor-pointer py-2 border-b-1 hover:text-blue-400 hover:border-b-[#908986] transition duration-300 ease-in-out' onClick={() => {  handleImagePath("Template4") }}>Template 4</li>
                            </ul>
                        </div>
                        {/* resume-preview */}
                        {imagePath ? (
                            <div className='absolute top-22 right-[100px] w-[800px] h-130 z-1 bg-[#dedfdf] py-2 transition duration-300 ease-in-out flex justify-center items-center'>
                                <div className='absolute top-2 right-3 text-white'><button className='transition duration-300 ease-in-out p-2 bg-amber-500 cursor-pointer hover:bg-amber-400 ' onClick={handleClosebutton}>close</button></div>
                                <img src={imagePath} alt="Selected Template"
                                    className="w-[50%] h-[98%] m-auto object-fit shadow-lg border rounded"
                                    style={{ imageRendering: "crisp-edges" }}
                                />
                                <div className=' w-[20%] h-[40px] mx-03'>
                                    <button onClick={()=>{handleselectedTemplate(templateName)}}
                                        className='bg-green-600 w-[100px] border-none outline-none
                             text-white px-2 py-[10px] text-[16px] cursor-pointer rounded-md shadow-lg active:active:translate-y-[4px]
                             transition duration-300 ease-in-out  hover:bg-green-500'

                                    >select</button>
                                </div>

                            </div>
                        ) : (
                            <p></p>
                        )}

                        {/* resume-preview end */}
                    </div>
                </div>
                <div className='  w-full md:mt-3 md:py-5  lg:w-[70%] h-[99%] mb- shadow-l border-1 border-gray-200 inset-shadow-sm '>
                    <div className='flex justify-center lg:mt-15'>
                        <p
                            className='lg:w-[73%] mb:w-[58%] w-[95%] text-[#615f5f] font-ibm px-3 fade-left text-justify text-[12px] lg:text-[16px] md:text-[14px]
                       '>

                            "Your resume is your first impression—make it count! Choose from a
                            variety of professional and modern templates designed to showcase your
                            skills and experience. A well-crafted resume can open doors to better
                            job opportunities and help you stand out in a competitive job market.
                            Explore our collection, find the template that best represents you, and start building
                            a resume that gets noticed. Whether you're a fresh graduate, an experienced professional,
                            or switching careers, we have the perfect design for you.
                            Start now and take the first step toward your dream job!"_
                        </p>
                    </div>
                   
                    
                </div>

                    
            </section>

            <section className='mt-140 mb-50 lg:mt-10 mb:110 w-full bg-green-300 h-100'>

            </section>
        </>
    )
}

export default Resume
