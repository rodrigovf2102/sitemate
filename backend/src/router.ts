import { Router } from "express";
import { deleteJsonById, getJsons, postJson, updateJsonById } from "./controller";

const sitemateRouter = Router();

sitemateRouter.get("/", getJsons);
sitemateRouter.post("/", postJson);
sitemateRouter.put("/", updateJsonById);
sitemateRouter.delete("/", deleteJsonById);

export { sitemateRouter }