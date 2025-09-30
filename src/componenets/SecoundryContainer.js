import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecoundryContainer = () => {
  const movies = useSelector((store) => store.movies);
  return (
    <div className=' bg-black'>
      <div className='mt-0 md:-mt-52 pl-4 md:pl-12 relative z-10'>
        <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
        <MovieList title={"Trending"} movies={movies.topRatedMovies} />
        <MovieList title={"Popular"} movies={movies.popularMovies} />
        <MovieList title={"Upcoming"} movies={movies.upcomingMovies} />
        <MovieList title={"Horror"} movies={movies.nowPlayingMovies} />
      </div>

      {/*
        MovieList - Popular
          - MovieCard * n
        MovieList - Now Playing
        MovieList - Trending
        MovieList - Horror
     */}
    </div>
  );
};

export default SecoundryContainer;
