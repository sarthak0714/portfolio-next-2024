import { data } from "./data";
import Link from "next/link";
import {
  AiFillMail,
  AiFillGithub,
  AiFillLinkedin,
  AiFillTwitterSquare,
  AiOutlineDownload,
  AiOutlineEye,
} from "react-icons/ai";
import { FaFileDownload } from "react-icons/fa";

export default function Home() {
  return (
    <main className="border-2 border-white m-2">
      <div className="grid grid-rows-2 md:grid-cols-3 md:grid-rows-1">
        <div className="border-b-2 border-white h-14 grid grid-cols-12 gap-0 md:col-span-2">
          <div className=" border-r-2 border-white h-full col-span-2 md:col-span-1 flex justify-center items-center">
            <p className="text-white text-center text-lg md:text-3xl">0714</p>
          </div>
          <div className="h-full col-span-10 flex justify-start items-center pl-2">
            <p className="text-white text-xl md:text-3xl">Sarthak Tanpure.</p>
          </div>
        </div>
        <div className="h-10 border-b-2 border-white grid grid-cols-3 md:h-14">
          {/* <div className="border-r-2 border-white"></div> */}
          <div className="border-r-2 md:border-l-2 border-white">
            <p className="text-white">Exp.</p>
          </div>
          <div className="border-r-2 border-white">
            <p className="text-white">Wins.</p>
          </div>
          <div className="">
            <p className="text-white">Projects</p>
          </div>
        </div>
      </div>
      <div className="border-b-2 border-white grid grid-rows-2 h-96 md:grid-cols-2 md:grid-rows-1 md:h-56 ">
        <div className="border-b-2 md:border-b-0 border-white md:border-r-2">
          <p className="text-white">{data.about.title}</p>
          <p className="text-white">{data.about.desc}</p>
        </div>
        <div className=" grid grid-cols-2  md:border-white">
          <div className="border-r-2 border-white h-full relative">
            <iframe
              src="https://my.atlist.com/map/8a8c7146-1bab-4dc7-ad01-391a4574fcd1/?share=true"
              allow="geolocation 'self' https://my.atlist.com"
              width="100%"
              height="100%"
              scrolling="no"
            ></iframe>
          </div>
          <div className="grid grid-rows-3">
            <div className="border-b-2 border-white">
              <p className="text-white">Rolling tech stack</p>
            </div>
            <div className="border-b-2  border-white flex justify-evenly items-center">
              <Link href={data.socialLinks.email}>
                <AiFillMail
                  color="white"
                  size={40}
                  className="hover:scale-125 transition-transform duration-300 ease-in-out scale-75 md:scale-100"
                />
              </Link>
              <Link href={data.socialLinks.github}>
                <AiFillGithub
                  color="white"
                  size={40}
                  className="hover:scale-125 transition-transform duration-300 ease-in-out scale-75 md:scale-100"
                />
              </Link>
              <Link href={data.socialLinks.linkedin}>
                <AiFillLinkedin
                  color="white"
                  size={40}
                  className="hover:scale-125 transition-transform duration-300 ease-in-out scale-75 md:scale-100"
                />
              </Link>
              <Link href={data.socialLinks.x}>
                <AiFillTwitterSquare
                  color="white"
                  size={40}
                  className="hover:scale-125 transition-transform duration-300 ease-in-out scale-75 md:scale-100"
                />
              </Link>
            </div>
            <div className="flex items-center justify-center gap-1 md:gap-4">
              <p className="text-white  text-md md:text-2xl flex">Resume</p>
              <iframe
                width={30}
                height={30}
                className="rotate-[270deg]"
                src="https://lottie.host/embed/c74a9e0b-6910-44d6-837e-c4cb74b7ef08/vAeNFy4G2a.json"
              ></iframe>
              <Link href={data.resumeLink} className="text-sm md:text-base">
                <FaFileDownload
                  color="white"
                  size={30}
                  className="hover:scale-125 transition-transform duration-300 ease-in-out scale-75 md:scale-100"
                />
              </Link>
              <Link href={data.resumeLink}>
                <AiOutlineEye
                  color="white"
                  size={40}
                  className="hover:scale-125 transition-transform duration-300 ease-in-out scale-75 md:scale-100"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="border-b-2 border-white h-6 diagonal-stripes "></div>
      <div className="grid grid-rows-2 border-b-2 border-white  md:grid-rows-1 md:grid-cols-2">
        <div className="border-b-2 border-white md:border-b-0 md:border-r-2 flex p-4 flex-col gap-6">
          <p className="text-xl ">Looking for Work ...</p>

          {data.workExp.map((item, idx) => {
            return (
              <div
                className="flex justify-between items-center gap-4"
                key={idx}
              >
                <div className=" text-2xl line-through decoration-1 w-full ">
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
        <div className="flex flex-col gap-2 ">
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
                  {item.title}
                  <span className="md:block hidden text-sm ml-2">
                    {item.institution}
                  </span>
                </div>
                <div>
                  <div className=" text-right md:min-w-52">{item.rank}</div>
                  {/* <div className="text-right">{item.date}</div> */}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="border-b-2 border-white h-6 diagonal-stripes"></div>
      <div className="border-b-2 border-white h-[42rem] md:h-56 grid grid-rows-3 md:grid-rows-1 md:grid-cols-3">
        <div className="border-b-2 border-white h-56 md:border-b-0 md:border-r-2">
          <p className="text-white">proj</p>
        </div>
        <div className="border-b-2 border-white h-56 md:border-b-0 md:border-r-2">
          <p className="text-white">proj</p>
        </div>
        <div className="h-56">
          <p className="text-white">proj</p>
        </div>
      </div>
      <div className="border-b-2 border-white h-6 grid grid-cols-10 ">
        <div className="col-span-3 border-r-2 border-white md:col-span-4 diagonal-stripes"></div>
        <div className="col-span-4 border-r-2 border-white md:col-span-2 ">
          <p className="text-white">More</p>
        </div>
        <div className="col-span-3 md:col-span-4 diagonal-stripes"></div>
      </div>
      <div className="h-8 p-1">
        <p className="text-white text-center">Made with 💗 by Sarthak</p>
      </div>
    </main>
  );
}
