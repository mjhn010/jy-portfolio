"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import doubleArrow from "../../public/images/CaretDoubleDown.svg";
import leftClick from "../../public/images/left-click.png";

const scrollHandler = () => {
  window.scrollBy({
    top: 1200,
    left: 0,
    behavior: "smooth",
  });
};

export default function ScrollBy() {
  return (
    <>
      <div>
        <button
          onClick={scrollHandler}
          className="cursor-pointer flex items-center animate-bounce absolute bottom-20 right-1/2"
        >
          <Image src={doubleArrow} alt="다운화살표" width={40} height={40} />
          <span className="flex items-center">
            Click{" "}
            <div>
              <Image src={leftClick} width={20} height={20} alt="왼쪽클릭" />
            </div>
          </span>
        </button>
      </div>
    </>
  );
}
