import styled from 'styled-components';

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
};

export const StyledText = styled.p`
  ${(props) => textStyles[props.theme]}
  width: ${({ width }) => width || 'auto'};
`;
