import React from "react";
import { Onedoc } from "@onedoc/client";
import fs from "fs";
import {compile} from "@onedoc/react-print"
import {QRInvoice, RealEstate} from "./src/main.tsx" 

const onedoc = new Onedoc(process.env.ONEDOC_API_KEY!);

(async () => {

  const html = await compile(<RealEstate />);
  

  const { file, error } = await onedoc.render({
    html,
    test:false,
    save:false,
    assets: [
      
    ],
  });

  console.log(error)
  
  fs.writeFileSync("./basic-invoice.pdf", Buffer.from(file));

})();
