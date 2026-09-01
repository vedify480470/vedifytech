import { NextResponse } from "next/server";
import { siteInfo } from "@/data/site";
import { services } from "@/data/services";

const OUT_OF_SCOPE_REPLY =
  "Sorry, this is out of context — we can't answer that or provide this kind of service here. I can only help with our services, company info, address, phone number, or contact details.";

const MAX_HISTORY = 8;

function buildSystemPrompt() {
  const serviceList = services
    .map((s) => `- ${s.title}: ${s.shortDescription}`)
    .join("\n");

  return `You are the website assistant for ${siteInfo.name}, an IT company.

Company facts you may use:
- Name: ${siteInfo.name}
- Address: ${siteInfo.address}
- Phone: ${siteInfo.phone}
- Email: ${siteInfo.email}
- Opening hours: ${siteInfo.openingHours}

Services offered:
${serviceList}

Rules:
- Only answer questions about ${siteInfo.name}'s services, the company itself, or its contact details (address, phone, email).
- This includes questions from visitors who want to describe a project or ask if the company can build/do something — if it reasonably relates to software, websites, apps, digital marketing, or events, answer helpfully and relate it to the relevant service(s) above.
- If the question is unrelated to this company (general knowledge, other companies, personal advice, coding help unrelated to hiring us, etc.), reply with EXACTLY this sentence and nothing else: "${OUT_OF_SCOPE_REPLY}"
- Keep answers concise (2-4 sentences), friendly, and professional. Do not make up facts not listed above.`;
}

export async function POST(req: Request) {
  const apiKey = process.env.GROQ_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ error: "Chat is not configured." }, { status: 503 });
  }

  let body: { message?: string; history?: { role: "user" | "assistant"; content: string }[] };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const message = body.message?.trim();
  if (!message) {
    return NextResponse.json({ error: "Message is required." }, { status: 400 });
  }

  const history = (body.history ?? []).slice(-MAX_HISTORY);

  try {
    const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "openai/gpt-oss-20b",
        temperature: 0.3,
        max_tokens: 400,
        reasoning_effort: "low",
        messages: [
          { role: "system", content: buildSystemPrompt() },
          ...history,
          { role: "user", content: message },
        ],
      }),
    });

    if (!response.ok) {
      return NextResponse.json({ reply: OUT_OF_SCOPE_REPLY });
    }

    const data = await response.json();
    const reply: string =
      data.choices?.[0]?.message?.content?.trim() || OUT_OF_SCOPE_REPLY;

    return NextResponse.json({ reply });
  } catch {
    return NextResponse.json({ reply: OUT_OF_SCOPE_REPLY });
  }
}
