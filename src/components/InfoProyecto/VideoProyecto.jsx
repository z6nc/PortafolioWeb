import { IconPlay } from "../icon/iconPlay";
import { useVideoPlay } from "../../hook/usePlayVideo";

export function VideoProyecto({  linkVideoWebm }) {
  const { videoRef, isPlaying, togglePlayPause } = useVideoPlay();

  return (
    <div className="w-full h-[30vh] lg:h-auto lg:animate-flip-in-y relative">
      <video
        ref={videoRef}
        className="rounded-md brightness-[0.9] w-full h-full object-cover"
        aria-label="video del proyecto"
        autoPlay
        muted
      >
        {linkVideoWebm && <source src={linkVideoWebm} type="video/webm" />}
        <p>Tu navegador no soporta videos.</p>
      </video>

      <button
        onClick={togglePlayPause}
        className="  bg-transparent text-white rounded absolute inset-0 hidden lg:block"
      >
        {!isPlaying && (
          <div className="flex items-center justify-center w-full h-full bg-black bg-opacity-50">
            <IconPlay />
          </div>
        )}
      </button>
    </div>
  );
}
