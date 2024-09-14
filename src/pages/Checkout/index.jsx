import { loadTossPayments, ANONYMOUS } from '@tosspayments/tosspayments-sdk';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * 토스페이먼츠 결제 페이지
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

const clientKey = 'test_gck_docs_Ovk5rk1EwkEbP0W43n07xlzm';
const customerKey = 'hqOy4Yozu9ETEl6MDLmQH';

export function Checkout() {
  const location = useLocation();
  const { order, deliveryAddress } = location.state || {};

  console.log(`order: ${JSON.stringify(order, null, 2)}\ndeliveryAddress: ${JSON.stringify(deliveryAddress, null, 2)}`);

  const [amount, setAmount] = useState({
    currency: 'KRW',
    value: order.amount, // 파라미터로 받기 (order.amount)
  });
  const [ready, setReady] = useState(false);
  const [widgets, setWidgets] = useState(null);

  useEffect(() => {
    async function fetchPaymentWidgets() {
      // ------  결제위젯 초기화 ------
      const tossPayments = await loadTossPayments(clientKey);
      // 회원 결제
      const widgets = tossPayments.widgets({
        customerKey,
      });
      // 비회원 결제
      // const widgets = tossPayments.widgets({ customerKey: ANONYMOUS });

      setWidgets(widgets);
    }

    fetchPaymentWidgets();
  }, [clientKey, customerKey]);

  useEffect(() => {
    async function renderPaymentWidgets() {
      if (widgets == null) {
        return;
      }
      // ------ 주문의 결제 금액 설정 ------
      await widgets.setAmount(amount);

      await Promise.all([
        // ------  결제 UI 렌더링 ------
        widgets.renderPaymentMethods({
          selector: '#payment-method',
          variantKey: 'DEFAULT',
        }),
        // ------  이용약관 UI 렌더링 ------
        widgets.renderAgreement({
          selector: '#agreement',
          variantKey: 'AGREEMENT',
        }),
      ]);

      setReady(true);
    }

    renderPaymentWidgets();
  }, [widgets]);

  useEffect(() => {
    if (widgets == null) {
      return;
    }

    widgets.setAmount(amount);
  }, [widgets, amount]);

  return (
    <div className="wrapper">
      <div className="box_section">
        {/* 결제 UI */}
        <div id="payment-method" />
        {/* 이용약관 UI */}
        <div id="agreement" />
        {/* 쿠폰 체크박스 */}

        {/* 결제하기 버튼 */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            width: '100vw',
            height: 'auto',
            marginTop: '3%',
          }}
        >
          <button
            className="button"
            disabled={!ready}
            style={{
              width: 'auto',
              borderRadius: '50px',
              border: '1px solid black',
              color: 'white',
              backgroundColor: '#284180',
              fontSize: '24px',
              fontWeight: 'bold',
              padding: '1% 3%',
            }}
            onClick={async () => {
              try {
                // ------ '결제하기' 버튼 누르면 결제창 띄우기 ------
                // 결제를 요청하기 전에 orderId, amount를 서버에 저장하세요.
                // 결제 과정에서 악의적으로 결제 금액이 바뀌는 것을 확인하는 용도입니다.
                await widgets.requestPayment({
                  orderId: order.orderId, // 파라미터로 받기 (order.orderId)
                  orderName: order.orderName, // 파라미터로 받기 (order.orderName)
                  successUrl: window.location.origin + '/checkout-success',
                  failUrl: window.location.origin + '/',
                  customerEmail: deliveryAddress.email, // 파라미터로 받기 (deliveryAddress.email)
                  customerName: deliveryAddress.name, // 파라미터로 받기 (deliveryAddress.name)
                  customerMobilePhone: deliveryAddress.phone, // 파라미터로 받기 (deliveryAddress.phone)
                });
              } catch (error) {
                // 에러 처리하기
                console.error(error);
              }
            }}
          >
            결제하기
          </button>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
