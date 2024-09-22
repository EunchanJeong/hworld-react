import styled from 'styled-components';

/**
 * 텍스트 styled components
 * @author 김지현
 * @since 2024.09.11
 * @version 1.0
 *
 * <pre>
 * 수정일        	수정자        수정내용
 * ----------  --------    ---------------------------
 * 2024.09.11  	김지현        최초 생성
 * </pre>
 */

const textStyles = {
  title: {
    fontWeight: 'bold',
    fontSize: '30px',
    color: 'black',
  },
  content: {
    fontWeight: 'bold',
    fontSize: '20px',
    color: 'black',
  },
  subtext: {
    fontWeight: 'medium',
    fontSize: '20px',
    color: 'black',
  },
  graytext: {
    fontWeight: 'medium',
    fontSize: '18px',
    color: 'gray',
  },
  navytext: {
    fontWeight: 'bold',
    fontSize: '30px',
    color: '#284180',
  },
  whitetext: {
    fontWeight: 'bold',
    fontSize: '20px',
    color: 'white',
  },
  navytext2: {
    fontWeight: 'bold',
    fontSize: '20px',
    color: '#284180',
  },
  graytext2: {
    fontWeight: 'medium',
    fontSize: '20px',
    color: '#636363',
  },
};

export const StyledText = styled.p`
  ${(props) => textStyles[props.theme]}
  width: ${({ width }) => width || 'auto'};
`;
