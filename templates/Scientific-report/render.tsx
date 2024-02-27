import React from "react";
import { Onedoc } from "@onedoc/client";
import fs from "fs";
import {compile} from "@onedoc/react-print"
import {ScientificReport} from "./src/main.tsx" 

const onedoc = new Onedoc(process.env.ONEDOC_API_KEY!);

(async () => {

  const html = await compile(<ScientificReport />);
  

  const { file, error } = await onedoc.render({
    html,
    test:false,
    save:false,
    assets: [
      {path: "./src/varianceexplaine.png", content: fs.readFileSync("./src/varianceexplaine.png")}
    ],
  });

  console.log(error)
  
  fs.writeFileSync("./scientific-report.pdf", Buffer.from(file));

})();
