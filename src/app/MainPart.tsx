"use client";
import { useEffect, useRef, useState } from "react";
import { imagine } from "./imagine";
import Movie from "./Movie";
import { log } from "console";
import Image from "next/image";
import { Movie_t } from "./interfaces";
export default function MainPart(){
    const [movies, setMovies] = useState<Movie_t[]>([]);
    const textareaRef = useRef<HTMLTextAreaElement>(null);
    const maxHeight = 250; // Set maximum height to 500px
  
    useEffect(() => {
      const handleAutoGrow = () => {
        if (textareaRef.current) {
          textareaRef.current.style.height = 'auto';
          const scrollHeight = textareaRef.current.scrollHeight;
          textareaRef.current.style.height = `${Math.min(scrollHeight, maxHeight)}px`;
        }
      };
  
      const textarea = textareaRef.current;
      if (textarea) {
        handleAutoGrow();
        textarea.addEventListener('input', handleAutoGrow);
      }
  
      return () => {
        if (textarea) {
          textarea.removeEventListener('input', handleAutoGrow);
        }
      };
    }, [maxHeight]);
  
    return (
        <article className="absolute left-1/2 top-[150px] -translate-x-1/2 text-center ">
        <h1 className="big text-[60px] text-slate-100 tracking-tighter">Watch More, Recall Less</h1>
        <p className="text-slate-400">Effortlessly identify movies with scene recongition, powered by <span>Gemini</span></p>
        <form action={async(e)=>{
          const results = await imagine(e);
          setMovies(results);
        }} className="mt-[40px] max-w-[50%] mx-auto flex bg-[#19243d] rounded-[20px] h-auto">
          <textarea style={{maxHeight:`${maxHeight}px`}} ref={textareaRef} placeholder="Describe ..." name="input" className="resize-none overflow-auto text-slate-100 px-5 py-[10px] w-full rounded-[20px] bg-[#19243d] placeholder:text-[#7f8fa6] focus:outline-none text-[15px]"></textarea>
          <button type="submit" className="h-fit w-fit bg-slate-100 flex justify-center items-center rounded-[20px] p-2 m-2"><img src={"/search.png"} width={30} height={30} alt="searchIcon" className="w-fit h-fit rounded-[20px]"/></button>
        </form>
        <section className="container mt-[20px] grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))]">
          {
            movies.map((movie)=>{
              return (
                <Movie key={movie.id} id={movie.id} name={movie.name} release_date={movie.release_date} rating={movie.rating} poster={movie.poster}/>
              )
            })
          }
        </section>
      </article>
    )
}