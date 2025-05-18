import dotenv from "dotenv"
dotenv.config();

const sequelize = new sequelize("training_db", "postgres", process.env.DB_PASSWORD, 
{
    host: process.env.DB_HOST,
    dialect: "postgres",
    logging: false,
});
export default sequelize;