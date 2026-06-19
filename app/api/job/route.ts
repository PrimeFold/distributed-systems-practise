import { getRabbitMQ } from "@/lib/rabbitmq";

export async function GET() {
    const channel = await getRabbitMQ();

    const queue = "jobs";
    await channel.assertQueue(queue, { durable: true });

    const job = {
      id: crypto.randomUUID(),
      createdAt: Date.now(),
    };

    channel.sendToQueue(
      queue,
      Buffer.from(JSON.stringify(job))
    );

    return Response.json({
      queued: true,
      job,
    });
}