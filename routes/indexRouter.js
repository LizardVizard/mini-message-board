import { Router } from "express";

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

const indexRouter = Router();

indexRouter.get("/", (req, res) => {
  res.render("index", { messages: messages });
});
indexRouter.get("/message/:id", (req, res) => {
  res.render("message", { message: messages[req.params.id] });
});

indexRouter
  .route("/new")
  .get((req, res) => {
    res.render("form");
  })
  .post((req, res) => {
    console.log("Adding a user: ", req.body);
    messages.push({
      user: req.body.name,
      text: req.body.text,
      added: new Date(),
    });
    res.redirect("/");
  });

// indexRouter.get("/new", (req, res) => {
//   res.render("form");
// });
//
// indexRouter.post("/new", (req, res) => {
//   console.log("Adding a user: "req.body);
//   messages.push({
//     user: req.body.name,
//     text: req.body.text,
//     added: new Date(),
//   });
//   res.redirect("/");
// });

export default indexRouter;
