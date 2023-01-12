import React, { useState } from 'react'
import * as s from "./styles";
import CloseMenu from "@public/icon/CloseMenu.svg";

const Menu = () => {

    /* 로그인 상태 관리 로직에 따라 setIsLogin() 사용 예정 */
    const [isLogin, setIsLogin] = useState(false);
    
    /* 메뉴 카테고리 string */
    const category1_1 = "로그인";
    const category1_2 = "마이 페이지";
    const category2 = "뮤즈 소개";
    const category3 = "필진 소개";

    const onClickCloseMenu = () => {
        console.log("뒤로가기 클릭");
    };

    const onClickLogin = () => {
        console.log("로그인 클릭");
    };

    const onClickMypage = () => {
        console.log("마이페이지 클릭");
    };

    const onClickMewsIntro = () => {
        console.log("Mews 소개 클릭");
    };

    const onClickAuthorIntro = () => {
        console.log("필진 소개 클릭");
    };

    return (
        <s.Wrapper>
            <s.CloseIcon onClick={onClickCloseMenu}>
                <CloseMenu />
            </s.CloseIcon>
            <s.MenuContainer>
                {isLogin ? 
                    (<s.Mypage onClick={onClickMypage}>{category1_2}</s.Mypage>) : 
                    (<s.Login onClick={onClickLogin}>{category1_1}</s.Login>) 
                }
                <s.MewsIntro onClick={onClickMewsIntro}>{category2}</s.MewsIntro>
                <s.AuthorIntro onClick={onClickAuthorIntro}>{category3}</s.AuthorIntro>
            </s.MenuContainer>
        </s.Wrapper>
    )
}

export default Menu;