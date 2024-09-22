import styled from 'styled-components';

/**
 * 콘테스트 게시글 등록 페이지 styled components
 * @author 정은찬
 * @since 2024.09.13
 * @version 1.0
 *
 * <pre>
 * 수정일        수정자        수정내용
 * ----------  --------    ---------------------------
 * 2024.09.13  	정은찬        최초 생성
 * </pre>
 */

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
  width: wrap-content;
  flex-direction: row;
  gap: 30px;
  margin-top: 40px;
`;

export const TitleLabel = styled.label`
  font-size: 25px;
  font-weight: bold;
`;

export const TitleInput = styled.input`
  display: flex;
  width: 30vw;
  padding: 10px;
  font-size: 20px;
  height: 5vh;
  background-color: #f8f8f8;
  align-items: center;
  justify-items: center;
  border: none;

  &:focus {
    outline: none;
    border: 1px solid #b0b0b0;
  }
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
  font-size: 20px;
  color: #888;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
  width: 100%;
  gap: 30px;
`;

export const Button = styled.button`
  border-radius: 5px;
  background-color: #284180;
  border: none;
  color: white;
  font-size: 20px;
  font-weight: normal;
  padding: 10px 15px 10px 15px;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.3);
  transition: background-color 0.3s, transform 0.3s;
  height: wrap-content;
  width: wrap-content;

  &:active,
  &:focus {
    transform: scale(0.95);
  }

  &:hover {
    background-color: rgba(40, 65, 128, 0.9);
    transform: scale(1);
    cursor: pointer;
  }
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
  border-radius: 50px;
  cursor: pointer;
  width: 9vw;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.3);

  &:active,
  &:focus {
    transform: scale(0.95);
  }

  &:hover {
    background-color: rgba(40, 65, 128, 0.9);
    transform: scale(1);
    cursor: pointer;
  }
`;

export const CanvasDiv = styled.div`
  width: fit-content;
  position: relative;
  position: relative;
  width: 35vw;
  height: 70vh;
`;

export const ButtonDiv = styled.div`
  width: 80vw;
  display: flex;
  justify-content: center;
  margin-top: 50px;
`;
