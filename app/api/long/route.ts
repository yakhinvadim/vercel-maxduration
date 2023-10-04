function busyWait(duration: number) {
  const end = new Date().getTime() + duration;
  while (new Date().getTime() < end) {
    // Busy-wait
  }
}

// To occupy the function for 60 seconds

export async function GET() {
  // sleep 50 sec
  busyWait(10000);

  const data = { message: "Hello World" };

  return Response.json({ data });
}
