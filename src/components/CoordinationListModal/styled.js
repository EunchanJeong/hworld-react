import styled from 'styled-components';

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContent = styled.div`
  position: relative; /* CloseButton의 위치를 설정하기 위해 relative 사용 */
  background: white;
  padding: 20px;
  width: 55vw;
  max-width: 70vw;
  height: 70vh; /* 모달 높이 제한 */
  border-radius: 8px;
  display: flex;
  flex-direction: column;
`;

export const ModalName = styled.p`
  font-size: 20px;
  font-weight: bold;
  padding-bottom: 3px;
  margin-bottom: 0;
`;

export const HorizonLine = styled.div`
  background-color: #eee;
  width: 100%;
  height: 2px;
  bottom: 0;
  margin-bottom: 10px;
`;

export const CoordinationList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 20px;
  overflow-y: auto; /* 세로 스크롤 */
  max-height: 50vh; /* 리스트 최대 높이 */
  padding-right: 10px; /* 스크롤바와 내용 사이에 여백 */
`;
export const CoordinationContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  width: 53vw;
`;

export const CoordinationItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #eee;
  padding-bottom: 5px;
`;

export const Checkbox = styled.input.attrs({ type: 'checkbox' })`
  width: 20px; /* 너비 설정 */
  height: 20px; /* 높이 설정 */
  margin-right: 20px;
  transform: scale(1.2); /* 크기 조정 */
  appearance: none; /* 기본 체크박스 스타일 제거 */
  border: 0.2px solid black;
  border-radius: 4px;
  position: relative;
  cursor: pointer;

  /* 체크박스를 클릭했을 때 배경과 체크 표시 색상 변경 */
  &:checked {
    background-color: #284180; /* 체크박스 배경 색상 */
    border-color: #284180; /* 체크박스 테두리 색상 */
  }

  /* 체크박스 안의 체크 모양 */
  &:checked::after {
    content: '✔'; /* 체크 모양 */
    color: white;
    font-size: 14px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%); /* 정가운데로 이동 */
  }
`;

export const CoordinationTitle = styled.p`
  font-size: 20px;
  font-weight: bold;
  padding-bottom: 0;
  margin-top: 3px;
  margin-bottom: 0;
`;

export const CategoryName = styled.p`
  font-size: 13px;
  font-weight: 400;
  padding-bottom: 0;
  margin-bottom: 0;
`;

export const Items = styled.div`
  width: 100%;
  display: flex;
`;

export const ItemContainer = styled.div`
  width: 13vw;
  display: flex;
`;
export const ItemName = styled.p`
  font-size: 13px;
  font-weight: 300;
  padding-bottom: 0;
  margin-bottom: 0;
  margin-left: 5px;
`;

export const CoordinationDetails = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 5px;
`;

export const CoordinationImage = styled.img`
  width: 10vw;
  height: 10vw;
`;
export const ModalActions = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
`;

export const Button = styled.button`
  font-size: 20px;
  padding: 10px 20px;
  background-color: #284180;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

export const CloseButton = styled.img`
  position: absolute;
  top: 20px;
  right: 20px;
  width: 2vw;
  height: 2vw;
  margin-bottom: 3vh;
  cursor: pointer;
`;
