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
`;

export const PostMeta = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 19px;
  margin-bottom: 0;
  font-size: 14px;
  width: 25vw;
  padding: 1px;
`;

export const PostAuthorDiv = styled.div`
  display: inline-flex; /* 자식 요소의 width에 맞춰 부모 div의 크기를 조정 */
  align-items: center; /* 자식들이 세로 가운데 정렬되도록 */
`;

export const PostAuthor = styled.p`
  font-size: 18px;
  margin: 0;
  font-weight: ${(props) => props.fontWeight || 'normal'}; /* props로 font-weight를 동적으로 설정 */
`;

export const PostAuthorContent = styled.p`
  font-size: 18px;
  margin: 0;
  margin-left: 3px;
  font-weight: ${(props) => props.fontWeight || 'normal'}; /* props로 font-weight를 동적으로 설정 */
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
  font-weight: 300;
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

export const ReplyContainer = styled.div`
  margin-top: 60px;
`;

export const ReplyInputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ReplyInput = styled.input`
  font-size: 20px;
  width: 68vw;
  height: 7vh;
  padding: 10px;
  margin-right: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

export const ReplyButton = styled.button`
  padding: 13px 20px;
  background-color: #284180;
  height: 10vh;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 20px;
`;

export const ReplyContentContainer = styled.div`
  margin-top: 40px;
`;

export const ReplyContent = styled.p`
  font-size: 20px;
  margin: 5px 0;
  font-weight: 300;
`;

export const ReplyItem = styled.div`
  margin-top: 15px;
  border-bottom: 1px solid #eee;
  padding-bottom: 10px;
`;

export const ReplyHeader = styled.div`
  display: flex;
  justify-content: flex-start; /* 자식들이 왼쪽에 정렬 */
  align-items: baseline;
`;

export const ReplyAuthor = styled.p`
  font-size: 20px;
  align-items: baseline;
  margin: 0;
  font-weight: bold;
`;

export const ReplyCreatedAt = styled.p`
  font-size: 15px;
  align-items: baseline;
  font-weight: 100;
  margin: 0;
  margin-left: 10px;
`;

export const DeleteButton = styled.button`
  background: none;
  border: none;
  color: red;
  cursor: pointer;
`;

// 이미지 버튼 스타일 정의
export const PaginationImageButton = styled.img`
  width: 0.7vw;
  height: auto;
  cursor: pointer;
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
  &:hover {
    opacity: ${(props) => (props.disabled ? 0.5 : 0.8)};
  }
`;

export const PageinationContainer = styled.div`
  text-align: center;
  margin-top: 50px;
`;

// 페이지 번호 스타일 정의
export const PageNumber = styled.span`
  cursor: pointer;
  margin: 0 20px 0 20px;
  font-size: 25px;
  font-weight: ${(props) => (props.active ? 'bold' : 'medium')};
  color: ${(props) => (props.active ? 'black' : '#A9A9A9')};
  &:hover {
    color: #4caf50;
  }
`;

// 페이지 번호 스타일 정의
export const ReplyTop = styled.p`
  font-size: 25px;
  font-weight: bold;
  border-bottom: 2px solid #eee;
`;
