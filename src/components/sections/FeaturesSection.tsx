"use client";

import React from 'react';
import Image from 'next/image';
import { Feature } from '../../types';

const features: Feature[] = [
  {
    title: 'Just Watch and Chill',
    description: 'No Code. No rules. No utility. Just pure vibes.',
    icon: '/images/no_coding.svg'
  },
  {
    title: 'Supportive Community',
    description: 'Join our community that\'s ready to help and share experiences.',
    icon: '/images/community.svg'
  },
  {
    title: 'Monad',
    description: 'We will launch at Monad with 10k TPS.',
    icon: '/images/monad_logo.svg'
  }
];

const FeaturesSection: React.FC = () => {
  return (
    <section id="fitur" className="bg-gray-100 p-2 sm:p-4 border-2 border-navy my-4">
      <h2 className="bg-navy text-white p-2 font-bold text-center text-xl">:: Feature ::</h2>
      <p className="my-4">
        Dakimakura Club launch to help newbies with their sillieness.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-2 sm:gap-4">
        {features.map((feature, index) => (
          <div
            key={index}
            className={`border border-navy p-4 text-center ${
              index === 0 ? 'bg-cyan-100' : index === 1 ? 'bg-pink-100' : 'bg-yellow-100'
            }`}
          >
            <h3 className="bg-navy text-white p-2 font-bold -mt-4 -mx-4 mb-4">{feature.title}</h3>
            <Image src={feature.icon} alt={feature.title} width={50} height={50} className="mx-auto my-4" />
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
