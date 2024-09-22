import styled from 'styled-components';

/**
 * 마이페이지 내 게시글 조회 페이지 styled components
 * @author 김지현
 * @since 2024.09.12
 * @version 1.0
 *
 * <pre>
 * 수정일        수정자        수정내용
 * ----------  --------    ---------------------------
 * 2024.09.12  	김지현        최초 생성
 * </pre>
 */

export const Layout = styled.div`
  width: 80vw;
  height: wrap-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const LayoutHeader = styled.div`
  width: 80vw;
  height: 10vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 5vh;
`;

export const SortButtonLayout = styled.div`
  width: wrap-content;
  height: wrap-content;
  flex-direction: row;
  margin-left: 2vw;
`;

export const SortButton = styled.button`
  width: wrap-content;
  height: wrap-content;
  background-color: white;
  border: none;
  color: #284180;
  font-weight: ${(props) => (props.isactive ? 700 : 100)};
  font-size: 25px;
  margin-right: 1vw;

  &:hover {
    cursor: pointer;
  }
`;

export const SelectWinnerButton = styled.button`
  width: 10vw;
  height: 70%;
  background-color: white;
  border: 3px solid #284180;
  border-radius: 10px;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.3);
  color: #284180;
  font-weight: 600;
  font-size: 20px;
  margin-right: 2vw;

  &:hover {
    cursor: pointer;
  }
`;

export const PostContainer = styled.div`
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.3);
  align-items: center;
  width: 15vw;
  height: 40vh;
  overflow: hidden;
  box-sizing: border-box;
`;

export const CoordinationImage = styled.img`
  width: 100%;
  height: 85%;
  border-radius: 10px 10px 0 0;
  box-sizing: border-box;
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 6.4vh;
  box-sizing: border-box;
  padding-left: 8%;
  padding-right: 8%;
`;

export const RecommendSection = styled.div`
  display: flex;
  width: 3.8vw;
  justify-content: space-between;
  align-items: center;
`;

export const RecommendButton = styled.button`
  display: inline-flex;
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  width: wrap-content;
  height: auto;
  justify-content: center;
  align-items: center;
  padding-top: 5px;
`;

export const HeartIcon = styled.img`
  display: block;
  width: 2.3vw;
  height: auto;
  padding: 0;
`;

export const CommentSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 3.8vw;
`;

export const CommentIcon = styled.img`
  display: flex;
  width: 2vw;
  height: auto;
`;

export const PostListContainer = styled.div`
  width: 75vw;
  height: wrap-content;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 5vh;
`;

export const PaginationContainer = styled.div`
  width: 20vw;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 5vh;
`;

export const PaginationImageButton = styled.img`
  width: wrap-content;
  height: wrap-content;
  cursor: pointer;
`;

export const PageButton = styled.span`
  cursor: pointer;
  margin: 0 5px;
  font-size: 25px;
  font-weight: ${(props) => (props.isactive ? 700 : 300)};
  color: black;
`;
