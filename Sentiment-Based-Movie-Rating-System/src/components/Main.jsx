/* eslint-disable no-unused-vars */
import React from "react";
import MovieCard from "./MovieCard";
import ex from "../assets/ex.jpg";
import a from "../assets/1.jpg";
import s from "../assets/2.jpg";
import d from "../assets/3.jpg";
import f from "../assets/4.jpg";
import g from "../assets/5.jpg";
import h from "../assets/6.jpg";

function Main(props) {
  return (
    <div className="mt-14 max-w-5xl mx-auto">
        <div>
            <h2 className="text-white font-bold text-xl">Most Popular</h2>
            <hr className="h-px my-2 bg-gray-200 border-0 dark:bg-[#ff5100]"></hr>
        </div>
      <div className="grid md:grid-cols-5 gap-8 items-center place-items-center justify-center my-8 ">
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
    </div>
  );
}

export default Main;
