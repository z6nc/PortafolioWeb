import { useEffect, useState } from "react";
import { proyectos } from "./ListProyect.js";
import {IconoRenderizado} from "./iconos.jsx";
import { PageCarga } from "./pageCarga.jsx";

const tecnologias  = (
  <svg
  xmlns="http://www.w3.org/2000/svg"
  fill="none"
  viewBox="0 0 24 24"
  strokeWidth={1.5}
  stroke="currentColor"
  className="size-5 "
>
  <path
    strokeLinecap="round"
    strokeLinejoin="round"
    d="m6.75 7.5 3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0 0 21 18V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v12a2.25 2.25 0 0 0 2.25 2.25Z"
  />
</svg>
)

export function ProyectInfo() {
  const [proyecto, setProyecto] = useState(null);

  useEffect(() => {
    // Obtén el ID desde los parámetros de la URL
    const urlParams = new URLSearchParams(window.location.search);
    const ID = parseInt(urlParams.get("id"), 10);

    if (!isNaN(ID)) {
      // Busca el proyecto correspondiente
      const encontrado = proyectos.find((proyecto) => proyecto.id === ID);
      setProyecto(encontrado);
    } else {
      console.error("ID no válido");
    }
  }, []);

  return (
    <>
      {!proyecto ? (
        
        <PageCarga />
      ) : (
        <>
          <div className="text-secundario flex flex-col gap-6 justify-center  ">
            <h1 className="font-black tracking-normal text-3xl lg:text-4xl text-white text-center lg:text-start ">
              {proyecto.nombre}
            </h1>
            <section className="flex flex-wrap-reverse lg:flex-nowrap items-center gap-3 ">
             
              <div className="flex flex-col gap-5 lg:max-w-[45%]">
                <div className="flex flex-col gap-2">
                  <h4 className="text-xl lg:text-2xl text-white  font-bold ">
                    About
                  </h4>
                  <p className="">{proyecto.descripcionLarga}</p>
                </div>
                {/* contenedor de tecnoligas y website */}
                  <article className="flex flex-col gap-4 ">
                    <div className="inline-flex items-center gap-2 ">
                      {tecnologias}
                      <h4 className="text-white text-lg lg:text-xl font-bold ">
                        Tecnologias
                      </h4>
                    </div>
                    <ul className="flex  flex-wrap   gap-3">
                      {proyecto.tecnologias.map((tecnologia, index) => (
                        <li
                          className="text-sm py-1 px-3     "
                          key={index}
                        >
                          <IconoRenderizado nombre={tecnologia} />

                        </li>
                      ))}
                    </ul>
                  </article>
                  {/* section  website  */}
                  <article className="flex flex-col gap-4  ">
                    <div className="inline-flex gap-2 items-center ">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-5 "
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"
                        />
                      </svg>

                      <h4 className="text-white text-lg lg:text-xl font-bold  ">
                        WebSite
                      </h4>
                    </div>

                    <a
                      className="underline font-semibold text-yellow-200"
                      href={proyecto.webSite}
                      target="_blank"
                    >
                      {proyecto.webSite}
                    </a>
                  </article>
              </div>
                <div className=" ">
                  <img
                    className="w-full h-full object-cover drop-shadow-[2px_5px_10px_rgba(100,120,150,4)]"
                    src={proyecto.imagenWeb}
                    alt={proyecto.nombre}
                  />
                </div>
            </section>
          </div>
        </>
      )}
    </>
  );
}
