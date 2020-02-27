import React, { useContext } from 'react'

import { GlobalContext } from '../context/GlobalState';

const Balance = () => {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map(transaction => transaction.amount);
  const balanceTotal = amounts.reduce((accumulator, singleAmount) => (accumulator += singleAmount), 0).toFixed(2);

  return (
    <>
      <h4>Your Balance</h4>
      <h1 id='balance'>${balanceTotal}</h1>
    </>
  )
}

export default Balance;