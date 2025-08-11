import React, { useState } from "react";

const BreakTheApp: React.FC = () => {
  const [input, setInput] = useState("");
  const [message, setMessage] = useState<string | null>(null);

  const funnyMessages = {
    empty: [
      "Try entering something! Empty input is too easy.",
      "Come on, at least type 'hi' or something! 😴",
      "The void stares back... but nothing breaks.",
      "Error 404: Input not found. Try again!"
    ],
    numbers: [
      "Wow, that's a lot of numbers! But the app survived.",
      "Calculator vibes! Still not broken though 🧮",
      "Numbers go brr... but the app keeps purring 🐱",
      "That's numberwang! But still no crash."
    ],
    special: [
      "Special characters detected! Still going strong.",
      "Fancy symbols! The app thinks they're pretty ✨",
      "Ooh, spicy characters! But no dice 🌶️",
      "Unicode party! Everyone's invited, no crashes allowed."
    ],
    long: [
      "That's a long one! But no crash here.",
      "Novel-length input detected! Still reading... 📚",
      "War and Peace vibes! App's still at peace though.",
      "TL;DR - your input is long, the app is strong 💪"
    ],
    crash: [
      "Nice try! But this app is resilient.",
      "You said the magic words! Too bad they don't work here 🪄",
      "Plot twist: the app uno-reversed your crash attempt!",
      "Error 418: I'm a teapot, not a crashable app ☕"
    ],
    script: [
      "No script injection here! Good thinking though.",
      "Hacker mode: DENIED! Nice try, Neo 🕶️",
      "XSS? More like X-tra Secure Site! 🛡️",
      "Script blocked! This app has trust issues."
    ],
    default: [
      "All good! Try something more creative?",
      "Meh. That's amateur hour! Step up your game 😏",
      "The app yawns... try harder to impress it! 🥱",
      "Boring! Where's the chaos? The mayhem? The drama? 🎭"
    ]
  };

  function getRandomMessage(category: keyof typeof funnyMessages): string {
    const messages = funnyMessages[category];
    return messages[Math.floor(Math.random() * messages.length)];
  }

  function handleTest() {
    if (input.trim() === "") {
      setMessage(getRandomMessage('empty'));
    } else if (/\d{10,}/.test(input)) {
      setMessage(getRandomMessage('numbers'));
    } else if (/[^\w\s]/.test(input)) {
      setMessage(getRandomMessage('special'));
    } else if (input.length > 30) {
      setMessage(getRandomMessage('long'));
    } else if (/crash|break|fail|error/i.test(input)) {
      setMessage(getRandomMessage('crash'));
    } else if (/\b(alert|window|script|<|>)\b/i.test(input)) {
      setMessage(getRandomMessage('script'));
    } else {
      setMessage(getRandomMessage('default'));
    }
  }

  return (
    <div className="space-y-4">
      <input
        className="w-full p-4 border border-white/20 bg-black/20 backdrop-blur-sm text-gray-200 placeholder:text-gray-500 rounded-xl focus:border-white/40 focus:bg-black/30 transition-all focus:outline-none focus:ring-2 focus:ring-white/10"
        value={input}
        onChange={e => setInput(e.target.value)}
        aria-label="Break the app input"
        placeholder="Type your wildest input..."
      />
      <button
        className="btn-minimal-filled w-full"
        onClick={handleTest}
        aria-label="Test break the app"
      >
        Test Input
      </button>
      {message && (
        <div 
          className="p-4 border border-blue-500/20 bg-blue-500/10 backdrop-blur-sm rounded-xl text-blue-300 text-sm"
          role="status"
        >
          <div className="font-medium mb-1">🛡️ Result</div>
          <div className="opacity-90">{message}</div>
        </div>
      )}
    </div>
  );
};

export default BreakTheApp;
