"use client";

import React,{ useState } from 'react';
import Image from 'next/image';
import { Testimonial } from '../../types';

const testimonials: Testimonial[] = [
  {
    quote: "i like chog",
    author: "slow",
    collab: 'ChogNFT',
    avatar: "/images/chog2.svg",
    link : "https://x.com/dakimakuraclub/status/1901660260982534283"
  },
  {
    quote: "dear lil chogstars: let's be friend.",
    author: "Dakimakura Club",
    collab: 'chogstarr',
    avatar: "/images/chogstar.svg",
    link : "https://x.com/dakimakuraclub/status/1899238774498005363"
  },
  {
    quote: "thank you buddy",
    author: "mondana",
    collab: 'mondanabaddies',
    avatar: "/images/mondana.svg",
    link : "https://x.com/dakimakuraclub/status/1903061542544855135"
  },
  {
    quote: "i will be your friend.",
    author: "Spiky Nads",
    collab: 'spikynads',
    avatar: "/images/spiky.svg",
    link : "https://x.com/dakimakuraclub/status/1904913677691871296"
  }
];

const TestimonialsSection: React.FC = () => {
  return (
    <section id="testimoni" className="bg-gray-100 p-2 sm:p-4 border-2 border-navy my-4">
      <h2 className="bg-navy text-white p-2 font-bold text-center text-xl">:: COLLABORATION HISTORY ::</h2>

      <div className="space-y-4">
      {testimonials.map((testimonial, index) => (
      <a
        key={index}
        href={testimonial.link}
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >
        <div
          className={`p-4 border cursor-pointer transition duration-300 hover:scale-[1.02] ${
            index === 0 ? 'bg-yellow-100 border-dashed border-red-600' :
            index === 1 ? 'bg-cyan-100 border-dashed border-blue-600' :
            index === 2 ? 'bg-pink-100 border-dashed border-pink-600' :
            'bg-green-100 border-dashed border-green-600'
          }`}
        >
          <div className="flex items-center">
            <Image
              src={testimonial.avatar}
              alt={`Avatar ${index + 1}`}
              width={50}
              height={50}
              className="mr-4 border-2 border-navy"
            />
            <div>
              <p className="italic mb-2">{testimonial.quote}</p>
              <p className="text-right font-bold">
                - {testimonial.author} X {testimonial.collab}
              </p>
            </div>
          </div>
        </div>
      </a>
))}

      </div>
    </section>
  );
};

export default TestimonialsSection;
