import { loginMe, dbexists } from "../bussiness/authService.js";


export const test = async (req,res) => {
  try{
    const dbconection = await dbexists();
    res.status(200).json({message: "hello you dirty boy ;)",serverstatus: dbconection})
  }catch(error){
    res.status(500).json({message: error.message})
  }
}

export const login = async (req, res) => {
  try {
    const { token, role } = await loginMe(req.body);
    res.status(200).json({ message: "Login successful with role " + role, token });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};