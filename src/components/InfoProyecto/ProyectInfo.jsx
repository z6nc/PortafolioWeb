import { useEffect, useState } from "react";
import { proyectos } from "../ListProyect.js";
import { PageCarga } from "../pageCarga.jsx";
import { TituloProyecto } from "./TituloInfoProyecto.jsx";
import { VideoProyecto } from "./VideoProyecto.jsx";
import {ProjectDetails} from "./GridInfo.jsx";



export function ProyectInfo() {
  const [proyecto, setProyecto] = useState(null);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const ID = parseInt(urlParams.get("id"), 10);

    if (!isNaN(ID)) {
      const encontrado = proyectos.find((proyecto) => proyecto.id === ID);
      setProyecto(encontrado);
    } else {
      alert("No se encontro el proyecto");
    }
  }, []);
  return (
    <>
      {!proyecto ? (
        <PageCarga />
      ) : (
        <>
          <section className="text-secundario flex flex-col gap-6 justify-center animate-blurred-fade-in font-Montserrat ">
            <TituloProyecto NombreProyecto={proyecto.nombre}  LinkGithub = {proyecto.LinkCode}/>
            <section className="flex flex-wrap items-center gap-5 ">
              <VideoProyecto linkVideoMp4={proyecto.videoMp4} linkVideoWebm={proyecto.videoWebm} />
              <ProjectDetails Descripcion={proyecto.descripcionLarga} Tecnologias={proyecto.tecnologias} WebSiteLink={proyecto.webSite} />
             
            </section>
          </section>
        </>
      )}
    </>
  );
}
