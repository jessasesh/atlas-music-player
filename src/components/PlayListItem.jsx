import React from "react";

const PlayListItem = () => {
  return (
    <div className="flex justify-between">
      <div>
        <h3 className=" text-md text-textPrimary dark:text-darkTextPrimary font-semibold">Electric Fever</h3>
        <p className="text-md text-gray-500">Neon Jungle</p>
      </div>
      <p className="pt-3 text-sm font-medium text-gray-500">8:41</p>
    </div>
  );
};
export default PlayListItem;