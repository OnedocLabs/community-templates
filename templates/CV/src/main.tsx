import { Tailwind } from '@onedoc/react-print'
import React from 'react'

export const CV = () => {
    return (
      <Tailwind>
    <div className="cv  font-[Merriweather] font-[500] min-h-screen w-screen px-6 py-4 text-left">
          <div className="font-bold mb-2 text-3xl text-center">PIERRE DORGE</div>
          <div className="details flex flex-col mb-4">
          <div className="flex justify-between mb-2">
              <span>(+41) 78 235 16 00 / (+33) 06 07 63 99 87 </span>
              <span>Kaferhölzstrasse 54</span>
          </div>
          <div className="flex justify-between mb-2">
              <span>pdorge@student.ethz.com, pierre.dorge@lleedpartners.com </span>
              <span>Zürich, Switzerland</span>
          </div>
          </div>
          <div className="education flex flex-col mb-4">
              <span className="text-center text-xl p-1 border-b-2 border-black mb-2">EDUCATION</span>
              <div className="flex justify-between mb-2">
                  <span className="font-[550]">EIDGENOSSISCHE TECHNISCHE HOCHSCHULE ZURICH, ETHZ </span>
                  <span>Zurich, ZH ,Switzerland</span>
              </div>
              <div className="flex justify-between mb-2">
                  <i>Master of Science in Computer Science  </i>
                  <span>2021-</span>
              </div>
              <div className="flex justify-between mb-2">
                  <span><span className="font-bold">• Major :</span>Machine Intelligence, minor in Information Security  </span>
              </div>
              <div className="flex justify-between mb-2">
                  <span className="font-[600]">ÉCOLE POLYTECHNIQUE FÉDÉRALE DE LAUSANNE, EPFL </span>
                  <span>Lausanne, VD, Switzerland</span>
              </div>
              <div className="flex justify-between mb-2">
                  <i>Bachelor of Science in Commmunication Systems  </i>
                  <span>2017-2020</span>
              </div>
              <div className="flex justify-between mb-2">
                  <span><span className="font-bold">• Mentoring and Team Work:</span>Teaching assistant in the Computer Architecture course</span>
              </div>
          </div>
          <div className="work-exp  flex flex-col mb-4">
              <span className="text-xl text-center p-1 border-b-2 border-black mb-2">WORK EXPERIENCE</span>
              <div className="work-exp1 flex flex-col mb-4">
              <div className="flex justify-between mb-1">
                  <span className="font-[600]">LLEED AND PARTNERS, Digital Consulting </span>
                  <span>Geneva, GE, Switzerland</span>
              </div>
              <div className="flex justify-between mb-1">
                  <i>Co-Founder / Technology</i>
                  <span>06/2020-</span>
              </div>
              <div className="flex justify-between mb-1">
                  <span><span className="font-bold">• Task:</span>Co-founded a digital consulting firm, working with large multinational companies contributing to their digital transforma-
tion, with references such as Louis Dreyfus Company and Rio Tinto. Our projects involved optimizing metals sales and processing
unstructured data for OTC trading. www.lleedpartners.com</span>
              </div>
              </div>
              <div className="work-exp2 flex flex-col mb-4">
              <div className="flex justify-between mb-1">
                  <span className="font-[600]">Louis Dreyfus Company, Commodities Merchant and </span>
                  <span>Singapore, Singapore and Geneva GE,</span>
               </div>
               <div className="flex justify-between mb-1">
                  <span className="font-[600]">Trading </span>
                  <span>Switzerland</span>
              </div>
              <div className="flex justify-between mb-1">
                  <i>Junior Data Scientist Engineer </i>
                  <span>06/2019-03/2020</span>
              </div>
              <div className="flex justify-between mb-1">
                  <span><span className="font-bold">• Task:</span>Developed internal web applications involving data aggregation, natural language processing and more. My work in the
field of FFA trading led to starting my company in which LDC and Rio Tinto are clients</span>
              </div>
              </div>
              <div className="work-exp3 flex flex-col mb-4">
              <div className="flex justify-between mb-1">
                  <span className="font-[600]">ECCO2 Solutions AG, Energy Optimization Startup </span>
                  <span>Givisiez, FR, Switzerland</span>
              </div>
              <div className="flex justify-between mb-1">
                  <i>Junior Software Engineer </i>
                  <span>08/2019-09/2020</span>
              </div>
              <div className="flex flex-col justify-between mb-1">
                  <span><span className="font-bold">• Software Architecture:</span>Contributed to designing the architecture of a complex software solution involving IoT in C# using the
.Net Framework.</span>
                          <span><span>• Software Development:</span>Developed some back-end components for user management and real-time data feeds aggregation from
thousands of wireless sensors in C# using the .Net Framework.</span>
              </div>
              </div>
              <div className="work-exp4 flex flex-col mb-4">
              <div className="flex justify-between mb-1">
                  <span className="font-[600]">Junior Entreprise EPFL</span>
                  <span>Lausanne, VD, Switzerland</span>
              </div>
              <div className="flex justify-between mb-1">
                  <i>IT Consultant </i>
                  <span>06/2019-09/2020</span>
              </div>
              <div className="flex justify-between mb-1">
                  <span><span className="font-bold">• Task:</span>Worked on 2 projects, designed the NO SQL database architecture and developed web applications using React JS and
Node JS.</span>
              </div>
              </div>
              <div className="work-exp5 flex flex-col mb-4">
              <div className="flex justify-between mb-1">
                  <span className="font-[600]">Energisme, Energy Optimization Startup </span>
                  <span>Bourlogne-Billancourt 92, France</span>
              </div>
              <div className="flex justify-between mb-1">
                  <i>Summer Software Developer Intern </i>
                  <span>08/2018-09/2018</span>
              </div>
              <div className="flex justify-between mb-1">
                  <span><span className="font-bold">• Task:</span>Developed a web tool to generate Finite State Machines for graphics animations</span>
              </div>
              </div>
          </div>
          <div className="academic flex flex-col mb-4">
              <span className="text-xl text-center p-1 border-b-2 border-black mb-2">ACADEMIC PROJECTS</span>
              <div className="work-exp1 flex flex-col mb-4">
              <div className="flex justify-between mb-1">
                  <span className="font-[600]">Align Technologies, Dental Med-tech Company </span>
                  <span>Zurich, ZH, Switzerland</span>
              </div>
              <div className="flex justify-between mb-1">
                  <i>Computer Vision Research Intern - Masters Semester Project at ETHZ</i>
                  <span>03/2022 - 07/2022-</span>
              </div>
              <div className="flex justify-between mb-1">
                  <span><span className="font-bold">• Task:</span>Using computer vision techniques and machine learning to analyze 3D scans of teeth in order to identify dental illnesses</span>
              </div>
              </div>
              <div className="work-exp2 flex flex-col mb-4">
              <div className="flex justify-between mb-1">
                  <span className="font-[600]">Miraex, Quantum Technology Startup</span>
                  <span>Lausanne, VD, Switzerland</span>
              </div>
              <div className="flex justify-between mb-1">
                  <i>AI research Intern - Bachelor Thesis Project at EPFL </i>
                  <span>02/2020 - 07/20200</span>
              </div>
              <div className="flex justify-between">
                  <span><span className="font-bold">• Model Development:</span>Performed pattern detection on acoustic signals using signal processing methods such as Wavelet Transform
analysis and machine learning models such as SVMs, auto encoders and convolutional encoders.</span>
              </div>
              </div>
          </div>
          <div className="coursework flex flex-col mb-4">
              <span className="text-xl text-center p-1 border-b-2 border-black mb-2">COURSEWORK/SKILLS</span>
                      <span className="mb-1"><span className="font-bold">• Mathematics:</span>Calculus, Linear Algebra, Information Theory, Signal Processing, Discrete Mathematics, Set Theory, Algebra, Algo-
rithms, Statistics, Probability Theory, Stochastic Processes, Computational Statistics, Computational Intelligence Lab</span>
                      <span className="mb-1"><span className="font-bold">• Computer Science:</span>Advanced Machine Learning, Probabilistic Artificial Intelligence, Parallelism and Concurrency, OO Program-
ming, Functional Programming, Database Systems, Computer Architecture, Network Security, Theory of Computation, Visual
Computing, Digital Signatures</span>
                      <span className="mb-1"><span className="font-bold">• Programming:</span>C, R, Python (Django and data science libraries), Java, SQL, Scala (and Spark), C# (.NET), Javascript (React Js,
Node Js), SQL, Assembly, LaTex</span>
          </div>
          <div className="additional-info flex flex-col">
              <span className="text-xl text-center p-1 border-b-2 border-black mb-2">ADDITIONAL INFO</span>
                      <span className="mb-2"><span className="font-bold">• Personal Interests:</span>Blockchain, Politics, Music, Study of Latin and Ancient Greek.</span>
                      <span className="mb-2"><span className="font-bold">• Activites:</span>Classical Guitar and Solfeggio in regional conservatory with DEM and CEM state certificates (9 years of practice and
ability to teach), Tennis, Soccer, Hiking, Chess</span>
                      <span className="mb-2"><span className="font-bold">• Languages (speaking and writing):</span>French (Native), English (Native), Spanish (B1)</span>
          </div>
    </div>
    </Tailwind>
  )
}
