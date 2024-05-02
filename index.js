import express from "express";
import mongoose from "mongoose";
import cors from "cors"
import router from "./routes/userRouter.js";
import auth from "./middlewares/auth.js";

const app = express();
app.use(cors())
mongoose
  .connect("mongodb://127.0.0.1:27017/Full-Stack-DB", {})
  .then(() => {
    app.listen(4000, () => {
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
