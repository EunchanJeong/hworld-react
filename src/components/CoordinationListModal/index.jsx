import React, { useState } from 'react';
import { useQuery } from 'react-query';
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
  CoordinationContainer,
  CoordinationTitle,
  CategoryName,
  ItemName,
  Items,
  ItemContainer,
  ModalName,
  HorizonLine,
  CoordinationImage,
} from './styled';

import { GetCoordinationListAPI } from '../../apis/Contest/ContestAPI';
import CloseButtonImg from '../../assets/images/close_button.svg';

// 코디 리스트를 받아오는 API 함수
const fetchCoordinationList = async () => {
  const response = await GetCoordinationListAPI();
  return response.data;
};

const CoordinationListModal = ({ onClose, onSubmit }) => {
  const [selectedCoordination, setSelectedCoordination] = useState(null); // 단일 값으로 변경

  // React Query로 코디 리스트 받아오기
  const { data: coordinationList, isLoading, isError } = useQuery('coordinationList', fetchCoordinationList);

  if (isLoading) return <p>로딩 중...</p>;
  if (isError) return <p>오류가 발생했습니다.</p>;

  // 체크박스 선택 처리 함수 (단일 선택)
  const handleCheckboxChange = (coordination) => {
    setSelectedCoordination(coordination); // 새로운 코디 선택 시 이전 선택한 항목이 취소됨
  };

  // 선택된 코디를 본 페이지에 전달하는 함수
  const handleSubmit = () => {
    onSubmit([selectedCoordination]); // 단일 선택된 값을 배열로 전달
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
        <ModalName>코디 불러오기</ModalName>
        <HorizonLine />
        <CoordinationList>
          {coordinationList.map((coordination) => (
            <CoordinationItem key={coordination.coordinationId}>
              <CoordinationContainer>
                <Checkbox
                  type="checkbox"
                  checked={selectedCoordination === coordination} // 단일 선택 비교
                  onChange={() => handleCheckboxChange(coordination)} // 선택 시 이전 항목 취소
                />
                <CoordinationDetails>
                  <CoordinationTitle>{coordination.title}</CoordinationTitle>
                  <Items>
                    {coordination.itemList.length > 0 ? (
                      coordination.itemList.map((item, index) => (
                        <ItemContainer key={index}>
                          <CategoryName>{item.categoryName}:</CategoryName>
                          <ItemName>{item.itemName}</ItemName>
                        </ItemContainer>
                      ))
                    ) : (
                      <span>아이템 없음</span>
                    )}
                  </Items>
                </CoordinationDetails>
              </CoordinationContainer>
              <CoordinationImage src={coordination.coordinationImageUrl} alt={coordination.title} />
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

export default CoordinationListModal;
