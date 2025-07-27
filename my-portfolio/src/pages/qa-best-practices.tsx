import React from "react";
import { Card, CardHeader, CardDescription, CardContent } from "@/components/ui/card";

const exampleTest = `describe('Login flow', () => {
  it('should allow a user to log in', () => {
    cy.visit('/login');
    cy.get('input[name=email]').type('user@example.com');
    cy.get('input[name=password]').type('password123');
    cy.get('button[type=submit]').click();
    cy.url().should('include', '/dashboard');
    cy.contains('Welcome, user!');
  });
});`;

const bestPractices: string[] = [
  "Use data-testid or accessible selectors for stable element targeting.",
  "Keep tests isolated and idempotent.",
  "Mock network requests for reliability.",
  "Use beforeEach/afterEach for setup and teardown.",
  "Assert both UI and side effects (e.g., API calls, localStorage).",
  "Document edge cases and negative scenarios.",
  "Use custom commands for repetitive actions.",
];

const QABestPractices: React.FC = () => {
  return (
    <main className="flex flex-col gap-8 items-center justify-center min-h-[60vh] p-4">
      <Card className="w-full max-w-2xl">
        <CardHeader>Cypress Best Practices
          <CardDescription>Examples and tips for robust, maintainable tests</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h2 className="font-semibold mb-2">Example Cypress Test</h2>
            <pre className="bg-muted rounded p-4 text-sm overflow-x-auto">
              <code>{exampleTest}</code>
            </pre>
          </div>
          <div>
            <h2 className="font-semibold mb-2">Best Practices</h2>
            <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
              {bestPractices.map((tip, i) => (
                <li key={i}>{tip}</li>
              ))}
            </ul>
          </div>
        </CardContent>
      </Card>
    </main>
  );
};

export default QABestPractices;
