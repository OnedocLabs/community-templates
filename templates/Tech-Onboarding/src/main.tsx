import React from "react";
import { Tailwind, CSS } from "@onedoc/react-print";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";

export const TechOnboarding = () => {
  return (
    <Tailwind>
      <CSS>
        {`@import url('https://fonts.googleapis.com/css2?family=Libre+Baskerville&family=Literata:opsz@7..72&family=Lora&family=Montserrat&family=Mulish&family=Roboto&family=Varela+Round&display=swap');
          @page {
            margin: 0;
            size: A4;
          }

          @font-face {
            font-family: 'Montserrat';
            src: url('path_to_your_montserrat_font_file.woff2') format('woff2'),
                url('path_to_your_montserrat_font_file.woff') format('woff');
            font-weight: normal;
            font-style: normal;
          }

          body {
            font-family: 'Montserrat', sans-serif;
          }
        `}
      </CSS>
      <div className="max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-green-600 to-green-400 -z-10 absolute -left-[2cm] right-[25vw] -skew-y-12 h-[100vh] bottom-[95vh]"></div>
        <div className="text-center">
          <p className="mt-8 text-sm leading-7 text-gray-500 font-regular">
            STEPS
          </p>
          <h3 className="text-3xl sm:text-5xl leading-normal font-extrabold tracking-tight text-gray-900">
            <span className="text-green-600">Laptop Onboarding</span>
          </h3>
        </div>

        <div className="mt-10">
          <ul>
            {onboardingSteps.map((step, index) => (
              <li key={index}>
                <div className="flex flex-col items-center text-center px-8 py-4">
                  <div className="flex items-center justify-center h-10 w-10 rounded-full bg-green-500 text-white border-4 border-white text-xl font-semibold">
                    {index + 1}
                  </div>
                  <div className="mt-4">
                    <h4 className="text-lg leading-6 font-semibold text-gray-900">
                      {step.title}
                    </h4>
                    <p className="mt-2 text-base leading-6 text-gray-500">
                      {step.description}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <div className="text-center">
            <IoIosCheckmarkCircleOutline className="text-green-500 text-6xl mx-auto" />
            <h3 className="text-xl font-semibold mt-2">Congratulations!</h3>
          </div>
        </div>
      </div>
    </Tailwind>
  );
};

const onboardingSteps = [
  {
    title: "Start-up and Initial Login",
    description:
      "Power on the laptop and log in using the administrator account. Ensure connection to the secure network.",
  },
  {
    title: "Operating System and Security Updates",
    description:
      "Install any pending operating system updates and antivirus software. Make sure to install wsl-2 on Windows",
  },
  {
    title: "Installing Necessary Software",
    description:
      "Install all standard company software, including office applications, email clients, and any department-specific applications. Install VPN client software.",
  },
  {
    title: "Setting Up the UB Key",
    description:
      "Insert the UB Key into the laptop’s USB port. Install and configure the UB Key software. Register the UB Key with the company’s security system.",
  },
  {
    title: "Configuring VPN Access",
    description:
      "Open the VPN client software, enter configuration details, and verify the employee’s login cgreenentials. Ensure a stable VPN connection.",
  },
];
