const express = require("express");
const cors = require("cors");
const path = require("path");
const router = require("./configs/router.js");

const app = express();
app.set("port", 3000);
app.use(express.static(path.join(__dirname, "../public")));
app.use(express.json());
app.use(cors());
app.use("/", router);

app.listen(app.get("port"), () =>
  console.log("Server on port " + app.get("port"))
);
