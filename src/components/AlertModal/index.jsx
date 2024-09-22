import React from 'react';

import { ModalOverlay, ModalContent, TitleText, ContentText, ButtonLayout, StyledButton } from './styled';

/**
 * 알림 모달 컴포넌트
 * @author 김지현
 * @since 2024.09.13
 * @version 1.0
 *
 * <pre>
 * 수정일        	수정자        수정내용
 * ----------  --------    ---------------------------
 * 2024.09.13  	김지현        최초 생성
 * </pre>
 */

const AlertModal = ({ onClose, onConfirm, title, content }) => {
  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <TitleText>{title}</TitleText>
        <ContentText>{content}</ContentText>
        <ButtonLayout>
          <StyledButton buttonType="confirm" onClick={onConfirm}>
            확인
          </StyledButton>
          <StyledButton buttonType="cancel" onClick={onClose}>
            취소
          </StyledButton>
        </ButtonLayout>
      </ModalContent>
    </ModalOverlay>
  );
};

export default AlertModal;
