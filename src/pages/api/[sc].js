// endpoint to get redirectURL

import { turso } from "../../turso";

export async function GET({ params }) {
  const short_code = params.sc;

  const redirectUrlResponse = await turso.execute(
    `SELECT url FROM urls WHERE short_code = '${short_code}'`
  );

  if (redirectUrlResponse.rows.length > 0) {
    const { url } = redirectUrlResponse.rows[0];
    return new Response(JSON.stringify(url));
  } else {
    return new Response("URL not found", { status: 404 });
  }
}
