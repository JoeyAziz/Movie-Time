import React from "react";

export const Header: React.FC = () => {
  return (
    <div className="flex flex-col items-center gap-3 my-24 md:my-36">
      <span className="text-3xl text-center md:text-7xl">
        Discover trending movies of the week in all genres at one place!
      </span>
      <div className="overflow-auto max-w-[400px] md:max-w-[800px]">
        <span className="text-3xl md:text-4xl honk animate whitespace-nowrap">
          Keep track of everything you are watching. Discover what to watch
          next! Keep track of everything you are watching. Discover what to
          watch next!
        </span>
      </div>
    </div>
  );
};
