const busyWait = async (duration: number, logs: string[]): Promise<boolean> => {
  const start = new Date().getTime();
  logs.push(`Busy-wait start: ${start}`);
  const end = start + duration;

  while (new Date().getTime() < end) {
    // Busy-wait
  }

  const endBusyWait = new Date().getTime();
  logs.push(`Busy-wait end: ${endBusyWait}`);
  return true;
};

export const dynamic = "force-dynamic";

export const GET = async (): Promise<any> => {
  const logs: string[] = [];
  const startGet = new Date().getTime();
  logs.push(`GET function start: ${startGet}`);

  // Busy-wait for 60 seconds
  const result = await busyWait(60000, logs);

  const endGet = new Date().getTime();
  logs.push(`GET function end: ${endGet}`);

  const data = {
    message: result,
    logs,
  };

  return Response.json({ data });
};
