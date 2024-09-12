import styled from 'styled-components';

export const Layout = styled.div`
  width: 80vw;
  height: wrap-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const CoordinationLayout = styled.div`
  width: 70vw;
  height: 40vh;
  display: flex;
  overflow-x: auto;
  flex-direction: row;
  gap: 2vw;
  padding: 10px;
  margin-top: 10vh;
  margin-bottom: 10vh;
  align-items: center;

  &::-webkit-scrollbar {
    height: 1.5vh;
  }

  &::-webkit-scrollbar-track {
    background: #f0f0f0;
    border-radius: 50px;
  }

  &::-webkit-scrollbar-thumb {
    background: #c1c1c1;
    border-radius: 50px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #b3b3b3;
  }
`;

export const CoordinationContainer = styled.div`
  width: 15vw;
  height: 33vh;
  border-radius: 15px;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.3);
  margin-bottom: 1vh;
  border: ${({ isSelected }) => (isSelected ? '3px solid #284180' : 'none')};
  overflow: hidden;
  flex-shrink: 0;
`;

export const CoordinationImage = styled.img`
  width: 15vw;
  height: 33vh;
`;

export const CustomBreadCrumb = styled.div`
  width: 72vw;
  height: 10vh;
`;

export const CustomBreadCrumbTitle = styled.div`
  font-size: 25px;
  color: #284180;
  font-weight: bold;
  margin-left: 0.5%;
  margin-bottom: 2vh;
`;

export const CustomBreadCrumbLine = styled.div`
  background-color: #ededed;
  width: 100%;
  height: 3px;
  bottom: 0;
`;

export const ItemLayout = styled.div`
  width: 70vw;
  height: 30vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  gap: 2vw;
`;

export const ItemContainer = styled.div`
  width: 14vw;
  height: 25vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 2vh;
`;

export const ItemImage = styled.img`
  width: 12vw;
  height: 12vw;
  border: 1px solid #c7c7c7;
`;

export const ItemText = styled.div`
  width: 10vw;
  height: 3vh;
  text-align: center;
  font-size: 20px;
  color: black;
  font-weight: light;
`;
