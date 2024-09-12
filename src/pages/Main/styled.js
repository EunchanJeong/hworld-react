import styled from 'styled-components';
import { StyledButton } from '../../components/Button/styled';

export const Container = styled.div`
  width: 100vw;
  height: 150vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

export const GameStartButton = styled(StyledButton)`
  width: 250px;
  height: 80px;
  position: absolute;
  top: 20%;
  right: 3%;
`;

export const BannerContainer = styled.div`
  width: 100vw;
  height: 34vw;
  position: relative;
  top: 20%;
  margin-bottom: 4%;
`;

export const Banner = styled.div`
  width: 100vw;
`;

export const BannerImage = styled.img`
  width: 100%;
  height: 100%;
`;

export const CoordiNoticeContainer = styled.div`
  width: 95vw;
  height: 50vh;
  position: relative;
  background: #dddddd;
  top: 20%;
`;

export const NoticeContainer = styled.div`
  width: 75%;
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
`;

export const CoordiContainer = styled.div`
  width: 20%;
  height: 100%;
  display: flex;
  background: white;
  top: 0;
  left: 0;
  position: absolute;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  overflow: hidden;
`;

export const Title = styled.div`
  width: 100%;
  height: 17%;
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
`;
