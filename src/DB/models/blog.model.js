import { DataTypes } from "sequelize";
import { sequelize } from "../conndectionDB.js";
import userModel from "./user.model.js";




const blogModel = sequelize.define("blog", {
    title : {
        type: DataTypes.STRING,
        allowNull: false,
    },
    content : {
        type: DataTypes.STRING,
        allowNull: false,
        
    }}
)


blogModel.belongsTo(userModel,{
    onDelete: "CASCADE", 
    onUpdate: "CASCADE",
    foreignKey: "user_id"
})
userModel.hasMany(blogModel,{
    foreignKey:"user_id"
})

export default blogModel;