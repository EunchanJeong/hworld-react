import styled from 'styled-components';

/**
 * 결제 성공 styled components
 * @author 조영욱
 * @since 2024.09.13
 * @version 1.0
 *
 * <pre>
 * 수정일        	수정자        수정내용
 * ----------  --------    ---------------------------
 * 2024.09.13  	조영욱        최초 생성
 * </pre>
 */

export const BoxSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 3%;
  margin-bottom: 3%;
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 3%;
  margin-bottom: 0;
  padding: 0;
`;

export const SubTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 5%;
  padding: 0;
`;

export const MainButton = styled.button`
  border-radius: 50px;
  background-color: #284180;
  border: none;
  color: white;
  font-size: 24px;
  font-weight: bold;
  padding: 15px 50px;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.3);
  margin-top: 15%;
  &:hover {
    background-color: rgba(40, 65, 128, 0.9);
    transform: scale(1);
    cursor: pointer;
  }
`;

export const Container = styled.div`
  width: 80%;
  height: auto;
  border: 2px solid grey;
  border-radius: 10px;
  padding-top: 3%;
  padding-bottom: 3%;
`;

export const AllContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
