import styled from 'styled-components';

/**
 * 콘테스트 게시글 상세조회 페이지 styled components
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
  margin-top: 10px;
  margin-bottom: 0;
  font-size: 14px;
  width: wrap-content;
  padding: 1px;
  gap: 30px;
`;

export const PostAuthorDiv = styled.div`
  display: inline-flex;
  align-items: center;
`;

export const PostAuthor = styled.p`
  font-size: 18px;
  margin: 0;
  font-weight: ${(props) => props.fontWeight || 'normal'};
`;

export const PostAuthorContent = styled.p`
  font-size: 18px;
  margin: 0;
  margin-left: 3px;
  font-weight: ${(props) => props.fontWeight || 'normal'};
`;

export const HorizontalLine = styled.hr`
  border: 0;
  height: 1px;
  background-color: #ccc;
  margin-bottom: 10px;
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
  align-items: center;
  justify-content: center-start;
  height: 100%;
  width: 47vw;
  overflow-y: auto;
  overflow-x: hidden;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.3);

  scrollbar-width: none;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }

  cursor: grab;
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
  justify-content: flex-start;
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

export const ReplyTop = styled.p`
  font-size: 25px;
  font-weight: bold;
  border-bottom: 2px solid #eee;
`;
