import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ordered, restocked } from './icecreamSlice';

export const IceCreamView = () => {
  const [iceCreamsOut, setIceCreamsOut] = useState(0);
  const { numOfIceCreams } = useSelector((state) => state.iceCream);
  const dispatch = useDispatch();

  const isceCreamOrderIn = () => {
    dispatch(ordered());
    setIceCreamsOut(iceCreamsOut + 1);
  };

  const restockIceCream = () => {
    dispatch(restocked(iceCreamsOut));
    setIceCreamsOut(0);
  };
  return (
    <div>
      <h2>Number of IceCreams - {numOfIceCreams}</h2>
      <button onClick={isceCreamOrderIn} disabled={numOfIceCreams === 0}>
        Order IceCream
      </button>
      <button onClick={restockIceCream}>Restock IceCreams</button>
    </div>
  );
};
