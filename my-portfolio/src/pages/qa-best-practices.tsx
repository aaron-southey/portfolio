import React from "react";

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

const fakerExample = `import { faker } from '@faker-js/faker';

interface ITestUser {
  name: string;
  email: string;
  password: string;
}

describe('Seeded Test Data', () => {
  let testUser: ITestUser;

  beforeEach(() => {
    testUser = {
      name: faker.person.fullName(),
      email: faker.internet.email(),
      password: faker.internet.password(),
    };

    // Seed the data into your app
    await seedUser(testUser);
  });

  it('should be able to programmatically login with the seeded data', async () => {
    const loginResult = await loginUser(testUser.email, testUser.password);

    if (!loginResult.success) {
      throw new Error('Login failed for seeded user');
    }

    console.log('Login successful for:', testUser);
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

const testDataPractices: string[] = [
  "Use faker with a seed for reproducible test data.",
  "Avoid hardcoded data that can cause test flakiness.",
  "Seed application data through API or database scripts before tests.",
  "Clean up or reset the data store after each test suite.",
  "Use realistic data patterns (names, emails, dates) to catch real-world bugs.",
];

const QABestPractices: React.FC = () => {
  return (
    <main className="flex flex-col gap-8 items-center justify-center min-h-[60vh] p-4">
      <h1 className="text-2xl md:text-3xl font-bold text-white text-center mb-4">QA Best Practices</h1>
      
      {/* Cypress Best Practices */}
      <div className="w-full max-w-2xl bg-black/40 backdrop-blur-md border border-white/20 rounded-lg p-6">
        <h2 className="text-xl font-bold text-white mb-2">Cypress Best Practices</h2>
        <p className="text-gray-300 mb-6">Examples and tips for robust, maintainable tests</p>
        <div className="space-y-6">
          <div>
            <h3 className="font-semibold mb-3 text-white">Example Cypress Test</h3>
            <pre className="bg-black/40 border border-white/20 rounded p-4 text-sm overflow-x-auto text-gray-200">
              <code>{exampleTest}</code>
            </pre>
          </div>
          <div>
            <h3 className="font-semibold mb-3 text-white">Best Practices</h3>
            <ul className="list-disc pl-6 space-y-1 text-gray-200">
              {bestPractices.map((tip, i) => (
                <li key={i}>{tip}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Test Data Management */}
      <div className="w-full max-w-2xl bg-black/40 backdrop-blur-md border border-white/20 rounded-lg p-6">
        <h2 className="text-xl font-bold text-white mb-2">Test Data Management</h2>
        <p className="text-gray-300 mb-6">Using randomized and seeded data for stable automated tests</p>
        <div className="space-y-6">
          <div>
            <h3 className="font-semibold mb-3 text-white">Example Using Faker</h3>
            <pre className="bg-black/40 border border-white/20 rounded p-4 text-sm overflow-x-auto text-gray-200">
              <code>{fakerExample}</code>
            </pre>
          </div>
          <div>
            <h3 className="font-semibold mb-3 text-white">Best Practices</h3>
            <ul className="list-disc pl-6 space-y-1 text-gray-200">
              {testDataPractices.map((tip, i) => (
                <li key={i}>{tip}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
};

export default QABestPractices;
