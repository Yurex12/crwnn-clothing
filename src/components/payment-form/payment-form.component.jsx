import { useState } from 'react';

import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

import { useSelector } from 'react-redux';

import Button from '../button/button.component';

import { PaymentFormContainer, FormContainer } from './payment.styles';
import { getTotalPrice } from '../../store/cart/cart-reducer';
import { getUser } from '../../store/user/user-reducer';

function PaymentForm() {
  const stripe = useStripe();
  const elements = useElements();

  const amount = useSelector(getTotalPrice);
  const currentUser = useSelector(getUser);

  const [isProcessingPayment, setIsProcessingPayment] = useState(false);

  const paymentHandler = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) return;

    setIsProcessingPayment(true);

    const response = await fetch('/.netlify/functions/create-payment-intent', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ amount: amount * 100 }),
    }).then((res) => res.json());

    const clientSecret = response.paymentIntent.client_secret;

    const paymentResult = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: {
          name: currentUser ? currentUser.displayName : 'Guests',
        },
      },
    });

    setIsProcessingPayment(false);

    if (paymentResult.error) alert(paymentResult.error);
    else {
      if (paymentResult.paymentIntent.status === 'succeeded')
        alert('payment succesful');
    }
  };

  return (
    <PaymentFormContainer>
      <FormContainer onSubmit={paymentHandler}>
        <h2>credit card payment </h2>
        <CardElement />

        <Button buttonType='inverted' disabled={isProcessingPayment}>
          {isProcessingPayment ? 'LOADING...' : 'pay now'}
        </Button>
      </FormContainer>
    </PaymentFormContainer>
  );
}

export default PaymentForm;
