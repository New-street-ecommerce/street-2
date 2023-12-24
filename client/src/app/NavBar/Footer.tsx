import React from "react";
import { FaDiscord,FaInstagram ,FaTiktok } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className=" w-full  pt-40 pb-20">
    
      <div className="flex justify-evenly flex-col md:flex-row">
        <div>
          <h1 className="mt-5 ml-12 [font-family:'Poppins-Bold',Helvetica] font-bold text-white text-[20px]  tracking-[0] leading-[normal] text-decoration-line: underline">Urban Vibe</h1>
          <p className="w-[400px] mt-5 md:ml-12 Poppins-Bold [font-family:'Poppins-Medium',Helvetica] font-medium text-[#ffffff80] text-[15px]" >
            Discover the intersection of style and creativity on our curated
            streetwear E-commerce platform. Uniting designers, brands, and
            artists, our platform is a dynamic showcase of cutting-edge fashion
            and urban art.
          </p>
        </div>
        <div>
          <ul>
            <li className="[font-family:'Poppins-Bold',Helvetica] font-bold text-white text-[20px]  tracking-[0] leading-[normal]">
              About
            </li>
            <li className="mt-5 [font-family:'Poppins-Medium',Helvetica] font-medium text-[#ffffff80] text-[15px]">Products</li>
            <li className="mt-2 [font-family:'Poppins-Medium',Helvetica] font-medium text-[#ffffff80] text-[15px]">Resource</li>
            <li className="mt-2 [font-family:'Poppins-Medium',Helvetica] font-medium text-[#ffffff80] text-[15px]">Terms & Condition</li>
            <li className="mt-2 [font-family:'Poppins-Medium',Helvetica] font-medium text-[#ffffff80] text-[15px]">FAQ</li>
          </ul>
        </div>
        <div>
          <ul>
            <li className="[font-family:'Poppins-Bold',Helvetica] font-bold text-white text-[20px]  tracking-[0] leading-[normal]">
              Company
            </li>
            <li className="mt-5 [font-family:'Poppins-Medium',Helvetica] font-medium text-[#ffffff80] text-[15px]" >Our Team</li>
            <li className="mt-2 [font-family:'Poppins-Medium',Helvetica] font-medium text-[#ffffff80] text-[15px]">Partner With Us</li>
            <li className="mt-2 [font-family:'Poppins-Medium',Helvetica] font-medium text-[#ffffff80] text-[15px]">Privacy & Policy</li>
            <li className="mt-2 [font-family:'Poppins-Medium',Helvetica] font-medium text-[#ffffff80] text-[15px]">Feaures</li>
          </ul>
        </div>
        <div>
          <ul >
            <li className="[font-family:'Poppins-Bold',Helvetica] font-bold text-white text-[20px]  tracking-[0] leading-[normal]">
                Contact
            </li>
            <li className="mt-5 [font-family:'Poppins-Medium',Helvetica] font-medium text-[#ffffff80] text-[15px]">
                +216 29812982
            </li>
            <li className="mt-2">
            <FaDiscord className="text-white" /> 
            </li>
            <li className="mt-2">
            <FaInstagram className="text-white" />
            </li >
            <li className="mt-2">
            <FaTiktok className="text-white" />
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
