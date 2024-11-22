import express from "express";
import "dotenv/config";
import notFound from "./middlewares/errorHandler.js";
import userRouter from "./routers/user.js"

const PORT = process.env.PORT
const app = express()

app.use(express.json());
app.get("/", (req, res) => {
  res.status(200).send({ message: "Welcome to AWS CI-CD" });
});
app.use("/api", userRouter);
app.use(notFound);
app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
})