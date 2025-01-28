import React, { useRef, useState } from "react";
import { IconPlay } from "../icon/iconPlay";


export function VideoProyecto({ linkVideoMp4, linkVideoWebm }) {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="w-full h-[30vh] lg:h-auto lg:animate-flip-in-y relative">
      <video
        ref={videoRef}
        className="rounded-md brightness-[0.9] w-full h-full object-cover"
        aria-label="video del proyecto"
        autoPlay
        muted
      >
        {linkVideoMp4 && <source src={linkVideoMp4} type="video/mp4" />}
        {linkVideoWebm && <source src={linkVideoWebm} type="video/webm" />}
        <p>Tu navegador no soporta videos.</p>
      </video>

      <button
        onClick={handlePlayPause}
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
