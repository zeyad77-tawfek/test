import { checkConnectionDB, checkSyncDB } from "./DB/conndectionDB.js";
import blogRouter from "./modules/blogs/blog.controller.js";
import userRouter from "./modules/users/user.controller.js";

const bootstrap = (app, express) => {
  app.use(express.json());




console.log("in auth branch");
console.log("in auth branch");


  
  checkConnectionDB();
  checkSyncDB();
  app.use("/users", userRouter);
  app.use("/blogs",blogRouter)

//   app.use("{/*demo}", (req, res, next) => {
//     return res.status(404).json({ message: "Not Found" });
//   });
};

export default bootstrap
