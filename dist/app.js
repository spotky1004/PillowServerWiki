"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const morgan_1 = __importDefault(require("morgan"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const express_session_1 = __importDefault(require("express-session"));
const nunjucks_1 = __importDefault(require("nunjucks"));
const livereload_1 = __importDefault(require("livereload"));
const connect_livereload_1 = __importDefault(require("connect-livereload"));
const env_1 = __importDefault(require("./env"));
(0, env_1.default)();
const index_1 = __importDefault(require("./routes/index"));
const app = (0, express_1.default)();
app.set("port", process.env.PORT || 5050);
app.set("view engine", "html");
nunjucks_1.default.configure(path_1.default.join("public", "views"), {
    express: app,
    autoescape: true,
    watch: true
});
// use livereload
const liveReloadServer = livereload_1.default.createServer();
liveReloadServer.server.once("connection", () => {
    setTimeout(() => {
        liveReloadServer.refresh("/");
    }, 100);
});
app.use((0, connect_livereload_1.default)());
const COOKIE_SECRET = process.env.COOKIE_SECRET;
const SESSION_SECRET = process.env.SESSION_SECRET;
app.use((0, morgan_1.default)("dev"));
app.use(express_1.default.static("public"));
app.use(express_1.default.json());
app.use((0, cookie_parser_1.default)(COOKIE_SECRET));
app.use((0, express_session_1.default)({
    resave: false,
    saveUninitialized: false,
    secret: SESSION_SECRET,
    cookie: {
        httpOnly: true,
        secure: false
    }
}));
app.use("/", index_1.default);
app.use((req, res, next) => {
    const error = new Error(`[${req.method}] Page '${req.url}' isn't exists!`);
    error.status = 404;
    next(error);
});
app.use((err, req, res, next) => {
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
