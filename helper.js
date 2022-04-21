import {client} from './index.js';

async function updateMovieByName(name, request) {
  const result= await client
      .db("b27wd")
      .collection("movies")
      .updateOne({ name: name }, { $set: request.body });
      return result;
  }
  
  async function getMovieByName(name) {
    return await client
      .db("b27wd")
      .collection("movies")
      .findOne({ name: name });
  }
  
  async function getMovies() {
  
    const movies = await client
      .db("b27wd")
      .collection("movies")
      .find({})
      .toArray();
  
    //we use toArray to avoid cursor(pagination) so that we can get array
    console.log(movies);
    return movies;
  }
  
  async function getMovieById(id) {
  
    const movie = await client
      .db("b27wd")
      .collection("movies")
      .findOne({ id: id });
    return movie;
  }
  
  async function deleteMovie(id) {
  
    const movie = await client
      .db("b27wd")
      .collection("movies")
      .deleteOne({ id: id });
    return movie;
  }
  
  async function createMovie(data) {
  
    const result = await client
      .db("b27wd")
      .collection("movies")
      .insertMany(data);
    return result;
  }

  export{
      updateMovieByName,
      getMovieByName,
      getMovies,
      getMovieById,
      createMovie,
      deleteMovie
  }