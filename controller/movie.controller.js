const Movie = require("../model/movie.model.js");

const movieIndex = async (req, res) => {
    try {
        const newMovie = new Movie({
            title: req.body.title,
            desc: req.body.desc,
        });

        const savedMovie = await newMovie.save();
        res.status(201).json(savedMovie);
    } catch (error) {
        if (error.code === 11000) {
            // MongoDB duplicate key error
            return res.status(400).json({ error: "Title already exists!" });
        }
        res.status(500).json({ error: error.message });
    }
};

const movieGet=async (req,res)=>{
    try{
        const data=await Movie.find();
        res.json(data);
    }catch(error){
        res.status(400).json({message:error.message});
    }
}


const movieDetails = async (req, res) => {
    try {
        const movie = await Movie.findById(req.params.id);
        
        if (!movie) {
            return res.status(404).json({ message: "Movie not found" }); // ✅ Use 404 for "Not Found"
        }

        res.json(movie); // ✅ Send the found movie data
    } catch (error) {
        res.status(500).json({ message: error.message }); // ✅ Proper error handling
    }
};
const movieDelete = async (req, res) => {
    const movieId = req.params.id.toString().trim();

    try {
        const deletedMovie = await Movie.findByIdAndDelete(movieId); // Pass movieId directly
        if (!deletedMovie) {
            return res.status(404).json({ message: "Movie not found" });
        }
        res.json({ message: "Movie deleted successfully" });
    } catch (error) {
        console.error("Error deleting movie:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};

const movieUpdate = async (req, res) => {
    try {
        const movie = await Movie.findOneAndUpdate(
            { _id: req.params.id },
            {
                title: req.body.title,
                desc: req.body.desc, // ✅ Correct field name
            },
            { new: true, runValidators: true } // ✅ Ensure updated document is returned
        );

        if (!movie) {
            return res.status(404).json({ message: "Movie not found" });
        }

        res.status(200).json(movie);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

module.exports = {
    movieIndex,
    movieGet,
    movieDelete,
    movieDetails,
    movieUpdate,
};
