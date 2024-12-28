import { Router } from "express";
import { testRoute } from "./testRoute";

const routes = Router();

routes.get("/", (req, res) => {
  res.json({ message: "Hello World" });
});


routes.use("/test", testRoute);

export default routes;
