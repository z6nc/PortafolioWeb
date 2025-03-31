import { useRef, useState } from "react";

export const useVideoPlay = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true); 
  
  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return {
    videoRef,
    isPlaying,
    togglePlayPause,
  };
};
