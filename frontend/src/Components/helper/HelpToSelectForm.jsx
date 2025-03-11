import React from 'react'
import { useParams } from 'react-router-dom'
import Template4 from '../Template/Template4/Template4';
import Resumeform from '../ResumeForm/Resumeform';

function HelpToSelectForm() {
    const {paramString}= useParams();
    switch (paramString) {
        case "Template1":
            
            break;
        case "Template2":
            // return (<Template2/>)
            break;
        case "Template3":
            
            break;
        case "Template4":
            return (<Resumeform/>)
            // break;
      
        default:
            break;
      }
  return (
    <>
      
    </>
  )
}

export default HelpToSelectForm
