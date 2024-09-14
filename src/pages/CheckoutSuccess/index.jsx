import { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { ConfirmPayment } from '../../apis/Order/OrderAPI';
import CommonLayout from '../../components/Layout';
import { AllContainer, BoxSection, Container, MainButton, SubTitle, Title } from './styled';

/**
 * 결제 성공 페이지
 * @author 조영욱
 * @since 2024.09.13
 * @version 1.0
 *
 * <pre>
 * 수정일        	수정자        수정내용
 * ----------  --------    ---------------------------
 * 2024.09.13  	조영욱        최초 생성
 * </pre>
 */

const fetchConfirmPayment = async (request) => {
  const response = await ConfirmPayment(request);
  return response.data;
};

export function CheckoutSuccess() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    // 쿼리 파라미터 값이 결제 요청할 때 보낸 데이터와 동일한지 반드시 확인하세요.
    // 클라이언트에서 결제 금액을 조작하는 행위를 방지할 수 있습니다.

    const confirmPayment = async () => {
      const requestData = {
        orderId: searchParams.get('orderId'),
        amount: searchParams.get('amount'),
        paymentKey: searchParams.get('paymentKey'),
      };

      try {
        const response = await fetchConfirmPayment(requestData);
        console.log(response);
      } catch (e) {
        navigate('/');
      }
    };

    confirmPayment();
  }, []);

  return (
    <CommonLayout>
      <AllContainer>
        <Title>
          <h1>주문과 결제가 완료되었습니다!</h1>
        </Title>
        <SubTitle>
          <h4>주문 내역은 ' 마이페이지 - 구매 내역 조회 '에서 확인하실 수 있습니다.</h4>
        </SubTitle>
        <Container>
          <BoxSection>{`주문번호: ${searchParams.get('orderId')}`}</BoxSection>
          <BoxSection>{`결제 금액: ${Number(searchParams.get('amount')).toLocaleString()}원`}</BoxSection>
        </Container>

        <BoxSection>
          <MainButton onClick={() => navigate('/')}>확인</MainButton>
        </BoxSection>
      </AllContainer>
    </CommonLayout>
  );
}

export default CheckoutSuccess;
