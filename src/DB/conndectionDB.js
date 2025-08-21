import { Sequelize } from "sequelize";

export const sequelize = new Sequelize("sequelizeApp", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

export const  checkConnectionDB = async ( )=>{
    await sequelize.authenticate().then (()=>{
        console.log("Connection to the database has been established successfully.");
    }).catch((error) => {
        console.error("Unable to connect to the database:", error); 
    })
}
export const checkSyncDB = async () => {
    await sequelize.sync({alter : false}).then(() => {
        console.log("Database synchronized successfully.");
    }).catch((error) => {
        console.error("Error synchronizing the database:", error);
    });
}
