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
  background: white;
  padding: 20px;
  width: 80%;
  max-width: 50vw;
  height: 50vh;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const CoordinationList = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 20px;
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
  position: relative; /* 부모 요소에 상대적인 배치 추가 */

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
    transform: translate(-50%, -50%); /* 중앙에 배치 */
  }
`;

export const CoordinationDetails = styled.div`
  text-align: center;
`;

export const CoordinationTitle = styled.h4`
  margin: 10px 0;
`;

export const CoordinationImage = styled.img`
  width: 100px;
  height: 100px;
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
  text-align: center;
  margin-bottom: 10px;
`;

export const HorizonLine = styled.hr`
  border: 1px solid #ddd;
  margin-bottom: 20px;
`;

export const ModalActions = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
`;

export const Button = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;
