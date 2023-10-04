const busyWait = (duration: number): Promise<boolean> => {
  return new Promise((resolve) => {
    const start = new Date().getTime();
    const end = start + duration;
    console.log("Busy-wait start:", start);

    while (new Date().getTime() < end) {
      // Busy-wait
    }

    console.log("Busy-wait end:", new Date().getTime());
    resolve(true);
  });
};

export async function GET(): Promise<any> {
  console.log("GET function start:", new Date().getTime());

  // Busy-wait for 60 sec
  const result = await busyWait(60000);

  console.log("GET function end:", new Date().getTime());

  const data = { message: result };

  return Response.json({ data });
}
