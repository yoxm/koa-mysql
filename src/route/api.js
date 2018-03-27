const koaRouter = require("koa-router");
const router = koaRouter();
const userModel = require("../models/userModel");

router.get("/", function(ctx, next) {
  ctx.body = "all users list ok!";
});

router.post("api/login", async (ctx, next) => {
  console.log("开始登陆，");
  console.log(ctx.request.body);
  const { username, password } = ctx.request.body;
  const user = await userModel.findAll({
    where: {
      username: username,
      password: password
    }
  });
  console.log(`find ${user.length} pets:`);
  if (user.length > 0) {
    ctx.response.status = 200;
    ctx.response.message = "23";
    ctx.body = "{'32', '23'}";
  } else {
    ctx.body = "error";
  }
});

router.get("api/signout", (ctx, next) => {
  ctx.body = "{'2': '3'}";
});

module.exports = router;
