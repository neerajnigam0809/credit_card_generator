import React, { useState } from 'react';
import logo from './card-logo.svg';
import './App.css'
document.body.style = 'background: #D9D9D9;'; 


function App(){
  const [cardHolderName, setCardHolderName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiryMonth, setExpiryMonth] = useState('');
  const [expiryYear, setExpiryYear] = useState('');
  const [cvv, setCvv] = useState('');
  const [cardHolderError, setCardHolderError] = useState('');
  const [cardNumberError, setCardNumberError] = useState('');
  const [expiryMonthError, setExpiryMonthError] = useState('');
  const [cvvError, setCvvError] = useState('');

  const handleCardHolderChange = (e) => {
    setCardHolderName(e.target.value);
    if (!e.target.value) {
      setCardHolderError('Cardholder name required');
    } 
    else {
      setCardHolderError('');
    }
  };

  const handleCardNumberChange = (e) => {
    const value = e.target.value.replace(/\D/g, '');

    let formattedValue = '';
    for (let i = 0; i < value.length; i += 4) {
      formattedValue += value.substr(i, 4) + ' ';
    }
    formattedValue = formattedValue.trim();

    setCardNumber(formattedValue);

    if (value.length !== 16) {
      setCardNumberError('Card number required');
    } 
    else {
      setCardNumberError('');
    }
  };

  const handleExpiryMonthChange = (e) => {
    const value = e.target.value.replace(/\D/g, '');
    setExpiryMonth(value);

    if (value < 1 || value > 12 || value.length > 2) {
      setExpiryMonthError('proper format required');
    } 
    else {
      setExpiryMonthError('');
    }
  };

  const handleExpiryYearChange = (e) => {
    const value = e.target.value.replace(/\D/g, '');
    setExpiryYear(value);

    if (value.length !== 2) {
      setExpiryMonthError('proper format required');
    } else {
      setExpiryMonthError('');
    }
  };

  const handleCvvChange = (e) => {
    const value = e.target.value.replace(/\D/g, '');
    setCvv(value);

    if (value.length !== 3) {
      setCvvError('CVC must be numeric');
    } else {
      setCvvError('');
    }
  };

  const handleSave = () => {
    if (cardHolderName && cardNumber.length === 19 &&  expiryMonth >= 1 &&  expiryMonth <= 12 && expiryYear.length === 2 && cvv.length === 3) 
    {
      document.getElementById('card-name').innerText=cardHolderName;
      document.getElementById('card-number').innerText=cardNumber;
      document.getElementById('card-expiryMM').innerText=expiryMonth;
      document.getElementById('card-expiryYY').innerText=expiryYear;
      document.getElementById('card-cvv').innerText=cvv;
    } 
    if (!cardHolderName) {
      setCardHolderError('Cardholder name required');
    }

    if (cardNumber.length !== 19) {
      setCardNumberError('Card number required');
    }

    if (expiryMonth < 1 || expiryMonth > 12 || expiryYear.length !== 2) {
      setExpiryMonthError('proper format required');
    }

    if (cvv.length !== 3) {
      setCvvError('CVC must be numeric');
    }

    if (
      cardHolderName &&
      cardNumber.length === 19 &&
      expiryMonth >= 1 &&
      expiryMonth <= 12 &&
      expiryMonth.length <= 2 &&
      expiryYear.length === 2 &&
      cvv.length === 3
    ) {
      console.log('Card details saved');
    } else {
      console.log('Please correct the form errors');
    }
  };
  return (
    <>
      <div className="color-image" />

      <div className="front">
      <img className='logo' src={logo} />     
      <div id="card-number"className="card-number">0000 0000 0000 0000</div>
      <div id="card-name"className="card-holder">JANE APPLESEED</div>
      <div id="card-expiryMM"className="card-expiryMM">00</div>
      <div className="card-expiry-slash">/</div>
      <div id="card-expiryYY" className="card-expiryYY">00</div>
      </div>

      <div className="back"  >
      <div id="card-cvv"className="card-cvv">000</div>
      </div>

      
       <div className='form'>
        <div className="card-name">CARDHOLDER NAME</div>
        <input className="card-name-input" value={cardHolderName} type="text" placeholder="e.g. Jane Appleseed" onChange={handleCardHolderChange}/>
        {cardHolderError &&
        <div className="name-error">{cardHolderError}</div>}
        
        <div className="card-no">CARD NUMBER</div>
        <input className="card-no-input" value={cardNumber} type="text" placeholder="e.g. 1234 5678 9123 0000" onChange={handleCardNumberChange}/>
        {cardNumberError &&
        <div className="number-error">{cardNumberError}</div>}
        
        <div className="expiry">EXP. DATE (MM/YY)</div>
        <input className="card-expiry-MM" value={expiryMonth} type="text" placeholder="MM" onChange={handleExpiryMonthChange}/>
        <input className="card-expiry-YY" value={expiryYear} type="text" placeholder="YY" onChange={handleExpiryYearChange}/>
        {expiryMonthError && 
        <div className="expiry-error">{expiryMonthError}</div>}
        
        <div className="cvc">CVC</div>
        <input className="card-cvv-input" value={cvv} type="text" placeholder="e.g. 123" onChange={handleCvvChange}/>
        {cvvError && 
        <div className="cvv-error">{cvvError}</div>}
        
        <button onClick={handleSave}className="confirm">Confirm</button>

      </div>
    </>
  )
}
export default App