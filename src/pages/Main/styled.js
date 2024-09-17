import styled from 'styled-components';
import { StyledButton } from '../../components/Button/styled';
import Slider from 'react-slick';

/**
 * 메인 페이지 styled components
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

export const Container = styled.div`
  width: 100vw;
  height: 125vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

export const GameStartButton = styled(StyledButton)`
  width: 250px;
  height: 80px;
  position: absolute;
  top: 27%;
  right: 9%;
  z-index: 11;
`;

export const BannerContainer = styled.div`
  width: 100vw;
  height: 34vw;
  position: relative;
  margin-bottom: 4%;
`;

export const BestCoordinationContainer = styled.div`
  border-radius: 0px;
  display: flex;
  align-items: center;
  width: 100%;
  height: 83%;
  top: 17%;
  box-sizing: border-box;
  position: relative;

  .slick-slider {
    position: relative !important;
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
  }
`;

export const Banner = styled.div`
  width: 100vw;
`;

export const BannerImage = styled.img`
  width: 100%;
  height: 100%;

  &:hover {
    cursor: pointer;
  }
`;

export const CoordiNoticeContainer = styled.div`
  width: 93vw;
  height: 60vh;
  position: relative;
`;

export const NoticeContainer = styled.div`
  width: 77%;
  height: 100%;
  display: flex;
  background: white;
  top: 0;
  right: 0;
  position: absolute;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 4px 4px 7px rgba(0, 0, 0, 0.4);
`;

export const CoordiContainer = styled.div`
  width: 19%;
  height: 100%;
  display: flex;
  background: white;
  top: 0;
  left: 0;
  position: relative;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 4px 4px 7px rgba(0, 0, 0, 0.4);
`;

export const Title = styled.div`
  width: 100%;
  height: 17%;
  box-sizing: border-box;
  background: #284180;
  position: absolute;
  top: 0;
  left: 0;
  color: white;
  font-size: 20px;
  align-items: center;
  display: flex;
  font-weight: bold;
  padding-left: 25px;
  justify-content: space-between;
`;

export const TitleText = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  align-items: center;
  display: flex;
  font-weight: bold;
  color: white;
  font-size: 20px;
`;

export const CoordiPlus = styled.div`
  width: 8%;
  height: 100%;
  align-items: center;
  display: flex;
  justify-content: center;
  padding-right: 6%;
`;

export const CoordiPlusImage = styled.img`
  width: 100%;
  height: auto;
`;

export const NoticeWrapper = styled.div`
  border-radius: 0px;
  display: flex;
  align-items: center;
  width: 100%;
  height: 83%;
  top: 17%;
  box-sizing: border-box;
  position: relative;
  justify-content: space-around;
  padding-left: 2%;
  padding-right: 2%;
`;

export const CustomSlider = styled(Slider)`
  div {
    position: relative;
    display: flex;
  }

  a {
    text-decoration: none;
  }

  .slick-list {
    width: 100% !important;
    height: 100% !important;
    position: absolute !important;
    top: 0;
    left: 0;
  }

  .slick-arrow {
    width: 20px;
    height: 20px;
    z-index: 11;
    top: 41%;
  }

  .slick-prev {
    margin-left: 30px;
    background: url('/left_arrow.svg') no-repeat center center;
    background-size: contain;
  }

  .slick-next {
    margin-right: 30px;
    background: url('/right_arrow.svg') no-repeat center center;
    background-size: contain;
  }

  .slick-prev:before {
    content: '';
  }

  .slick-next:before {
    content: '';
  }

  .slick-slide > div {
    width: 100%;
    height: 100%;
  }

  .slick-slide > div > div > img {
    width: 100%;
    height: 80%;
    object-fit: cover;
  }

  .slick-slide > div > div > div {
    width: 100%;
    height: 20%;
  }
`;
