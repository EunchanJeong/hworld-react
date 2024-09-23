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
  background: white;
  padding: 20px;
  width: 80%;
  max-width: 50vw;
  height: 55vh;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
`;

export const CoordinationList = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 10px;
`;

export const CoordinationItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Checkbox = styled.input.attrs({ type: 'checkbox' })`
  width: 20px;
  height: 20px;
  appearance: none;
  border: 2px solid black;
  border-radius: 4px;
  cursor: pointer;
  position: relative;

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

export const CoordinationDetails = styled.div`
  text-align: center;
`;

export const CoordinationTitle = styled.h4`
  margin: 10px 0;
`;

export const CoordinationImage = styled.img`
  width: 10vw;
  height: 30vh;
  object-fit: cover;
  border-radius: 8px;
  margin-top: 10px;
`;

export const CloseButton = styled.img`
  position: absolute;
  top: 10px;
  right: 10px;
  width: 20px;
  height: 20px;
  cursor: pointer;
`;

export const ModalName = styled.h3`
  margin-bottom: 10px;
  border-bottom: 1px solid #eee;
`;

export const HorizonLine = styled.hr`
  /* border: 10px solid #ddd;
  margin-bottom: 20px; */
`;

export const ModalActions = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
`;

export const Button = styled.button`
  padding: 10px 20px;
  background-color: #284180;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;
