import React from 'react';

import { ModalOverlay, ModalContent, TitleText, ContentText, ButtonLayout } from './styled';

import Button from '../Button';

const AlertModal = ({ onClose, onConfirm, title, content }) => {
  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <TitleText>{title}</TitleText>
        <ContentText>{content}</ContentText>
        <ButtonLayout>
          <Button onClick={onConfirm}>확인</Button>
          <Button onClick={onClose}>취소</Button>
        </ButtonLayout>
      </ModalContent>
    </ModalOverlay>
  );
};

export default AlertModal;
