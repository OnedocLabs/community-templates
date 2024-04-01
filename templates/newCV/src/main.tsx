import { Tailwind } from '@onedoc/react-print'
import React from 'react'

 export const NewCV = () => {
    return (
      <Tailwind>
      <div className="min-h-screen flex justify-center items-center font-[Poppins]">
          <div className="flex rounded">
              <div className="w-[40%] text-[#fbf0e7] bg-[#444d5e] min-h-screen flex flex-col  px-4 py-5">
                  <div className="flex justify-center"><img className='w-[130px] h-[130px] rounded-[65px] mb-4' src="data:image/jpeg;base64,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" alt="" /></div>
                  <p className="text-xl font-semibold">KHALIL</p>
                  <p className="text-xl font-semibold mb-3">RICHARDSON</p>
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
              <div className="w-[60%] bg-white min-h-screen py-5 px-5">
                  <div className="p-1 bg-[#feeeca] text-[#444d5e] text-base font-bold mb-4">WORK EXPERIENCE</div>
                  <p className="text-sm mb-2 font-bold text-black">THE VIRGINIAN PILOT |20XX-20XX</p>
                  <p className="text-sm mb-2 text-gray-400 font-bold">Journalist,Nortfolk</p>
                  <p className=" text-xs mb-1 text-black  font-medium">Tasks:</p>
                  <p className=" text-xs mb-1 text-black  font-medium">•Pitch timely story ideas for investigative journalism</p>
                  <p className=" text-xs mb-1 text-black  font-medium">•Write 15 stories monthly covering the latest in breaking news.</p>
                  <p className=" text-xs mb-1 text-black  font-medium">•In-depth analysis of relevent political events.</p>
                  <p className=" text-xs  text-black  font-medium mb-3">•Fact-checking for accuracy and data visualization purposes.</p>

                  <p className="text-sm mb-2 font-bold text-black">DAILY PRESS|20XX-20XX</p>
                  <p className="text-sm mb-2 text-gray-400 font-bold">Staff Editor,Newport News</p>
                  <p className=" text-xs mb-1 text-black  font-medium">Tasks:</p>
                  <p className=" text-xs mb-1 text-black  font-medium">•Published a weekly blog covering the latest in tech innovations.</p>
                  <p className=" text-xs mb-1 text-black  font-medium">•Maintained a 3.5% engagement rate.</p>
                  <p className=" text-xs mb-1 text-black  font-medium">•Interviewed a digital entrepreneurs on a weekly basis.</p>
                  <p className=" text-xs  text-black  font-medium mb-3">•Added in-house writers in editing and fact-checking for accuracy.</p>

                  <p className="text-sm mb-2 font-bold text-black">WASHINGTON POST|20XX-20XX</p>
                  <p className="text-sm mb-2 text-gray-400 font-bold">Washington D.C.,Washington</p>
                  <p className=" text-xs mb-1 text-black  font-medium">Tasks:</p>
                  <p className=" text-xs mb-1 text-black  font-medium">•Created compeliling pieces for online publications which included coordinating images and layouts for best presentation standards.</p>
                  <p className=" text-xs mb-1 text-black  font-medium">•Developed key story ideas by evaluating and following up on news leads and tips.</p>
                  <p className=" text-xs  text-black  font-medium mb-3">•Aided contributions in editing and fact-checking for accuracy..</p>

                  <p className="text-sm mb-2 font-bold text-black">THE GUARDIAN|20XX-20XX</p>
                  <p className="text-sm mb-2 text-gray-400 font-bold">Contributor,Remote</p>
                  <p className=" text-xs mb-1 text-black  font-medium">Tasks:</p>
                  <p className=" text-xs mb-1 text-black  font-medium">•Conducted interviews and covered key moments from the G20 Summit 2021 in Italy.</p>
                  <p className=" text-xs  text-black  font-medium mb-3">•Produced in-depth and engaging online content in accordance with house style.</p>

                  <div className="p-1 bg-[#feeeca] text-[#444d5e] text-base font-bold mb-3">LANGUAGES</div>
                  <p className=" text-xs mb-1 text-black  font-semibold">English: Native.</p>
                  <p className=" text-xs mb-1 text-black  font-semibold">Spanish: Proficient</p>
                  <p className=" text-xs  text-black  font-semibold mb-3">French: Advanced</p>

                  <div className="p-1 bg-[#feeeca] text-[#444d5e] text-base font-bold mb-3">EDUCATION</div>
                  <p className=" text-xs mb-1 text-black  font-semibold">20XX-20XX|Seattle-Washington</p>
                  <p className=" text-xs mb-1 text-black  font-bold">Masters Digital Communication</p>
                  <p className=" text-xs text-gray-500  font-semibold mb-4">University of Washington</p>

                  <p className=" text-xs mb-1 text-black  font-semibold">20XX-|Blacksburg-Virginia</p>
                  <p className=" text-xs mb-1 text-black  font-bold">B.A. Mulitmedia Journalism</p>
                  <p className=" text-xs text-gray-500  font-semibold mb-2">Virginia Tech</p>

              </div>
          </div>
            </div>
            </Tailwind>
  )
}

