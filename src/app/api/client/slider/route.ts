export async function GET() {
  const res = await fetch("https://app.oxygenstones.com/api/client/slider", {
    headers: {
      "Content-Type": "application/json",
    },
  });
  const { data } = await res.json();

  return Response.json({ data });
}
