export interface Quote {
  text: string;
  author: string;
}

export const dailyQuotes: Quote[] = [
  {
    text: "Why code when you can Stack Overflow?",
    author: "Lazy Programmer"
  },
  {
    text: "Debugging is like being the detective in a crime movie where you are also the murderer.",
    author: "Filipe Fortes"
  },
  {
    text: "The best code is the one you don’t have to write.",
    author: "Lazy Programmer"
  },
  {
    text: "A true programmer isn’t the one who writes 1000 lines of code, but the one who deletes 900 lines.",
    author: "Martin Fowler"
  },
  {
    text: "Copy-paste is a feature, not a bug.",
    author: "Lazy Programmer"
  },
  {
    text: "If the code works well, don’t touch it.",
    author: "First Law of Programming"
  },
  {
    text: "Coding is like writing poetry, except poetry doesn’t need to compile.",
    author: "Lazy Programmer"
  },
  {
    text: "I’m not lazy, I’m just saving energy for debugging later.",
    author: "Wise Programmer"
  },
  {
    text: "Good code is the one already written by someone else.",
    author: "Lazy Programmer"
  },
  {
    text: "If you can’t explain the code simply, you don’t understand it well. Or maybe you just copy-pasted it.",
    author: "Albert Einstein (Modified)"
  },
  {
    text: "The best programmers know when to code and when to sleep.",
    author: "Lazy Programmer"
  },
  {
    text: "Coding is like cooking, except if there’s an error, you can’t eat it.",
    author: "Chef Programmer"
  },
  {
    text: "Never fix what isn’t broken, unless the deadline is far away.",
    author: "Wisdom of the Lazy"
  },
  {
    text: "I’m not afraid of computers, I’m afraid of running out of coffee.",
    author: "Caffeine Programmer"
  },
  {
    text: "There are 10 types of people in the world: those who understand binary and those who don’t.",
    author: "Programmer Joke"
  },
  {
    text: "Code that’s hard to write should be hard to read.",
    author: "Kernighan’s Law (Lazy Version)"
  },
  {
    text: "If you can’t code well, at least comment it humorously.",
    author: "Lazy Programmer"
  },
  {
    text: "A true programmer can explain why their code errors even when it should work.",
    author: "Programmer Logic"
  },
  {
    text: "Coding is like a joke. If you have to explain it, it’s bad.",
    author: "Programmer Humor"
  },
  {
    text: "I’m not lazy, I’m optimizing productivity by reducing unnecessary movements.",
    author: "Efficient Programmer"
  },
  {
    text: "If you can’t be a good programmer, at least be a lucky one.",
    author: "Lazy Programmer"
  },
  {
    text: "Code that works on dev but not in production is the greatest mystery in programming.",
    author: "Murphy’s Law for Programmers"
  },
  {
    text: "The best programmers know that 90% of their time is spent thinking, not typing.",
    author: "Lazy Programmer"
  },
  {
    text: "If you can’t fix the bug, turn it into a feature.",
    author: "Programmer Strategy"
  },
  {
    text: "Coding is like going to the gym – easier to talk about than to do.",
    author: "Procrastinator Programmer"
  },
  {
    text: "I’m not procrastinating, I’m waiting for inspiration.",
    author: "Creative Programmer"
  },
  {
    text: "Good code is code that runs. Great code is code others can understand.",
    author: "Lazy Programmer"
  },
  {
    text: "A true programmer knows when to let AI write the code.",
    author: "Modern Programmer"
  },
  {
    text: "If you can’t write great code, write great documentation.",
    author: "Survival Strategy"
  },
  {
    text: "Coding is like writing a mystery novel where the killer is yourself.",
    author: "Debugging Philosophy"
  },
  {
    text: "I’m not lazy, I’m just avoiding bugs by not writing code.",
    author: "Bug Prevention Expert"
  },
  {
    text: "The best programmer is the one who knows when to ask on Stack Overflow.",
    author: "Lazy Programmer"
  },
  {
    text: "If you can’t explain your problem to a rubber duck, you won’t solve it with code.",
    author: "Rubber Duck Debugging"
  },
  {
    text: "Coding is like playing chess, except in chess there’s no Stack Overflow.",
    author: "Strategic Programmer"
  },
  {
    text: "I’m not lazy, I’m just saving energy to think of a more elegant solution.",
    author: "Wise Programmer"
  },
  {
    text: "Good code doesn’t need comments. Realistic code has a lot of comments.",
    author: "Lazy Programmer"
  },
  {
    text: "True programmers know the best time to debug is after proper rest.",
    author: "Sleep-Driven Development"
  },
  {
    text: "If you can’t solve a problem in one line, maybe you’re not lazy enough.",
    author: "Lazy Optimization"
  },
  {
    text: "Coding is like writing poetry in a language only computers and equally lazy programmers understand.",
    author: "Poetic Programming"
  },
  {
    text: "I’m not lazy, I just apply the ‘less is more’ principle in my code.",
    author: "Minimalist Programmer"
  },
  {
    text: "The best programmer knows when to use someone else's library.",
    author: "Lazy Programmer"
  },
  {
    text: "If you can’t fix it by coding, try more coffee.",
    author: "Caffeine-Driven Development"
  },
  {
    text: "Coding is like dieting – easier to start tomorrow.",
    author: "Procrastinator Programmer"
  },
  {
    text: "I’m not lazy, I’m just waiting for the right algorithm to come in a dream.",
    author: "Dream-Driven Development"
  },
  {
    text: "Good code is the kind you can understand after a long vacation.",
    author: "Lazy Programmer"
  },
  {
    text: "A true programmer knows the best solutions sometimes come when you're not coding at all.",
    author: "Zen of Programming"
  },
  {
    text: "If you can’t solve the problem with code, try restarting the computer.",
    author: "IT Support Wisdom"
  },
  {
    text: "Coding is like solving a puzzle where you made the puzzle yourself.",
    author: "Puzzle Programmer"
  },
  {
    text: "I’m not lazy, I just apply the ‘work smarter, not harder’ mindset.",
    author: "Smart Programmer"
  },
  {
    text: "The best programmer knows when to stop coding and start Googling.",
    author: "Lazy Programmer"
  }
];

// Function to get quote of the day based on date
export function getQuoteOfTheDay(): Quote {
  const today = new Date();
  const dayOfYear = Math.floor((today.getTime() - new Date(today.getFullYear(), 0, 0).getTime()) / (1000 * 60 * 60 * 24));

  // Use the day of year to select a quote (cycling through the array)
  const quoteIndex = dayOfYear % dailyQuotes.length;

  return dailyQuotes[quoteIndex];
}

// Function to get a random quote
export function getRandomQuote(): Quote {
  const randomIndex = Math.floor(Math.random() * dailyQuotes.length);
  return dailyQuotes[randomIndex];
}
