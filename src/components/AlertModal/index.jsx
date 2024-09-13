import React from 'react';

import { ModalOverlay, ModalContent, TitleText, ContentText, ButtonLayout, StyledButton } from './styled';

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
