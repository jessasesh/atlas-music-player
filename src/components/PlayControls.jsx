import React from "react";
import forward from "/images/forward.svg"
import play from "/images/play.svg"
import rewind from "/images/rewind.svg"
import shuffle from "/images/shuffle.svg"

const PlayControls = () => {
  return (
    <div className="flex mt-4 justify-between dark:bg-slate-500 rounded-lg">
      <p className="text-2xl">1x</p>
      <img src={rewind}></img>
      <img className="outline rounded-sm outline-offset-8 dark:outline-offset-1" src={play} />
      <img src={forward}></img>
      <img src={shuffle}></img>
    </div>
  );
};

export default PlayControls;