import MenuItem from "@components/MenuItem";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import * as s from "./styles";

const MenuList = ({
  isOpen,
  setIsOpen,
  isLogin,
}: {
  isOpen: boolean;
  setIsOpen: (a: boolean) => void;
  isLogin: boolean;
}) => {
  const outSide = useRef<any>();

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    document.addEventListener("mousedown", outSideHandler);
    return () => {
      // eslint-disable-next-line @typescript-eslint/no-use-before-define
      document.removeEventListener("mousedown", outSideHandler);
    };
  });

  const outSideHandler = (e: React.MouseEvent<HTMLElement> | MouseEvent) => {
    if (!outSide.current?.contains(e.target)) {
      // eslint-disable-next-line @typescript-eslint/no-use-before-define
      toggleSide();
    }
  };

  const toggleSide = () => {
    setIsOpen(false);
  };

  return (
    <s.Wrapper ref={outSide} className={isOpen ? "open" : ""}>
      <s.Text>
        <s.MenuText>Menu</s.MenuText>
        {isLogin ? (
          <Link onClick={toggleSide} href="/mypage">
            <MenuItem name="마이 페이지" />
          </Link>
        ) : (
          <Link onClick={toggleSide} href="/login">
            <MenuItem name="로그인" />
          </Link>
        )}

        <Link onClick={toggleSide} href="/introduce/mews">
          <MenuItem name="뮤즈 소개" />
        </Link>

        <Link onClick={toggleSide} href="/introduce/author">
          <MenuItem name="필진 소개" />
        </Link>
      </s.Text>
    </s.Wrapper>
  );
};

export default MenuList;
