import pool from "./pool.js";

const getAllMessages = async () => {
  const { rows } = await pool.query("SELECT * FROM messages");
  return rows;
};

const insertMessage = async (user) => {
  await pool.query(
    "INSERT INTO messages (text, username, added) VALUES ($1, $2, $3);",
    [user.text, user.username, user.added],
  );
};

const getMessageById = async (id) => {
  const { rows } = await pool.query("SELECT * FROM messages WHERE id = $1", [
    id,
  ]);
  return rows;
};

export default { getAllMessages, insertMessage, getMessageById };
