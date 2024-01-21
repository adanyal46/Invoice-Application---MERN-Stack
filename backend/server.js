import cookieParser from "cookie-parser";
import express from "express";
import morgan from "morgan";
import chalk from "chalk";

const app = express();

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cookieParser());

app.get("/api/v1/test", (req, res) => {
  res.json({ hi: "Welcome to then invoice app" });
});

const PORT =  process.env.PORT || 2002;

app.listen(PORT, () => {
    console.log(`Server is running at ${PORT}`);
})