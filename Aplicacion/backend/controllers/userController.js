import { seeMyProfile, updateMyProfile } from "../bussiness/userService.js";

export const seeProfile = async (req,res) => {
  try{
const userId = req.user.id;
const profile = await seeMyProfile(userId);
return res.status(200).json({
 profile
})
  }catch(error){
res.status(500).json({message: error.message})
  }
  
}

export const updateProfile = async (req,res)=>{
  try {
    const userId = req.user.id;
    const updatedProfile = await updateMyProfile({
      userId,
      ...req.body,
    });
    return res.status(200).json({ updatedProfile });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }

}