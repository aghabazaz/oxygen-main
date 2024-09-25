import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get("lang");
  console.log(
    "%c `https://app.oxygenstones.com/api/client/product?lang=${query}",
    "background: #FFF; color: #000;padding: 0.25rem;border-radius: 5px",
    `https://app.oxygenstones.com/api/client/product?lang=${query}`
  );
  const res = await fetch(
    `https://app.oxygenstones.com/api/client/product?lang=${query}`,
    {
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-store",
    }
  );
  const { data } = await res.json();

  return Response.json({ data });
}
