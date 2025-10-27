import { Router } from "express";
import indexController from "../controllers/indexController.js";

const indexRouter = Router();

indexRouter.get("/", indexController.getIndex);
indexRouter.get("/message/:id", indexController.getMessageById);

indexRouter
  .route("/new")
  .get(indexController.getNew)
  .post(indexController.postNew);

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
