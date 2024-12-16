import cookieParser from 'cookie-parser';
import cors from "cors";
import express, { json } from 'express';
import proxy from "express-http-proxy";
const app = express();

app.use(cors({
  origin: '*', // Chỉ định frontend được phép
  methods: '*', // Cho phép các phương thức GET và POST
}));

app.use(express.urlencoded({ extended: true }));
app.use(json());
app.set('trust proxy', 1);
app.use(cookieParser());

app.use("/user", proxy("https://animetangouserservice.onrender.com"));
app.use("/anime", proxy("https://animetangoanimeservice.onrender.com"));
app.use("/useranime", proxy("https://animetangouseranimeservice.onrender.com"));
app.use("/admin", proxy("https://animetangoadminservice.onrender.com"));
app.use("/knn", proxy("https://animetangoknnservice.onrender.com"));
app.use("/decisiontree", proxy("https://animetangodecisiontreeservice.onrender.com"));
app.use("/naivebayes", proxy("https://animetangonaivebayesservice.onrender.com"));


const PORT = 3004;
app.listen(PORT, () => console.log(`Server is running at port: ${PORT}`));
