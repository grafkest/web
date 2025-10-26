import { NextResponse } from "next/server";
import { z } from "zod";

const leadSchema = z.object({
  name: z.string().min(2),
  company: z.string().min(2).optional(),
  size: z.string().min(1),
  role: z.string().min(2).optional(),
  email: z.string().email(),
  phone: z.string().min(5),
  industry: z.string().min(2).optional(),
  goal: z.string().min(2),
  message: z.string().optional(),
  consent: z.boolean(),
  preferred_slot: z.string().optional(),
  token: z.string().optional()
});

const WINDOW_MS = 60 * 1000;
const MAX_REQUESTS = 10;
const clientRequests = new Map<string, { count: number; expires: number }>();

function rateLimit(ip: string): boolean {
  const now = Date.now();
  const entry = clientRequests.get(ip);
  if (!entry || entry.expires < now) {
    clientRequests.set(ip, { count: 1, expires: now + WINDOW_MS });
    return true;
  }
  if (entry.count >= MAX_REQUESTS) {
    return false;
  }
  entry.count += 1;
  return true;
}

export async function POST(request: Request) {
  const ip = request.headers.get("x-forwarded-for") ?? "unknown";
  if (!rateLimit(ip)) {
    return NextResponse.json({ error: "Too many requests" }, { status: 429 });
  }

  const json = await request.json();
  const result = leadSchema.safeParse(json);
  if (!result.success) {
    return NextResponse.json({ error: "Validation error" }, { status: 400 });
  }

  console.log("Lead received", result.data);

  return NextResponse.json({ ok: true });
}
