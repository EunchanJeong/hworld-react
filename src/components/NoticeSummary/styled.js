import styled from 'styled-components';
import { Link } from 'react-router-dom';

/**
 * 공지사항 요약 styled components
 * @author 조영욱
 * @since 2024.09.12
 * @version 1.0
 *
 * <pre>
 * 수정일        	수정자        수정내용
 * ----------  --------    ---------------------------
 * 2024.09.12  	조영욱        최초 생성
 * </pre>
 */

export const NoticeSummaryContainer = styled.div`
  width: 30%;
  height: 75%;
  position: relative;
  border: 2px solid black;
  border-radius: 10px;
  box-shadow: 4px 4px 7px rgba(0, 0, 0, 0.4);
  overflow: hidden;
`;

export const NoticeTitleContainer = styled.div`
  width: 100%;
  height: 35%;
  top: 0;
  left: 0;
  position: relative;
  display: flex;
  align-items: center;
`;

export const NoticeContentContainer = styled.div`
  width: 100%;
  height: 65%;
  bottom: 0;
  left: 0;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const GrayPlus = styled.div`
  width: 25%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  right: 0;
  top: 0;
  position: absolute;
`;

export const Title = styled.div`
  font-weight: bold;
  font-size: 20px;
  color: black;
  padding-left: 7%;
`;

export const NoticeContent = styled.div`
  width: 85%;
  height: 20%;
  font-size: 15px;
  margin: 2%;
  color: black;
`;

export const NoticeLink = styled(Link)`
  text-decoration: none;
  display: inline-block;
  color: black;
`;
