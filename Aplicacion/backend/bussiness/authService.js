import jwt from "jsonwebtoken";
import db from "../models/index.js";
import bcrypt from "bcrypt";

export const dbexists = async ()=>
{
 const dbisok = await db.User.findOne({ where: { username: "admin" }})
 if (dbisok)
 {
  return "todo ok bro"
 }
 return "algo va mal";
}

export const loginMe = async ({ username, password }) => {
  const user = await db.User.findOne({ where: { username } });
  if (!user) {
    throw new Error("user not found");
  }

  /*const correct = await bcrypt.compare(password, user.password);
  if (!correct) {
    throw new Error("Wrong password");
  }
*/
if (password!=user.password)
{
  throw new Error("Wrong password");

}
console.log(user.role)
  const token = jwt.sign(
    { id: user.id, username: user.username, role: user.role },
    process.env.JWT_SECRET,
    { expiresIn: "1h" }
  );
  return { token, role: user.role };
};
