import styled from 'styled-components';

export const SignUpLayout = styled.div`
  width: 60vw;
  height: 95vh;
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
  width: 50vw;
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

export const GenderButton = styled.button`
  border-radius: 50px;
  background-color: white;
  border: none;
  color: #284180;
  font-size: 20px;
  font-weight: bold;
  padding: 5px 35px;
  margin-left: 0.5vw;
  margin-right: 1vw;
  border: 3px solid #284180;

  background-color: ${({ isGenderClicked }) => (isGenderClicked ? '#284180' : 'white')};
  color: ${({ isGenderClicked }) => (isGenderClicked ? 'white' : '#284180')};

  &:hover {
    cursor: pointer;
  }
`;

export const CheckButton = styled.button`
  position: absolute;
  right: 9vw;
  border-radius: 50px;
  background-color: white;
  border: none;
  color: #284180;
  font-size: 20px;
  font-weight: bold;
  padding: 5px 20px;
  margin-right: 2vw;
  border: 3px solid #284180;

  &:focus {
    background-color: #284180;
    color: white;
  }
  &:hover {
    background-color: #284180;
    color: white;
    cursor: pointer;
  }
`;
