import Image from "next/image";
import Link from "next/link";
import profileIcon from "@../../../public/images/profile.png";
import homeIcon from "@../../../public/images/home.png";
import emailIcon from "@../../../public/images/mail.png";
import gitHubIcon from "@../../../public/images/social.png";
export default function Info() {
  return (
    <>
      <section className="min-h-screen flex justify-center items-center">
        <div className="flex w-full container">
          <div className="flex flex-col items-center gap-8 shadow-md border border-solid border-slate-200 rounded-lg px-20 py-8">
            <h1 className="text-[28px]">ABOUT ME</h1>
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
        </div>
      </section>
    </>
  );
}
