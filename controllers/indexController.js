import db from "../db/queries.js";

const getIndex = async (req, res) => {
  const messages = await db.getAllMessages();
  if (!messages) {
    // TODO: Maybe an error page for this
    console.error("Error while fetching messages(index page)");
    res.redirect("/");
  }
  res.render("index", { messages: messages });
};

const getNew = (req, res) => {
  res.render("form");
};

const postNew = async (req, res) => {
  console.log("Adding a user: ", req.body);

  const user = {
    username: req.body.name,
    text: req.body.text,
    added: new Date().toISOString(),
  };
  await db.insertMessage(user);
  res.redirect("/");
};

const getMessageById = async (req, res) => {
  const messages = await db.getMessageById(req.params.id);

  if (!messages) {
    // TODO: Maybe an error page for this
    console.error("Error while fetching messages(message by id)");
    res.redirect("/");
  }

  if (!messages[0]) {
    res.render("message", { message: null });
  } else {
    res.render("message", { message: messages[0] });
  }
};

export default {
  getIndex,
  getNew,
  postNew,
  getMessageById,
};
