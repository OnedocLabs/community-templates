import React from "react";
import { Onedoc } from "@onedoc/client";
import fs from "fs";
import {compile} from "@onedoc/react-print"
import {CV} from "./src/main.tsx" 
import path from "path"

const onedoc = new Onedoc(process.env.ONEDOC_API_KEY!);

(async () => {

  const html = await compile(<CV/>);
  

  const { file, error } = await onedoc.render({
    html,
    test:false,
    save:false,
    assets: [
      {
        path: "./util/util.css",
        content: fs.readFileSync(path.join(process.cwd(), "./util/util.css")).toString(),
      },
    ],
  });

  console.log(error)
  
  fs.writeFileSync("./cv.pdf", Buffer.from(file));

})();
