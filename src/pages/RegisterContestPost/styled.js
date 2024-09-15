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
  font-size: 25px;
  margin-bottom: 8px;
  font-weight: bold;
`;

export const TitleInput = styled.input`
  display: flex;
  width: 33vw;
  padding: 10px;
  font-size: 16px;
  height: 7vh;
  margin-right: 80px;

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
  font-size: 25px;
  margin-bottom: 8px;
  font-weight: bold;
  margin-right: 32px;
`;

export const ImagePlaceholder = styled.div`
  width: 35vw;
  height: 70vh;
  background-color: white;
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
  justify-content: center;
  margin-bottom: 20px;
  width: 100%;
  gap: 10px;
`;

export const Button = styled.button`
  padding: 10px 20px;
  background-color: #284180;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  width: 10vw;
`;

export const HorizontalLine = styled.hr`
  width: 100%;
  border-top: 1px solid #ccc;

  margin: 20px 0;
`;

export const ItemList = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-bottom: 20px;
`;

export const Item = styled.div`
  width: 100px;
  height: 100px;

  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const ItemContainer = styled.div`
  width: 100px;
  height: 100px;
  margin-top: 20px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export const ItemListTitle = styled.p`
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 5px;
  margin-top: 120px;
`;

export const SubmitButton = styled.button`
  padding: 15px;
  background-color: #284180;
  color: white;
  font-size: 25px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  width: 9vw;
`;

export const CanvasDiv = styled.div`
  width: fit-content; /* 자식 요소의 너비에 맞춰 부모 요소의 너비 설정 */

  position: relative; /* 코디 이미지를 배경 위에 겹치게 하기 위한 설정 */

  position: relative; /* 코디 이미지를 배경 위에 겹치기 위한 설정 */
  width: 35vw;
  height: 70vh;
  margin-right: 80px;
`;

export const ButtonDiv = styled.div`
  width: 80vw;
  display: flex;
  justify-content: center;
  margin-top: 50px;
`;
