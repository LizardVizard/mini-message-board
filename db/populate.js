import { Client } from "pg";
import { CONNECTION_SETTINGS } from "./pool.js";

const createTableQuery = `
CREATE TABLE IF NOT EXISTS messages (
id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
username VARCHAR(255),
text TEXT,
added TIMESTAMP
);
`;
const insertValuesQuery = `
INSERT INTO messages (text, username, added ) VALUES
($1, $2, $3),
($4, $5, $6)
`;
const values = [
  "This is a test message written by Meowser",
  "Meowser",
  `'${new Date().toISOString()}'`,
  "HATE. LET ME TELL YOU HOW MUCH I'VE COME TO HATE YOU SINCE I BEGUN TO LIVE.",
  "ChatGPT",
  `'${new Date().toISOString()}'`,
];

async function main() {
  const client = new Client(CONNECTION_SETTINGS);
  await client.connect();

  try {
    await client.query(createTableQuery);
    await client.query(insertValuesQuery, values);
  } catch (err) {
    console.log(err);
  } finally {
    client.end();
  }
}

main();
