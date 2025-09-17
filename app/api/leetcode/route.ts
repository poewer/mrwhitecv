import { NextResponse } from "next/server";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const username = searchParams.get("username");
    const year = searchParams.get("year");

    console.log('API called with:', { username, year });

    if (!username || !year) {
      console.log('Missing parameters');
      return NextResponse.json(
        { error: "Missing username or year" },
        { status: 400 }
      );
    }

    console.log('Calling external API...');
    const response = await fetch("https://konrad144-20144.wykr.es/webhook/leetcode_poewer", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        year: year
      })
    });

    console.log('External API response status:', response.status);

    if (!response.ok) {
      const errorText = await response.text();
      console.error('External API error:', errorText);
      return NextResponse.json(
        { error: `External API failed: ${response.status} ${errorText}` },
        { status: response.status }
      );
    }

    const data = await response.json();
    console.log('External API data:', data);
    
    // Sprawdź czy dane są w poprawnym formacie
    if (!data.data?.matchedUser?.userCalendar) {
      console.error('Invalid data structure:', data);
      return NextResponse.json(
        { error: "Invalid data structure from external API" },
        { status: 500 }
      );
    }

    return NextResponse.json(data);
  } catch (err: any) {
    console.error('API Error:', err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}