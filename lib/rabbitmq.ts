import amqp from "amqplib";

declare global {
  var rabbitConnection: amqp.ChannelModel | undefined;
  var rabbitChannel: amqp.Channel | undefined;
}

export async function getRabbitMQ() {
  if (
    global.rabbitConnection &&
    global.rabbitChannel
  ) {
    return global.rabbitChannel;
  }

  const connection = await amqp.connect(
    process.env.RABBITMQ_URL!
  );

  const channel = await connection.createChannel();

  global.rabbitConnection = connection;
  global.rabbitChannel = channel;

  return channel;
}