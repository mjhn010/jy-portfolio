import Image from 'next/image';
import flawbg from '../../public/images/flaw-background.webp';
import Link from 'next/link';
import gitHubIcon from '../../public/images/github.png';
import FlawDetectorIcon from '../../public/images/bug.svg';
export default function ProjectCard() {
  return (
    <>
      <div className="max-h-[600px] flex flex-col items-center gap-8 shadow-md border border-solid border-slate-200 rounded-lg pb-8 ">
        {/* 이미지 */}
        <div>
          <Image src={flawbg} alt="프로젝트 배경" />
        </div>
        <div className="px-4 flex flex-col gap-3">
          <h1>FlawDetector</h1>
          <div className="flex flex-col gap-4">
            <p className="text-gray-400">
              Flaw Detector는 개발 중 발생할 수 있는 보안 취약점을 실시간으로
              분석하고, 해결책을 제안하는 AI 기반 보안 솔루션입니다.
            </p>
            <div className="flex flex-col gap-2">
              <Link
                href={
                  'https://github.com/FlawDetector-team-yes/FlawDetector-team-yes'
                }
              >
                <button className="flex items-center gap-2">
                  <Image
                    src={gitHubIcon}
                    width={30}
                    height={30}
                    alt="gitHubIcon"
                  ></Image>
                  <span className="text-[18px] text-[#0969DA]">
                    gitHub 바로가기
                  </span>
                </button>
              </Link>
              <Link href={'https://flaw-detector-team-yes-eight.vercel.app/'}>
                <button className="flex items-center gap-2">
                  <Image
                    src={FlawDetectorIcon}
                    width={30}
                    height={30}
                    alt="FlawDetectorIcon"
                  ></Image>
                  <span className="text-[18px] text-[#0969DA]">
                    Flaw Detector 바로가기
                  </span>
                </button>
              </Link>
            </div>
          </div>
          <div className="flex gap-1 justify-center">
            <span className="bg-black text-[#FFFFFF] text-[14px] py-[4px] px-2 rounded-[10px]">
              Next.js
            </span>
            <span className="bg-[#38BDF8] text-[#FFFFFF] text-[14px] py-[4px] px-2 rounded-[10px]">
              tailwindCSS
            </span>
            <span className="bg-[#5DE4C7] text-[#FFFFFF] text-[14px] py-[4px] px-2 rounded-[10px]">
              Zustand
            </span>
            <span className="bg-[#FFCD33] text-[#000000] text-[14px] py-[4px] px-2 rounded-[10px]">
              firebase
            </span>
            <span className="bg-amber-100 text-[#000000] text-[14px] py-[4px] px-2 rounded-[10px]">
              LLaMA3
            </span>
            <span className="bg-[#000000] text-[#FFFFFF] text-[14px] py-[4px] px-2 rounded-[10px]">
              vercel
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
