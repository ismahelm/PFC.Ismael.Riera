import { Sequelize } from "sequelize";

const sequelize = new sequelize("tests", "postgres", "pass", 
{
    host: "localhost",
    dialect: "postgres",
    logging: false,
});
export default sequelize;