import React, { useState } from "react";
import JsonVisualizer from "../components/JsonVisualizer";
import BreakTheApp from "../components/BreakTheApp";
import { useToast } from "@/hooks/use-toast";


const QATestUtilities: React.FC = () => {
  const [userStory, setUserStory] = useState("");
//   const [criteria, setCriteria] = useState<string | null>(null);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState<string | null>(null);
  const { toast } = useToast();

//   async function handleGenerate() {
//     setLoading(true);
//     setError(null);
//     setCriteria(null);
//     try {
//       const response = await fetch('/api/ai-acceptance', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ userStory }),
//       });
//       if (!response.ok) {
//         const err = await response.json().catch(() => ({}));
//         throw new Error(err.error || 'API error');
//       }
//       const data = await response.json();
//       setCriteria(data.criteria || 'No criteria returned.');
//     } catch (e: any) {
//       setError(e.message || 'Failed to generate acceptance criteria. Please try again.');
//     } finally {
//       setLoading(false);
//     }
//   }

  return (
    <main className="flex flex-col gap-8 items-center justify-center min-h-[60vh] p-4">
      <h1 className="text-2xl md:text-3xl font-bold text-white text-center mb-4">QA Test Utilities</h1>
      
      <div className="w-full max-w-2xl bg-black/40 backdrop-blur-md border border-white/20 rounded-lg p-6">
        <h2 className="text-xl font-bold text-white mb-2">AI Acceptance Criteria Generator</h2>
        <p className="text-gray-300 mb-6">Paste a user story or feature and generate acceptance criteria using AI.</p>
        <div className="space-y-4">
          <textarea
            className="w-full min-h-[80px] p-3 border border-white/30 bg-black/20 text-white placeholder:text-gray-400 rounded resize-y"
            placeholder="Paste your user story or feature description here..."
            value={userStory}
            onChange={e => setUserStory(e.target.value)}
            // disabled={loading}
          />
          <button
            className="px-5 py-2 rounded-md bg-primary text-primary-foreground font-semibold shadow hover:bg-primary/90 transition-colors disabled:opacity-60"
            onClick={() => toast({
                title: "Feature not yet implemented!",
                description: "This feature is still under development, thanks for your patience!",
            })}
            // disabled={loading || !userStory.trim()}
          >
            {/* {loading ? "Generating..." : "Generate Acceptance Criteria"} */}
            Generate Acceptance Criteria
          </button>
          {/* {criteria && (
            <div className="mt-4 bg-muted rounded p-4 whitespace-pre-line text-sm border">
              <strong>Acceptance Criteria:</strong>
              <br />
              {criteria}
            </div>
          )} */}
          {/* {error && (
            <div className="mt-2 text-red-600" role="alert">{error}</div>
          )} */}
        </div>
      </div>

      <div className="w-full max-w-2xl bg-black/40 backdrop-blur-md border border-white/20 rounded-lg p-6">
        <h2 className="text-xl font-bold text-white mb-2">JSON Visualizer</h2>
        <p className="text-gray-300 mb-6">Convert your JSON to Prettier Format!</p>
        <JsonVisualizer />
      </div>

      <div className="w-full max-w-2xl bg-black/40 backdrop-blur-md border border-white/20 rounded-lg p-6">
        <h2 className="text-xl font-bold text-white mb-2">Break the App Challenge</h2>
        <p className="text-gray-300 mb-6">Try to break the input below! Enter weird, long, or unexpected values and see what happens.</p>
        <BreakTheApp />
      </div>
    </main>
  );
};

export default QATestUtilities;
