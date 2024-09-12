import React from 'react';
import {
  Container,
  GameStartButton,
  BannerImage,
  Banner,
  BannerContainer,
  CoordiNoticeContainer,
  NoticeContainer,
  Title,
  CoordiContainer,
  BestCoordinationContainer,
  CustomSlider,
  NoticeWrapper,
} from './styled';
import CommonLayout from '../../components/Layout';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import BannerPrada from '../../assets/images/BannerPrada.png';
import './dots.css';
import BestCoordination from '../../components/BestCoordination';
import NoticeSummary from '../../components/NoticeSummary';

/**
 * 메인 페이지
 * @author 조영욱
 * @since 2024.09.11
 * @version 1.0
 *
 * <pre>
 * 수정일        	수정자        수정내용
 * ----------  --------    ---------------------------
 * 2024.09.11  	조영욱        최초 생성
 * </pre>
 */

const Main = () => {
  const postList = [
    {
      postId: 4,
      imageUrl:
        'http://thumbnail.10x10.co.kr/webimage/image/basic600/515/B005159997.jpg?cmd=thumb&w=500&h=500&fit=true&ws=false', // 코디 이미지 URL (대체 이미지)
      recommendCount: 10, // 추천 수
      replyCount: 5, // 댓글 수
      isRecommended: true, // 추천 여부
    },
    {
      postId: 5,
      imageUrl:
        'http://thumbnail.10x10.co.kr/webimage/image/basic600/515/B005159997.jpg?cmd=thumb&w=500&h=500&fit=true&ws=false', // 코디 이미지 URL (대체 이미지)
      recommendCount: 20, // 추천 수
      replyCount: 23, // 댓글 수
      isRecommended: false, // 추천 여부
    },
    {
      postId: 6,
      imageUrl:
        'http://thumbnail.10x10.co.kr/webimage/image/basic600/515/B005159997.jpg?cmd=thumb&w=500&h=500&fit=true&ws=false', // 코디 이미지 URL (대체 이미지)
      recommendCount: 15, // 추천 수
      replyCount: 17, // 댓글 수
      isRecommended: true, // 추천 여부
    },
  ];
  const bannerList = [
    { title: 'H-WORLD X PRADA', image: BannerPrada, id: 1 },
    { title: '출석 이벤트', image: BannerPrada, id: 2 },
    { title: '8월 코디 우수작', image: BannerPrada, id: 3 },
    { title: '썸머 포인트 SHOP', image: BannerPrada, id: 4 },
    { title: '신규 이벤트', image: BannerPrada, id: 5 },
  ];
  const bannerSettings = {
    dots: true, // 개수 표시 점,
    dotsClass: 'custom-dots',
    infinite: true, // 무한 캐러셀
    speed: 500, // 다음 컨텐츠 까지의 속도
    slidesToShow: 1, // 화면에 보이는 컨텐츠 수
    slidesToScroll: 1, // 스크롤 시 넘어가는 컨텐츠 수
    // centerMode: true, // 현재 컨텐츠 가운데 정렬
    // centerPadding: '10px', // 중앙 컨텐츠 padding 값
    autoplay: true, // 자동 캐러셀
    autoplaySpeed: 3000, // 자동 캐러셀 속도
    draggable: true, // 드래그
    fade: false, // 사라졌다 나타나는 효과
    arrows: true, // 좌,우 버튼
    vertical: false, // 세로 캐러셀
    initialSlide: 1, // 첫 컨텐츠 번호
    pauseOnFocus: false, // focus시 정지
    pauseOnHover: false, // hover시 정지
    appendDots: (dots) => (
      <div
        style={{
          // 흰색 투명한 박스
          backgroundColor: 'rgba(255, 255, 255, 0.42)',
          width: '100%',
          height: '17%',
          bottom: 0,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'absolute',
        }}
      >
        <ul
          style={{
            margin: '0px',
            padding: '0px',
            width: '90%',
            height: '100%',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          {dots}
        </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          color: '#284180',
          fontSize: '16px',
          fontWeight: 'bold',
        }}
      >
        {bannerList[i].title}
      </div>
    ),
  };
  const bestCoordinationSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1, // 화면에 보이는 컨텐츠 수
    slidesToScroll: 1, // 스크롤 시 넘어가는 컨텐츠 수
    // centerMode: true, // 현재 컨텐츠 가운데 정렬
    // centerPadding: '10px', // 중앙 컨텐츠 padding 값
    autoplay: true, // 자동 캐러셀
    autoplaySpeed: 4000, // 자동 캐러셀 속도
    arrows: true, // 좌,우 버튼
    pauseOnFocus: false, // focus시 정지
    pauseOnHover: false, // hover시 정지
  };

  return (
    <>
      <CommonLayout>
        <Link to="/download">
          <GameStartButton fontSize="24px">PLAY GAME</GameStartButton>
        </Link>
        <Container>
          <BannerContainer>
            <Slider {...bannerSettings}>
              {bannerList.map((banner, index) => (
                <Banner key={index}>
                  <BannerImage src={banner.image} />
                </Banner>
              ))}
            </Slider>
          </BannerContainer>
          <CoordiNoticeContainer>
            <CoordiContainer>
              <Title>베스트 코디</Title>
              <BestCoordinationContainer>
                <CustomSlider {...bestCoordinationSettings}>
                  {postList.map((post, index) => (
                    <BestCoordination post={postList[index]} />
                  ))}
                </CustomSlider>
              </BestCoordinationContainer>
            </CoordiContainer>
            <NoticeContainer>
              <Title>공지</Title>
              <NoticeWrapper>
                <NoticeSummary categoryName="공지사항" noticeList={[{ category: 1 }]} />
                <NoticeSummary categoryName="이벤트" noticeList={[{ category: 1 }]} />
                <NoticeSummary categoryName="수상작 안내" noticeList={[{ category: 1 }]} />
              </NoticeWrapper>
            </NoticeContainer>
          </CoordiNoticeContainer>
        </Container>
      </CommonLayout>
    </>
  );
};

export default Main;
