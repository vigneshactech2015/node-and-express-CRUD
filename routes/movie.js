
//router in express

import express from 'express';

import {updateMovieByName,
     getMovieByName,
    getMovies,
    getMovieById,
    createMovie,
    deleteMovie} from '../helper.js';

const router=express.Router();

router.get("/", async(request, response) => {
    console.log(request.query);
    const filter=request.query;
    //query is for filtering movies
  
   // let filteredMovies=movies;
  
    //if(language){
      //filteredMovies=filteredMovies.filter((mv)=>mv.language===language);
    //}
  
    //if(rating){
      //filteredMovies=filteredMovies.filter((mv)=>mv.rating===+rating);
    //}
  
    if(filter.rating){
      filter.rating=parseInt(filter.rating);
    }
  
    console.log(filter);
    
    const movies = await getMovies();
    response.send(movies);
    });
  
  
  
    router.get("/:id",async(request, response) => {
  const {id}=request.params;
  //const movie=movies.find((mv)=>mv.id===id);
  
    const movie = await getMovieById(id);
  
  response.send(movie ||  {message:"No matching movies"});
    });
  
    //delete movies
  
    router.delete("/:id",async(request, response) => {
      const {id}=request.params;
      //const movie=movies.find((mv)=>mv.id===id);
      
      const movie = await deleteMovie(id);
      
      response.send(movie ||  {message:"No matching movies"});
        });
  
  
    //create movies
  
  
    router.post("/",async(request, response) => {
      
      const data=request.body;
      const result = await createMovie(data);
      
      response.send(result);
        });
  
        //edit movie
  
        router.put("/",async(request,response)=>{
          const {name}=request.query;
  
          console.log(request.query,request.body);
  
          await updateMovieByName(name, request);
  
  const movie=await getMovieByName(name);
  
        response.send(movie);
        });

        export const movieRouter=router;

        //1.app.use -index.js
        //2.user router
        //3.imports and exports
        //4.remove/movies-repetition