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
};

export const StyledText = styled.p`
  ${(props) => textStyles[props.theme]}
`;
