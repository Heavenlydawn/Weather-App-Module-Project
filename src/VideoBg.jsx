import React from 'react';
import videoData from './videoData';

const VideoComponent = () => {

  return (
    <div>
      <video controls>
        <source src={videoSource} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoComponent;


{/* <div  key={data.id}>
<div >
  <img alt="Avatar" src={data.image} />
  <div className="pl-5 py-5">
    <h2 className="text-2xl font-bold py-5 max-sm:text-xl lg:text-xl text-left">
      {data.name}
    </h2>
    <p className="text-lg font-bold text-[#898989] sm:text-lg lg:text-lg text-left">
      {data.des}
    </p>
    <div className="flex mt-3">
      <p className="mr-3 text-2xl font-bold sm:text-lg lg:text-lg">
        {data.currentPrice}
      </p>
      <p>
        <del className="font-bold ml-5 text-[#B0B0B0] sm:text-sm lg:text-sm">
          {data.previousPrice}
        </del>
      </p>
    </div>
  </div>
</div> */}