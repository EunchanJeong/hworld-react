import styled from 'styled-components';

/**
 * 로그인 페이지 styled components
 * @author 김지현
 * @since 2024.09.17
 * @version 1.0
 *
 * <pre>
 * 수정일        수정자        수정내용
 * ----------  --------    ---------------------------
 * 2024.09.17  	김지현        최초 생성
 * </pre>
 */

export const SignUpLayout = styled.div`
  width: 60vw;
  height: 65vh;
  border: 5px solid #284180;
  border-radius: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledHr = styled.div`
  width: 55vw;
  height: 3px;
  background-color: #284180;
  border-radius: 50px;
`;

export const InputLayout = styled.div`
  width: 50vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 5vh;
  margin-bottom: 2vh;
`;

export const InputDetailLayout = styled.div`
  width: 40vw;
  height: 10vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  margin-top: 1vh;
  position: relative;
  padding-left: 5vw;
`;

export const StyledInput = styled.input`
  width: 30vw;
  height: 8vh;
  padding: 10px;
  border: none;
  background-color: #f8f8f8;
  font-size: 18px;
  color: black;
  font-weight: regular;
  box-sizing: border-box;
  margin-left: 0.5vw;
  margin-right: 1vw;
  padding-left: 1vw;

  &:focus {
    background-color: #efefef;
    outline: none;
  }

  ::placeholder {
    color: red;
    opacity: 1;
  }
`;

export const InputButtonLayout = styled.div`
  width: 40vw;
  height: 20vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 1vh;
  position: relative;
`;
