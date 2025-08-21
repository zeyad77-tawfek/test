import { DataTypes } from "sequelize";
import { sequelize } from "../conndectionDB.js";




const userModel = sequelize.define("user", {
    fName : {
        type: DataTypes.STRING,
        allowNull: false,
        get(){
            return this.getDataValue("gender")=="male"?
             "Mr:"+ this.getDataValue("fName"): "Mrs:"+ this.getDataValue("fName").toUpperCase()
        }
    },
    lName : {
        type: DataTypes.STRING,
        allowNull: false,
        
    },
    fullName : {
    type: DataTypes.VIRTUAL,
    get(){
        return this.getDataValue("fName")+ " " + this.getDataValue("lName")
    }
    },
    email : {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    password : {
        type: DataTypes.STRING,
        allowNull: false,
    },
    gender : {
        type : DataTypes.ENUM,
        values: ["male", "female"],
        defaultValue : "male"
    },
    confirmed : {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    }
},{
    paranoid:true
}
)

export default userModel;