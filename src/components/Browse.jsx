import React from "react";
import Header from "./Header";
import { useNowPlayingMovies } from "../hooks";
import { useSelector } from "react-redux";
import HeroContainer from "./HeroContainer";
export default function Browse() {
  useNowPlayingMovies();
  const contentList = useSelector((state) => state.content?.nowPlayingMovies);
  return (
    <div className="flex w-full justify-center">
      <Header />
      <HeroContainer content={contentList[0]} />
      {/* <ul>
        {contentList?.map((content) => {
          return <li key={content}>{content.title}</li>;
        })}
      </ul> */}
    </div>
  );
}
