import React from "react";
import ReactPDF from "@react-pdf/renderer";

import Thread from "./components/Thread";
import thread from "../thread.json";

ReactPDF.render(<Thread thread={thread} />, `./output.pdf`);
