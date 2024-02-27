import React, { createContext, useEffect, useState } from "react";
import {Tailwind, CSS, Latex, PageBreak, Footnote, Markdown} from "@onedoc/react-print";

const TitleComponent = ({ title, author, supervisor, institute }) => {
  return (
    <Tailwind children={undefined}>
      <div className="text-center">
        <h1 className="text-2xl font-bold"> {title} </h1>
        <p className="text-base">Author: {author}</p>
        <p className="text-base">Supervisor: {supervisor}</p>
        <p className="text-base"> {institute} </p>
      </div>
    </Tailwind>
  );
};

const Abstract = ({ text }) => {
  return (
    <Tailwind children={undefined}>
      <p className="text-justify text-xs font-bold italic">Abstract -- {text}</p>
    </Tailwind>
  );
};

// Section/sub section component 
// it take a title (string) and a content (React.ReactNode)
// also take a boolean to define if it's a section or a sub section
// if section: title will be displayed in a large font and italic and centered and in capital letters
// if sub section: title will be displayed in a medium font and left aligned
// Content could be empty if it's a section (only a title)
const SectionComponent = ({ title, content, isSection }) => {
  return (
    <Tailwind children={undefined}>
      <div>
        {isSection ? (
          <h2 className="text-md italic text-center uppercase">{title}</h2>
        ) : (
          <h3 className="text-sm italic">{title}</h3>
        )}
        {/* The content should have an indent on the first sentence, not after*/}
        <div className="text-xs text-justify">{content}</div>
      </div>
    </Tailwind>
  );
};

export const ScientificReport = () => {
  
  return (
    <React.Fragment>
      {/* A CSS snippet to define the page size, margins, fonts, etc. 
      It also enforce the space between line to be small*/}
      <CSS>
        {String.raw`
          @page {
            size: A4;
            margin: 2cm;
          }

          body {
            line-height: 1.1;
          }
          
        `}
      </CSS>

      {/* A Header with the title of the research in large and bold, then the author name, the supervisor and the institute. All centered */}
      <TitleComponent
        title="Title of the Research Report"
        author="Name of the Author"
        supervisor="Name of the Supervisor"
        institute="Name of the Institute"
      />

      <br />
      
      {/* A Tailwind component to define the layout of the page */}
      <Tailwind children={undefined}>
        {/* 2 columns */}
        <div className="columns-2 gap-8" style={{columnFill:"auto"}}>
          {/* Abstract*/}
          <Abstract
            text="Lorem ipsum dolor sit amet [1], consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          />

          <br/>

          {/* An Introduction Section with no content*/}
          <SectionComponent title="1. Introduction" content={null} isSection={true} />

          {/* A sub section with a title and a content */}
          <SectionComponent
            title="A. Sub Section"
            content={
              <p className="text-justify text-xs">
                Lorem ipsum dolor sit amet [2], consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. <Footnote style={{float:"footnote page"}}>Footnote 1</Footnote>  
              </p>
            }
            isSection={false}
          />

          <br/>
            
            {/* A sub section with a title and a content with a formula */}
          <SectionComponent
            title="B. Sub section"
            content={
            <React.Fragment>
              <p>
                Lorem ipsum dolor sit amet [3], consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              </p>
              <br/>

              {/* add the latex component to display a formula */}
              <div className="text-center">
                <Latex>
                  {String.raw`f(x) = \int_{-\infty}^\infty \hat f(\xi) e^{2 \pi i \xi x} d\xi  (1)`}
                </Latex>
              </div>
            </React.Fragment>
              
            }
            isSection={false}
          />

          <br/>

          {/* A sub section with a title and content, and an image */}
          <SectionComponent
            title="C. Sub section"
            content={
              <React.Fragment>
                <p>
                  Lorem ipsum dolor sit amet [4], consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                </p>
                {/* Add an image, with a caption display under */}
                <div className="text-center">
                  <img src="./src/varianceexplaine.png" alt="Image" />
                  {/* <img src="https://machinelearningmastery.com/wp-content/uploads/2018/12/Example-of-Train-and-Validation-Learning-Curves-Showing-A-Good-Fit.png" alt="Image" /> */}
                  <p className="text-xs italic text-center">Figure 1: Caption of the image</p>
                </div>
              </React.Fragment>
            }
            isSection={false}
          />

          <br/>

          {/* A section Data with  */}
          <SectionComponent title="2. Data" content={null} isSection={true} />

          {/* A sub section with a title and a content */}  
          <SectionComponent
            title="A. Sub section"
            content={
              <p>
                Lorem ipsum dolor sit amet [5], consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              </p>
            }
            isSection={false}
          />

          <br/>

          {/* A sub section with a title and a content, and a table in with 3 columns and 6 raws, the table should be centered and it must have 1 horizontal the first raw and the second one and then verticle line between each column */}
          <SectionComponent
            title="B. Sub section"
            content={
              <React.Fragment>
                <p>
                  Lorem ipsum dolor sit amet [6], consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                </p>
                <br/>
                <table className="table-auto mx-auto w-full border-collapse">
                  <thead>
                    <tr>
                      <th className="border border-black px-1 py-1 text-center font-medium font-bold"> Header 1 </th>
                      <th className="border border-black px-1 py-1 text-center font-medium font-bold"> Header 2 </th>
                      <th className="border border-black px-1 py-1 text-center font-medium font-bold"> Header 3 </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-black px-1 py-1 text-center"> Data 1 </td>
                      <td className="border border-black px-1 py-1 text-center"> Data 2 </td>
                      <td className="border border-black px-1 py-1 text-center"> Data 3 </td>
                    </tr>
                    <tr>
                      <td className="border border-black px-1 py-1 text-center"> Data 4 </td>
                      <td className="border border-black px-1 py-1 text-center"> Data 5 </td>
                      <td className="border border-black px-1 py-1 text-center"> Data 6 </td>
                    </tr>
                  </tbody>
                </table>
                {/* caption to the table */}
                <p className="text-xs italic text-center">Table 1: Caption of the table</p>
              </React.Fragment>
            }
            isSection={false}
          />

          <br/>

          {/* A Section Methodology */}
          <SectionComponent title="3. Methodology" content={null} isSection={true} />

          {/* A sub section with a title and a content */}  
          <SectionComponent
            title="A. Sub section"
            content={
              <p>
                Lorem ipsum dolor sit amet [7], consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              </p>
            }
            isSection={false}
          />

          <br/>

          {/* A sub section with a title and a content, and a code snippet */}  
          <SectionComponent
            title="B. Sub section"
            content={
              <React.Fragment>
                <p>
                  Lorem ipsum dolor sit amet [8], consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                </p>
                <br/>
                <pre className="bg-gray-100 p-2">
                  <code>
                    {String.raw`function helloWorld() {
  console.log("Hello, World!");
  console.log("This is a code snippet");
}`}
                  </code>
                </pre>
              </React.Fragment>
            }
            isSection={false}
          />

          <br/>
          <br/>

          {/* A Section Results */}
          <SectionComponent title="4. Results" content={null} isSection={true} />

          {/* A sub section with a title and a content */}
          <SectionComponent
            title="A. Sub section"
            content={
              <p>
                Lorem ipsum dolor sit amet [9], consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              </p>
            }
            isSection={false}
          />

          <br/>

          {/* A sub section with a title and a content, and a list */}
          <SectionComponent
            title="B. Sub section"
            content={
              <React.Fragment>
                <p>
                  Lorem ipsum dolor sit amet [10], consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                </p>
                <br/>
                <ul className="list-disc list-inside">
                  <li> Item 1 </li>
                  <li> Item 2 </li>
                  <li> Item 3 </li>
                </ul>
              </React.Fragment>
            }
            isSection={false}
          />

          <br/>

          {/* A Section Conclusion */}
          <SectionComponent title="5. Conclusion" content={null} isSection={true} />

          {/* A sub section with a title and a content */}
          <SectionComponent
            title="A. Sub section"
            content={
              <p>
                Lorem ipsum dolor sit amet <Footnote children={undefined} style={{float:"footnote page"}}> <Markdown style={{ color: "blue"}}>{`[The BEST open-source library](https://github.com/OnedocLabs/react-print-pdf)`}</Markdown> </Footnote>, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              </p>
            }
            isSection={false}

          />  

          <br/>

          {/* A sub section with a title and a content, and a formula */}
          <SectionComponent
            title="B. Sub section"
            content={
              <React.Fragment>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                </p>
                <br/>
                <div className="text-center">
                  <Latex>
                    {String.raw`f(x) = \int_{-\infty}^\infty \hat f(\xi) e^{2 \pi i \xi x} d\xi  (1)`}
                  </Latex>
                </div>
              </React.Fragment>
            }
            isSection={false}
          />

          <br/>

          {/* A Section References where te content is 10 references starting with [1] and ending with [10] */}
          <SectionComponent title="References" content={
            <React.Fragment>
              <p className="italic"> [1] Reference 1 Author Name, Article Title, Journal, Year</p>
              <p className="italic"> [2] Reference 2 Author Name, Article Title, Journal, Year</p>
              <p className="italic"> [3] Reference 3 Author Name, Article Title, Journal, Year</p>
              <p className="italic"> [4] Reference 4 Author Name, Article Title, Journal, Year</p>
              <p className="italic"> [5] Reference 5 Author Name, Article Title, Journal, Year</p>
              <p className="italic"> [6] Reference 6 Author Name, Article Title, Journal, Year</p>
              <p className="italic"> [7] Reference 7 Author Name, Article Title, Journal, Year</p>
              <p className="italic"> [8] Reference 8 Author Name, Article Title, Journal, Year</p>
              <p className="italic"> [9] Reference 9 Author Name, Article Title, Journal, Year</p>
              <p className="italic"> [10] Reference 10 Author Name, Article Title, Journal, Year</p>
            </React.Fragment>
          } isSection={true} />

          {/* Page Break */}
          <PageBreak />

        </div>
      </Tailwind>
    </React.Fragment>
  );
};
