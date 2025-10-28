import db from "../db/queries.js";
import { body, validationResult, matchedData } from "express-validator";

const inputValidation = [
  body("username")
    .trim()
    .notEmpty()
    .withMessage("Name should not be empty")
    .bail()
    .isAlpha()
    .withMessage("Name should only contain english alphabet letters.")
    .bail()
    .isLength({ min: 1, max: 255 })
    .withMessage("Name must be between 1 and 255 characters")
    .bail(),
  body("text")
    .trim()
    .notEmpty()
    .withMessage("Message should not be empty")
    .bail()
    .isAlphanumeric()
    .withMessage(
      "Message should only contain english alphabet letters and number.",
    )
    .bail(),
];

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
  res.render("form", { oldInput: {} });
};

const postNew = [
  inputValidation,
  async (req, res) => {
    const { username, text } = matchedData(req);
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.render("form", {
        oldInput: { username, text },
        errors: errors.array({ onlyFirstError: true }),
      });
      return;
    }

    const user = {
      username: username,
      text: text,
      added: new Date().toISOString(),
    };
    await db.insertMessage(user);
    res.redirect("/");
  },
];

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
