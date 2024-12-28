import express from "express";
import { errorHandler } from "./middlewares/errorHandler";
import routes from "./routes/routes";

export default class App {
  public app: express.Application;

  constructor() {
    this.app = express();
    this.initializeMiddlewares();
    this.initializeRoutes();
    this.initializeErrorHandling();
  }

  private initializeMiddlewares() {
    this.app.use(express.json());
  }

  private initializeRoutes() {
    this.app.use("/v1", routes);
  }

  private initializeErrorHandling() {
    this.app.use(errorHandler);
  }
}
