import userModel from "../../DB/models/user.model.js";
import { Op } from "sequelize";

export const creatUser = async (req, res, next) => {
  const { fName, lName, email, password, gender } = req.body;

  // const user = userModel.build ({fName , lName , email , password , gender})
  // await user.save()
  const user = await userModel.create ({fName , lName , email , password , gender})

  // const user = await userModel.bulkCreate (req.body )

//   const user = await userModel.upsert(req.body);

  user[1]
    ? res.status(201).json({ message: "created", user: user[0] })
    : res.status(200).json({ message: " updated ", user });

  // return res.status(200).json({message : "done ", user})
};

export const getUsers = async (req, res, next) => {
//   const { fName, lName, email, password, gender } = req.body;
  
      const users = await userModel.findAll()
      return res.status(200).json({message : " all users", users})
}
    // {
  
  //     // attributes: [ ["fName","firstName"], ["lName","lastName"], "email"]
  //     // attributes : {exclude: [ "password","gender"]}
  //     // where : {
  //     //     fName: "zeyad"
  //     // }
  //     // where : {
  //     //     fName:{ [ Op.eq]:"zeyad"}
  //     // }
  //     // where: {
  //     //   [Op.and]: [{ fName: "zeyad" }, { lName: "tawfek" }],
  //     // },
  //     // where :{
  //     //     [Op.or]:[{fName:"zeyad"},{fName:"sara "}]
  //     // }
  //     // where : {
  //     //     fName : {
  //     //         [Op.like]:"%a%"
  //     //     }
  //     // }
  //   });

//      const users = await userModel.findByPk(req.query.id);
//     res.status(200).json({ message: "done", users });
//   };

//   const users = await userModel.findOne({ where: {fName: req.query.fName } });
//   res.status(200).json({ message: "done", users });
// };

//   const users = await userModel.findOrCreate({
//      where: {fName: fName },
//     defaults :{
//         fName, lName, email, password, gender
//     }
//     });
//   res.status(200).json({ message: "done", users });
// };
//   const users = await userModel.findAndCountAll({  });
//   res.status(200).json({ message: "done", countOfUsers: users.count , users:users.rows });
// };
//   const users = await userModel.update({ fName:req.body.fName },
//     {
//         where:{fName :req.query.name}
//     }
    
//   );
//   res.status(200).json({ message: "done", users});
// };
//   const users = await userModel.destroy  (
//     {
//         where:{id :req.query.id }, 
        
//     }
    
//   );
//   res.status(200).json({ message: "done", users});
// };
//   const users = await userModel.restore(
//     {
//         where:{id :req.query.id }
//     }
    
//   );
//   res.status(200).json({ message: "done", users});
// };
//   const users = await userModel.findAll(
//     {
         
//     }
    
//   );
//   res.status(200).json({ message: "done", users});
// };
