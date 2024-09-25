import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get("lang");
  const res = await fetch(
    `https://app.oxygenstones.com/api/client/post?lang=${query}`,
    {
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-cache",
    }
  );
  const { data } = await res.json();

  return Response.json({ data });
}
