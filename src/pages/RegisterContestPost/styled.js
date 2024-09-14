import styled from 'styled-components';

export const PostFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80vw;
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80vw;
  flex-direction: row;
  gap: 30px;
  margin-top: 40px;
`;

export const TitleLabel = styled.label`
  font-size: 18px;
  margin-bottom: 8px;
  font-weight: bold;
`;

export const TitleInput = styled.input`
  display: flex;
  width: 50vw;
  padding: 10px;
  font-size: 16px;
  height: 7vh;

  border: 1px solid #ccc;
  align-items: center;
  justify-items: center;
  border-radius: 4px;
`;

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  gap: 30px;
  margin-top: 40px;
`;

export const CoordinationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
export const ImageLabel = styled.label`
  font-size: 18px;
  margin-bottom: 8px;
  font-weight: bold;
  margin-right: 32px;
  border: 1px solid red;
`;

export const ImagePlaceholder = styled.div`
  width: 52.3vw;
  height: 70vh;
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  font-size: 16px;
  color: #888;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  width: 100%;
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

export const HorizontalLine = styled.hr`
  width: 100%;
  border-top: 1px solid #ccc;
  margin: 20px 0;
`;

export const ItemList = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 20px;
`;

export const Item = styled.div`
  width: 100px;
  height: 100px;
  background-color: #f0f0f0;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const SubmitButton = styled.button`
  padding: 15px;
  background-color: #28a745;
  color: white;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #218838;
  }
`;

export const CanvasDiv = styled.div`
  width: fit-content; /* 자식 요소의 너비에 맞춰 부모 요소의 너비 설정 */
`;
