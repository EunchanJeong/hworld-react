import React from 'react';

import {
  ModalOverlay,
  ModalContent,
  TitleText,
  ButtonLayout,
  StyledButton,
  LogoImage,
  StyledButtonText,
  LogoImageBig,
  StyledA,
} from './styled';
import windows_logo from '../../assets/images/windows_logo.svg';
import mac_logo from '../../assets/images/mac_logo.svg';

const DownloadModal = ({ onClose }) => {
  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <TitleText>H-WORLD 다운로드</TitleText>
        <ButtonLayout>
          <StyledA
            href="https://oasis-hworld.s3.ap-northeast-2.amazonaws.com/H-WORLD_Windows.zip"
            target="_blank"
            rel="noopner noreferrer"
          >
            <StyledButton buttonType="confirm" onClick={onClose}>
              <LogoImageBig src={windows_logo} />
              <StyledButtonText>Windows</StyledButtonText>
            </StyledButton>
          </StyledA>
          <StyledA
            href="https://oasis-hworld.s3.ap-northeast-2.amazonaws.com/H-WORLD_MacOS.zip"
            target="_blank"
            rel="noopner noreferrer"
          >
            <StyledButton buttonType="cancel" onClick={onClose}>
              <LogoImage src={mac_logo} />
              <StyledButtonText>MacOS</StyledButtonText>
            </StyledButton>
          </StyledA>
        </ButtonLayout>
      </ModalContent>
    </ModalOverlay>
  );
};

export default DownloadModal;
