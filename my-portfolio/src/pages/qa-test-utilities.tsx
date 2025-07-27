import React from "react";
import JsonVisualizer from "../components/JsonVisualizer";
import BreakTheApp from "../components/BreakTheApp";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

const QATestUtilities: React.FC = () => {
  return (
    <main className="flex flex-col gap-8 items-center justify-center min-h-[60vh] p-4">
      <Card className="w-full max-w-2xl">
        <CardHeader>
          <CardTitle>JSON Visualizer</CardTitle>
          <CardDescription>Convert your JSON to Prettier Format!</CardDescription>
        </CardHeader>
        <CardContent>
          <JsonVisualizer />
        </CardContent>
      </Card>

      <Card className="w-full max-w-2xl">
        <CardHeader>
          <CardTitle>Break the App Challenge</CardTitle>
          <CardDescription>Try to break the input below! Enter weird, long, or unexpected values and see what happens.</CardDescription>
        </CardHeader>
        <CardContent>
          <BreakTheApp />
        </CardContent>
      </Card>
    </main>
  );
};

export default QATestUtilities;
