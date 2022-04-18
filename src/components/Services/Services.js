import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch('services.json')
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <section
      className='services container mx-auto my-24
    '
    >
      <h2 className='text-4xl text-center font-semibold mb-12'>
        Featured Services
      </h2>
      <div className='container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto'>
        {services.map((service) => (
          <Card service={service} key={service.id} />
        ))}
      </div>
    </section>
  );
};

export default Services;
