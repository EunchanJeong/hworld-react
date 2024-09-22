import React, { useState } from 'react';
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
  CoordiPlus,
  TitleText,
  CoordiPlusImage,
} from './styled';
import Spinner from '../../components/Spinner';
import CommonLayout from '../../components/Layout';
import { Link, useNavigate } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import BannerPrada from '../../assets/images/BannerPrada.png';
import BannerHeendy from '../../assets/images/BannerHeendy.png';
import BannerAutumn from '../../assets/images/BannerAutumn.png';
import BannerCoordination from '../../assets/images/BannerCoordination.png';
import BannerAttendance from '../../assets/images/BannerAttendance.png';
import './dots.css';
import BestCoordination from '../../components/BestCoordination';
import NoticeSummary from '../../components/NoticeSummary';
import { GetNoticeListAPI } from '../../apis/Notice/NoticeAPI';
import { useQuery } from 'react-query';
import { GetBestPostAPI } from '../../apis/Contest/ContestAPI';
import white_plus from '../../assets/images/white_plus.svg';
import { CustomLink } from '../NoticeList/styled';
import DownloadModal from '../../components/DownloadModal';

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

const fetchNoticeList = async () => {
  const response = await GetNoticeListAPI(1, 10, 0);
  return response.data;
};

const fetchBestPost = async () => {
  const response = await GetBestPostAPI();
  return response.data;
};

const Main = () => {
  const navigate = useNavigate();

  const [isDragging, setIsDragging] = useState(false);
  const [mouseDownPos, setMouseDownPos] = useState({ x: 0, y: 0 });
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleMouseDown = (e) => {
    setMouseDownPos({ x: e.clientX, y: e.clientY });
    setIsDragging(false); // 초기화
  };

  const handleMouseUp = (e) => {
    const deltaX = Math.abs(e.clientX - mouseDownPos.x);
    const deltaY = Math.abs(e.clientY - mouseDownPos.y);
    // 일정 거리 이상 마우스가 움직이면 드래그로 간주
    if (deltaX > 5 || deltaY > 5) {
      setIsDragging(true);
    }
  };

  const { data: noticeListResponse, isLoading, isError } = useQuery('noticeList', fetchNoticeList);

  const {
    data: bestPostResponse,
    isLoading: isLoadingPost,
    isError: isErrorPost,
  } = useQuery('bestPost', fetchBestPost);

  if (isLoading || isLoadingPost) {
    return <Spinner />;
  }
  if (isError || isErrorPost) {
    return <div>오류가 발생했습니다.</div>;
  }

  const noticeList = noticeListResponse.noticeList;

  const postList = bestPostResponse.postList;
  const bannerList = [
    { title: 'H-WORLD X PRADA', image: BannerPrada, id: 1 },
    { title: '흰디를 찾아라', image: BannerHeendy, id: 2 },
    { title: '나만의 코디', image: BannerCoordination, id: 3 },
    { title: '가을 신상품 판매 시작', image: BannerAutumn, id: 4 },
    { title: '출석 이벤트', image: BannerAttendance, id: 5 },
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
    initialSlide: 0, // 첫 컨텐츠 번호
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
    initialSlide: 0, // 첫 컨텐츠 번호
  };

  return (
    <>
      <CommonLayout>
        {/* <a
          href="https://oasis-hworld.s3.ap-northeast-2.amazonaws.com/H-WORLD_MacOS.zip"
          target="_blank"
          rel="noopner noreferrer"
        > */}
        {isModalOpen && <DownloadModal onClose={() => setIsModalOpen(false)} />}
        <GameStartButton onClick={() => setIsModalOpen(true)} fontSize="24px">
          PLAY GAME
        </GameStartButton>
        {/* </a> */}
        <Container>
          <BannerContainer>
            <Slider {...bannerSettings}>
              {bannerList.map((banner, index) => (
                <Banner key={index}>
                  <BannerImage
                    src={banner.image}
                    onClick={() => {
                      if (!isDragging) {
                        navigate(`/notice/${banner.id}`);
                      }
                    }}
                    onMouseDown={handleMouseDown}
                    onMouseUp={handleMouseUp}
                  />
                </Banner>
              ))}
            </Slider>
          </BannerContainer>
          <CoordiNoticeContainer>
            <CoordiContainer>
              <Title>
                <TitleText>베스트 코디</TitleText>

                <CoordiPlus>
                  <CustomLink to="/contest">
                    <CoordiPlusImage src={white_plus} />
                  </CustomLink>
                </CoordiPlus>
              </Title>
              <BestCoordinationContainer>
                <CustomSlider {...bestCoordinationSettings}>
                  {postList.map((post, index) => (
                    <BestCoordination post={post} />
                  ))}
                </CustomSlider>
              </BestCoordinationContainer>
            </CoordiContainer>
            <NoticeContainer>
              <Title>공지</Title>
              <NoticeWrapper>
                <NoticeSummary
                  categoryName="공지사항"
                  noticeList={noticeList.filter((notice) => notice.category === 2)}
                />
                <NoticeSummary
                  categoryName="이벤트"
                  noticeList={noticeList.filter((notice) => notice.category === 3)}
                />
                <NoticeSummary
                  categoryName="수상작 안내"
                  noticeList={noticeList.filter((notice) => notice.category === 1)}
                />
              </NoticeWrapper>
            </NoticeContainer>
          </CoordiNoticeContainer>
        </Container>
      </CommonLayout>
    </>
  );
};

export default Main;
