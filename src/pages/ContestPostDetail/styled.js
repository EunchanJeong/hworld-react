import styled from 'styled-components';

export const PostDetailContainer = styled.div`
  padding: 0;
  width: 80vw;
  margin-top: 50px;
  margin-bottom: 30px;
`;

export const PostTitle = styled.h1`
  display: flex;
  font-size: 24px;
  margin-bottom: 0px;
  border: 1px solid orange;
`;

export const PostMeta = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0;
  font-size: 14px;
  width: 16vw;
  border: 1px solid yellow;
  padding: 1px;
`;

export const HorizontalLine = styled.hr`
  border: 0;
  height: 1px;
  background-color: #ccc;
  margin: 0;
  /* border: 1px solid green; */
`;

export const TitleNumber = styled.span`
  font-size: 24px;
  font-weight: bold;
`;
export const TitleName = styled.span`
  font-size: 24px;
  font-weight: lighter;
`;

export const ContentDiv = styled.div`
  display: flex;
  justify-content: space-between;
  border: 1px solid purple;
  height: 60vh;
`;

export const ItemDiv = styled.div`
  border: 1px solid red;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 45vw;
`;
