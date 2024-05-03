import express from "express"
import mongoose from "mongoose";
import cors from "cors"
import router from "./routes/userRouter.js";
import auth from "./middlewares/auth.js";
import path from "path"
import "dotenv/config";
import { fileURLToPath } from "url"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
console.log(__dirname)


const app = express();

app.use(express.static(path.join(__dirname, "/client/build")))

app.get("*", (req, res) => res.sendFile(path.join(__dirname , "/client/build/index.html")))
app.use(cors())

const port = process.env.PORT || 4000
const MONGO_URI = process.env.MONODB_URL;

mongoose
  .connect(`${MONGO_URI}`, {})
  .then(() => {
    app.listen(port, () => {
      console.log("Database connected successfully...");
    });
  })
  .catch((error) => {
    console.error("Error connecting to database:", error);
  });

app.use(router);

// app.use(
//   session({
//     secret: "thisisnodecourse",
//     resave: false,
//     saveUninitialized: true,
//     cookie: { secure: false }, // Set secure to true in production for HTTPS
//   })
// );


app.get("/user",  auth,(req, res) => {
  res.send("Hello I'm expres from your wardword..");
});
