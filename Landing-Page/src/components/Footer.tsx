import { BsGithub } from "react-icons/bs";
import { FiLinkedin } from "react-icons/fi";
import { AiOutlineInstagram } from "react-icons/ai";
import {GoArrowUpRight } from "react-icons/go";

function Footer() {
  return (
    <div className="md:flex items-center flex-col text-white shadow-lg">
        <div className="md:flex flex-row justify-between md:w-[70vw] gap-4 pl-3 md:h-[20vh] md:text-xl font-extralight">
          <div className="flex flex-col md:max-w-[80vw] gap-2 mb-4 ">
            <div className="md:max-w-[10vw]">
              <img
                src="https://bashcraft.vercel.app/_next/image?url=%2Fbash.png&w=256&q=75"
                alt=""
              />
            </div>
            <p>no fluff; just engineering</p>
            <div className="flex justify-start gap-3">
              <FiLinkedin />
              <BsGithub />
              <AiOutlineInstagram />
            </div>
          </div>
          <div className="flex flex-row justify-between md:w-[40vw]">
            <div>
              <p className="font-bold">Product</p>
              <p>Registry</p>
              <p>Price</p>
              <div className="flex gap-1">
                <p>Signin</p>
                <GoArrowUpRight />
              </div>
              <div className="flex gap-1">
                <p>Docs</p>
                <GoArrowUpRight />
              </div>
            </div>
            <div>
              <p className="font-bold">Company</p>
              <p>Blog</p>
              <p>About us</p>
              <p>Carrers</p>
              <p>Contact</p>
            </div>
            <div>
              <p className="font-bold">Legal</p>
              <p>Refrences</p>
              <p>Telemetry Compliance</p>
              <p>Terms & Conditions</p>
              <p>Privacy</p>
            </div>
          </div>
        </div>
        <div></div>
      </div>
  );
}

export default Footer;
