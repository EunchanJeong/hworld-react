import React from 'react';
import { FooterContainer, FooterThinText, FooterLightText, FooterMediumText } from './styled';

/**
 * 푸터 컴포넌트
 * @author 김지현
 * @since 2024.09.10
 * @version 1.0
 *
 * <pre>
 * 수정일        	수정자        수정내용
 * ----------  --------    ---------------------------
 * 2024.09.10  	김지현        최초 생성
 * </pre>
 */

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
