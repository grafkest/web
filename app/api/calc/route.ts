import { NextResponse } from "next/server";
import { z } from "zod";

const calcSchema = z.object({
  volume_per_day: z.number().min(1),
  avg_handle_time: z.number().min(1),
  cost_per_hour: z.number().min(1),
  automation_rate: z.number().min(0).max(100)
});

export async function POST(request: Request) {
  const json = await request.json();
  const result = calcSchema.safeParse(json);
  if (!result.success) {
    return NextResponse.json({ error: "Validation error" }, { status: 400 });
  }

  const minutesSaved =
    result.data.volume_per_day * result.data.avg_handle_time * (result.data.automation_rate / 100);
  const hoursSaved = minutesSaved / 60;
  const monthlyBenefit = hoursSaved * result.data.cost_per_hour * 22;

  return NextResponse.json({ monthlyBenefit: Math.round(monthlyBenefit) });
}
