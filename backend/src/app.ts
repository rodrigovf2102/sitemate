import express, { Express } from "express";
import cors from "cors";
import { sitemateRouter } from "./router";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/sitemate", sitemateRouter);

export function start(): Promise<Express> {
    return Promise.resolve(app);
  }

export default app;