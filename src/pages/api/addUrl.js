// endpoint to POST url and return short_code

import { turso } from "../../turso";

export async function POST({ request }) {
  try {
    // Extract data from the POST request body
    const providedURL = await request.json();
    const urlResult = await turso.execute(
      `insert into urls (url) values ('${providedURL.url}') RETURNING *;`
    );
    // console.log(urlResult);
    // console.log(urlResult.rows[0].short_code);
    const returnedShortCode = urlResult.rows[0].short_code;
    // Return the extracted data
    return new Response(JSON.stringify(returnedShortCode));
  } catch (error) {
    return new Response(error, { status: 400 });
  }
}
