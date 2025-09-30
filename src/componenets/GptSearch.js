import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestions from "./GptMovieSuggestions";
import { BG_URL } from "../utils/constants";

const GptSearch = () => {
  return (
    <>
      <div className='fixed -z-10 h-screen w-screen'>
        <img
          src={BG_URL}
          alt='Netflix-background'
          className='h-full w-full object-cover'
        />
      </div>
      <div className=''>
        <GptSearchBar />
        <GptMovieSuggestions />
      </div>
    </>
  );
};

export default GptSearch;
