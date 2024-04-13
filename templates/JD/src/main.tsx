/* eslint-disable @next/next/no-img-element */
import { CSS } from '@onedoc/react-print'
import React from 'react'

const JD = () => {
     const data = {
    jobCategory: "Web & Software Development",
    contractType: "Hourly Contract",
    hours: "Less than 30 hours",
    period: "3 to 6 months",
    experience: "Expert Level",
    extraTips: "I am willing to pay higher rates for the most experienced freelancer",
    jobTitle: "AngularJS and Kendo UI front end developer",
    jobDescription:`Looking for an experienced front end developer for a 3-6 month project. You will work
    with a team of international experts for this project. This contract includes multiple
    sub-projects. Must be experienced with Javascript, AngularJS, Bootstrap, and Kendo
    Ul. Please note we are creating a Rich Internet Application, not a website/blog/etc.
    We have specifications available for applicants to review upon request.`,
  goal: "The UX goal of our project is to take a highly technical and difficult topic and translate that into a beautiful, intuitive, and functional interface.",
  technicalAbilities:["Experience creating localized (many languages) interfaces with AngularJS and Kendo is preferred",
  ,"UI, UX, Interactivity design experience a huge plus"
  , "Graphic design experience a plus but not required for this project"
  , "Experience in making architectural recommendations (wireframes will be provided)"
  , "Prior experience with Scrum is a plus"
  , "JIRA knowledge is a plus"
  , "Prior experience with continuous integration is a plus"
  , "Experience with GIT source control"],
    bestfit:[" Ability to communicate clearly"
    , "Dedication to meet project deadlines in a timely manner"
    , "Knowledge of smart commits for our ticketing system"
    , "Write I am a human on top of your proposal"
    , "Attention to detail"
    , "Willingness to sign an NDA"]  
}
  return (
    <React.Fragment>
    <CSS>
      {
        String.raw`@import url('https://fonts.googleapis.com/css2?family=Libre+Baskerville&family=Literata:opsz@7..72&family=Lora&family=Merriweather:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700;1,900&family=Montserrat&family=Mulish&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Roboto&family=Varela+Round&display=swap');
        @page{
          size:8in 14in;
          margin:0;
        }`
      }
    </CSS>
      <div className="main bg-white  py-4 px-4 flex flex-col text-base text-gray-500 font-medium">
        <div className="title text-3xl px-2 pb-4 border-b-[3px] border-gray-400 text-[#9bc94e] mb-5">
          {data.jobCategory}
        </div>
        <div className="someoverlay flex flex-col bg-gray-300 py-4 mb-6">
          <div className="p-2 px-4 flex bg-gray-300">
            <div className="hourly flex w-[50%] items-center">
              <img
                className="w-[70px] h-[70px] mr-5"
                src="https://img.icons8.com/ios/50/clock--v1.png"
                alt="" />
              <div className="flex flex-col details ">
                <p className="font-bold text-xl text-gray-600">Hourly Contract</p>
                <p className="font-bold">{data.hours}</p>
                <p className="font-bold">{data.contractType}</p>
              </div>
            </div>
            <div className="level flex w-[50%] items-center">
              <img
                className="w-[70px] h-[70px] mr-5"
                src="https://img.icons8.com/ios/50/creative-commons-commercial.png"
                alt="" />
              <div className="flex flex-col details">
                <p className="font-bold text-xl text-gray-600">{data.experience}</p>
                <p className="font-bold">{data.extraTips}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="description mb-6">
          <p className="font-extrabold text-[#1b8343]">{data.jobTitle}</p>
          <p>{data.jobDescription}</p>
        </div>
        <div className="experience flex flex-col mb-6">
          <p className="font-bold text-gray-500">Required Experience</p>
          {
            data.technicalAbilities.map((item,i) => (
              <p key={i}>•{item}</p>
            ))
          }
        </div>
        <div className="goal mb-6">
          {data.goal}
        </div>
        <div className="best-fit flex flex-col mb-6">
          <p className="text-xl font-bold text-gray-500">To be a best fit for this project you need:</p>
          {
            data.bestfit.map((item,i) => (
              <p key={i}>•{item}</p>
            ))
          }
        </div>
        <div className="last">
          If you are interested in the project, please reply with your prior experience and Resume.
        </div>
      </div>
      </React.Fragment>
  )
}

export default JD