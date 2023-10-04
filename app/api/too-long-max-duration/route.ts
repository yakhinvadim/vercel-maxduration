export async function GET() {
  // sleep 50 sec
  await new Promise((resolve) => setTimeout(resolve, 59000));

  const data = { message: "Hello World" };

  return Response.json({ data });
}
