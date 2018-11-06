import express from "express";
import config from "../config";

const app = express();

app.listen(config.serve.port, () => {
  console.log(`start ${config.serve.api}`);
});
