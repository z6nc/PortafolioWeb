import { AboutProject } from "./ProyectDetails/AboutProject";
import { ProjectTechnologies } from "./ProyectDetails/ProjectTechnologies";
import { VisitProjectButton } from "./ProyectDetails/VisitProjectButton";
export function ProjectDetails({ Descripcion, Tecnologias, WebSiteLink }) {
  return (
    <>
      <article className="flex flex-col gap-5 ">
        <AboutProject descripcionProyect={Descripcion} />
        <ProjectTechnologies
          listTecnologies={Tecnologias}
          webSite={WebSiteLink}
        />

        <VisitProjectButton webSite={WebSiteLink} />
      </article>
    </>
  );
}
