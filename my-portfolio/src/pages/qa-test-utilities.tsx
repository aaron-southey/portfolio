import React, { useState } from "react";
import JsonVisualizer from "../components/JsonVisualizer";
import BreakTheApp from "../components/BreakTheApp";
import { useToast } from "@/hooks/use-toast";
import { motion } from 'framer-motion';


const QATestUtilities: React.FC = () => {
  const [userStory, setUserStory] = useState("");
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
    <main className="flex flex-col items-center justify-center min-h-[60vh] px-6">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-light tracking-tight text-white mb-4">Test Utilities</h1>
        <div className="text-minimal">Interactive tools for quality engineering</div>
      </motion.div>
      
      <div className="space-y-8 w-full max-w-4xl">
        {/* AI Acceptance Criteria Generator */}
        <div className="bg-black/20 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-white/20 transition-all duration-500">
          <h2 className="text-2xl font-medium text-white mb-3">AI Acceptance Criteria Generator</h2>
          <p className="text-gray-300 mb-8 font-light">Paste a user story or feature and generate acceptance criteria using AI.</p>
          
          <div className="space-y-6">
            <textarea
              className="w-full min-h-[120px] p-4 border border-white/20 bg-white/5 text-white placeholder:text-gray-500 rounded-xl resize-none focus:border-white/40 focus:bg-white/10 transition-all font-light"
              placeholder="Paste your user story or feature description here..."
              value={userStory}
              onChange={e => setUserStory(e.target.value)}
            />
            
            <button
              className="btn-minimal-filled"
              onClick={() => toast({
                  title: "Feature not yet implemented!",
                  description: "This feature is still under development, thanks for your patience!",
              })}
            >
              Generate Acceptance Criteria
            </button>
          </div>
        </div>

        {/* JSON Visualizer */}
        <div className="bg-black/20 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-white/20 transition-all duration-500">
          <h2 className="text-2xl font-medium text-white mb-3">JSON Visualizer</h2>
          <p className="text-gray-300 mb-8 font-light">Convert your JSON to prettier format with validation and formatting.</p>
          
          <JsonVisualizer />
        </div>

        {/* Break the App Challenge */}
        <div className="bg-black/20 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-white/20 transition-all duration-500">
          <h2 className="text-2xl font-medium text-white mb-3">Break the App Challenge</h2>
          <p className="text-gray-300 mb-8 font-light">Try to break the input below! Enter weird, long, or unexpected values and see what happens.</p>
          
          <BreakTheApp />
        </div>
      </div>
    </main>
  );
};

export default QATestUtilities;
