import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import connectDb from './config/dbconfig.js';
import shortUrl from "./routes/shortUrl.js";
dotenv.config();

connectDb();


const port = process.env.PORT || 5001;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
    origin: "http://localhost:3000",
    credentials:true,
}));

app.use("/api/", shortUrl);
app.listen(port, () => {
    console.log(`Server is successfully started at port: ${port}`);
});
