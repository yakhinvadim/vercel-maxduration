const busyWait = (duration: number) => {
  return new Promise((resolve) => {
    const end = new Date().getTime() + duration;
    while (new Date().getTime() < end) {
      // Busy-wait
    }
    resolve(true);
  });
};

// To occupy the function for 60 seconds

export async function GET() {
  // sleep 50 sec
  await busyWait(10000);

  const data = { message: "Hello World" };

  return Response.json({ data });
}
