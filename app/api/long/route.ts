const busyWait = async (duration: number): Promise<boolean> => {
  const end = new Date().getTime() + duration;
  while (new Date().getTime() < end) {}
  return true;
};

export const maxDuration = 90;
export const dynamic = "force-dynamic";

export const GET = async (): Promise<any> => {
  const result = await busyWait(70000);
  const data = { message: result };
  return Response.json({ data });
};
