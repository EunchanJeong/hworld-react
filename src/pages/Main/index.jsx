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
} from './styled';
import CommonLayout from '../../components/Layout';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import BannerPrada from '../../assets/images/BannerPrada.png';
import './dots.css';

const Main = () => {
  const bannerList = [
    { title: 'H-WORLD X PRADA', image: BannerPrada, id: 1 },
    { title: '출석 이벤트', image: BannerPrada, id: 2 },
    { title: '8월 코디 우수작', image: BannerPrada, id: 3 },
    { title: '썸머 포인트 SHOP', image: BannerPrada, id: 4 },
    { title: '신규 이벤트', image: BannerPrada, id: 5 },
  ];
  const settings = {
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
  return (
    <>
      <CommonLayout>
        <Link to="/download">
          <GameStartButton fontSize="24px">PLAY GAME</GameStartButton>
        </Link>
        <Container>
          <BannerContainer>
            <Slider {...settings}>
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
            </CoordiContainer>
            <NoticeContainer>
              <Title>공지</Title>
            </NoticeContainer>
          </CoordiNoticeContainer>
        </Container>
      </CommonLayout>
    </>
  );
};

export default Main;
