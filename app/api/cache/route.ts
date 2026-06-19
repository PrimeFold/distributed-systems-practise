import { redis } from "@/lib/redis";

export async function GET() {
  const visits = await redis.incr("visits");
  return Response.json({
    visits,
  });
}