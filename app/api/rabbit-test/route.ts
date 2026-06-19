import amqp from "amqplib";
export async function GET() {
  const conn = await amqp.connect(
    process.env.RABBITMQ_URL!
  );

  await conn.close();

  return Response.json({
    connected: true,
  });
}