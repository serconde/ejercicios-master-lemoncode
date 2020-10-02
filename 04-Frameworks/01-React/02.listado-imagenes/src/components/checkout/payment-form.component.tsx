import React from 'react';
import Cards from 'react-credit-cards';
import { CardsStyles, errorClass } from './payment-form.styles';
import { TextField, Typography, withStyles } from '@material-ui/core';
import { formatCurrency } from 'common/utils';
import { formValidation } from './payment-form.validation';
import { StyledButton } from 'common/components';

const FormInput = withStyles({
  root: {
    marginRight: 8,
    width: '100%',
  },
})(TextField);

interface Props {
  locale: string;
  currency: string;
  total: number;
  onPaymentDone: () => void;
}

interface PaymentFormState {
  cvc: string;
  expiry: string;
  focus: string;
  name: string;
  number: string;
}

export const PaymentForm: React.FC<Props> = ({
  locale,
  currency,
  total,
  onPaymentDone,
}) => {
  const [paymentFormState, setPaymentFormState] = React.useState<
    PaymentFormState
  >({
    cvc: '',
    expiry: '',
    focus: '',
    name: '',
    number: '',
  });

  const [formErrors, setFormErrors] = React.useState({
    cvc: '',
    expiry: '',
    name: '',
    number: '',
  });

  const handleInputFocus = (e) =>
    setPaymentFormState({ ...paymentFormState, focus: e.target.name });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPaymentFormState({ ...paymentFormState, [name]: value });
  };

  const handleFormSubmit = (e) => {
    e.persist();
    formValidation.validateForm(e.target).then((results) => {
      setFormErrors({
        name: results.fieldErrors.name.message,
        number: results.fieldErrors.number.message,
        expiry: results.fieldErrors.name.message,
        cvc: results.fieldErrors.cvc.message,
      });

      if (results.succeeded) {
        onPaymentDone();
      }
      else {
        e.preventDefault();
      } 
    });
  };

  return (
    <Typography component="div">
      <h1>Payment</h1>
      <p>
        Total to pay: <strong>{formatCurrency(total, locale, currency)}</strong>
      </p>
      <CardsStyles>
        <Cards
          cvc={paymentFormState.cvc}
          expiry={paymentFormState.expiry}
          focused={paymentFormState.focus}
          name={paymentFormState.name}
          number={paymentFormState.number}
        />
      </CardsStyles>
      <br></br>
      <form id="paymentForm" onSubmit={handleFormSubmit} >
        <FormInput
          id="name"
          name="name"
          placeholder="Name"          
          onChange={handleInputChange}
          onFocus={handleInputFocus}
        />
        <span id="name-error" className={errorClass}>{formErrors.name}</span>
        <FormInput
          id="number"
          type="tel"
          name="number"
          placeholder="Card Number"
          inputProps={{maxLength: 19}}
          onChange={handleInputChange}
          onFocus={handleInputFocus}
        />
        <span id="number-error" className={errorClass}>{formErrors.number}</span>
        <FormInput
          id="expiry"
          type="date"
          name="expiry"
          placeholder="Valid Thru"
          onChange={handleInputChange}
          onFocus={handleInputFocus}
        />
        <span id="expiry-error" className={errorClass}>{formErrors.expiry}</span>
        <FormInput
          id="cvc"
          name="cvc"
          type="tel"
          inputProps={{maxLength: 3}}
          placeholder="CVC"
          onChange={handleInputChange}
          onFocus={handleInputFocus}
        />
        <span id="cvc-error" className={errorClass}>{formErrors.cvc}</span>
        <br></br>
        <StyledButton type="submit">Pay</StyledButton>
      </form>
    </Typography>
  );
};
