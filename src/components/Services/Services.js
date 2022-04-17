import React from 'react';

const services = [
  {
    id: 1,
    name: 'Arrange Group Tour',
    price: 300,
    description:
      'Buran Ghati Trek. There is not a single moment on this trek where you get frustrated. It is as if someone has pulled out all the best parts of our Himalayan tracks and sewn them together to make a perfect trek. We are going to Buran Ghati Trek in Himachal Pradesh, India to see all the wonderful moments.',
    img: 'https://i.ibb.co/pZCPkkS/image5.jpg',
  },
  {
    id: 2,
    name: 'Arrange Group Tour',
    price: 300,
    description:
      'Buran Ghati Trek. There is not a single moment on this trek where you get frustrated. It is as if someone has pulled out all the best parts of our Himalayan tracks and sewn them together to make a perfect trek. We are going to Buran Ghati Trek in Himachal Pradesh, India to see all the wonderful moments.',
    img: 'https://i.ibb.co/pZCPkkS/image5.jpg',
  },
  {
    id: 3,
    name: 'Arrange Group Tour',
    price: 300,
    description:
      'Buran Ghati Trek. There is not a single moment on this trek where you get frustrated. It is as if someone has pulled out all the best parts of our Himalayan tracks and sewn them together to make a perfect trek. We are going to Buran Ghati Trek in Himachal Pradesh, India to see all the wonderful moments.',
    img: 'https://i.ibb.co/pZCPkkS/image5.jpg',
  },
  {
    id: 4,
    name: 'Arrange Group Tour',
    price: 300,
    description:
      'Buran Ghati Trek. There is not a single moment on this trek where you get frustrated. It is as if someone has pulled out all the best parts of our Himalayan tracks and sewn them together to make a perfect trek. We are going to Buran Ghati Trek in Himachal Pradesh, India to see all the wonderful moments.',
    img: 'https://i.ibb.co/pZCPkkS/image5.jpg',
  },
  {
    id: 5,
    name: 'Arrange Group Tour',
    price: 300,
    description:
      'Buran Ghati Trek. There is not a single moment on this trek where you get frustrated. It is as if someone has pulled out all the best parts of our Himalayan tracks and sewn them together to make a perfect trek. We are going to Buran Ghati Trek in Himachal Pradesh, India to see all the wonderful moments.',
    img: 'https://i.ibb.co/pZCPkkS/image5.jpg',
  },
  {
    id: 6,
    name: 'Arrange Group Tour',
    price: 300,
    description:
      'Buran Ghati Trek. There is not a single moment on this trek where you get frustrated. It is as if someone has pulled out all the best parts of our Himalayan tracks and sewn them together to make a perfect trek. We are going to Buran Ghati Trek in Himachal Pradesh, India to see all the wonderful moments.',
    img: 'https://i.ibb.co/pZCPkkS/image5.jpg',
  },
];

const Services = () => {
  return (
    <section
      className='services container mx-auto my-24
    '
    >
      <h2 className='text-4xl text-center font-semibold mb-12'>
        Featured Services
      </h2>
      <div className='service-container flex'>
        {services.map((service) => (
          <div className='w-80 border'>
            <h3>Text</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
