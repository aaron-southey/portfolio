import React, { useState } from "react";

const BreakTheApp: React.FC = () => {
  const [input, setInput] = useState("");
  const [message, setMessage] = useState<string | null>(null);

  function handleTest() {
    if (input.trim() === "") {
      setMessage("Try entering something! Empty input is too easy.");
    } else if (/\d{10,}/.test(input)) {
      setMessage("Wow, that's a lot of numbers! But the app survived.");
    } else if (/[^\w\s]/.test(input)) {
      setMessage("Special characters detected! Still going strong.");
    } else if (input.length > 30) {
      setMessage("That's a long one! But no crash here.");
    } else if (/crash|break|fail|error/i.test(input)) {
      setMessage("Nice try! But this app is resilient.");
    } else if (/\b(alert|window|script|<|>)\b/i.test(input)) {
      setMessage("No script injection here! Good thinking though.");
    } else {
      setMessage("All good! Try something more creative?");
    }
  }

  return (
    <div className="flex flex-col gap-3">
      <input
        className="border p-2 rounded"
        value={input}
        onChange={e => setInput(e.target.value)}
        aria-label="Break the app input"
        placeholder="Type your wildest input..."
      />
      <button
        className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 focus:outline-none focus:ring"
        onClick={handleTest}
        aria-label="Test break the app"
      >
        Test
      </button>
      {message && <div className="text-green-700 font-semibold" role="status">{message}</div>}
    </div>
  );
};

export default BreakTheApp;
