"use client";

import React from 'react';
import Image from 'next/image';

const HomeSection: React.FC = () => {
  return (
    <section id="home" className="welcome-message px-1 sm:px-4">
      <h2 className="text-2xl font-bold mb-2">
        Welcome to DAKIMAKURA CLUB! <span className="blink text-red-600">NEW!</span>
      </h2>

      <div className="w-full">
        <Image src="/images/divider.svg" alt="divider" width={600} height={20} className="w-full" />
      </div>

      <p className="mb-4">
        Welcome to official website <span className="bg-yellow-300 font-bold px-1">DAKIMAKURA CLUB</span>
      </p>

      {/* Desktop version - hidden on mobile */}
      <p className="mb-4 hidden sm:block">
        <span className="bg-blue-300 font-bold px-1">A</span>nother
        <span className="bg-blue-300 font-bold px-1">P</span>lace
        <span className="bg-blue-300 font-bold px-1">T</span>o
        <span className="bg-blue-300 font-bold px-1">B</span>e
        <span className="bg-blue-300 font-bold px-1">S</span>illy
      </p>

      {/* Mobile version - shown only on mobile */}
      <div className="mb-4 block sm:hidden">
        <p>
          <span className="bg-yellow-300 font-bold px-1">A</span>nother
          <span className="bg-yellow-300 font-bold px-1">P</span>lace
        </p>
        <p>
          <span className="bg-yellow-300 font-bold px-1">T</span>o
          <span className="bg-yellow-300 font-bold px-1">B</span>e
        </p>
        <p>
          <span className="bg-yellow-300 font-bold px-1">S</span>illy
        </p>
      </div>

      <div className="text-center my-4">
        <Image src="/images/dakimakura.svg" alt="Programmer SVG" width={150} height={150} className="border-2 border-blue-900 inline-block" />
      </div>

      <p className="mb-4">
      A dakimakura (抱き枕; from daki 抱き "embrace" and makura 枕 "pillow") is a type of large pillow from Japan which is usually coupled with pillow covers depicting manga and anime characters.The word is often translated to English as body pillow, waifu pillow, or husbando pillow. Dakimakura are similar to Western orthopedic body pillows, and are commonly used by Japanese youth as "comfort objects".       
      <span className="blink text-red-600 font-bold">DAKIMAKURA CLUB!</span>
      </p>

    </section>
  );
};

export default HomeSection;

