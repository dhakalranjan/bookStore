const { AUTHOR } = require("../model/author");

async function handleCreateAuthor(req, res) {
  const author = req.body;
  if (!author.email) res.status(400).json({ error: "Email is Required" });
  if (!author.phone)
    res.status(400).json({ error: "Phone Number is Required" });
  if (!author.username) res.status(400).json({ error: "Username is Required" });
  if (author.phone.length != 10)
    res.status(400).json({ error: "Phone number format is invalid" });

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(author.email)) {
    return res.status(400).json({ message: "Invalid email format" });
  }

  const authorCreated = await AUTHOR.create({
    authorUsername: author.username,
    authorEmail: author.email,
    authorPhone: author.phone,
  });

  console.log(authorCreated);
  return res.status(201).json({ message: "Author has Created Successfully" });
}

async function handleGetAuthor(req,res){
    const allAuthor = await AUTHOR.find({})
    return res.json(allAuthor)
}

async function handleGetAuthorById(req,res){
    const authorById = await AUTHOR.findById(req.params.id)
    if(!authorById) {
        return res.status(404).json({error:"Author not found"})
    }
    return res.json(authorById)
}

async function handleDeleteAuthorById(req,res){
    const authorById = await AUTHOR.findByIdAndDelete(req.params.id)
    if(!authorById) {
        return res.status(404).json({error:"Author not found"})
    }
    return res.json({Message:"Author has been deleted"})
}

async function handlePatchAuthorById(req, res) {
    const author = req.body;
    await AUTHOR.findByIdAndUpdate(req.params.id, { 
        authorUsername: author.username});
    return res.json({ status: "Done" });
}

module.exports = {
  handleCreateAuthor,
  handleGetAuthor,
  handleGetAuthorById,
  handleDeleteAuthorById,
  handlePatchAuthorById,
};
