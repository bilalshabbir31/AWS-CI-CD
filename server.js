import express from "express";
import "dotenv/config";
import notFound from "./middlewares/errorHandler.js";
import userRouter from "./routers/user.js"

const PORT = process.env.PORT
const app = express()

app.use(express.json());
app.use("/api", userRouter);
app.use(notFound);
app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
})