import styled from 'styled-components';

export const StyledButton = styled.button`
  border-radius: 50px;
  background-color: #284180;
  border: none;
  color: white;
  font-size: 20px;
  font-weight: bold;
  padding: 10px 20px;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.3);
  transition: background-color 0.3s, transform 0.3s;
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
