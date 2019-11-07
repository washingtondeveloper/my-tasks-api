import express from "express";

const app = express();
const PORT = process.env.PORT || 3003;

require("./config/db");

app.use(express.json());
app.use("/api", require("./routes"));

if (process.env.NODE_ENV !== "test") {
  app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`));
}

module.exports = app;
