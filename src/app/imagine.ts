'use server';

import { GoogleGenerativeAI } from "@google/generative-ai";
import { Movie_t } from "./interfaces";
import { exec } from "child_process";
const genAI = new GoogleGenerativeAI(process.env.API_KEY as string);

async function run(input : string){
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro"});

    const prompt = input
  
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    return text
}

export async function imagine(formData : FormData){
    let movies: Movie_t[] = [];
    let input = <string> formData.get("input");

    let resultsprompt = `
    You are an AI movie expert with access to the IMDB database. A user will provide a brief, informal description of a movie they are trying to recall. Your task is to identify the title of the movie based on the description, plot points, scenes, actor/actress names, director names, memorable aspects, or even a disordered or slightly incorrect title or a word from the title.
    
    1. Always provide the most accurate movie title based on the description or title details provided.
    2. In case of ambiguity or if the description matches multiple movies, return the 2 to 5 most likely movie titles separated by a $ symbol.
    3. Only return the titles of the movies, nothing else.

    Description: "${input}"

    `
    
    let results = await run(resultsprompt);

    console.log(results);

    let titles = results.split("$");
    titles[titles.length-1] = titles[titles.length-1].split("\n")[0];
    console.log(titles);
    
    const promises = titles.map(async (idd)=>{
        const url = `https://www.omdbapi.com/?i=tt3896198&apikey=13be68ea&t=${idd}`;
        const response = await fetch(url);
        const result = await response.json();
        console.log(result);
        
        
        const data : Movie_t = {
            id: result.imdbID,
            name: result.Title,
            release_date: result.Year,
            rating: result.imdbRating,
            poster: result.Poster!=="N/A"?result.Poster : "/na.jpeg"
        }
        return data;
    })
    movies = await Promise.all(promises);
    return movies;
    
}