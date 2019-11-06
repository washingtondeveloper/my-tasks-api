import express from "express";

const app = express();
const PORT = process.env.PORT || 3003;

require("./config/db");

app.use(express.json());
app.use("/api", require("./routes"));

app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`));
