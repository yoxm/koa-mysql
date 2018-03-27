require("babel-register");
const koa = require("koa");
const app = new koa();
const router = require("./route/api");
const cors = require("koa2-cors");
const koaBodyParser = require("koa-bodyparser");
router.use("/", router.routes(), router.allowedMethods());
app.use(koaBodyParser());
app.use(cors());
app.use(router.routes(), router.allowedMethods());

app.listen(3001);
console.log("app started 3001");
