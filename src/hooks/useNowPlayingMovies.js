import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/contentSlice";
import { API_OPTIONS } from "../utils/constants";

export default function useNowPlayingMovies() {
  const dispatch = useDispatch();

  function getNowPlayingMovies() {
    fetch(
      "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
      API_OPTIONS,
    )
      .then((res) => res.json())
      .then((res) => {
        console.log("content fetched", res.results);
        dispatch(addNowPlayingMovies(res.results));
      })
      .catch((err) => console.error(err));
  }
  useEffect(() => {
    getNowPlayingMovies();
  }, []);
}
