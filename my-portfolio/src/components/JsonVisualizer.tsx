import React, { useState } from "react";

interface JsonVisualizerProps {
  defaultJson?: string;
}

const JsonVisualizer: React.FC<JsonVisualizerProps> = ({ defaultJson = '{"message": "Hello, world!"}' }) => {
  const [jsonInput, setJsonInput] = useState(defaultJson);
  let parsed: any = null;
  let error: string | null = null;
  try {
    parsed = JSON.parse(jsonInput);
  } catch (e: any) {
    error = e.message;
  }

  return (
    <section className="my-6 p-4 border rounded bg-white" aria-labelledby="json-visualizer-title">
      <h2 id="json-visualizer-title" className="text-xl font-semibold mb-2">JSON Visualizer</h2>
      <textarea
        className="w-full border p-2 rounded mb-2 font-mono"
        rows={5}
        value={jsonInput}
        onChange={e => setJsonInput(e.target.value)}
        aria-label="JSON input"
      />
      {error ? (
        <div className="text-red-600" role="alert">Error: {error}</div>
      ) : (
        <pre className="bg-gray-100 p-2 rounded overflow-x-auto" aria-live="polite">{JSON.stringify(parsed, null, 2)}</pre>
      )}
    </section>
  );
};

export default JsonVisualizer;
