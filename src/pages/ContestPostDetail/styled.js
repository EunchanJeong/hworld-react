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
  height: 60vh;
`;

export const ItemDiv = styled.div`
  border: 1px solid #eee;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center; /* 자식 요소를 부모의 왼쪽에 정렬 */
  justify-content: center-start; /* 자식 요소를 부모의 위쪽에 정렬 */
  height: 100%;
  width: 47vw;
  overflow-y: auto; /* 세로 스크롤 활성화 */
  overflow-x: hidden; /* 가로 스크롤을 막음 */
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.3);

  /* 스크롤바 숨김 */
  scrollbar-width: none; /* Firefox용 */
  -ms-overflow-style: none; /* IE 및 Edge용 */
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari 및 Opera용 */
  }

  cursor: grab; /* 드래그 가능 커서 */
`;
