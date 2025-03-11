// import React, { useState } from 'react';
// import TemplateView from '../Template/TemplateView';
// import { useNavigate, useParams } from 'react-router-dom';
// import Template4 from '../Template/Template4/Template4';
// import Template5 from '../Template/Template4/Template5';

// function Resumeform() {
//   // const { paramString } = useParams();
//   // console.log('selected-> ', paramString)
//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     email: '',
//     phone: '',
//     age: '',
//     address: '',
//     languages: '',
//     workExperience: '',
//     jobTitle: '',
//     companyName:'',
//     collegeName: '',
//     branch: '',
//     degree: '',
//     cgpa: '',
//     status: '',
//     projects: [{ heading: '', details: '' }],
//   });

// const navigate=useNavigate();
// // handle project start
// const handleProjectChange = (index, e) => {
//     const { name, value } = e.target;
//     const newProjects = [...formData.projects];
//     newProjects[index][name] = value;
//     setFormData((prevData) => ({
//       ...prevData,
//       projects: newProjects
//     }));
//   };

//   const handleAddProject = () => {
//     setFormData((prevData) => ({
//       ...prevData,
//       projects: [...prevData.projects, { heading: '', details: '' }]
//     }));
//   };

//   const handleRemoveProject = (index) => {
//     const newProjects = [...formData.projects];
//     newProjects.splice(index, 1);
//     setFormData((prevData) => ({
//       ...prevData,
//       projects: newProjects
//     }));
//   };

// // handle project end
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };
//   const [previewData, setPreviewData] = useState(null);
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setPreviewData(formData); 
//     // Do something with the form data (e.g., send it to the backend)
//     navigate('/template4')
//     console.log(formData);
//   };
//   const handleDownloadClose=()=>{
//     setPreviewData(null);
    
//     }
//     const handleGoback=()=>{
//         navigate('/resumecreate');
//     }

//   return (
//     <div className='absolute bg-black w-full h-130 flex justify-center items-center'>
//       <div className=' bg-white w-[60%] h-[99%] overflow-y-scroll pl-10 py-4'>
        
//         {/* Personal Information */}
//         <div className="max-w-md mx-auto mb-6">
//           <h2 className='font-bold lg:text-3xl md:text-3xl py-2'>Personal Information</h2>
          
//           <div className="grid md:grid-cols-2 md:gap-6">
//             <div className="relative z-0 w-full mb-5 group">
//               <input 
//                 type="text" 
//                 name="firstName" 
//                 id="firstName" 
//                 className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
//                 placeholder=" " 
//                 value={formData.firstName}
//                 onChange={handleChange} 
//                 required 
//               />
//               <label htmlFor="firstName" className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 peer-focus:text-blue-600">First name</label>
//             </div>
//             <div className="relative z-0 w-full mb-5 group">
//               <input 
//                 type="text" 
//                 name="lastName" 
//                 id="lastName" 
//                 className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
//                 placeholder=" " 
//                 value={formData.lastName}
//                 onChange={handleChange} 
//                 required 
//               />
//               <label htmlFor="lastName" className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 peer-focus:text-blue-600">Last name</label>
//             </div>
//           </div>

//           {/* Email */}
//           <div className="relative z-0 w-full mb-5 group">
//             <input 
//               type="email" 
//               name="email" 
//               id="email" 
//               className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
//               placeholder=" " 
//               value={formData.email}
//               onChange={handleChange} 
//               required 
//             />
//             <label htmlFor="email" className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 peer-focus:text-blue-600">Email address</label>
//           </div>

//           {/* Phone Number */}
//           <div className="relative z-0 w-full mb-5 group">
//             <input 
//               type="tel" 
//               name="phone" 
//               id="phone" 
//               pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" 
//               className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
//               placeholder=" " 
//               value={formData.phone}
//               onChange={handleChange} 
//               required 
//             />
//             <label htmlFor="phone" className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 peer-focus:text-blue-600">Phone number (123-456-7890)</label>
//           </div>

//           {/* Age */}
//           <div className="relative z-0 w-full mb-5 group">
//             <input 
//               type="number" 
//               name="age" 
//               id="age" 
//               className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
//               placeholder=" " 
//               value={formData.age}
//               onChange={handleChange} 
//               required 
//             />
//             <label htmlFor="age" className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 peer-focus:text-blue-600">Age</label>
//           </div>
//         </div>

//         {/* Address */}
//         <div className="max-w-md mx-auto mb-6">
//           <h2 className='font-bold lg:text-3xl md:text-3xl py-2'>Address</h2>
//           <div className="relative z-0 w-full mb-5 group">
//             <textarea 
//               name="address" 
//               id="address" 
//               rows="4" 
//               className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
//               value={formData.address}
//               onChange={handleChange} 
//               required 
//             />
//             <label htmlFor="address" className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 peer-focus:text-blue-600">Enter your address</label>
//           </div>
//         </div>

//         {/* Languages */}
//         <div className="max-w-md mx-auto mb-6">
//           <h2 className='font-bold lg:text-3xl md:text-3xl py-2'>Languages</h2>
//           <div className="relative z-0 w-full mb-5 group">
//             <textarea 
//               name="languages" 
//               id="languages" 
//               rows="4" 
//               className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
//               value={formData.languages}
//               onChange={handleChange} 
//               required 
//             />
//             <label htmlFor="languages" className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 peer-focus:text-blue-600">Languages Known</label>
//           </div>
//         </div>

//         {/* Work Experience */}
//         <div className="max-w-md mx-auto mb-6">
//   <h2 className='font-bold lg:text-3xl md:text-3xl py-2'>Work Experience</h2>
  
//   {/* Job Title */}
//   <div className="relative z-0 w-full mb-5 group">
//     <input
//       type="text"
//       name="jobTitle"
//       id="jobTitle"
//       className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
//       placeholder=" "
//       value={formData.jobTitle}
//       onChange={handleChange}
//       required
//     />
//     <label htmlFor="jobTitle" className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 peer-focus:text-blue-600">Job Title</label>
//   </div>
  
//   {/* Company Name */}
//   <div className="relative z-0 w-full mb-5 group">
//     <input
//       type="text"
//       name="companyName"
//       id="companyName"
//       className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
//       placeholder=" "
//       value={formData.companyName}
//       onChange={handleChange}
//       required
//     />
//     <label htmlFor="companyName" className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 peer-focus:text-blue-600">Company Name</label>
//   </div>
  
//   {/* Work Experience Details */}
//   <div className="relative z-0 w-full mb-5 group">
//     <textarea
//       name="workExperience"
//       id="workExperience"
//       rows="4"
//       className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
//       placeholder=" "
//       value={formData.workExperience}
//       onChange={handleChange}
//       required
//     />
//     <label htmlFor="workExperience" className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 peer-focus:text-blue-600">Work Experience</label>
//   </div>
// </div>


//         {/* Education */}
//         <div className="max-w-md mx-auto mb-6">
//           <h2 className='font-bold lg:text-3xl md:text-3xl py-2'>Education</h2>
          
//           <div className="relative z-0 w-full mb-5 group">
//             <input 
//               type="text" 
//               name="collegeName" 
//               id="collegeName" 
//               className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
//               placeholder=" " 
//               value={formData.collegeName}
//               onChange={handleChange} 
//               required 
//             />
//             <label htmlFor="collegeName" className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 peer-focus:text-blue-600">College Name</label>
//           </div>
          
//           <div className="relative z-0 w-full mb-5 group">
//             <input 
//               type="text" 
//               name="branch" 
//               id="branch" 
//               className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
//               placeholder=" " 
//               value={formData.branch}
//               onChange={handleChange} 
//               required 
//             />
//             <label htmlFor="branch" className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 peer-focus:text-blue-600">Branch</label>
//           </div>

//           <div className="relative z-0 w-full mb-5 group">
//             <input 
//               type="text" 
//               name="degree" 
//               id="degree" 
//               className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
//               placeholder=" " 
//               value={formData.degree}
//               onChange={handleChange} 
//               required 
//             />
//             <label htmlFor="degree" className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 peer-focus:text-blue-600">Degree</label>
//           </div>

//           <div className="relative z-0 w-full mb-5 group">
//             <input 
//               type="text" 
//               name="cgpa" 
//               id="cgpa" 
//               className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
//               placeholder=" " 
//               value={formData.cgpa}
//               onChange={handleChange} 
//               required 
//             />
//             <label htmlFor="cgpa" className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 peer-focus:text-blue-600">CGPA</label>
//           </div>

//           <div className="relative z-0 w-full mb-5 group">
//             <input 
//               type="text" 
//               name="status" 
//               id="status" 
//               className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
//               placeholder=" " 
//               value={formData.status}
//               onChange={handleChange} 
//               required 
//             />
//             <label htmlFor="status" className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 peer-focus:text-blue-600">Status (e.g., Graduated or Ongoing)</label>
//           </div>
//         </div>
//       {/* Social Links */}
//  <div className="max-w-md mx-auto mb-6">
//           <h2 className='font-bold lg:text-3xl md:text-3xl py-2'>Social Links</h2>
          
//           {/* GitHub */}
//           <div className="relative z-0 w-full mb-5 group">
//             <input 
//               type="url" 
//               name="github" 
//               id="github" 
//               className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
//               placeholder=" " 
//               value={formData.github}
//               onChange={handleChange} 
//             />
//             <label htmlFor="github" className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 peer-focus:text-blue-600">GitHub Profile URL</label>
//           </div>
//     {/* LinkedIn */}
//             <div className="relative z-0 w-full mb-5 group">
//                 <input
//                   type="url"
//                   name="linkedin"
//                   id="linkedin"
//                   className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
//                   placeholder=" "
//                   value={formData.linkedin}
//                   onChange={handleChange}
//                 />
//                 <label htmlFor="linkedin" className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 peer-focus:text-blue-600">LinkedIn Profile URL</label>
//               </div>

//               {/* Personal Website */}
//               <div className="relative z-0 w-full mb-5 group">
//                 <input
//                   type="url"
//                   name="personalWebsite"
//                   id="personalWebsite"
//                   className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
//                   placeholder=" "
//                   value={formData.personalWebsite}
//                   onChange={handleChange}
//                 />
//                 <label htmlFor="personalWebsite" className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 peer-focus:text-blue-600">Personal Website URL</label>
//               </div>
//             </div>
          
//             <div className="mb-6">
//             <h2 className='font-bold text-3xl py-2'>Projects</h2>
//             {formData.projects.map((project, index) => (
//               <div key={index} className="border p-4 mb-4 rounded">
//                 <div className="relative z-0 w-full mb-5 group">
//                   <input
//                     type="text"
//                     name="heading"
//                     id={`heading-${index}`}
//                     className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
//                     placeholder=" "
//                     value={project.heading}
//                     onChange={(e) => handleProjectChange(index, e)}
//                     required
//                   />
//                   <label htmlFor={`heading-${index}`} className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 peer-focus:text-blue-600">Project Heading</label>
//                 </div>
//                 <div className="relative z-0 w-full mb-5 group">
//                   <textarea
//                     name="details"
//                     id={`details-${index}`}
//                     className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
//                     placeholder=" "
//                     value={project.details}
//                     onChange={(e) => handleProjectChange(index, e)}
//                     required
//                   />
//                   <label htmlFor={`details-${index}`} className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 peer-focus:text-blue-600">Project Details</label>
//                 </div>
//                 <button
//                   type="button"
//                   onClick={() => handleRemoveProject(index)}
//                   className="text-red-500 hover:text-red-700"
//                 >
//                   Delete Project
//                 </button>
//               </div>
//             ))}
//             <button
//               type="button"
//               onClick={handleAddProject}
//               className="text-blue-500 hover:text-blue-700 flex items-center"
//             >
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="h-5 w-5 mr-2"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//                 strokeWidth="2"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   d="M12 5v14m7-7H5"
//                 />
//               </svg>
//               Add Project
//             </button>
//           </div>

//        < div className='lg:flex justify-between space-y-2'>
//        <button onClick={handleSubmit} type="submit" className="cursor-pointer text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
//           Generate-form
//         </button>
//         <button onClick={handleGoback} type="submit" className=" cursor-pointer text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
//           Go back
//         </button>
//        </div>
//       </div>
//       {/* {previewData ? (
//                      <div className='absolute  top-2 right-[70px] overflow-y-auto bg-gray-300  w-[90%] h-[97%]  flex flex-col justify-center items-center'>
                        
//                         <div className='object-fit'>
//                           <Template5 Data={previewData} />
//                           </div> 
//                         <button className='absolute top-2 right-3 text-white transition duration-300 ease-in-out p-2 bg-amber-500 cursor-pointer hover:bg-amber-400 ' onClick={handleDownloadClose}>close</button>
                       
//                     </div>
//                     ) : null} */}
//     </div>
//   );
// }

// export default Resumeform;

import React, { useState } from "react";
import TemplateView from '../Template/TemplateView';
import { useNavigate, useParams } from 'react-router-dom';
import Template4 from '../Template/Template4/Template4';
import Template5 from '../Template/Template4/Template5';
const Resumeform  = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    age: '',
    country: '',
    state: '',
    city: '',
    pincode: '',
    languages: '',
    workExperience: {
      jobTitle: '',
      companyName: '',
      joiningDate: '',
      leavingDate: '',
      experience: Array(7).fill('')
    },
    projects: [],
    technicalFields: {
      languages: '',
      webTechnologies: '',
      cloud: '',
      tools: ''
    },
    honors: [
      { heading: "", details: [""] } // Initialize details as an array
    ],
    education: {
      university: "",
      address: "",
      degree: "",
      branch: "",
      cgpa: "",
    },
    achievements: [],
  });
  const navigate=useNavigate();
  // const [previewData, setPreviewData] = useState(null);
  const handleSubmit = (e) => {
        e.preventDefault();
        // setPreviewData(formData); 
        // Do something with the form data (e.g., send it to the backend)
        navigate('/templateblue',{ state:formData })
        console.log(formData);
      };
  const handleChange = (e, field, index = null) => {
    if (field === 'workExperience' && index !== null) {
      setFormData((prevData) => {
        const newExperience = [...prevData.workExperience.experience];
        newExperience[index] = e.target.value;
        return { ...prevData, workExperience: { ...prevData.workExperience, experience: newExperience } };
      });
    } else if (field in formData.workExperience) {
      setFormData((prevData) => ({
        ...prevData,
        workExperience: { ...prevData.workExperience, [field]: e.target.value }
      }));
    } 
    else if (field in formData.technicalFields) {
      setFormData((prevData) => ({
        ...prevData,
        technicalFields: { ...prevData.technicalFields, [field]: e.target.value }
      }));
    } else {
      setFormData((prevData) => ({ ...prevData, [field]: e.target.value }));
    }
  };
  // education

  const handleEducationChange = (e) => {
    const { name, value } = e.target;
  
    if (name.startsWith("education.")) {
      const field = name.split(".")[1]; // Extract the specific field
      setFormData((prev) => ({
        ...prev,
        education: {
          ...prev.education,
          [field]: value,
        },
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };
  // 

  const handleHonorChange = (e, field) => {
    const { value } = e.target;
  
    const match = field.match(/honors\[(\d+)\]\.(\w+)(?:\[(\d+)\])?/);
    if (match) {
      const index = parseInt(match[1], 10);
      const key = match[2];
      const detailIndex = match[3] ? parseInt(match[3], 10) : null;
  
      setFormData((prev) => {
        const updatedHonors = [...prev.honors];
  
        if (key === "details" && detailIndex !== null) {
          updatedHonors[index].details[detailIndex] = value;
        } else {
          updatedHonors[index] = { ...updatedHonors[index], [key]: value };
        }
  
        return { ...prev, honors: updatedHonors };
      });
    }
  };
  const addHonor = () => {
    setFormData((prev) => ({
      ...prev,
      honors: [...prev.honors, { heading: "", details: [""] }], // New entry with empty values
    }));
  };
  
  const removeHonor = (index) => {
    setFormData((prev) => ({
      ...prev,
      honors: prev.honors.filter((_, i) => i !== index),
    }));
  };

  const addDetail = (index) => {
    setFormData((prev) => {
      const updatedHonors = [...prev.honors];
      updatedHonors[index].details.push("");
      return { ...prev, honors: updatedHonors };
    });
  };

  const removeDetail = (honorIndex, detailIndex) => {
    setFormData((prev) => {
      const updatedHonors = [...prev.honors];
      updatedHonors[honorIndex].details = updatedHonors[honorIndex].details.filter(
        (_, i) => i !== detailIndex
      );
      return { ...prev, honors: updatedHonors };
    });
  };
  // achivements
  const handleAchievementChange = (e, index) => {
    const newAchievements = [...formData.achievements];
    newAchievements[index] = e.target.value;
    setFormData((prev) => ({ ...prev, achievements: newAchievements }));
  };
  
  const addAchievement = () => {
    setFormData((prev) => ({
      ...prev,
      achievements: [...prev.achievements, ""], // Add an empty string to the array
    }));
  };
  
  const removeAchievement = (index) => {
    const newAchievements = formData.achievements.filter((_, i) => i !== index);
    setFormData((prev) => ({ ...prev, achievements: newAchievements }));
  };
  const addProject = () => {
    setFormData((prevData) => ({
      ...prevData,
      projects: [...prevData.projects, { projectTitle: '', projectDetails: '', sourceCode: '' }]
    }));
  };

  const removeProject = (index) => {
    setFormData((prevData) => {
      const updatedProjects = prevData.projects.filter((_, i) => i !== index);
      return { ...prevData, projects: updatedProjects };
    });
  };

  const handleProjectChange = (index, field, value) => {
    const updatedProjects = [...formData.projects];
    updatedProjects[index][field] = value;
    setFormData((prevData) => ({ ...prevData, projects: updatedProjects }));
  };
 

  return (
    <div className="flex justify-center items-center w-full bg-gray-500 p-4">
      <form className="bg-white p-6 rounded-lg shadow-md w-[70%] ">
        <h2 className="text-2xl font-bold mb-4">Personal Information</h2>
        <label className="block">First Name</label>
        <input type="text" className="w-full p-2 border rounded mb-2" onChange={(e) => handleChange(e, 'firstName')} />
    
        <label className="block">Last Name</label>
        <input type="text" className="w-full p-2 border rounded mb-2" onChange={(e) => handleChange(e, 'lastName')} />

        <label className="block">Email</label>
        <input type="email" className="w-full p-2 border rounded mb-2" onChange={(e) => handleChange(e, 'email')} />

        <label className="block">Phone</label>
        <input type="text" className="w-full p-2 border rounded mb-2" onChange={(e) => handleChange(e, 'phone')} />

        <label className="block">Age</label>
        <input type="number" className="w-full p-2 border rounded mb-2" onChange={(e) => handleChange(e, 'age')} />

        <h2 className="text-2xl font-bold mt-4 mb-2">Address</h2>
        <label className="block">Country</label>
        <input type="text" className="w-full p-2 border rounded mb-2" onChange={(e) => handleChange(e, 'country')} />
        
        <label className="block">State</label>
        <input type="text" className="w-full p-2 border rounded mb-2" onChange={(e) => handleChange(e, 'state')} />
        
        <label className="block">City</label>
        <input type="text" className="w-full p-2 border rounded mb-2" onChange={(e) => handleChange(e, 'city')} />
        
        <label className="block">Pincode</label>
        <input type="text" className="w-full p-2 border rounded mb-2" onChange={(e) => handleChange(e, 'pincode')} />

        <h2 className="text-2xl font-bold mt-4 mb-2">Languages</h2>
        <label className="block">Languages (comma-separated)</label>
        <input type="text" className="w-full p-2 border rounded mb-2" onChange={(e) => handleChange(e, 'languages')} />

        <h2 className="text-2xl font-bold mt-4 mb-2">Work Experience</h2>
        <label className="block">Job Title</label>
        <input type="text" className="w-full p-2 border rounded mb-2" onChange={(e) => handleChange(e, 'jobTitle')} />
        
        <label className="block">Company Name</label>
        <input type="text" className="w-full p-2 border rounded mb-2" onChange={(e) => handleChange(e, 'companyName')} />
        
        <label className="block">Joining Date</label>
        <input type="date" className="w-full p-2 border rounded mb-2" onChange={(e) => handleChange(e, 'joiningDate')} />
        
        <label className="block">Leaving Date</label>
        <input type="date" className="w-full p-2 border rounded mb-2" onChange={(e) => handleChange(e, 'leavingDate')} />

        <h3 className="text-xl font-semibold mt-4 mb-2">Experience Details (Max 7 lines)</h3>
        {formData.workExperience.experience.map((line, index) => (
          <input
            key={index}
            type="text"
            className="w-full p-2 border rounded mb-2"
            placeholder={`Experience Line ${index + 1}`}
            value={line}
            onChange={(e) => handleChange(e, 'workExperience', index)}
          />
        ))}
{/* education */}
<h3 className="font-bold">Education Details</h3>
  <input type="text" name="education.university" 
   className="w-full p-2 border rounded mb-2"
  value={formData.education.university} onChange={handleEducationChange} placeholder="University/School Name" required />
  <input type="text" name="education.address" 
   className="w-full p-2 border rounded mb-2"
  value={formData.education.address} onChange={handleEducationChange} placeholder="University Address" required />
  <input type="text" name="education.degree" 
   className="w-full p-2 border rounded mb-2"
  value={formData.education.degree} onChange={handleEducationChange} placeholder="Degree" required />
  <input type="text" name="education.branch" 
   className="w-full p-2 border rounded mb-2"
  value={formData.education.branch} onChange={handleEducationChange} placeholder="Branch" required />
  <input type="text" name="education.cgpa" 
   className="w-full p-2 border rounded mb-2"
  value={formData.education.cgpa} onChange={handleEducationChange} placeholder="CGPA" required />

<h2 className="text-2xl font-bold mt-4 mb-2">Projects</h2>
        {formData.projects.map((project, index) => (
          <div key={index} className="mb-4 border p-2 rounded">
            <label className="block">Project Title</label>
            <input
              type="text"
              className="w-full p-2 border rounded mb-2"
              value={project.projectTitle}
              onChange={(e) => handleProjectChange(index, 'projectTitle', e.target.value)}
            />
            <label className="block">Project Details</label>
            <input
              type="text"
              className="w-full p-2 border rounded mb-2"
              value={project.projectDetails}
              onChange={(e) => handleProjectChange(index, 'projectDetails', e.target.value)}
            />
            <label className="block">Source Code</label>
            <input
              type="text"
              className="w-full p-2 border rounded mb-2"
              value={project.sourceCode}
              onChange={(e) => handleProjectChange(index, 'sourceCode', e.target.value)}
            />
            <button type="button" onClick={() => removeProject(index)} className="mt-2 bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 w-full">
              Remove Project
            </button>
            </div>
        ))}
        <button type="button" onClick={addProject} className="mb-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 w-full">
          + Add Project
        </button>
        <h2 className="text-xl font-bold mt-4 mb-2">Technical Fields</h2>
        <label className="block">Programming Languages</label>
        <input type="text" className="w-full p-2 border rounded mb-2" onChange={(e) => handleChange(e, 'languages')} />
        
        <label className="block">Web Technologies</label>
        <input type="text" className="w-full p-2 border rounded mb-2" onChange={(e) => handleChange(e, 'webTechnologies')} />
        
        <label className="block">Cloud</label>
        <input type="text" className="w-full p-2 border rounded mb-2" onChange={(e) => handleChange(e, 'cloud')} />
        
        <label className="block">Tools</label>
        <input type="text" className="w-full p-2 border rounded mb-2" onChange={(e) => handleChange(e, 'tools')} />

        <h2 className="text-xl font-bold mt-4 mb-2">Honors</h2>
        <h2 className="text-xl font-bold mt-4 mb-2">Honors</h2>
{formData.honors.map((honor, honorIndex) => (
  <div key={honorIndex} className="border p-2 mb-2 rounded">
    {/* Heading Input */}
    <label className="block font-semibold">Heading</label>
    <input
      type="text"
      className="w-full p-2 border rounded mb-2"
      value={honor.heading}
      onChange={(e) => handleHonorChange(e, `honors[${honorIndex}].heading`)}
    />

    {/* Details List */}
    <label className="block font-semibold">Details</label>
    {honor.details.map((detail, detailIndex) => (
      <div key={detailIndex} className="flex items-center gap-2 mb-2">
        <input
          type="text"
          className="w-full p-2 border rounded"
          value={detail}
          onChange={(e) =>
            handleHonorChange(e, `honors[${honorIndex}].details[${detailIndex}]`)
          }
          placeholder={`Detail ${detailIndex + 1}`}
        />
        <button
          type="button"
          className="bg-red-500 text-white px-2 py-1 rounded"
          onClick={() => removeDetail(honorIndex, detailIndex)}
        >
          ❌
        </button>
      </div>
    ))}

    {/* Add Detail Button */}
    <button
      type="button"
      className="bg-green-500 text-white px-2 py-1 rounded mb-2"
      onClick={() => addDetail(honorIndex)}
    >
      + Add Detail
    </button>

    {/* Remove Honor Button */}
    <button
      type="button"
      className="bg-red-500 text-white px-2 py-1 rounded ml-2"
      onClick={() => removeHonor(honorIndex)}
    >
      ❌ Remove Honor
    </button>
  </div>
))}

{/* Add Honor Button */}
<button
  type="button"
  className="bg-blue-500 text-white px-2 py-1 rounded"
  onClick={addHonor}
>
  + Add Honor
</button>

              <h3 className="font-bold">Achievements</h3>
{formData.achievements.map((achievement, index) => (
  <div key={index}>
    <input
      type="text"
      value={achievement}
      onChange={(e) => handleAchievementChange(e, index)}
       className="w-full p-2 border rounded mb-2"
      placeholder={`Achievement ${index + 1}`}
      required
    />
    <button type="button" onClick={() => removeAchievement(index)}>Remove</button>
  </div>
))}
<button type="button" onClick={addAchievement}>+ Add Achievement</button>
              <button type="submit" className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 w-full" onClick={handleSubmit}>Submit</button>

      </form>
    </div>
  );
};


export default Resumeform;
