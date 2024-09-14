import React from 'react';
import CommonLayout from '../../components/Layout';
import { useParams } from 'react-router-dom';
import BreadCrumb from '../../components/BreadCrumb';
import { useQuery } from 'react-query';
import Spinner from '../../components/Spinner';
import {
  ContentContainer,
  DateContainer,
  DateGuide,
  DateInfo,
  HorizonLine,
  ListButton,
  NoticeContent,
  TitleContainer,
  CustomLink,
  ImageWrapper,
  Image,
} from './styled';
import { GetNoticeDetailAPI } from '../../apis/Notice/NoticeAPI';

/**
 * 공지사항 상세 페이지
 * @author 조영욱
 * @since 2024.09.14
 * @version 1.0
 *
 * <pre>
 * 수정일        	수정자        수정내용
 * ----------  --------    ---------------------------
 * 2024.09.14  	조영욱        최초 생성
 * </pre>
 */

const fetchNotice = async (noticeId) => {
  const response = await GetNoticeDetailAPI(noticeId);
  return response.data;
};

const NoticeDetail = () => {
  const { noticeId } = useParams();

  const { data: notice, isLoading, isError } = useQuery(['noticeDetail', noticeId], () => fetchNotice(noticeId));

  if (isLoading) {
    return <Spinner />;
  }
  if (isError) {
    return <div>오류가 발생했습니다.</div>;
  }

  return (
    <CommonLayout>
      <BreadCrumb title="공지사항"></BreadCrumb>
      <ContentContainer>
        <TitleContainer>
          게임 업데이트 공지
          <ListButton>
            <CustomLink to="/notice">목록</CustomLink>
          </ListButton>
        </TitleContainer>
        <DateContainer>
          <DateGuide>작성일 : &nbsp;</DateGuide>
          <DateInfo>{new Date(notice.createdAt + 'Z').toLocaleDateString('sv')}</DateInfo>
        </DateContainer>
        <HorizonLine />
        <NoticeContent>
          안녕하세요. H-WORLD입니다.
          <br />
          2024년 8월 28일부터 새로운 매장들이 들어와요.
          <br />더 많은 매장을 이용하여 즐거운 쇼핑하세요~!
        </NoticeContent>
        <ImageWrapper>
          <Image src={notice.imageUrl} />
        </ImageWrapper>
      </ContentContainer>
    </CommonLayout>
  );
};

export default NoticeDetail;
