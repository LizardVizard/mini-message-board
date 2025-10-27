const messages = [
  {
    text: "hi there",
    user: "Ama",
    added: new Date(),
  },
  {
    text: "ahoy there",
    user: "Charlie",
    added: new Date(),
  },
];
const getIndex = (req, res) => {
  res.render("index", { messages: messages });
};

const getNew = (req, res) => {
  res.render("form");
};

const postNew = (req, res) => {
  console.log("Adding a user: ", req.body);
  messages.push({
    user: req.body.name,
    text: req.body.text,
    added: new Date(),
  });
  res.redirect("/");
};

const getMessageById = (req, res) => {
  res.render("message", { message: messages[req.params.id] });
};

export default {
  getIndex,
  getNew,
  postNew,
  getMessageById,
};
