import React from "react";

function Header() {
  return (
    <div className="self-stretch bg-seagreen flex flex-row py-2.5 px-4 items-center justify-between">
      <img
        className="relative w-6 h-6 overflow-hidden shrink-0"
        alt="메뉴바"
        src="/iconsmenu.svg"
      />
      <a href="/">
        <img
          className="relative w-[91px] h-4 overflow-hidden shrink-0"
          alt="로고"
          src="/logohorizontal.svg"
        />
      </a>
      <a href="/dashboard">
        <img
          className="relative w-6 h-6 overflow-hidden shrink-0"
          alt="대쉬보드"
          src="/iconsuser.svg"
        />
      </a>
    </div>
  );
}

export default Header;
