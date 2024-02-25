import React from "react";
import { Onedoc } from "@onedoc/client";
import fs from "fs";
import {compile} from "@onedoc/react-print"
import {TechOnboarding} from "./src/main.tsx" 

const onedoc = new Onedoc(process.env.ONEDOC_API_KEY!);

(async () => {

  const html = await compile(<TechOnboarding />);
  

  const { file, error } = await onedoc.render({
    html,
    test:false,
    save:false,
    assets: [
      
    ],
  });

  console.log(error)
  
  fs.writeFileSync("./tech-onboarding.pdf", Buffer.from(file));

})();
