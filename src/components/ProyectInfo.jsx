import { useEffect, useState } from "react";
import { proyectos } from "./ListProyect.js";
import { IconoRenderizado } from "./iconos.jsx";
import { PageCarga } from "./pageCarga.jsx";

const tecnologias = (
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
);
const WebSvg = (
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
);
const StarSvg = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="size-6 lg:size-9"
  >
    <path
      fillRule="evenodd"
      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
      clipRule="evenodd"
    />
  </svg>
);

export function ProyectInfo() {
  const [proyecto, setProyecto] = useState(null);
  const [ClikStar, setClikStar] = useState(false);

  const TrueStar = " text-yellow-300  ";
  const StyleStar = ClikStar ? TrueStar : "fill-current";
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
          <div className="text-secundario flex flex-col gap-6 justify-center animate-blurred-fade-in ">
            <div className="inline-flex items-center justify-between">
              <h1 className=" tracking-wide font-Concert text-3xl lg:text-4xl text-gray-100  text-center lg:text-start  ">
                {proyecto.nombre}
              </h1>
              <a
                href={proyecto.LinkCode}
                target="_blank"
                className={`hover:text-yellow-300 hover:animate-tada ${StyleStar}`}
                onClick={() => setClikStar(!ClikStar)}
              >
                {StarSvg}
              </a>
            </div>
            <section className="flex flex-wrap items-center gap-5 ">
              <div className="w-full h-[30vh]  lg:h-auto lg:animate-flip-in-y">
                <video
                  className="rounded-md brightness-[0.9] w-full h-full object-cover"
                  autoPlay
                  muted
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
              <div className="flex flex-col gap-5 ">
                <div className="flex flex-col gap-2 py-4 ">
                  <h4 className="text-xl lg:text-3xl text-white uppercase font-Concert">
                    About
                  </h4>
                  <p className="">{proyecto.descripcionLarga}</p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-7 items-center justify-center ">
                  {/* contenedor de tecnoligas y website */}
                  <article className="flex flex-col gap-4     lg:items-center lg:border-r-1  ">
                    <div className="inline-flex items-center gap-2 ">
                      {tecnologias}
                      <h4 className="text-white text-lg lg:text-xl font-Concert ">
                        TECNOLOGIAS
                      </h4>
                    </div>
                    <ul className="flex  flex-wrap   gap-3">
                      {proyecto.tecnologias.map((tecnologia, index) => (
                        <li className="text-sm py-1 px-3     " key={index}>
                          <IconoRenderizado nombre={tecnologia} />
                        </li>
                      ))}
                    </ul>
                  </article>
                  {/* section  website  */}
                  <article className="flex flex-col gap-4    lg:items-center  ">
                    <div className="inline-flex gap-2 items-center ">
                      {WebSvg}
                      <h4 className="text-white text-lg lg:text-xl  font-Concert ">
                        WEBSITE
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

                <a
                  href={proyecto.webSite}
                  target="_blank"
                  className="bg-orange-600 py-3 rounded-md border-b-8 border-orange-800   hover:bg-orange-500  text-center mt-7 hover:animate-tilt"
                >
                  <span className="text-base lg:text-xl text-gray-300   font-Concert uppercase">
                    Visitar Sitio
                  </span>
                </a>
              </div>
            </section>
          </div>
        </>
      )}
    </>
  );
}
