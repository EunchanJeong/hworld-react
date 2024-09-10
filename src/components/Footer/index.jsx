import React from 'react';
import { FooterContainer, FooterThinText, FooterLightText, FooterMediumText } from './styled';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterThinText>
        서울 종로구 창경궁로 254, 7층 |{' '}
        <a href="https://github.com/OASIS-HWORLD" target="_blank" rel="noopener noreferrer">
          https://github.com/OASIS-HWORLD
        </a>
      </FooterThinText>
      <FooterThinText>Developers | 조영욱 • 김지현 • 정은찬</FooterThinText>

      <br></br>

      <FooterLightText>회사소개 • 이용약관 • 개인정보처리방침 • 고객센터 • 제휴제안</FooterLightText>

      <br></br>

      <FooterMediumText>OASIS Ⓒ 2024 All Right Reserved</FooterMediumText>
    </FooterContainer>
  );
};

export default Footer;
