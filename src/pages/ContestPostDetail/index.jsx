import ContestDetailBreadCrumb from '../../components/ContestDetailBreadCrumb';
import CommonLayout from '../../components/Layout';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import Spinner from '../../components/Spinner';
import { GetPostDetailAPI } from '../../apis/Contest/ContestAPI';
import {
  PostDetailContainer,
  PostTitle,
  PostMeta,
  HorizontalLine,
  TitleName,
  TitleNumber,
  ContentDiv,
  ItemDiv,
} from './styled';
import DetailCoordinationPost from '../../components/DetailCoordinationPost';
import Item from '../../components/Item'; // Item 컴포넌트 추가

const ContestPostDetail = () => {
  const { postId } = useParams();

  const fetchPostDetail = async () => {
    try {
      const response = await GetPostDetailAPI(postId);
      console.log(JSON.stringify(response.data));
      return response.data;
    } catch (error) {
      console.error('게시글 상세 조회 오류:', error);
    }
  };

  const { data, isLoading, isError } = useQuery(['postDetail', postId], fetchPostDetail, {
    enabled: !!postId,
  });

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <div>오류가 발생했습니다.</div>;
  }

  const { title, nickname, createdAt, itemList } = data || {}; // itemList 받아오기

  const post = {
    imageUrl: data.imageUrl,
    isRecommended: data.isRecommended,
    postId: postId,
    recommendCount: data.recommendCount,
    replyCount: data.replyCount,
  };

  return (
    <>
      <CommonLayout>
        <ContestDetailBreadCrumb title="코디 대회" />
        <PostDetailContainer>
          <PostTitle>
            <TitleNumber>
              코디 No.{postId}
              &nbsp;|&nbsp;
            </TitleNumber>
            <TitleName>{title}</TitleName>
          </PostTitle>
          <PostMeta>
            <p>작성자: {nickname}</p>
            <p>작성일: {new Date(createdAt).toLocaleDateString()}</p>
          </PostMeta>
          <HorizontalLine />
        </PostDetailContainer>

        <ContentDiv>
          <div>
            <DetailCoordinationPost key={post.postId} post={post} />
          </div>

          <ItemDiv>
            {/* itemList를 순회하여 Item 컴포넌트를 렌더링 */}
            {itemList && itemList.length > 0 ? (
              itemList.map((item) => <Item key={item.itemId} item={item} />)
            ) : (
              <p>등록된 아이템이 없습니다.</p>
            )}
          </ItemDiv>
        </ContentDiv>
      </CommonLayout>
    </>
  );
};

export default ContestPostDetail;
