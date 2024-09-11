import React from 'react';
import CommonLayout from '../../components/Layout';
import BreadCrumb from '../../components/BreadCrumb';
import Text from '../../components/Text';

import {
  MyInfoLayout,
  MyInfoBox,
  MyInfoBoxHeader,
  MemberImage,
  MyInfoBoxBody,
  CustomButton,
  MenuImage,
  MenuImageLayout,
  StyledText1,
  StyledText2,
} from './styled';

import member from '../../assets/images/member.svg';
import mypageMenu1_1 from '../../assets/images/mypage_menu1_1.svg';
import mypageMenu1_2 from '../../assets/images/mypage_menu1_2.svg';
import mypageMenu2_1 from '../../assets/images/mypage_menu2_1.svg';
import mypageMenu2_2 from '../../assets/images/mypage_menu2_2.svg';
import mypageMenu3_1 from '../../assets/images/mypage_menu3_1.svg';
import mypageMenu3_2 from '../../assets/images/mypage_menu3_2.svg';
import mypageMenu4_1 from '../../assets/images/mypage_menu4_1.svg';
import mypageMenu4_2 from '../../assets/images/mypage_menu4_2.svg';

import { useEffect, useState } from 'react';
import { axiosInstance } from '../../apis';

import Menu1 from '../MyPageContent/Menu1';
import Menu2 from '../MyPageContent/Menu2';
import Menu3 from '../MyPageContent/Menu3';
import Menu4 from '../MyPageContent/Menu4';

const MyPage = () => {
  const [clickedButton, setClickedButton] = useState(null);
  const [memberInfo, setMemberInfo] = useState(null);

  const handleMenuClick = (id) => {
    setClickedButton(id);
  };

  useEffect(() => {
    const fetchMemberInfo = async () => {
      try {
        const response = await axiosInstance.get('/members/my-info');
        setMemberInfo(response.data);
      } catch (error) {
        console.error('Error fetching member info:', error);
      }
    };

    fetchMemberInfo();
  }, []);

  const menuComponents = {
    menu1: <Menu1 />,
    menu2: <Menu2 />,
    menu3: <Menu3 />,
    menu4: <Menu4 />,
  };

  return (
    <CommonLayout>
      <BreadCrumb title="마이페이지"></BreadCrumb>
      <MyInfoLayout>
        <MyInfoBox>
          <MyInfoBoxHeader>
            <MemberImage src={member} alt="회원"></MemberImage>
            <Text theme="whitetext">{memberInfo.nickname}</Text>
          </MyInfoBoxHeader>
          <MyInfoBoxBody>
            <StyledText2>내 포인트 | {memberInfo.point}P</StyledText2>
            <StyledText2>회원정보 수정</StyledText2>
          </MyInfoBoxBody>
        </MyInfoBox>
        <CustomButton onClick={() => handleMenuClick('menu1')} isMenuClicked={clickedButton === 'menu1'}>
          <MenuImageLayout>
            <MenuImage src={clickedButton === 'menu1' ? mypageMenu1_2 : mypageMenu1_1} alt="메뉴1" />
          </MenuImageLayout>
          <StyledText1 isClicked={clickedButton === 'menu1'}>내 게시글 조회</StyledText1>
        </CustomButton>
        <CustomButton onClick={() => handleMenuClick('menu2')} isMenuClicked={clickedButton === 'menu2'}>
          <MenuImageLayout>
            <MenuImage
              width="100%"
              height="100%"
              src={clickedButton === 'menu2' ? mypageMenu2_2 : mypageMenu2_1}
              alt="메뉴2"
            ></MenuImage>
          </MenuImageLayout>
          <StyledText1 isClicked={clickedButton === 'menu2'}>코디 목록 조회</StyledText1>
        </CustomButton>
        <CustomButton onClick={() => handleMenuClick('menu3')} isMenuClicked={clickedButton === 'menu3'}>
          <MenuImageLayout>
            <MenuImage
              width="70%"
              height="70%"
              src={clickedButton === 'menu3' ? mypageMenu3_2 : mypageMenu3_1}
              alt="메뉴3"
            ></MenuImage>
          </MenuImageLayout>
          <StyledText1 isClicked={clickedButton === 'menu3'}>포인트 사용내역</StyledText1>
        </CustomButton>
        <CustomButton onClick={() => handleMenuClick('menu4')} isMenuClicked={clickedButton === 'menu4'}>
          <MenuImageLayout>
            <MenuImage src={clickedButton === 'menu4' ? mypageMenu4_2 : mypageMenu4_1} alt="메뉴4"></MenuImage>
          </MenuImageLayout>
          <StyledText1 isClicked={clickedButton === 'menu4'}>구매 내역 조회</StyledText1>
        </CustomButton>
      </MyInfoLayout>

      {clickedButton && menuComponents[clickedButton]}
    </CommonLayout>
  );
};

export default MyPage;
