import React from "react";
import PlayListItem from "./PlayListItem";

const Playlist = () => {
    return (
        <div className="sm:w-1/2 xl:w-2/5 sm:ml-2 xl:mr-20  p-6">
            <div>
                <h1 className="mb-4 font-semibold text-xl text-textPrimary dark:text-darkTextPrimary">Playlist</h1>
            </div>
            <div className="">
                <PlayListItem />
                <PlayListItem className="bg-highlight"/>
                <PlayListItem />
                <PlayListItem />
                <PlayListItem />
                <PlayListItem />
                <PlayListItem />
                <PlayListItem />
                <PlayListItem />
                <PlayListItem />
            </div>
        </div>
    )
}

export default Playlist;