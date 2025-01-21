export function VideoProyecto ({linkVideoMp4 ,linkVideoWebm }){
    return(
        <div className="w-full h-[30vh]  lg:h-auto lg:animate-flip-in-y">
        <video
          className="rounded-md brightness-[0.9] w-full h-full object-cover"
          aria-label="video del proyecto"
          autoPlay
          muted
        >
          {linkVideoMp4 && (
            <source src={linkVideoMp4} type="video/mp4" />
          )}
          {linkVideoWebm && (
            <source src={linkVideoWebm} type="video/webm" />
          )}
          <p>Tu navegador no soporta videos.</p>
        </video>
      </div>
    )
}