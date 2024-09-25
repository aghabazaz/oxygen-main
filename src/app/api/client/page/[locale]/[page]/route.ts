import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
  context: { params: { locale: string; page: string } }
) {
  const { locale, page } = context.params;
  const res = await fetch(
    `https://app.oxygenstones.com/api/client/page/${locale}/${page}`,
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
