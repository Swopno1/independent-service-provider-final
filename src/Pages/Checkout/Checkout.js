import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useServices from '../../hooks/useServices';

const Checkout = () => {
  const services = useServices([]);
  let { serviceID } = useParams();

  useEffect(() => {
    console.log(services);
  }, [services]);

  console.log(serviceID);

  return (
    <div>
      <h3>Checkout Page</h3>
    </div>
  );
};

export default Checkout;

/*

id": 1,
    "name": "Arrange Group Tour",
    "price": 300,
    "description": "Buran Ghati Trek. There is not a single moment on this trek where you get frustrated. It is as if someone has pulled out all the best parts of our Himalayan tracks and sewn them together to make a perfect trek. We are going to Buran Ghati Trek in Himachal Pradesh, India to see all the wonderful moments.",
    "img": 

    */
