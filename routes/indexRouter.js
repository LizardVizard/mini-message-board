import { Router } from "express";
import indexController from "../controllers/indexController.js";

const indexRouter = Router();

indexRouter.get("/", indexController.getIndex);
indexRouter.get("/message/:id", indexController.getMessageById);

indexRouter
  .route("/new")
  .get(indexController.getNew)
  .post(indexController.postNew);

export default indexRouter;
