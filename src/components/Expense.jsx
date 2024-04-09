import React, { useState } from 'react';

const ExpenseTracker = () => {
  const [expenses, setExpenses] = useState([]);
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');

  const addExpense = () => {
    setExpenses([...expenses, { amount, category }]);
    setAmount('');
    setCategory('');
  };

  return (
    <div>
      <input type="text" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter amount" />
      <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} placeholder="Enter category" />
      <button onClick={addExpense}>Add Expense</button>
      <ul>
        {expenses.map((expense, index) => (
          <li key={index}>${expense.amount} - {expense.category}</li>
        ))}
      </ul>
    </div>
  );
};

export default ExpenseTracker;
