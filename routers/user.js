import express from "express";
import { createUser, deleteUser, fetchAllUsers, getUser, updateUser } from "../controllers/UserController.js";


const userRouter = express.Router();

userRouter.post("/user", createUser);
userRouter.get("/users", fetchAllUsers);
userRouter.get("/users/:userId", getUser);
userRouter.put("/users/:userId", updateUser);
userRouter.delete("/users/:userId", deleteUser);

export default userRouter;
