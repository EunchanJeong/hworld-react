import styled from 'styled-components';

/**
 * Contest Bread Crumb styled components
 * @author 정은찬
 * @since 2024.09.11
 * @version 1.0
 *
 * <pre>
 * 수정일        수정자        수정내용
 * ----------  --------    ---------------------------
 * 2024.09.11  	정은찬        최초 생성
 * </pre>
 */

export const WhiteBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80vw;
  height: 7vh;
  position: absolute;
  top: 35%;
  left: 0;
  left: 50%;
  transform: translate(-50%, 0%);
`;

export const TitleDiv = styled.div`
  font-size: 30px;
  color: #284180;
  font-weight: bold;
  margin-left: 0.5%;
`;

export const StatusDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #284180;
  font-weight: bold;
`;

export const HorizonLine = styled.div`
  background-color: #284180;
  width: 100%;
  height: 3px;
  position: absolute;
  bottom: 0;
`;

export const StatusText = styled.p`
  cursor: pointer;
  font-weight: ${(props) => (props.active ? 'bold' : 'medium')};
  color: ${(props) => (props.active ? 'black' : '#A9A9A9')};
  margin: 10px;
  font-size: 20px;
  display: inline-block;
`;
