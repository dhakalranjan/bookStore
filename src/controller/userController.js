const { USER } = require("../model/user");

async function handleCreateUser(req, res) {
  const user = req.body;
  const emailValidate = await USER.findOne({ email: user.email });

  if (emailValidate) {
    return res.status(400).json({ error: "Email Address already exist" });
  }

  if (user.password.length < 8)
    res.json({ error: "Password Must be more than 8 character" });

  const UserCreate = await USER.create({
    name: user.name,
    email: user.email,
    password: user.password,
  });
  const { password, ...userWithoutPassword } = UserCreate.toObject();

  return res.status(201).json({
    message: "User created successfully",
    user: userWithoutPassword,
  });
}


async function handleUserLogin(req,res){
    const {email,password} = req.body;
    const user = await USER.findOne({email,password})

    if(!user) res.json({error:"Invalid Username or Password"})
}
module.exports = {
  handleCreateUser,
  handleUserLogin,
};
