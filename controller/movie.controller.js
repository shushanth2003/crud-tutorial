const movieIndex=(req,res)=>{
    res.send("Movie Data is Posted")
}

const movieGet=(req,res)=>{
    res.send("Movie Data is getted")
}

const moviePut=(req,res)=>{
    res.send("Movie Data is updated Successfully")
}

const movieDelete=(req,res)=>{
    res.send("Movie Data is Delete Successfully")
}

module.exports = {
    movieIndex,
    movieGet,
    moviePut,
    movieDelete
};
