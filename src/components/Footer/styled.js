import styled from 'styled-components';

/**
 * 푸터 styled components
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

export const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f9f9f9;
  align-items: center;
  justify-content: center;
  height: 163px;
`;

export const FooterThinText = styled.div`
  font-size: 18px;
  font-weight: 100;

  a {
    color: inherit;
  }

  a:visited {
    color: inherit;
  }

  a:hover {
    color: #284180;
  }

  a:active {
    color: inherit;
  }
`;

export const FooterLightText = styled.div`
  font-size: 16px;
  font-weight: 300;
`;

export const FooterMediumText = styled.div`
  font-size: 18px;
  font-weight: 500;
`;
