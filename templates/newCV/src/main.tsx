import { Tailwind } from '@onedoc/react-print'
import React from 'react'
import { CSS } from "@onedoc/react-print";


 export const CV = () => {
    return (
      <React.Fragment>
      <CSS>{`@page {size: A4;margin-top:0cm;margin-right:0cm;margin-left:0cm;margin-bottom:0cm;`}</CSS>
      <Tailwind children={undefined}>
      <div className="min-h-screen flex justify-center items-center font-[Poppins]">
          <div className="flex rounded">
              <div className="w-[40%] text-[#fbf0e7] bg-[#444d5e] min-h-screen flex flex-col px-10 py-5">
                  <div className="flex justify-center"><img className='w-[130px] h-[130px] rounded-[65px] mb-4' src="https://www.portotheme.com/wordpress/porto/shortcodes/wp-content/uploads/sites/32/2016/06/team-1-640x640.jpg" alt="" /></div>
                  <p className="text-xl font-semibold">JOHN</p>
                  <p className="text-xl font-semibold mb-3">DOE</p>
                  <span className="text-sm mb-6">JOURNALIST</span>
                  <div className="h-[2px] bg-[#fbf0e7] mb-6" />
                  <p className="text-sm font-semibold mb-3">ABOUT ME</p>
                  <p className="text-sm mb-7">As a sesoned journalist with over 7 years of experience
                      in delivering impactful and thought-provoking stories, I am passionate
                      about investigating and uncovering the truth. I am committed to producing high-quality, accurate and engaging content that informs
                      ,educates and inspires readers.</p>
                  <p className="text-sm mb-3 font-semibold">SKILLS</p>
                  <div className="text-sm mb-7">
                      <p className="mb-2">-Teamwork</p>
                      <p className="mb-2">-Communication</p>
                      <p className="mb-2">-Data visualisation</p>
                      <p className="mb-2">-InDesign</p>
                      <p className="mb-2">-Google Suite</p>
                  </div>
                  <p className="text-sm mb-4 font-semibold">CONTACT</p>
                  <p className="text-sm mb-2">📞+1 686 0202 020</p>
                  <p className="text-sm mb-2">✉️name.lastname@gmail.com</p>
                  <p className="text-sm">📍Virginia,US</p>
              </div>
              <div className="w-[55%] bg-white min-h-screen py-5 px-5 ml-auto">
                  <div className="p-1 bg-[#feeeca] text-[#444d5e] text-base font-bold mb-4">WORK EXPERIENCE</div>
                  <p className="text-sm mb-2 font-bold text-black">THE VIRGINIAN PILOT | 20XX-20XX</p>
                  <p className="text-sm mb-2 text-gray-400 font-bold">Journalist, Nortfolk</p>
                  <p className=" text-xs mb-1 text-black font-semibold">Tasks:</p>
                  <p className=" text-xs mb-1 text-black  font-medium">• Pitch timely story ideas for investigative journalism</p>
                  <p className=" text-xs mb-1 text-black  font-medium">• Write 15 stories monthly covering the latest in breaking news.</p>
                  <p className=" text-xs mb-1 text-black  font-medium">• In-depth analysis of relevent political events.</p>
                  <p className=" text-xs  text-black  font-medium mb-3">• Fact-checking for accuracy and data visualization purposes.</p>
                  
                  <p className="text-sm mb-2 font-bold text-black">DAILY PRESS | 20XX-20XX</p>
                  <p className="text-sm mb-2 text-gray-400 font-bold">Staff Editor, Newport News</p>
                  <p className=" text-xs mb-1 text-black font-semibold">Tasks:</p>
                  <p className=" text-xs mb-1 text-black  font-medium">• Published a weekly blog covering the latest in tech innovations.</p>
                  <p className=" text-xs mb-1 text-black  font-medium">• Maintained a 3.5% engagement rate.</p>
                  <p className=" text-xs mb-1 text-black  font-medium">• Interviewed a digital entrepreneurs on a weekly basis.</p>
                  <p className=" text-xs  text-black  font-medium mb-3">• Added in-house writers in editing and fact-checking for accuracy.</p>
                  
                  <p className="text-sm mb-2 font-bold text-black">WASHINGTON POST | 20XX-20XX</p>
                  <p className="text-sm mb-2 text-gray-400 font-bold">Washington D.C., Washington</p>
                  <p className=" text-xs mb-1 text-black font-semibold">Tasks:</p>
                  <p className=" text-xs mb-1 text-black  font-medium">• Created compeliling pieces for online publications which included coordinating images and layouts for best presentation standards.</p>
                  <p className=" text-xs mb-1 text-black  font-medium">• Developed key story ideas by evaluating and following up on news leads and tips.</p>
                  <p className=" text-xs  text-black  font-medium mb-3">• Aided contributions in editing and fact-checking for accuracy..</p>

                  <p className="text-sm mb-2 font-bold text-black">THE GUARDIAN | 20XX-20XX</p>
                  <p className="text-sm mb-2 text-gray-400 font-bold">Contributor, Remote</p>
                  <p className=" text-xs mb-1 text-black font-semibold">Tasks:</p>
                  <p className=" text-xs mb-1 text-black font-medium">• Conducted interviews and covered key moments from the G20 Summit 2021 in Italy.</p>
                  <p className=" text-xs  text-black  font-medium mb-3">• Produced in-depth and engaging online content in accordance with house style.</p>
                  <br/>
                  <div className="p-1 bg-[#feeeca] text-[#444d5e] text-base font-bold mb-3">LANGUAGES</div>
                  <p className=" text-xs mb-1 text-black font-semibold">English: Native.</p>
                  <p className=" text-xs mb-1 text-black font-semibold">Spanish: Proficient</p>
                  <p className=" text-xs  text-black  font-semibold mb-3">French: Advanced</p>
                  <br/>
                  <div className="p-1 bg-[#feeeca] text-[#444d5e] text-base font-bold mb-3">EDUCATION</div>
                  <p className=" text-xs mb-1 text-black  font-semibold">20XX-20XX | Seattle-Washington</p>
                  <p className=" text-xs mb-1 text-black  font-bold">Masters Digital Communication</p>
                  <p className=" text-xs text-gray-500  font-semibold mb-4">University of Washington</p>

                  <p className=" text-xs mb-1 text-black  font-semibold">20XX-20XX | Blacksburg-Virginia</p>
                  <p className=" text-xs mb-1 text-black  font-bold">B.A. Mulitmedia Journalism</p>
                  <p className=" text-xs text-gray-500  font-semibold mb-2">Virginia Tech</p>

              </div>
          </div>
            </div>
            </Tailwind>
       </React.Fragment>
  )
}

