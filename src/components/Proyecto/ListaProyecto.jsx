import { IconoRenderizado } from "../iconos";

export function ListaProyecto({ Proyectos , limit}) {
  return (
    <>
      <section className="text-white flex flex-wrap gap-6 justify-center items-center  ">
        {Proyectos.slice(0,limit).map((proyecto) => (
          <a
            href={`/InfoProye?id=${proyecto.id}`}
            key={proyecto.id}
            className="rounded-xl flex flex-col  w-[350px] 2xl:w-[480px] overflow-hidden h-[500px] bg-transparent/20 shadow-sm shadow-white/25 animate-bounce-fade-in"
          >
            {/* Imagen / video de los proyectos  */}
            <div className=" w-full h-64   rounded-md ">
              <video
                src={proyecto.imagenPortada}
                className="object-cover w-full h-full brightness-[0.9]"
                autoPlay  
                muted 
                loop
              >
                {proyecto.imagenPortada && (
                  <source src={proyecto.imagenPortada} type="video/mp4" />
                )}
                {proyecto.videoWebm && (
                  <source src={proyecto.videoWebm} type="video/webm" />
                )}
                <p>Tu navegador no soporta videos.</p>
              </video>             
            </div>
            
            {/* componentes de informacion  */}
            <div className=" px-5  py-6 ">
                <div className=" flex flex-col gap-2  ">
                  <h1 className="text-white text-xl  font-bold  ">
                    {proyecto.nombre}
                  </h1>
                  <p className=" text-[#edecec]  text-base py-1">
                    {proyecto.descripcionCorta}
                  </p>

                  <ul className="flex items-center gap-3 flex-wrap">
                    {proyecto.tecnologias.map((tecnologia , idx) => (
                      <li  key={idx} className="text-xs text-gray-300 inline-flex  space-x-2 items-center   px-3   bg-transparent/35 p-2 rounded-lg border-1 border-gray-700 ">
                        <p>{tecnologia}</p>
                        <IconoRenderizado nombre={tecnologia}  className={"size-4"} />
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
          </a>
        ))}
      </section>
    </>
  );
}

