// import jwt from "jsonwebtoken"
// import { User } from "../models/user.model.js"

// const creatTokenAndSaveCookies  = async(userId,res)=>{
//     const token = jwt.sign({userId},process.env.JWT_SECRET_KEY,{
//         expiresIn: "7d"
//     })
//     res.cookie("jwt",token,{
//         httpOnly:true,//xss
//         secure: true,
//         sameSite:"strict"//csrf
//     })
//     await User.findByIdAndUpdate(userId,{token})
//     return token;
// }

// export default creatTokenAndSaveCookies;


import jwt from "jsonwebtoken";
import { User } from "../models/user.model.js";

const createTokenAndSaveCookies = async (userId, res) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET_KEY, {
    expiresIn: "30d",
  });
  res.cookie("jwt", token, {
    httpOnly: true, // Temporarily set to false for testing
    secure: false,
    sameSite: "lax",
    path: "/", // Ensure the cookie is available throughout the site
  });
  await User.findByIdAndUpdate(userId, { token });
  return token;
};

export default createTokenAndSaveCookies;