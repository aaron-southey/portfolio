import React, { useState } from "react";

interface JsonVisualizerProps {
  defaultJson?: string;
}

const JsonVisualizer: React.FC<JsonVisualizerProps> = ({ 
  defaultJson = `{
  "user": {
    "name": "Aaron Southey",
    "role": "Quality Engineer",
    "skills": ["Cypress", "Playwright", "TypeScript"],
    "active": true
  }
}` 
}) => {
  const [jsonInput, setJsonInput] = useState(defaultJson);
  let parsed: unknown = null;
  let error: string | null = null;
  
  try {
    parsed = JSON.parse(jsonInput);
  } catch (e: unknown) {
    error = e instanceof Error ? e.message : 'Unknown error';
  }

  return (
    <div className="space-y-4" aria-labelledby="json-visualizer-title">
      <div className="grid md:grid-cols-2 gap-4">
        {/* Input Section */}
        <div className="space-y-3">
          <label className="text-sm font-medium text-gray-300 block">JSON Input</label>
          <textarea
            className="w-full min-h-[200px] p-4 border border-white/20 bg-black/20 backdrop-blur-sm text-gray-200 placeholder:text-gray-500 rounded-xl resize-none focus:border-white/40 focus:bg-black/30 transition-all font-mono text-sm focus:outline-none focus:ring-2 focus:ring-white/10"
            value={jsonInput}
            onChange={e => setJsonInput(e.target.value)}
            placeholder="Enter your JSON here..."
            aria-label="JSON input"
          />
        </div>

        {/* Output Section */}
        <div className="space-y-3">
          <label className="text-sm font-medium text-gray-300 block">
            {error ? 'Error' : 'Formatted Output'}
          </label>
          {error ? (
            <div 
              className="min-h-[200px] p-4 border border-red-500/30 bg-red-500/10 backdrop-blur-sm rounded-xl text-red-300 text-sm flex items-start"
              role="alert"
            >
              <div>
                <div className="font-medium mb-2">⚠️ Invalid JSON</div>
                <div className="opacity-80">{error}</div>
              </div>
            </div>
          ) : (
            <pre className="min-h-[200px] p-4 border border-green-500/20 bg-green-500/5 backdrop-blur-sm rounded-xl text-gray-200 text-sm overflow-x-auto font-mono leading-relaxed" aria-live="polite">
              {JSON.stringify(parsed, null, 2)}
            </pre>
          )}
        </div>
      </div>

      {/* Status Bar */}
      <div className="flex justify-between items-center text-xs text-gray-400 pt-2 border-t border-white/10">
        <span>
          {error ? '❌ Invalid JSON' : '✅ Valid JSON'}
        </span>
        <span>
          Characters: {jsonInput.length}
        </span>
      </div>
    </div>
  );
};

export default JsonVisualizer;
