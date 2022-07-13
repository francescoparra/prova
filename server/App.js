const express = require("express");
const app = express();
const routes = require("./routes/routes");
const db = require("./models");
require("dotenv").config();

app.use(express.json());
app.use(routes);

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "YOUR-DOMAIN.TLD");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

const port = process.env.PORT;
db.sequelize.sync().then(() => {
  app.listen(port, async () => {
    console.log(`Running on http://localhost:${port}`);
  });
});
