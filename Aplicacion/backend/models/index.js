

"use strict";

import fs from "fs";
import path from "path";
import {Sequelize} from "sequelize";
import process from "process";
import {fileURLToPath, pathToFileURL} from "url";
import configData from '../config/config.json' assert { type: 'json' };

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const basename = path.basename(__filename);

const env = process.env.NODE_ENV || 'development';
const config = configData[env];

const db = {};


let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}
const initializeModels = async () => {
 const files = fs.readdirSync(__dirname).filter((file) => {
  return (
   file.indexOf(".") !== 0 &&
   file !== basename &&
   file.slice(-3) === ".js" &&
   file.indexOf(".test.js") === -1
  );
 });

 for (const file of files) {
  const modelPath = pathToFileURL(path.join(__dirname, file)).href;
  const {default: defineModel} = await import(modelPath);
  const model = defineModel(sequelize, Sequelize.DataTypes);
  db[model.name] = model;
 }

 // Establecer asociaciones
 Object.values(db).forEach((model) => {
  if (model.associate) {
   model.associate(db);
  }
 });

 db.sequelize = sequelize;
 db.Sequelize = Sequelize;
};

await initializeModels();

export default db;
 
