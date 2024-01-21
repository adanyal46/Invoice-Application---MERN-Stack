import cookieParser from "cookie-parser";
import express from "express";
import morgan from "morgan";
import { morganMiddleware, systemLogs } from "./utils/Logger.js";

const app = express();

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cookieParser());
app.use(morganMiddleware)

app.get("/api/v1/test", (req, res) => {
  res.json({ hi: "Welcome to then invoice app" });
});

const PORT =  process.env.PORT || 2003;

app.listen(PORT, () => {
    console.log(`Server is running at ${PORT}`);
    systemLogs.info(`Server is running on ${process.env.NODE_ENV} mode on ${PORT}`)
})