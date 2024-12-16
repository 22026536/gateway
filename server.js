const express = require("express");
const cors = require("cors");
const proxy = require("express-http-proxy");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/user", proxy("https://animetangouserservice.onrender.com/user"));
app.use("/anime", proxy("https://animetangoanimeservice.onrender.com/anime"));
app.use("/useranime", proxy("https://animetangouseranimeservice.onrender.com/useranime"));
app.use("/admin", proxy("https://animetangoadminservice.onrender.com/admin"));
app.use("/knn", proxy("https://animetangoknnservice.onrender.com"));
app.use("/decisiontree", proxy("https://animetangodecisiontreeservice.onrender.com"));
app.use("/naivebayes", proxy("https://animetangonaivebayesservice.onrender.com"));


const PORT = 3004;
app.listen(PORT, () => console.log(`Server is running at port: ${PORT}`));
