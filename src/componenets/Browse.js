import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecoundryContainer from "./SecoundryContainer";

const Browse = () => {
  useNowPlayingMovies();
  return (
    <div>
      <Header />
      <MainContainer />
      <SecoundryContainer />
      {/*
         MainContainer
          - videoBackground
          - videoTitle
         SecoundryContainer
          - MoviesList * n
          -  cards * n
      */}
    </div>
  );
};

export default Browse;
