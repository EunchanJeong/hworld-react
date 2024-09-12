import React from 'react';
import { WhiteBox, TitleDiv, StatusDiv, HorizonLine, StatusText } from './styled';
import Text from '../../components/Text';

/**
 * Contest Bread Crumb 컴포넌트
 * @author 정은찬
 * @since 2024.09.11
 * @version 1.0
 *
 * <pre>
 * 수정일       수정자        수정내용
 * ----------  --------    ---------------------------
 * 2024.09.11  	정은찬        최초 생성
 * </pre>
 */

const ContestBreadCrumb = ({ title, contestStatus, onStatusChange }) => {
  return (
    <WhiteBox>
      <TitleDiv>{title}</TitleDiv>
      <StatusDiv>
        {/* 진행중 탭 */}
        <StatusText
          active={contestStatus === 'ongoing'} // active 상태 확인
          onClick={() => onStatusChange('ongoing')} // 클릭 시 상태 변경
        >
          진행중
        </StatusText>

        {/* 구분자 */}
        <Text theme="content">|</Text>

        {/* 완료 탭 */}
        <StatusText
          active={contestStatus === 'finished'} // active 상태 확인
          onClick={() => onStatusChange('finished')} // 클릭 시 상태 변경
        >
          완료
        </StatusText>
      </StatusDiv>
      <HorizonLine />
    </WhiteBox>
  );
};

export default ContestBreadCrumb;
