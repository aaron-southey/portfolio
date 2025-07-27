import React, { useState } from "react";
import JsonVisualizer from "../components/JsonVisualizer";
import EdgeCaseSimulator from "../components/EdgeCaseSimulator";

const TestPlayground: React.FC = () => {
  const [testResult, setTestResult] = useState<string | null>(null);

  const runDemoTest = () => {
    // Simulate a test
    setTestResult("✅ All demo tests passed!");
  };

  return (
    <main className="p-4 max-w-xl mx-auto" aria-labelledby="test-playground-title">
      <h1 id="test-playground-title" className="text-2xl font-bold mb-4">Test Playground</h1>
      <button
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 focus:outline-none focus:ring"
        onClick={runDemoTest}
        aria-label="Run demo test"
      >
        Run Demo Test
      </button>
      {testResult && (
        <div className="mt-4 p-2 bg-green-100 text-green-800 rounded" role="status">
          {testResult}
        </div>
      )}

      {/* JSON Visualizer */}
      <JsonVisualizer />

      {/* Edge Case UI Simulator */}
      <EdgeCaseSimulator />
    </main>
  );
};

export default TestPlayground;
