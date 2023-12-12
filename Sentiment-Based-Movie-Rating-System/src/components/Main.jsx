/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import ex from "../assets/ex.jpg";
import a from "../assets/1.jpg";
import s from "../assets/2.jpg";
import d from "../assets/3.jpg";
import f from "../assets/4.jpg";
import g from "../assets/5.jpg";
import h from "../assets/6.jpg";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import MovieCardSkeleton from "./MovieCardSkeleton";


function Main(props) {

    const [isLoading , setIsLoading] = useState(true)

    useEffect(() => {
        setTimeout(()=> {
            setIsLoading(false);
        },3000);
    } , [])
    
  return (
    <div className="mt-14 max-w-5xl mx-auto">
        <div>
            <h2 className="text-white font-bold text-xl">Most Popular</h2>
            <hr className="h-px my-2 bg-gray-200 border-0 dark:bg-[#ff5100]"></hr>
        </div>
      
        {isLoading && <div className="grid md:grid-cols-5 gap-8 items-center place-items-center justify-center my-8">
            <MovieCardSkeleton cards={15}/>
        </div> }
        {!isLoading && <div className="grid md:grid-cols-5 gap-8 items-center place-items-center justify-center my-8">
            <MovieCard imgSrc={ex} />
        <MovieCard imgSrc={a} />
        <MovieCard imgSrc={s} />
        <MovieCard imgSrc={d} />
        <MovieCard imgSrc={f} />
        <MovieCard imgSrc={g} />
        <MovieCard imgSrc={h} />
        <MovieCard imgSrc={a} />
        <MovieCard imgSrc={s} />
        <MovieCard imgSrc={d} />
        <MovieCard imgSrc={ex} />
        <MovieCard imgSrc={a} />
        <MovieCard imgSrc={s} />
        <MovieCard imgSrc={d} />
        <MovieCard imgSrc={f} />
        <MovieCard imgSrc={g} />
        <MovieCard imgSrc={h} />
        <MovieCard imgSrc={a} />
        <MovieCard imgSrc={s} />
        <MovieCard imgSrc={d} />
        </div>
        
}
      
    </div>
  );
}

export default Main;
