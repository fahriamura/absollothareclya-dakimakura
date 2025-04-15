"use client";

import React from 'react';
import Image from 'next/image';

const AboutSection: React.FC = () => {
  return (
    <section id="tentang" className="bg-gray-100 p-4 border-2 border-navy my-4">
      <h2 className="bg-navy text-white p-2 font-bold text-center text-xl">:: ABOUT DAKIMAKURA CLUB ::</h2>
      <p className="my-2">DAKIMAKURA CLUB is :</p>
      <ul className="list-disc pl-8 mb-4">
        <li>another place to be silly on the internet</li>
        <li>a low supply-net-art digital collectible series by slowafk</li>
        <li>coming to the @monad_xyz blockchain</li>
        <li>not a pfp (profile picture) project</li>
        <li>a place</li>
      </ul>

      <h2 className="bg-navy text-white p-2 font-bold text-center text-xl mt-6">:: OUR PHYLOSOPHY ::</h2>
      <p className="my-2">In DAKIMAKURA CLUB, we trust:</p>
      <ol className="list-decimal pl-8 mb-4">
        <li>love</li>
        <li>silly</li>
        <li>humor</li>
        <li>weebs</li>
        <li>place</li>
      </ol>

      <h2 className="bg-navy text-white p-2 font-bold text-center text-xl mt-6">:: BREAKING NEWS ::</h2>
      <ul className="list-disc pl-8 mb-4">
        <li>
          <span className="text-red-600 font-bold">12/04/1998</span> -
          Dakimakura Club is launch with retro style!
          <Image src="/images/new.svg" alt="New!" width={20} height={20} className="inline-block ml-2 h-5" />
        </li>
        <li>
          <span className="text-red-600 font-bold">10/04/1998</span> -
          Dakimakura Club have 3100 follower on twitter
        </li>
      </ul>
    </section>
  );
};

export default AboutSection;
