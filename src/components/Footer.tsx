"use client";

import React from 'react';
import Image from 'next/image';
import FooterVisitorCounter from './FooterVisitorCounter';

const Footer: React.FC = () => {
  return (
    <footer className="bg-navy text-white p-4 text-center border-t-4 border-silver border-inset mt-8">
      <div className="w-full mb-4">
        <Image src="/images/divider.svg" alt="divider" width={600} height={20} className="w-full" />
      </div>

      {/* Desktop copyright */}
      <p className="mb-2 hidden sm:block font-vt323 text-lg">© 1998 DAKIMAKURA CLUB - Another Place To Be Silly</p>

      {/* Mobile copyright */}
      <p className="mb-2 block sm:hidden text-base font-vt323">© 1998 DAKIMAKURA CLUB<br />Another Place To Be Silly</p>

      {/* Desktop links */}
      <p className="mb-4 hidden sm:block font-silkscreen text-lg">
      <a
        href="https://discord.com/invite/dakimakuraclub"
        target="_blank"
        rel="noopener noreferrer"
        className="text-yellow-300 hover:underline mx-2"
      >
        DISCORD
      </a> |
      <a
        href="https://x.com/dakimakuraclub"
        target="_blank"
        rel="noopener noreferrer"
        className="text-yellow-300 hover:underline mx-2"
      >
        MEME GALLERY
      </a>

      </p>

      {/* Mobile links */}
      <div className="mb-4 block sm:hidden text-xs">
        <p className="mb-1">
          <a href="mailto:contact@imphnen.dev" className="text-yellow-300 hover:underline mx-1">EMAIL KAMI</a> |
          <a href="#" className="text-yellow-300 hover:underline mx-1">GRUP FB</a>
        </p>
        <p>
          <a href="#" className="text-yellow-300 hover:underline mx-1">DISCORD</a> |
          <a href="#" className="text-yellow-300 hover:underline mx-1">MEME</a>
        </p>
      </div>

      <div className="bg-yellow-200 p-2 sm:p-4 border-2 border-dashed border-red-600 my-4 text-black">
        {/* Desktop HTML comments */}
        <p className="font-press-start text-navy font-bold mb-2 hidden sm:block text-xs">
          &lt;!-- Made By HTML --&gt;<br /><br />
          &lt;!-- author : absollothareclya --&gt;
        </p>

        {/* Mobile HTML comments */}
        <p className="font-press-start text-navy font-bold mb-2 block sm:hidden text-xs">
          &lt;!-- Made by HTML --&gt;<br /><br />
          &lt;!-- author : absollothareclya --&gt;
        </p>

        <p className="font-vt323 text-red-600 mb-2 text-sm sm:text-lg">
          &lt;marquee&gt;This site made by Lazy Programmer who always use AI&lt;/marquee&gt;
        </p>
        <div className="bg-navy text-white p-1 overflow-hidden whitespace-nowrap">
          <div className="marquee text-xs sm:text-base">
            Welcome to Dakimakura Club
          </div>
        </div>
      </div>

      <p className="text-gray-300 text-xs sm:text-sm">DAKIMAKURA CLUB</p>

      {/* Desktop resolution text */}
      <p className="text-gray-300 text-sm hidden sm:block">Best viewed with Netscape Navigator 4.0 or Internet Explorer 5.0 at 800x600 resolution</p>

      {/* Mobile resolution text */}
      <p className="text-gray-300 text-xs block sm:hidden">Best viewed with Netscape Navigator 4.0<br />or Internet Explorer 5.0</p>

      <FooterVisitorCounter />
    </footer>
  );
};

export default Footer;
