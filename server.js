const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const apiRoutes = require("./routes/test-routes.js");
const notesRoutes = require("./routes/mongo-routes.js");

app.use(apiRoutes, notesRoutes);

app.listen(PORT, () => console.log(`listening at http://localhost:${PORT}`));
