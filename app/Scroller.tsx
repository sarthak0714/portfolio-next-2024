import { useEffect } from "react";
import { AiOutlinePython } from "react-icons/ai";
import { FaGolang, FaDocker } from "react-icons/fa6";
import {
  SiCplusplus,
  SiFlask,
  SiJavascript,
  SiMongodb,
  SiTypescript,
} from "react-icons/si";
import { FaHtml5, FaJava, FaNodeJs } from "react-icons/fa";
import { RiJavascriptFill, RiTailwindCssFill } from "react-icons/ri";
import { SiHtmx } from "react-icons/si";
import { BiLogoTypescript } from "react-icons/bi";
import { DiPostgresql } from "react-icons/di";

const Scroller: React.FC = () => {
  useEffect(() => {
    const scrollers = document.querySelectorAll<HTMLElement>(".scroller");
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      addAnimation(scrollers);
    }
  }, []);

  const addAnimation = (scrollers: NodeListOf<HTMLElement>) => {
    scrollers.forEach((scroller) => {
      scroller.setAttribute("data-animated", "true");
      const scrollerInner = scroller.querySelector(".scroller__inner");
      if (scrollerInner) {
        const scrollerContent = Array.from(scrollerInner.children);

        scrollerContent.forEach((item) => {
          const duplicatedItem = item.cloneNode(true) as HTMLElement;
          duplicatedItem.setAttribute("aria-hidden", "true");
          scrollerInner.appendChild(duplicatedItem);
        });
      }
    });
  };

  return (
    <div className="scroller" data-speed="fast">
      <ul className="tag-list scroller__inner">
        <li>
          <AiOutlinePython color="white" size={50} />
        </li>
        <li>
          <FaGolang color="white" size={50} />
        </li>
        <li>
          <SiCplusplus color="white" size={50} />
        </li>
        <li>
          <FaHtml5 color="white" size={50} />
        </li>
        <li>
          <RiTailwindCssFill color="white" size={50} />
        </li>
        <li>
          <SiHtmx color="white" size={50} />
        </li>
        <li>
          <FaDocker color="white" size={50} />
        </li>
        <li>
          <RiJavascriptFill color="white" size={50} />
        </li>
        <li>
          <BiLogoTypescript color="white" size={50} />
        </li>
        <li>
          <FaJava color="white" size={50} />
        </li>
        <li>
          <SiFlask color="white" size={40} />
        </li>
        <li>
          <DiPostgresql color="white" size={50} />
        </li>
        <li>
          <SiMongodb color="white" size={50} />
        </li>
        <li>
          <FaNodeJs color="white" size={50} />
        </li>
      </ul>
    </div>
  );
};

export default Scroller;
