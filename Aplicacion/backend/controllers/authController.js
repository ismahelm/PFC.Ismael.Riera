import { seeMyProfile, loginMe, createMyUser, dbexists } from "../bussiness/authService.js";


export const seeProfile = async (req,res) => {
  try{
    const userId = req.user.id;
    const profile = await seeMyProfile(userId);
    res.status(200).json({message: "succes", profile})
  }catch(error){
    res.status(500).json({message: error.message})
  }
}

export const test = async (req,res) => {
  try{
    const dbconection = await dbexists();
    res.status(200).json({message: "hello you dirty boy ;)",serverstatus: dbconection})
  }catch(error){
    res.status(500).json({message: error.message})
  }
}

export const createUser = async (req,res) =>
{
  try{
      const created = await createMyUser(req.body);
  res.status(200).json({message: "success", created})
  }
  catch(error)
  {
    res.status(500).json({message: error.message})
  }
}
export const login = async (req, res) => {
  try {
    const { token, role } = await loginMe(req.body);
    res.status(200).json({ message: "Login successful with role " + role, token });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};