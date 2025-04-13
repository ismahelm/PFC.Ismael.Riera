import { Sequelize } from "sequelize";

const sequelize = new sequelize("training_db", "postgres", "pass", 
{
    host: "localhost",
    dialect: "postgres",
    logging: false,
});
export default sequelize;