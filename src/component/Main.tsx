"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import doubleArrow from "../../public/images/CaretDoubleDown.svg";
import leftClick from "../../public/images/left-click.png";
import ScrollBy from "./ScrollBy";

export default function Main() {
  const textCountRef = useRef(0);
  const fullText = "안 녕하세요! FrontEnd Developer 윤준영입니다.";
  const [text, setText] = useState("");
  const [prompt, setPrompt] = useState("");
  useEffect(() => {
    const interval = setInterval(() => {
      if (textCountRef.current < fullText.length - 1) {
        setText((prev) => prev + fullText[textCountRef.current]);
        textCountRef.current++;
      } else {
        clearInterval(interval);
      }
    }, 150);

    return () => clearInterval(interval);
  }, [fullText]);
  useEffect(() => {
    const promptHandler = setInterval(() => {
      setPrompt((prev) => (prev.length < 1 ? prev + "|" : ""));
    }, 600);

    return () => clearInterval(promptHandler);
  }, [fullText]);
  return (
    <>
      <section className="text-gray-600 body-font min-h-screen flex flex-col items-center justify-center relative">
        <div className="container w-full flex md:flex-row flex-col items-center justify-between">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              {text}
              {prompt}
              <br className="hidden lg:inline-block" />
            </h1>
            <p className="mb-8 leading-relaxed">
              경청과 존중을 바탕으로 원활한 소통과 협업을 중시하는
              신입프론트엔드 개발자입니다. 사람들에게 더 나은 서비스를 제공하기
              위해 창의적인 아이디어와 꾸준한 학습 트렌드에 맞는 생각을
              추구하고있으며, 맡은 일에 책임감을 가지고 끝까지 완수하는 것을
              목표로 하고 있습니다. 앞으로도 팀에서의 소통과 협력을 중요시
              생각하며, 더 나은 사용자 경험을 제공하는 훌륭한 개발자가 되기 위해
              꾸준히 노력할 것입니다.
            </p>
            <div className="flex justify-center">
              <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                프로젝트보러가기
              </button>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            {/* <Image /> */}
          </div>
        </div>
        <ScrollBy />
      </section>
    </>
  );
}
