// import React from "react";
// import "./TemplateView.css";

// import html2canvas from "html2canvas";
// import jsPDF from "jspdf";

// const TemplateView= ({ data }) => {
//     if (!data) return <p className="text-gray-500">Fill the form and click "Generate Resume" to preview.</p>;

//     const handleDownloadPDF = () => {
//         const element = document.getElementById("resume-preview"); // The element to capture
//         html2canvas(element).then((canvas) => {
//             const imgData = canvas.toDataURL("image/png");
//             const pdf = new jsPDF();
//             pdf.addImage(imgData, "PNG", 10, 10, 180, 0); // Adjust position and size
//             pdf.save("resume.pdf");
//         });
//     };

//     return (
//         <div>
//             <div id="resume-preview" className="p-6 border rounded bg-white shadow-md">
//                 <h2 className="text-xl font-bold">{data.name || "Your Name"}</h2>
//                 <p><strong>Email:</strong> {data.email || "your@email.com"}</p>
//                 <p><strong>Phone:</strong> {data.phone || "123-456-7890"}</p>
//                 <p><strong>Summary:</strong> {data.summary || "A short bio about yourself..."}</p>
//                 {/* Add other fields based on your form */}
//             </div>
//             <button onClick={handleDownloadPDF} className="mt-4 bg-green-500 text-white p-2 rounded">
//                 Download PDF
//             </button>
//         </div>
//     );
// };

// export default TemplateView



import React, { useState } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import "./TemplateView.css";

const TemplateView = ({ Data}) => {
    console.log('dataa->', Data);
    
    const [data, setData] = useState(Data); // Store resume data

    if (!data) return <p className="text-gray-500">Fill the form and click "Generate Resume" to preview.</p>;

    const handleDownloadPDF = () => {
        const element = document.getElementById("resume-preview"); // Element to capture
        html2canvas(element).then((canvas) => {
            const imgData = canvas.toDataURL("image/png");
            const pdf = new jsPDF();
            pdf.addImage(imgData, "PNG", 10, 10, 180, 0); // Adjust position and size
            pdf.save("resume.pdf");

            // Clear the data after download
            setData(null);
        });
    };

    return (
        <>
            <div id="resume-preview" className="resume-container">
                <div className="resume-header">
                    <h1>
                        <span className="highlight">{data.firstName || "Victor"}</span> {data.lastName || "Brandon"}
                    </h1>
                    <h2>BACK-END DEVELOPER</h2>
                </div>
                <div className="resume-body">
                    <div className="left-column">
                        <section className="summary">
                            <h3>SUMMARY</h3>
                            <p>{data.summary || "Highly skilled Back-End Developer with 5+ years of experience..."}</p>
                        </section>
                        <section className="contact">
                            <h3>CONTACT</h3>
                            <p>📧 {data.email || "info@resumekraft.com"}</p>
                            <p>📱 {data.phone || "202-555-0120"}</p>
                            <p>📍 {data.addresss || "Chicago, Illinois, US"}</p>
                            <p>🔗 {data.linkedin || "linkedin.com/resumekraft"}</p>
                        </section>
                        <section className="skills">
                            <h3>SKILLS</h3>
                            <ul>
                                {data.skills?.length > 0 ? (
                                    data.skills.map((skill, index) => <li key={index}>{skill}</li>)
                                ) : (
                                    <li>Programming Languages (Java, Python)</li>
                                )}
                            </ul>
                        </section>
                        <section className="languages">
                            <h3>LANGUAGES</h3>
                            {data.languages}
                            {/* <ul>
                                {data.languages?.length > 0 ? (
                                    data.languages.map((lang, index) => <li key={index}>{lang}</li>)
                                ) : (
                                    <li>English, French, Arabic, German</li>
                                )}
                            </ul> */}
                        </section>
                    </div>
                    <div className="right-column">
                        <section className="education">
                            <h3>EDUCATION</h3>
                            <p>
                                <strong>{data.degree || "Bachelor in Computer Science"}</strong>
                            </p>
                            <p>
                                {data.collegeName || "San Jose State University"} <em>{data.years || "2015 - 2021"}</em>
                            </p>
                        </section>
                        <section className="experience">
                            <h3>EXPERIENCE</h3>
                            <p>
                                <strong>{data.workExperience || "Back-End Developer"}</strong>
                            </p>
                            <p>
                                {data.company || "IBM"} <em>{data.jobYears || "2022 - Present"}</em>
                            </p>
                            <ul>
                                {data.experience?.length > 0 ? (
                                    data.experience.map((exp, index) => <li key={index}>{exp}</li>)
                                ) : (
                                    <>
                                        <li>Experience developing and maintaining server-side applications</li>
                                        <li>Proficiency in database management</li>
                                    </>
                                )}
                            </ul>
                        </section>
                    </div>
                </div>
            </div>
            <button onClick={handleDownloadPDF} className="mt-4 bg-green-500 text-white p-2 rounded">
                Download PDF
            </button>
        </>
    );
};

export default TemplateView;