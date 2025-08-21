import { Router } from "express";
import { creatUser,  getUsers } from "./user.service.js";

const userRouter = Router()



userRouter.post("/users",creatUser)
userRouter.get("/users",getUsers)



export default userRouter