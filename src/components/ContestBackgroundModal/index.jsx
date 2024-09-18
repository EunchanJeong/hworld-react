import React, { useState } from 'react';
import {
  ModalContainer,
  ModalContent,
  CoordinationList,
  CoordinationItem,
  Checkbox,
  CoordinationDetails,
  ModalActions,
  Button,
  CloseButton,
  CoordinationTitle,
  CoordinationImage,
  ModalName,
  HorizonLine,
} from './styled';

import CloseButtonImg from '../../assets/images/close_button.svg';
import SummerImg from '../../assets/images/summer.jpg';
import FallImg from '../../assets/images/fall.jpg';
import WinterImg from '../../assets/images/winter.jpg';

const backgrounds = [
  { id: 1, name: 'Summer', image: SummerImg },
  { id: 2, name: 'Fall', image: FallImg },
  { id: 3, name: 'Winter', image: WinterImg },
];

const ContestBackgroundModal = ({ onClose, onSubmit }) => {
  const [selectedBackground, setSelectedBackground] = useState(null); // 단일 값으로 변경

  // 배경 선택 처리 함수 (단일 선택)
  const handleBackgroundSelect = (background) => {
    setSelectedBackground(background);
  };

  // 선택된 배경을 본 페이지에 전달하는 함수
  const handleSubmit = () => {
    onSubmit(selectedBackground); // 단일 선택된 배경 전달
    onClose();
  };

  // 모달 외부 클릭 처리 함수
  const handleOutsideClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <ModalContainer onClick={handleOutsideClick}>
      <ModalContent>
        {/* 오른쪽 위 닫기 버튼 */}
        <CloseButton src={CloseButtonImg} onClick={onClose} />
        <ModalName>배경 선택</ModalName>
        <HorizonLine />

        {/* 배경 리스트 */}
        <CoordinationList>
          {backgrounds.map((background) => (
            <CoordinationItem key={background.id}>
              <CoordinationDetails>
                <CoordinationTitle>{background.name}</CoordinationTitle>
              </CoordinationDetails>
              <CoordinationImage src={background.image} alt={background.name} />

              <Checkbox
                type="checkbox"
                checked={selectedBackground?.id === background.id} // 단일 선택 비교
                onChange={() => handleBackgroundSelect(background)} // 배경 선택
              />
            </CoordinationItem>
          ))}
        </CoordinationList>

        <ModalActions>
          <Button onClick={handleSubmit}>선택</Button>
        </ModalActions>
      </ModalContent>
    </ModalContainer>
  );
};

export default ContestBackgroundModal;
