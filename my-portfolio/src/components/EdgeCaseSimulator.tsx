import React, { useState } from "react";

const EdgeCaseSimulator: React.FC = () => {
  const [input, setInput] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleTest = () => {
    if (input.trim() === "") {
      setError("Input cannot be empty!");
    } else if (input.length > 20) {
      setError("Input is too long!");
    } else {
      setError(null);
      alert("Edge case passed!");
    }
  };

  return (
    <section className="my-6 p-4 border rounded bg-white" aria-labelledby="edge-case-title">
      <h2 id="edge-case-title" className="text-xl font-semibold mb-2">Edge Case UI Simulator</h2>
      <input
        className="border p-2 rounded mr-2"
        value={input}
        onChange={e => setInput(e.target.value)}
        aria-label="Edge case input"
        placeholder="Type something..."
      />
      <button
        className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 focus:outline-none focus:ring"
        onClick={handleTest}
        aria-label="Test edge case"
      >
        Test
      </button>
      {error && <div className="text-red-600 mt-2" role="alert">{error}</div>}
    </section>
  );
};

export default EdgeCaseSimulator;
