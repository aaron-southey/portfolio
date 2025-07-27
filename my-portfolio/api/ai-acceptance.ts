import type { VercelRequest, VercelResponse } from '@vercel/node';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { userStory } = req.body || {};
  if (!userStory || typeof userStory !== 'string') {
    return res.status(400).json({ error: 'Missing or invalid userStory' });
  }

  if (!process.env.OPENAI_API_KEY) {
    return res.status(500).json({ error: 'OpenAI API key not set' });
  }

  try {
    const completion = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [
        { role: 'system', content: 'You are a QA engineer who writes clear, testable acceptance criteria.' },
        { role: 'user', content: `Given the following user story or feature description, generate a concise, clear, and testable list of acceptance criteria.\n\nUser Story:\n${userStory}\n\nAcceptance Criteria:` },
      ],
      max_tokens: 300,
      temperature: 0.2,
    });

    const criteria = completion.choices?.[0]?.message?.content || '';
    return res.status(200).json({ criteria });
  } catch (err: any) {
    return res.status(500).json({ error: 'Failed to call OpenAI', details: err?.message || String(err) });
  }
}