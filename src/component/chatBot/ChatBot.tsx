'use client';
import Image from 'next/image';
import ChatIcon from '../../../public/images/chat.png';
import ChatActive from '../../../public/images/chat-active.png';
import { useState } from 'react';
export default function ChatBot() {
  const [chatBotOpen, setChatBotOpen] = useState(false);
  function chatBotHandler() {
    setChatBotOpen((prev) => !prev);
  }
  return (
    <>
      <div>
        <div className="fixed bottom-14 right-12" onClick={chatBotHandler}>
          <div className="border solid border-[#6366F1] p-3 rounded-full">
            <Image src={ChatActive} width={35} height={35} alt="chatBot" />
          </div>
        </div>
        {chatBotOpen === true && (
          <>
            <div className="rounded-xl w-[400px] h-[550px] shadow-lg bg-white fixed bottom-[130px] right-12">
              <div className="bg-[#6366F1] py-4 rounded-t-xl text-[#FFFFFF]">
                <div className="flex gap-1 px-[8px]">
                  <div>
                    <Image src={ChatIcon} width={30} height={30} alt="chat" />
                  </div>
                  <span className="font-bold text-lg">자기소개로봇</span>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}
