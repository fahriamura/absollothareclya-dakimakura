"use client";

import React, { useState, useEffect, useRef } from 'react';
import RetroSound from './RetroSound';

interface BonziBuddyProps {
  className?: string;
}

const bonziMessages = [
  "Hello! I'm BonziBuddy, your internet friend!",
  "Did you know? Copy-paste is a programmer’s best friend!",
  "Why debug when you can just restart your computer?",
  "Stack Overflow is the true MVP in the programming world!",
  "I'm here to help you avoid coding!",
  "Have you tried turning it off and on again?",
  "Remember: it’s not a bug, it’s a feature!",
  "The best code is the code you don’t have to write!",
  "Programmers spend 90% of their time debugging code that only took 10% of the time to write!",
  "Why write code when AI can do it for you?",
  "If coding gives you a headache, then just don’t code!",
  "Errors are like ghosts—sometimes they show up, sometimes they disappear without a trace!",
  "A true programmer knows when to Google!",
  "Don’t worry about messy code, it’s a 'work in progress'!",
  "Deadline tomorrow? Relax, there are still 24 hours!",
  "No code means no bugs!",
  "I’m not lazy, I’m just saving energy for coding later!",
  "Why learn algorithms when you can use a library?",
  "Debugging is like being a detective—but you’re the criminal!",
  "Don’t forget the semicolon; wait, this is JavaScript? Never mind!",
  "If you’re stuck, try drinking coffee. Still stuck? Add more coffee!",
  "Good code is code that runs... sometimes!",
  "I don’t need documentation—my code is clear... to me!",
  "Got an error? Clear your cache. Still error? Restart. Still error? Well, whatever!",
  "Programmers: People who solve problems you didn’t even know you had!",
  "Why learn coding when you can be a YouTuber?",
  "I’m not lazy, I’m optimizing my workflow!",
  "Confused? Just add print statements everywhere!",
  "Good code is like good humor—no explanation needed!",
  "Don’t be afraid of errors, be afraid of deadlines!",
  "If someone asks 'Is it done yet?', just say 'Almost!'",
  "Why bother coding from scratch when you can use a template?",
  "I’m not lazy, I’m waiting for inspiration!",
  "If someone says your code is ugly, just say 'It’s experimental style!'",
  "A true programmer knows when to give up and start over!",
  "Don’t worry about performance, that’s DevOps’ problem!",
  "If someone asks how long a feature will take, say 'Depends on the internet speed!'",
  "I’m not procrastinating, I’m doing deep research on YouTube!",
  "If someone complains about the UI, just say 'It’s minimalist!'",
  "Why make it yourself when you can copy it from GitHub?",
  "If someone asks 'Why is it slow?', say 'It’s for data security!'",
  "I’m not lazy, I’m saving energy for debugging later!",
  "A true programmer knows when to pretend to be busy!",
  "Don’t worry about clean code—as long as the client doesn’t see it!",
  "If someone asks why you didn’t use a framework, say 'It’s for performance!'",
  "I’m not putting off work, I’m waiting for the right moment!",
  "Why learn algorithms when you have ChatGPT?",
];


const BonziBuddy: React.FC<BonziBuddyProps> = ({ className = '' }) => {
  const [message, setMessage] = useState<string>('');
  const [isTalking, setIsTalking] = useState<boolean>(false);
  const [isWaving, setIsWaving] = useState<boolean>(false);
  const [playSound, setPlaySound] = useState<boolean>(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const messageIntervalRef = useRef<NodeJS.Timeout | null>(null);

  // Initialize BonziBuddy with a greeting
  useEffect(() => {
    // Initial greeting after a short delay
    const initialTimeout = setTimeout(() => {
      speak("Hello! I'm BonziBuddy, your internet friend!");
      setIsWaving(true);

      // Stop waving after 2 seconds
      setTimeout(() => {
        setIsWaving(false);
      }, 2000);
    }, 3000);

    // Set up random messages every 30-60 seconds
    messageIntervalRef.current = setInterval(() => {
      const randomMessage = bonziMessages[Math.floor(Math.random() * bonziMessages.length)];
      speak(randomMessage);
    }, Math.random() * 30000 + 30000); // Random time between 30-60 seconds

    return () => {
      clearTimeout(initialTimeout);
      if (messageIntervalRef.current) clearInterval(messageIntervalRef.current);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  // Function to make BonziBuddy speak
  const speak = (text: string) => {
    setMessage(text);
    setIsTalking(true);
    setPlaySound(true);

    // Reset sound trigger to allow it to be triggered again
    setTimeout(() => {
      setPlaySound(false);
    }, 100);

    // Clear any existing timeout
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    // Set a timeout to clear the message based on its length
    const duration = Math.max(3000, text.length * 100); // Minimum 3 seconds, or longer for longer messages
    timeoutRef.current = setTimeout(() => {
      setIsTalking(false);
      setMessage('');
    }, duration);
  };

  // Handle click on BonziBuddy
  const handleClick = () => {
    if (!isTalking) {
      const randomMessage = bonziMessages[Math.floor(Math.random() * bonziMessages.length)];
      speak(randomMessage);
      setIsWaving(true);

      // Stop waving after 2 seconds
      setTimeout(() => {
        setIsWaving(false);
      }, 2000);
    }
  };

  return (
    <div className={`flex flex-col items-center ${className}`}>
      {/* Sound effect */}
      <RetroSound play={playSound} type="beep" />

      {/* Speech bubble */}
      {message && (
        <div className="bg-white border-2 border-gray-400 border-outset p-2 mb-2 rounded-lg relative text-center max-w-[200px]">
          <p className="font-comic text-sm text-navy">{message}</p>
          {/* Speech bubble pointer */}
          <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[8px] border-t-white"></div>
        </div>
      )}

      {/* BonziBuddy character */}
      <div
        className="cursor-pointer relative"
        onClick={handleClick}
        title="Click me!"
      >
        <div className="relative w-[200px] h-[200px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="200"
            height="200"
            viewBox="0 0 200 200"
            className="w-full h-full"
          >
            {/* Main body - purple gorilla - exact BonziBuddy appearance based on original image */}
            <g className="animate-bonzi-bounce">
              {/* Body - accurate purple color */}
              <ellipse cx="100" cy="130" rx="50" ry="55" fill="#9F51D9" stroke="#7B3DB3" strokeWidth="2" />

              {/* Head - accurate shape */}
              <ellipse cx="100" cy="70" rx="45" ry="40" fill="#9F51D9" stroke="#7B3DB3" strokeWidth="2" />

              {/* Ears - accurate shape and position */}
              <ellipse cx="65" cy="40" rx="15" ry="18" fill="#9F51D9" stroke="#7B3DB3" strokeWidth="1" />
              <ellipse cx="135" cy="40" rx="15" ry="18" fill="#9F51D9" stroke="#7B3DB3" strokeWidth="1" />

              {/* Belly/Chest - accurate light purple color */}
              <ellipse cx="100" cy="130" rx="40" ry="45" fill="#D9B6F3" stroke="#7B3DB3" strokeWidth="1" />
              <ellipse cx="100" cy="85" rx="35" ry="25" fill="#D9B6F3" stroke="#7B3DB3" strokeWidth="1" />

              {/* Face */}
              <g>
                {/* Eyes - large cartoon eyes with white background */}
                <ellipse cx="85" cy="60" rx="12" ry="14" fill="white" stroke="#7B3DB3" strokeWidth="1" />
                <ellipse cx="115" cy="60" rx="12" ry="14" fill="white" stroke="#7B3DB3" strokeWidth="1" />

                {/* Pupils - large black pupils */}
                <ellipse cx="85" cy="60" rx="6" ry="8" fill="#000000" className="blinking" />
                <ellipse cx="115" cy="60" rx="6" ry="8" fill="#000000" className="blinking" />

                {/* Nose - purple nose */}
                <path d="M95,75 Q100,82 105,75" fill="#7B3DB3" stroke="#7B3DB3" strokeWidth="1" />

                {/* Mouth - big smile */}
                <path
                  d="M75,90 Q100,110 125,90"
                  fill="none"
                  stroke="#7B3DB3"
                  strokeWidth="3"
                  className={`${isTalking ? 'animate-talk' : ''}`}
                />
              </g>

              {/* Arms - accurate shape and position */}
              <g className={`${isWaving ? 'animate-wave' : ''}`}>
                <path d="M55,130 Q35,100 45,70" fill="none" stroke="#7B3DB3" strokeWidth="8" strokeLinecap="round" />
                <ellipse cx="45" cy="65" rx="10" ry="8" fill="#9F51D9" stroke="#7B3DB3" strokeWidth="1" />
              </g>
              <path d="M145,130 Q165,100 155,70" fill="none" stroke="#7B3DB3" strokeWidth="8" strokeLinecap="round" />
              <ellipse cx="155" cy="65" rx="10" ry="8" fill="#9F51D9" stroke="#7B3DB3" strokeWidth="1" />

              {/* Feet - accurate shape and position */}
              <ellipse cx="80" cy="180" rx="20" ry="10" fill="#9F51D9" stroke="#7B3DB3" strokeWidth="1" />
              <ellipse cx="120" cy="180" rx="20" ry="10" fill="#9F51D9" stroke="#7B3DB3" strokeWidth="1" />

              {/* Optional: Add globe and banana for complete authenticity */}
              {false && (
                <g>
                  <circle cx="30" cy="50" r="20" fill="#9F51D9" />
                  <path d="M150,100 Q160,90 170,100" fill="yellow" stroke="green" strokeWidth="1" />
                </g>
              )}
            </g>
          </svg>
        </div>
      </div>

      {/* Caption */}
      <div className="text-center mt-1">
        <p className="font-vt323 text-xs text-white">BonziBuddy</p>
        <p className="font-vt323 text-xs text-yellow-300">Your Desktop Friend!</p>
      </div>
    </div>
  );
};

export default BonziBuddy;
