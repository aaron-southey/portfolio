
import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { userStory } = req.body || {};
  if (!userStory || typeof userStory !== 'string') {
    return res.status(400).json({ error: 'Missing or invalid userStory' });
  }

  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: 'OpenAI API key not set' });
  }

  try {
    const prompt = `Given the following user story or feature description, generate a concise, clear, and testable list of acceptance criteria.\n\nUser Story:\n${userStory}\n\nAcceptance Criteria:`;
    const openaiRes = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: 'gpt-3.5-turbo',
        messages: [
          { role: 'system', content: 'You are a QA engineer who writes clear, testable acceptance criteria.' },
          { role: 'user', content: prompt },
        ],
        max_tokens: 300,
        temperature: 0.2,
      }),
    });

    if (!openaiRes.ok) {
      const err = await openaiRes.text();
      return res.status(500).json({ error: 'OpenAI error', details: err });
    }
    const data = await openaiRes.json();
    const criteria = data.choices?.[0]?.message?.content || '';
    return res.status(200).json({ criteria });
  } catch (err) {
    return res.status(500).json({ error: 'Failed to call OpenAI', details: String(err) });
  }
}
