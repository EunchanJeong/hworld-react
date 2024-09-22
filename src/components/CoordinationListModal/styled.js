import styled from 'styled-components';

/**
 * 콘테스트 게시글 배경 선택 모달 styled components
 * @author 정은찬
 * @since 2024.09.15
 * @version 1.0
 *
 * <pre>
 * 수정일       수정자        수정내용
 * ----------  --------    ---------------------------
 * 2024.09.15  	정은찬        최초 생성
 * </pre>
 */

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
  position: relative;
  background: white;
  padding: 20px;
  width: 35vw;
  max-width: 70vw;
  height: 60vh;
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
  overflow-y: auto;
  max-height: 50vh;
  padding-right: 10px;
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
  width: 20px;
  height: 20px;
  margin-right: 20px;
  transform: scale(1.2);
  appearance: none;
  border: 0.2px solid black;
  border-radius: 4px;
  position: relative;
  cursor: pointer;

  &:checked {
    background-color: #284180;
    border-color: #284180;
  }

  &:checked::after {
    content: '✔';
    color: white;
    font-size: 14px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
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
  margin-top: 0;
`;

export const Items = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const ItemContainer = styled.div`
  width: 20vw;
  display: flex;
  margin-top: 1px;
  margin-bottom: 1px;
`;
export const ItemName = styled.p`
  font-size: 13px;
  font-weight: 300;
  padding-bottom: 0;
  margin-bottom: 0;
  margin-top: 0;
  margin-left: 5px;
`;

export const CoordinationDetails = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 5px;
`;

export const CoordinationImage = styled.img`
  width: 8vw;
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
