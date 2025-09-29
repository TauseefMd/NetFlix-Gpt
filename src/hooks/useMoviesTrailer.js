import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTrailerVideo } from "../utils/moviesSlice";
import { useEffect } from "react";

const useMoviesTrailer = (movieId) => {
  const dispatch = useDispatch();
  const trailerVideo = useSelector((Store) => Store.movies.trailerVideo);
  //fetch trailer video
  const getMoviesVideo = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieId +
        "/videos?language=en-US",
      API_OPTIONS
    );
    const json = await data.json();
    const filterData = json.results.filter((vid) => vid.type === "Trailer");
    const trailerVideo = filterData.length ? filterData[0] : json.results[0];
    dispatch(addTrailerVideo(trailerVideo));
  };
  useEffect(() => {
    !trailerVideo && getMoviesVideo();
  }, []);
};

export default useMoviesTrailer;
