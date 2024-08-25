const express = require("express");
const cors = require("cors");
const path = require("path");
const router = require("./configs/router.js");
const { PORT } = require("./configs/configs.js");

const app = express();
app.use(express.static(path.join(__dirname, "../public")));
app.use(express.json());
app.use(cors());
app.use("/", router);

app.listen(PORT, () => console.log("Server on port " + app.get("port")));
