import slackin from "./lib/index.js";
import hostenv from "hostenv";

const config = {
  port: hostenv.PORT || process.env.PORT || 3000,
  hostname: hostenv.HOSTNAME || process.env.WEBSITE_HOSTNAME || "0.0.0.0",
  channels: process.env.SLACK_CHANNELS,
  interval: process.env.SLACK_INTERVAL || 5000,
  path: "/",

  token: hostenv.TOKEN || process.env.TOKEN,
  org: hostenv.ORG || process.env.ORG,
  emails: "",
  gcaptcha_secret: "111",
  gcaptcha_sitekey: "111",
};

slackin(config).listen(config.port, config.hostname, function (err) {
  if (err) throw err;
  //   if (!flags.silent)
  console.log(
    "%s – listening on %s:%d",
    new Date(),
    config.hostname,
    config.port
  );
});
