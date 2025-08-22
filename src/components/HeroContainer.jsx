import { useSelector } from "react-redux";
import { useTrailer } from "../hooks";

export default function HeroContainer({ content }) {
  useTrailer(content?.id);
  const trailerId = useSelector((state) => state.content.heroTrailer);

  return (
    <div className="h-screen w-full overflow-hidden">
      <div className="absolute inset-0 space-y-4 bg-gradient-to-r from-black from-10% px-20 pt-50 text-white">
        <h2 className="text-4xl font-bold">{content?.title}</h2>
        <p className="w-md">{content?.overview}</p>
        <div>
          <button className="mr-4 cursor-pointer rounded-md bg-gray-500 px-4 py-2">
            Play
          </button>
          <button className="cursor-pointer rounded-md bg-gray-500 px-4 py-2">
            More Info
          </button>
        </div>
      </div>
      <div className="w-full">
        <iframe
          className="aspect-video w-screen"
          src={
            "https://www.youtube.com/embed/" +
            trailerId +
            "?autoplay=1&mute=1&controls=0&disablekb=1&loop=1&playlist=" +
            trailerId +
            "&showinfo=0"
          }
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
        ></iframe>
      </div>
    </div>
  );
}
