import { createClient } from "@libsql/client/web";

export const turso = createClient({
  url: import.meta.env.TURSO_DATABASE_URL,
  authToken: import.meta.env.TURSO_AUTH_TOKEN,
});

// game plan

// create a new table urls
// create table urls (id text, url text)

// NEW:
/* 
CREATE TABLE urls (id INTEGER PRIMARY KEY AUTOINCREMENT, short_code TEXT DEFAULT ('x' || SUBSTR(REPLACE(REPLACE(LOWER(HEX(RANDOMBLOB(4))), '0', ''), 'a', ''),'0','') || LOWER(HEX(RANDOMBLOB(4)))) UNIQUE, url TEXT, created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP);
*/

// add some info to new table
// insert into urls values("https://google.com");

// https://shorten.it/001
// {param} => look in db table for that ID
// take that associated url and redirect user

// select that

// from the UI
// post request that sends that url
// that url gets stored in DB and given an ID

// user goes to localhost:4321/fhdjkhfkjd

// we hit localhost:4321/api/fhdjkhfkjd.json
// recieve a URL
// we redirect the user
