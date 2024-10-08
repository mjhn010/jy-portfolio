import Image from "next/image";
import Link from "next/link";
import profileIcon from "@../../../public/images/profile.png";
import homeIcon from "@../../../public/images/home.png";
import emailIcon from "@../../../public/images/mail.png";
import gitHubIcon from "@../../../public/images/social.png";
import htmlIcon from "../../public/images/294678_html5_icon.ico";
import cssIcon from "../../public/images/317756_badge_css_css3_achievement_award_icon.png";
import jsIcon from "../../public/images/4373213_js_logo_logos_icon.png";
import tsIcon from "../../public/images/typescript.png";
import reactIcon from "../../public/images/7423888_react_react native_icon.png";
import reactQueryIcon from "../../public/images/react-query-seeklogo.svg";
import zustandIcon from "../../public/images/218346783-72be5ae3-b953-4dd7-b239-788a882fdad6.svg";
import tailwindIcon from "../../public/images/tailwind-css.svg";
import nextIcon from "../../public/images/nextjs_icon_132160.svg";
import firebaseIcon from "../../public/images/firebase-svgrepo-com.svg";
import figmaIcon from "../../public/images/figma-svgrepo-com.svg";
import mySqlIcon from "../../public/images/mysql-svgrepo-com.svg";
import vercelIcon from "../../public/images/vercel-svgrepo-com.svg";
import jiraIcon from "../../public/images/atlassian-svgrepo-com.svg";
import notionIcon from "../../public/images/notion-svgrepo-com.svg";
import slackIcon from "../../public/images/slack-svgrepo-com.svg";
import doubleArrow from "../../public/images/CaretDoubleDown.svg";
import leftClick from "../../public/images/left-click.png";
import ScrollBy from "./ScrollBy";
export default function Info() {
  return (
    <>
      <section className="min-h-screen flex relative justify-center items-center">
        <div className="flex w-full gap-6 container">
          <div className="flex flex-col items-center gap-8 shadow-md border border-solid border-slate-200 rounded-lg px-20 py-8">
            <h1 className="text-[28px] font-bold">ABOUT ME</h1>
            <ul className=" flex flex-col gap-8">
              <li className="">
                <div className="flex items-center gap-4">
                  <Image
                    src={profileIcon}
                    width={40}
                    height={40}
                    alt="프로필아이콘 수정예정"
                  />
                  윤준영
                </div>
              </li>
              <li>
                <div className="flex items-center gap-4">
                  <Image src={homeIcon} width={40} height={40} alt="위치" />
                  경기도 시흥
                </div>
              </li>
              <li>
                <div className="flex items-center gap-4">
                  <Image src={emailIcon} width={40} height={40} alt="이메일" />
                  mjhn010@naver.com
                </div>
              </li>
              <li>
                <div className="flex items-center gap-4">
                  <Image src={gitHubIcon} width={40} height={40} alt="깃허브" />
                  gitHub
                </div>
              </li>
              <li>
                <div className="flex items-center gap-4">
                  {/* <Image /> */}
                  Velog
                </div>
              </li>
            </ul>
          </div>
          {/* skill */}
          <div className="flex w-full flex-col items-center gap-8 shadow-md border border-solid border-slate-200 rounded-lg px-20 py-8">
            <h1 className="text-[28px] font-bold">skills</h1>
            <div className="flex flex-col gap-6 w-full">
              <div className="flex w-full justify-around gap-6">
                <div className="w-full text-left">
                  <h2 className="border-b text-[24px] text-left font-semibold">
                    Language
                  </h2>
                </div>
                <div className="w-full text-left">
                  <h2 className="border-b text-[24px] font-semibold">
                    Frontend
                  </h2>
                </div>
                <div className="w-full text-left">
                  <h2 className="border-b text-[24px] font-semibold">
                    BackEnd
                  </h2>
                </div>
                <div className="w-full text-left">
                  <h2 className="border-b text-[24px] font-semibold">tools</h2>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex w-full">
                  <div className="flex items-center gap-2 justify-center flex-col">
                    <div>
                      <Image
                        src={htmlIcon}
                        alt="htmlIcon"
                        width={100}
                        height={100}
                      />
                    </div>
                    <div>
                      <Image
                        src={cssIcon}
                        alt="cssIcon"
                        width={75}
                        height={75}
                      />
                    </div>
                  </div>
                  <div className="flex items-center gap-2 justify-center flex-col">
                    <div>
                      <Image src={jsIcon} width={75} height={75} alt="jsIcon" />
                    </div>
                    <div>
                      <Image src={tsIcon} width={75} height={75} alt="tsIcon" />
                    </div>
                  </div>
                </div>
                <div className=" flex items-start gap-3 w-full">
                  <div className="flex items-center gap-2 justify-center flex-col">
                    <div>
                      <Image
                        src={reactIcon}
                        width={75}
                        height={75}
                        alt="reactIcon"
                      />
                    </div>
                    <div>
                      <Image
                        src={reactQueryIcon}
                        width={75}
                        height={75}
                        alt="reactQueryIcon"
                      />
                    </div>
                    <div>
                      <Image
                        src={zustandIcon}
                        width={75}
                        height={75}
                        alt="zustandIcon"
                      />
                    </div>
                  </div>
                  <div className="flex items-center gap-2 justify-center flex-col">
                    <div>
                      <Image
                        src={nextIcon}
                        width={75}
                        height={75}
                        alt="nextIcon"
                      />
                    </div>

                    <div>
                      <Image
                        src={tailwindIcon}
                        width={75}
                        height={75}
                        alt="tailwindIcon"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-3 w-full">
                  <div className="flex items-center gap-2 justify-center flex-col">
                    <div>
                      <Image
                        src={firebaseIcon}
                        width={75}
                        height={75}
                        alt="firebaseIcon"
                      />
                    </div>
                    <div>
                      <Image
                        src={mySqlIcon}
                        width={75}
                        height={75}
                        alt="mySqlIcon"
                      />
                    </div>
                  </div>
                  <div className="flex items-center gap-2 justify-center flex-col">
                    <div>
                      <Image
                        src={vercelIcon}
                        width={75}
                        height={75}
                        alt="vercelIcon"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-3 w-full">
                  <div className="flex items-center gap-2 justify-center flex-col">
                    <div>
                      <Image
                        src={jiraIcon}
                        width={75}
                        height={75}
                        alt="jiraIcon"
                      />
                    </div>
                    <div>
                      <Image
                        src={slackIcon}
                        width={75}
                        height={75}
                        alt="slackIcon"
                      />
                    </div>
                    <div>
                      <Image
                        src={notionIcon}
                        width={75}
                        height={75}
                        alt="notionIcon"
                      />
                    </div>
                  </div>
                  <div className="flex items-center gap-2 justify-center flex-col">
                    <div>
                      <Image
                        src={gitHubIcon}
                        width={75}
                        height={75}
                        alt="gitIcon"
                      />
                    </div>
                    <div>
                      <Image
                        src={figmaIcon}
                        width={75}
                        height={75}
                        alt="figmaIcon"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ScrollBy />
      </section>
    </>
  );
}
