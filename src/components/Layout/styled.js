import styled from 'styled-components';

/**
 * 공통 레이아웃 styled components
 * @author 김지현
 * @since 2024.09.10
 * @version 1.0
 *
 * <pre>
 * 수정일        	수정자        수정내용
 * ----------  --------    ---------------------------
 * 2024.09.10  	김지현        최초 생성
 * </pre>
 */

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ContentContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 40vh;
  margin-bottom: 20vh;
`;

export const CustomContents = styled.div`
  width: auto;
  justify-content: center;
  align-items: center;
`;
