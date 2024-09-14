import { Link } from 'react-router-dom';
import styled from 'styled-components';

/**
 * 공지사항 상세 페이지 styled components
 * @author 조영욱
 * @since 2024.09.14
 * @version 1.0
 *
 * <pre>
 * 수정일        	수정자        수정내용
 * ----------  --------    ---------------------------
 * 2024.09.14  	조영욱        최초 생성
 * </pre>
 */

export const ContentContainer = styled.div`
  width: 80vw;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TitleContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  font-size: 30px;
  font-weight: bold;
  margin-top: 4%;
  align-items: center;
  justify-content: space-between;
`;

export const ListButton = styled.button`
  width: 100px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  right: 0;
  bottom: 0;
  border-radius: 15px;
  background-color: #284180;
  border: none;
  color: white;
  font-size: 24px;
  font-weight: bold;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.3);
  &:hover {
    background-color: rgba(40, 65, 128, 0.9);
    transform: scale(1);
  }
`;

export const DateContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  margin-top: 2%;
  align-items: center;
`;

export const DateGuide = styled.div`
  height: auto;
  display: flex;
  font-size: 18px;
  font-weight: bold;
  align-items: center;
`;

export const DateInfo = styled.div`
  height: auto;
  display: flex;
  font-size: 18px;
  align-items: center;
  font-weight: 400;
`;

export const HorizonLine = styled.div`
  width: 100%;
  height: 1px;
  background: #aaaaaa;
  margin-top: 4%;
`;

export const NoticeContent = styled.div`
  width: 100%;
  height: auto;
  font-size: 22px;
  margin-top: 4%;
`;

export const CustomLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ImageWrapper = styled.div`
  width: 100%;
  height: auto;
  margin-top: 4%;
`;

export const Image = styled.img`
  width: 100%;
  height: auto;
`;
