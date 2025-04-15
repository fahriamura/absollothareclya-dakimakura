"use client";

import React, { useState } from 'react';
import Image from 'next/image';

interface Tip {
  title: string;
  description: string;
  code?: string;
  image?: string;
  lazyLevel: number; // 1-10, how lazy is this tip
}

const tips: Tip[] = [
  {
    title: "Use Snippets and Templates",
    description: "Don't write code from scratch. Use snippets, templates, and boilerplates. Why write 100 lines of code when you can just copy-paste?",
    code: "// Example snippet for a React component\nconst MyComponent = () => {\n  return (\n    <div>\n      <h1>Hello World</h1>\n    </div>\n  );\n};",
    lazyLevel: 7
  },
  {
    title: "Let AI Write Code for You",
    description: "Use GitHub Copilot, ChatGPT, or other AI tools to write your code. Just give a clear prompt and let the AI do the heavy lifting.",
    image: "/images/retro_computer.svg",
    lazyLevel: 10
  },
  {
    title: "Use Frameworks and Libraries",
    description: "Don't write your own functions if there's a library that already does it. Need date manipulation? Use Moment.js. Animations? GSAP. State management? Redux.",
    code: "// Without library\nconst date = new Date();\nconst formattedDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;\n\n// With library\nimport moment from 'moment';\nconst formattedDate = moment().format('DD/MM/YYYY');",
    lazyLevel: 8
  },
  {
    title: "Automate with Scripts",
    description: "Create scripts for repetitive tasks. If you do something more than twice, automate it. A lazy programmer is an efficient programmer.",
    code: "#!/bin/bash\n# Script to deploy to production\nnpm run build\nscp -r ./build/* user@server:/var/www/html/",
    lazyLevel: 6
  },
  {
    title: "Use Keyboard Shortcuts",
    description: "Master keyboard shortcuts in your editor. It takes effort at first, but will save you a lot of time in the long run.",
    lazyLevel: 4
  },
  {
    title: "Write Good Documentation",
    description: "Write clear documentation for your code. This might not sound lazy, but it will save you time when you forget what your code does 6 months later.",
    code: "/**\n * Calculate total price including tax\n * @param {number} price - Item price\n * @param {number} taxRate - Tax rate (default: 0.1 or 10%)\n * @returns {number} Total price including tax\n */\nfunction calculateTotalPrice(price, taxRate = 0.1) {\n  return price * (1 + taxRate);\n}",
    lazyLevel: 3
  },
  {
    title: "Use Stack Overflow Without Shame",
    description: "Don't spend hours trying to solve a problem on your own. Search on Stack Overflow, copy-paste the solution, and modify as needed.",
    lazyLevel: 9
  },
  {
    title: "Create Reusable Functions",
    description: "Don't write the same code over and over. Create functions you can reuse. DRY (Don't Repeat Yourself) is a lazy programmer's principle.",
    code: "// Bad: Repetition\nconst user1Score = user1.points * 2;\nconst user2Score = user2.points * 2;\n\n// Good: Reusable function\nfunction calculateScore(user) {\n  return user.points * 2;\n}\nconst user1Score = calculateScore(user1);\nconst user2Score = calculateScore(user2);",
    lazyLevel: 5
  }
];


const TipsSection: React.FC = () => {
  const [sortBy, setSortBy] = useState<'default' | 'lazyLevel'>('default');

  const sortedTips = [...tips].sort((a, b) => {
    if (sortBy === 'lazyLevel') {
      return b.lazyLevel - a.lazyLevel; // Descending, most lazy first
    }
    return 0; // Default order
  });

  return (
    <section id="tips" className="bg-gray-100 p-2 sm:p-4 border-2 border-navy my-4">
      <h2 className="bg-navy text-white p-2 font-bold text-center text-xl">:: TIPS FOR SILLY PROGRAMMER ::</h2>
      <p className="my-4">
        Tips collection for progammer:
      </p>

      {/* Sorting options */}
      <div className="flex justify-end mb-4">
        <div className="bg-white p-2 border border-navy">
          <span className="mr-2 font-bold">Sort:</span>
          <button
            className={`px-2 py-1 mr-2 ${sortBy === 'default' ? 'bg-navy text-white' : 'bg-gray-200'}`}
            onClick={() => setSortBy('default')}
          >
            Default
          </button>
          <button
            className={`px-2 py-1 ${sortBy === 'lazyLevel' ? 'bg-navy text-white' : 'bg-gray-200'}`}
            onClick={() => setSortBy('lazyLevel')}
          >
            Silly Level
          </button>
        </div>
      </div>

      {/* Tips Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-4">
        {sortedTips.map((tip, index) => (
          <div
            key={index}
            className={`border-2 border-navy p-4 ${
              tip.lazyLevel >= 8 ? 'bg-red-100' :
              tip.lazyLevel >= 5 ? 'bg-yellow-100' :
              'bg-green-100'
            }`}
          >
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-bold text-lg">{tip.title}</h3>
              <div className="bg-navy text-white px-2 py-1 text-sm">
                Silly: {tip.lazyLevel}/10
              </div>
            </div>

            <p className="mb-4">{tip.description}</p>

            {tip.code && (
              <pre className="bg-gray-800 text-green-400 p-3 rounded font-mono text-sm overflow-x-auto mb-4">
                {tip.code}
              </pre>
            )}

            {tip.image && (
              <div className="flex justify-center my-4">
                <Image src={tip.image} alt={tip.title} width={80} height={80} />
              </div>
            )}

          </div>
        ))}
      </div>

      <div className="mt-6 p-4 bg-yellow-100 border border-dashed border-red-600 text-center">
        <p className="font-bold">Dakimakura Club Conclusion:</p>
        <p>&ldquo;A lazy programmer will find the easiest way to complete a difficult task. A diligent programmer will complete the difficult task the hard way.&rdquo;</p>
      </div>
    </section>
  );
};

export default TipsSection;
