import React from "react";
import CoverArt from "./CoverArt";
import SongTitle from "./SongTitle";
import PlayControls from "./PlayControls";
import VolumeControls from "./VolumeControls";


const CurrentlyPlaying = () => {
  return (
    <div className=" flex-row sm:w-1/2 xl:w-2/5 sm:mr-2 xl:ml-20 p-6">
      <CoverArt />
      <SongTitle />
      <PlayControls />
      <VolumeControls />
    </div>
  );
};
console.log("App rendered");

export default CurrentlyPlaying;