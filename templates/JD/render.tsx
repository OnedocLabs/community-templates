import React from "react";
import { Onedoc } from "@onedoc/client";
import fs from "fs";
import {compile} from "@onedoc/react-print"
import JD from "./src/main";

const onedoc = new Onedoc(process.env.ONEDOC_API_KEY!);

(async () => {

  const html = await compile(<JD />);
  

  const { file, error } = await onedoc.render({
    html,
    test:false,
    save:false,
  });

  console.log(error)
  
  fs.writeFileSync("./JD.pdf", Buffer.from(file));

})();
