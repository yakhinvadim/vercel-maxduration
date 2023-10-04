export const maxDuration = 90;

export async function GET() {
  // sleep 50 sec
  await new Promise((resolve) => setTimeout(resolve, 70000));

  const data = { message: "Hello World" };

  return Response.json({ data });
}