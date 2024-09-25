export async function GET() {
  const res = await fetch("https://app.oxygenstones.com/api/client/setting", {
    headers: {
      "Content-Type": "application/json",
    },
    cache: "no-cache",
  });
  const { data } = await res.json();

  return Response.json({ data });
}
