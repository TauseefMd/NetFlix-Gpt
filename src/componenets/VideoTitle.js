import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className='w-screen aspect-video pt-[25%] px-12 md:px-24 absolute text-white bg-gradient-to-r from-black'>
      <h1 className='text-2xl md:text-6xl font-bold'>{title}</h1>
      <p className='hidden md:inline-block py-6 text-lg w-1/3'>{overview}</p>
      <div className=' '>
        <button className=' bg-white text-black p-2 px-4 md:px-10 m-2 text-lg rounded-xl hover:opacity-45'>
          ▶️ Play
        </button>
        <button className='hidden md:inline-block p-2 px-10 m-2 text-lg rounded-xl bg-gray-300 bg-opacity-50'>
          More Info ℹ️
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
