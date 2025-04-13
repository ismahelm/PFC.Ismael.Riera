import jwt from "jsonwebtoken";
import db from "../models/index.js";
import bcrypt from "bcrypt";

export const seeMyProfile = async (id) => {
  try {
    const user = await db.Users.findByPk(id);
    if (!user) {
      throw new Error("User not found");
    }
    return {
      id: user.id,
      email: user.email,
      username: user.username,
    };
  } catch (error) {
    throw Error("error en seeemyprofile" + error);
  }
};
export const dbexists = async ()=>
{
 const dbisok = await db.User.findOne({ where: { username: "admin" }})
 if (dbisok)
 {
  return "todo ok bro"
 }
 return "algo va mal";
}

export const createMyUser = async ({ username, email, password }) => {
  const userExists = await db.Users.findOne({ where: { username } });
  if (userExists) {
    throw new Error("user already exists");
  }
  const emailExists = await db.Users.findOne({ where: { email } });
  if (emailExists) {
    throw new Error("email already in use");
  }

  const codedPassword = await bcrypt.hash(password, 10);
  const newUser = await db.Users.create({
    username,
    email,
    password: codedPassword,
  });
  return { id: newUser.id, username: newUser.username, email: newUser.email };
};

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
