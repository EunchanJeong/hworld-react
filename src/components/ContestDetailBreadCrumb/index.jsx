import React from 'react';
import { WhiteBox, TitleDiv, HorizonLine } from './styled';
import Text from '../../components/Text';
import ContestListtButton from '../../components/ContestListButton';

/**
 * Contest Detail Bread Crumb 컴포넌트
 * @author 정은찬
 * @since 2024.09.13
 * @version 1.0
 *
 * <pre>
 * 수정일       수정자        수정내용
 * ----------  --------    ---------------------------
 * 2024.09.13  	정은찬        최초 생성
 * </pre>
 */

const ContestDetailBreadCrumb = ({ title }) => {
  return (
    <WhiteBox>
      <TitleDiv>{title}</TitleDiv>
      <ContestListtButton fontSize="20px">목록</ContestListtButton>
      <HorizonLine />
    </WhiteBox>
  );
};

export default ContestDetailBreadCrumb;
