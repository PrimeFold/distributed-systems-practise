export async function GET() {
  return Response.json({
    redisUrl: process.env.REDIS_URL,
  });
}