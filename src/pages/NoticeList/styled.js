import styled from 'styled-components';

/**
 * 공지사항 목록 페이지 styled components
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

export const DropboxContainer = styled.div`
  width: 100%;
  height: 8vh;

  display: flex;
  align-items: center;
  justify-content: right;
  margin-top: 4%;
  margin-bottom: 5%;
`;

export const Dropdown = styled.select`
  width: 150px;
  height: 50px;
  font-size: 18px;
  font-weight: 400;
  border: 3px solid #284180;
  border-radius: 7px;
  cursor: pointer;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.3);
  padding: 0px 20px;
  line-height: 61px;
`;

export const NoticeListContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
`;

export const GuideContainer = styled.div`
  width: 100%;
  height: 7vh;
  display: flex;
`;

export const NumberGuide = styled.div`
  width: 10%;
  height: 100%;
  box-sizing: border-box;
  font-size: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 30%;
`;
export const TitleGuide = styled.div`
  width: 20%;
  height: 100%;
  box-sizing: border-box;
  font-size: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 25%;
`;
export const DateGuide = styled.div`
  width: 15%;
  height: 100%;
  box-sizing: border-box;
  font-size: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const HorizonLine = styled.div`
  width: 100%;
  height: 1.2px;
  background: black;
`;

export const HorizonLineGray = styled.div`
  width: 100%;
  height: 1px;
  background: #aaaaaa;
`;

export const NoticeSummary = styled.div`
  width: 100%;
  height: 8vh;
  display: flex;
  align-items: center;
`;

export const NoticeNumber = styled.div`
  width: 10%;
  height: 100%;
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const NoticeType = styled.div`
  width: 10%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
`;

export const NoticeTypeBox = styled.div`
  width: 100px;
  height: 30px;
  border: 1px solid #aaaaaa;
  font-size: 15px;
  border-radius: 50px;
  color: #555555;
  box-sizing: border-box;
  font-weight: 300;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const NoticeTitle = styled.div`
  width: 65%;
  height: 100%;
  display: flex;
  justify-content: left;
  align-items: center;
  box-sizing: border-box;
  padding-left: 5%;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
`;

export const NoticeDate = styled.div`
  width: 15%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 15px;
  font-weight: 300;
`;
