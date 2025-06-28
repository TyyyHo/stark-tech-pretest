import { NextRequest, NextResponse } from "next/server";

const Authorization = "Bearer" + process.env.API_TOKEN;

export async function POST(req: NextRequest) {
  try {
    const requestData = await req.json();
    const { method, url } = requestData;

    const response = await fetch(url, {
      method: method || "GET",
      headers: {
        Authorization,
      },
    });

    if (!response.ok) {
      throw new Error(`FinMind API responded with status: ${response.status}`);
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json({ error }, { status: 500 });
  }
}

// export async function POST(req: NextRequest) {
//   const request = await req.json();
//   console.log("request", request);

//   try {
//     const response = await apiGetStockInfo({
//       data_id: "2330",
//     });

//     return Response.json(response);
//   } catch (error) {
//     return Response.json({ error: "Failed to fetch data" }, { status: 500 });
//   }
// }
