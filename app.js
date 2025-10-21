import express from "express";
import { fileURLToPath } from "url";
import { dirname } from "path";
import path from "path";

import indexRouter from "./routes/indexRouter.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const staticAssetsPath = path.join(__dirname, "/public");

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

const PORT = process.env.PORT || 3000;

app.use(express.static(staticAssetsPath));
app.use(express.urlencoded({ extended: true }));

app.use("/", indexRouter);

app.listen(PORT, (req, res) => {
  console.log(`Server is listening on port: ${PORT}`);
});
