"use client";
import Image from "next/image"
import type { Movie_t } from "./interfaces"

export default function Movie({id, name, release_date,poster,rating} : Movie_t){
    return <div className="relative w-[250px] h-[350px] rounded-md">
        <Image src={poster} height={300} width={300} style={{width:"100%", height:"100%", objectFit:"cover", borderRadius:"6px"}} alt="posterImage"/>
        <div className="details pl-2 flex justify-between items-center py-3">
            <div className="first flex flex-col items-start">
                <h4 className="text-[16px] text-slate-100 font-bold text-left">{name}</h4>
                <div className="second flex justify-between items-center mt-1">
                    <img src="/star.png" className="h-[25px] w-[25px] mr-2"/>
                    <span className="text-slate-300 text-sm font-medium">{rating}</span>
                    <div className="text-gray-700 -translate-y-[3px] mx-5"> | </div>
                    <p className="text-sm text-slate-400">{release_date}</p>
                </div>
            </div>
        </div>
    </div>
}