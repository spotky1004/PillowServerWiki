import express from "express";
import path from "path";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import session from "express-session";
import nunjucks from "nunjucks";

import env from "./env";
env();
import indexRouter from "./routes/index";

const app = express();
app.set("port", process.env.PORT || 5050);
app.set("view engine", "html");

nunjucks.configure(path.join("public", "views"), {
  express: app,
  autoescape: true,
  watch: true
});

// use livereload
if (process.env.NODE_ENV === "development") {
  const liveReloadServer = require("livereload").createServer();
  liveReloadServer.server.once("connection", () => {
    setTimeout(() => {
      liveReloadServer.refresh("/");
    }, 100);
  });
  app.use(require("connect-livereload")());
}

const COOKIE_SECRET = process.env.COOKIE_SECRET as string;
const SESSION_SECRET = process.env.SESSION_SECRET as string;
app.use(morgan("dev"));
app.use(express.static("public"));
app.use(express.json());
app.use(cookieParser(COOKIE_SECRET));
app.use(session({
  resave: false,
  saveUninitialized: false,
  secret: SESSION_SECRET,
  cookie: {
    httpOnly: true,
    secure: false
  }
}));

app.use("/", indexRouter);
app.use((req, res, next) => {
  const error: ResponseError = new Error(`[${req.method}] Page '${req.url}' isn't exists!`);
  error.status = 404;
  next(error);
});

app.use((err: ResponseError, req: express.Request, res: express.Response, next: express.NextFunction) => {
  res.locals = {
    title: "Error!",
    message: err.message,
    error: process.env.NODE_ENV !== "production" ? err : {}
  };
  res.status(err.status || 500);
  res.render("error");
});

app.listen(app.get("port"), () => {
  console.log(`* Listening on port ${app.get("port")} (http://127.0.0.1:8005/)`);
});
