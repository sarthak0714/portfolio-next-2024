"use client";
import React, { useState, useEffect, useRef } from "react";
import { data } from "./data";
import Link from "next/link";
import {
  AiFillMail,
  AiFillGithub,
  AiFillLinkedin,
  AiFillTwitterSquare,
  AiOutlineEye,
} from "react-icons/ai";
import { VscLinkExternal } from "react-icons/vsc";
import { TfiArrowTopRight } from "react-icons/tfi";
import { useRouter } from "next/navigation";
import { SiHtmx, SiSocketdotio, SiFlask } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaFileDownload, FaGithubSquare, FaReact } from "react-icons/fa";
import { FaGolang } from "react-icons/fa6";
import Scroller from "./Scroller";
import Image from "next/image";

export default function Home() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const [hydrated, setHydrated] = React.useState(false);
  useEffect(() => {
    setHydrated(true);

    timerRef.current = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, []);
  if (!hydrated) {
    return null;
  }

  return (
    <main className="border-2 border-white m-2 ">
      <div className="grid grid-rows-2 md:grid-cols-6 md:grid-rows-1">
        <div className="border-b-2 border-white h-14 grid grid-cols-12 gap-0 md:col-span-5">
          <div className=" border-r-2 border-white h-full col-span-2 md:col-span-1 flex justify-center items-center">
            <p className="text-white text-center text-lg md:text-3xl">0714</p>
          </div>
          <div className="h-full col-span-10 flex justify-start items-center pl-2">
            <p className="text-white text-xl md:text-3xl">
              Sarthak Tanpure. <span className="hidden">💗 Shefali</span>
            </p>
          </div>
        </div>
        <div className=" border-b-2  border-white grid md:grid-cols-1 grid-cols-3 md:h-14">
          {/* <div className="border-r-2 border-white"></div> */}
          <div className="hidden md:flex md:justify-center items-center border-r-2 md:border-l-2 border-white">
            <p className="text-white text-2xl text-center ">{time}</p>
          </div>
          <Link
            href="#experience"
            className="flex md:hidden border-r-2 md:border-l-2 border-white items-center justify-center"
          >
            <p className="text-white text-sm">&gt; Experience</p>
          </Link>
          <Link
            href="#acknowledgement"
            className="flex md:hidden border-r-2 border-white items-center justify-center"
          >
            <p className="text-white text-sm">&gt; Achievement</p>
          </Link>
          <Link
            href="#projects"
            className="flex md:hidden items-center justify-center"
          >
            <p className="text-white text-sm">&gt; Projects</p>
          </Link>
        </div>
      </div>
      <div className="border-b-2 border-white grid grid-rows-2  md:grid-cols-2 md:grid-rows-1 ">
        <div className="border-b-2 md:border-b-0 border-white md:border-r-2 flex flex-col  p-4">
          <p className="text-white text-xl md:text-2xl text-left">
            {data.about.title}
          </p>
          <p className="text-white text-sm md:text-lg text-justify">
            {data.about.desc}
          </p>
        </div>
        <div className=" grid grid-cols-2  md:border-white">
          <div className="border-r-2 border-white h-full relative">
            <iframe
              title="map"
              src="https://my.atlist.com/map/8a8c7146-1bab-4dc7-ad01-391a4574fcd1/?share=true"
              allow="geolocation 'self' https://my.atlist.com"
              width="100%"
              height="100%"
              scrolling="no"
            ></iframe>
          </div>
          <div className="grid grid-rows-3">
            <div className="border-b-2 border-white  flex justify-center items-center">
              <Scroller />
            </div>
            <div className="border-b-2  border-white flex justify-evenly items-center">
              <Link
                href={data.socialLinks.email}
                rel="noopener noreferrer"
                target="_blank"
              >
                <AiFillMail
                  color="white"
                  size={40}
                  className="hover:-translate-y-2 transition-transform duration-300 ease-in-out scale-75 md:scale-100"
                />
              </Link>
              <Link
                href={data.socialLinks.github}
                rel="noopener noreferrer"
                target="_blank"
              >
                <FaGithubSquare
                  color="white"
                  size={35}
                  className="hover:-translate-y-2 transition-transform duration-300 ease-in-out scale-75 md:scale-100"
                />
              </Link>
              <Link
                href={data.socialLinks.linkedin}
                rel="noopener noreferrer"
                target="_blank"
              >
                <AiFillLinkedin
                  color="white"
                  size={40}
                  className="hover:-translate-y-2 transition-transform duration-300 ease-in-out scale-75 md:scale-100"
                />
              </Link>
              <Link
                href={data.socialLinks.x}
                rel="noopener noreferrer"
                target="_blank"
              >
                <AiFillTwitterSquare
                  color="white"
                  size={40}
                  className="hover:-translate-y-2 transition-transform duration-300 ease-in-out scale-75 md:scale-100"
                />
              </Link>
            </div>
            <div className="flex items-center justify-center gap-1 md:gap-4">
              <p className="text-white  text-md md:text-2xl flex">Resume</p>
              <iframe
                title="side arrow"
                width={30}
                height={30}
                className="rotate-[270deg]"
                src="https://lottie.host/embed/c74a9e0b-6910-44d6-837e-c4cb74b7ef08/vAeNFy4G2a.json"
              ></iframe>
              <Link
                href={data.resumeLink}
                className="text-sm md:text-base"
                rel="noopener noreferrer"
                target="_blank"
              >
                <FaFileDownload
                  color="white"
                  size={35}
                  className="hover:-translate-y-2 transition-transform duration-300 ease-in-out scale-75 md:scale-100"
                />
              </Link>
              <Link
                href={data.resumeLink}
                rel="noopener noreferrer"
                target="_blank"
              >
                <AiOutlineEye
                  color="white"
                  size={35}
                  className="hover:-translate-y-2 transition-transform duration-300 ease-in-out scale-75 md:scale-100"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="border-b-2 border-white h-6 diagonal-stripes "></div>
      <div className="grid grid-rows-2 border-b-2 border-white  md:grid-rows-1 md:grid-cols-2">
        <div
          id="experience"
          className="border-b-2 cursor-[  url(../public/dpa.png), _auto] border-white md:border-b-0 md:border-r-2 flex flex-col gap-3"
        >
          <p className="text-xl border-white border-b-2  py-1 px-2">
            Work Experince
          </p>
          <p className="text-2xl px-4 py-1">- Open to Work -</p>

          {data.workExp.map((item, idx) => {
            return (
              <div
                className="flex  opacity-50 justify-between items-center px-2 py-1 gap-2 md:gap-4 md:px-2"
                key={idx}
              >
                <span className="md:ml-1 pr-[1px] md:pr-2">&gt; </span>

                <div className=" text-2xl   strike-text  line-through decoration-1 w-full ">
                  {item.title}
                </div>
                <div className="flex flex-col md:w-full">
                  <div className="text-sm text-right block md:hidden">
                    {item.companyMob}
                  </div>
                  <div className="text-sm text-right hidden md:block">
                    {item.company}
                  </div>

                  <div className="text-sm text-right min-w-28">
                    {item.tenure}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex flex-col gap-2 " id="acknowledgement">
          <p className="text-xl border-white border-b-2  py-1 px-2">
            Achievements
          </p>
          {data.achievements.map((item, idx) => {
            return (
              <div
                className="flex  items-center  justify-between py-1 px-2"
                key={idx}
              >
                <div className="flex flex-wrap text-left items-center  w-[160px] md:w-full">
                  <span className="pr-2">&gt; </span>
                  {item.title}
                  <span className="md:block hidden text-sm ml-2 italic">
                    {item.institution}
                  </span>
                </div>
                <div>
                  <div className=" text-right md:min-w-52">{item.rank}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="border-b-2 border-white h-6 diagonal-stripes"></div>
      <div className="border-b-2 border-white  grid grid-rows-3   md:grid-rows-1 md:grid-cols-3">
        <div className="border-b-2 border-white  md:border-b-0 md:border-r-2">
          <div className="flex flex-col gap-2 px-2 pb-1" id="projects">
            <Link
              href={data.Projects[0].link}
              rel="noopener noreferrer"
              target="_blank"
              className="text-xl md:text-3xl flex mt-2 cursor-pointer  justify-between items-center"
            >
              <div className="hover:-translate-y-1 transition-transform duration-300 ease-in-out">
                &gt; {data.Projects[0].title}
              </div>

              <span className="text-xs md:text-sm italic flex gap-2">
                <FaReact
                  color="white"
                  size={30}
                  className="hover:scale-125 transition-transform duration-300 ease-in-out scale-75 md:scale-100"
                />
                <RiTailwindCssFill
                  color="white"
                  size={30}
                  className="hover:scale-125 transition-transform duration-300 ease-in-out scale-75 md:scale-100"
                />
                <SiFlask
                  color="white"
                  size={27}
                  className="hover:scale-125 transition-transform duration-300 ease-in-out scale-75 md:scale-100 mr-1"
                />
              </span>
            </Link>
            <div className="hidden p-2 text-sm md:block text-justify">
              {data.Projects[0].descriptionL}
            </div>
            <div className="block px-1  text-sm md:hidden text-justify">
              {data.Projects[0].descriptionS}
            </div>
          </div>
        </div>
        <div className="border-b-2 border-white  md:border-b-0  md:border-r-2">
          <div className="flex flex-col gap-2 px-2 pb-1">
            <Link
              href={data.Projects[1].link}
              rel="noopener noreferrer"
              target="_blank"
              className="text-xl md:text-3xl flex mt-2 justify-between items-center cursor-pointer"
            >
              <div className="hover:-translate-y-1 transition-transform duration-300 ease-in-out">
                &gt; {data.Projects[1].title}
              </div>{" "}
              <span className="text-xs md:text-sm italic flex gap-2">
                <FaGolang
                  color="white"
                  size={30}
                  className="hover:scale-125 transition-transform duration-300 ease-in-out scale-75 md:scale-100"
                />
                <SiHtmx
                  color="white"
                  size={30}
                  className="hover:scale-125 transition-transform duration-300 ease-in-out scale-75 md:scale-100"
                />
                <SiSocketdotio
                  color="white"
                  size={30}
                  className="hover:scale-125 transition-transform duration-300 ease-in-out scale-75 md:scale-100"
                />
              </span>
            </Link>
            <div className="hidden p-2 text-sm md:block text-justify">
              {data.Projects[1].descriptionL}
            </div>
            <div className="block px-1  text-sm md:hidden text-justify">
              {data.Projects[1].descriptionS}
            </div>
          </div>
        </div>
        <div className="border-b-2 border-white  md:border-b-0 md:border-r-2">
          <div className="flex flex-col gap-2 px-2 pb-1">
            <Link
              href={data.Projects[2].link}
              rel="noopener noreferrer"
              target="_blank"
              className="text-xl md:text-3xl flex mt-2 justify-between items-center cursor-pointer "
            >
              <div className="hover:-translate-y-1 transition-transform duration-300 ease-in-out">
                &gt; {data.Projects[2].title}
              </div>{" "}
              <span className="text-xs md:text-sm italic flex gap-2">
                <FaGolang
                  color="white"
                  size={30}
                  className="hover:scale-125 transition-transform duration-300 ease-in-out scale-75 md:scale-100"
                />
                <Image
                  width={35}
                  height={35}
                  src="https://raw.githubusercontent.com/cncf/artwork/main/projects/grpc/icon/white/grpc-icon-white.svg"
                  alt=""
                  className="hover:scale-125 transition-transform duration-300 ease-in-out scale-75 md:scale-100"
                />
              </span>
            </Link>
            <div className="hidden p-2 text-sm md:block text-justify">
              {data.Projects[2].descriptionL}
            </div>
            <div className="block px-1  text-sm md:hidden text-justify">
              {data.Projects[2].descriptionS}
            </div>
          </div>
        </div>
      </div>
      <div className="border-b-2 border-white h-8 grid grid-cols-10 ">
        <div className="col-span-3 border-r-2 border-white md:col-span-4 diagonal-stripes"></div>
        <Link
          href="https://github.com/sarthak0714?tab=repositories"
          rel="noopener noreferrer"
          target="_blank"
          className="flex justify-center items-center col-span-4   md:col-span-2 hover:scale-125 transition-transform duration-300 ease-in-out scale-75 md:scale-100"
        >
          <div className="mr-2 text-xl">More</div>
          <VscLinkExternal color="white" size={17} className="" />
        </Link>

        <div className="col-span-3 border-l-2  border-white md:col-span-4 diagonal-stripes"></div>
      </div>
      <div className="h-8 p-1">
        <p className="text-white text-center">Made with 💗 by Sarthak</p>
      </div>
    </main>
  );
}
