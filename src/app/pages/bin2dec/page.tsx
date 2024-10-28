import { Metadata } from "next";
import Convert from "./convert";

export const metadata: Metadata = {
  title: "Bin2Dec",
  description: "Conversão de binário para decimal",
};



const Bin2Dec = () => {
  return (
    <>
        <Convert/>
    </>
  );
};

export default Bin2Dec;
