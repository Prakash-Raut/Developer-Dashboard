import express from "express";
import { globalErrorHandler } from "./middleware/globalErrorHandler";

const app = express();

app.get("/", (req, res) => {
	res.send("Hello World");
});

app.use(globalErrorHandler);

export { app };
