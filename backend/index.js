require("dotenv").config();

const express = require("express");
const app = express();

const dbConnection = require("./src/config/database");

const wordRouter = require("./src/routes/words");

// Middleware
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

app.use("/api", wordRouter);

app.listen(process.env.PORT, () => {
  console.log(`Listening on port ${process.env.PORT}`);
});

// To test connecting to the database, authentication is succesful
dbConnection();
