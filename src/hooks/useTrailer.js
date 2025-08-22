import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addHeroTrailer } from "../utils/contentSlice";
import { useEffect } from "react";
export default function useTrailer(movieId) {
  const dispatch = useDispatch();
  function fetchTrailer() {
    fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieId +
        "/videos?language=en-US",
      API_OPTIONS,
    )
      .then((res) => res.json())
      .then((res) => {
        console.log(
          res.results.filter((video) => video.type === "Trailer")[0]?.key,
        );
        dispatch(
          addHeroTrailer(
            res.results.filter((video) => video.type === "Trailer")[0]?.key,
          ),
        );
      })
      .catch((err) => console.error(err));
  }
  useEffect(() => {
    if (movieId) {
      fetchTrailer();
    }
  }, [movieId]);
}
