import Image from "next/image";
import profileIcon from "@../../../public/images/profile.png";
import Link from "next/link";
export default function Header() {
  return (
    <>
      <header className="flex justify-between items-center w-full px-28 py-3">
        <div className="flex items-center gap-3">
          <div>
            <Link href="/">
              <Image
                src={profileIcon}
                width={40}
                height={40}
                alt="프로필아이콘 수정예정"
              />
            </Link>
          </div>
          <Link href="">
            <p className="font-bold text-[20px] ">junY Portfolio</p>
          </Link>
        </div>
        <div>
          <ul className="flex gap-3 text-[#64748B] font-semibold">
            <li>
              <Link href="/project">프로젝트</Link>
            </li>
            <li>
              <button>다크모드</button>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
}
