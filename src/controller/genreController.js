const { GENRE } = require("../model/genre");

async function handleCreateGenre(req, res) {
  const genre = req.body;

  //Validation handling
  if (!genre.title) res.status(400).json({ error: "Title is Required" });
  if (!genre.description) {
    res.status(400).json({ error: "Description is Required" });
  }
  if (!genre) {
    res.status(400).json({ error: "Titles and Description are required" });
  }
  //try catch starts from here
  try {
    // Check if genre with the same title already exists
    const genreValidate = await GENRE.findOne({ genreTitle: genre.title });

    if (genreValidate) {
      return res.status(400).json({ error: "This title already exists" });
    }

    // Create new genre
    const genreCreated = await GENRE.create({
      genreTitle: genre.title,
      genreDescription: genre.description,
    });
    return res
      .status(201)
      .json({ message: "Genre created successfully", genre: genreCreated });
  } catch (error) {
    console.error("Error creating genre:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

async function handleGetGenre(req,res){
    const getAllGenre = await GENRE.find({})
    res.status(200).send(getAllGenre)
}

async function handleDeleteGenreById(req,res){
    const deleteGenre = await GENRE.findByIdAndDelete(req.params.id)

    try{
        if(!deleteGenre){
            return res.status(404).json({error:"Genre not found"})
        }
        return res.status(200).json({message:"Genre is deleted successfully"})
    } catch(error){
        console.error("Internal server error")
    }
 
}

async function handleGetGenreById(req,res){
    const getGenreById = await GENRE.findById(req.params.id)
    return res.status(200).json(getGenreById)
}

async function handlePatchGenreById(req,res){
    const editDescription = req.body.description
    const editGenreById = await GENRE.findByIdAndUpdate(req.params.id,{
        genreDescription:editDescription
    })
    res.json({ message: "Genre is Updated Successfully"});
}

module.exports = {
  handleCreateGenre,
  handleGetGenre,
  handleDeleteGenreById,
  handleGetGenreById,
  handlePatchGenreById
};
