import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ordered, restocked } from './cakeSlice';

export const CakeView = () => {
  const [cakesOut, setCakesOut] = useState(0);
  const { numOfCakes } = useSelector((state) => state.cake);
  const dispatch = useDispatch();

  const cakeOrderIn = () => {
    dispatch(ordered());
    setCakesOut(cakesOut + 1);
  };

  const restockCakes = () => {
    dispatch(restocked(cakesOut));
    setCakesOut(0);
  };

  return (
    <div>
      <h2>Number of cakes - {numOfCakes} </h2>
      <button onClick={cakeOrderIn} disabled={numOfCakes === 0}>
        Order cake
      </button>
      <button onClick={restockCakes}>Restock cakes</button>
    </div>
  );
};
