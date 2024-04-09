import React, { useState, useEffect } from 'react';

const CurrencyConverter = () => {
  const [amount, setAmount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('EUR');
  const [exchangeRate, setExchangeRate] = useState(null);

  useEffect(() => {
    const fetchExchangeRate = async () => {
      try {
        const response = await fetch(`https://wf-backend.onrender.com/exchange-rates?from=${fromCurrency}&to=${toCurrency}`);
        const data = await response.json();
        setExchangeRate(data.rate);
      } catch (error) {
        console.error('Error fetching exchange rate:', error);
      }
    };

    fetchExchangeRate();
  }, [fromCurrency, toCurrency]);

  const convertedAmount = exchangeRate ? (amount * exchangeRate).toFixed(2) : 'Loading...';

  return (
    <div>
      <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} />
      <select value={fromCurrency} onChange={(e) => setFromCurrency(e.target.value)}>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="GBP">GBP</option>
        <option value="INR">INR</option>
        <option value="SAR">SAR</option>
        <option value="AED">AED</option>
      </select>
      <select value={toCurrency} onChange={(e) => setToCurrency(e.target.value)}>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="GBP">GBP</option>
        <option value="INR">INR</option>
        <option value="SAR">SAR</option>
        <option value="AED">AED</option>
      </select>
      <p>{amount} {fromCurrency} is equal to {convertedAmount} {toCurrency}</p>
    </div>
  );
};

export default CurrencyConverter;
