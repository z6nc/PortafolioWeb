import { IconTech, IconWebsite } from "../../icon/iconInfoProyect";
import { IconoRenderizado } from "../../iconos";
export function ProjectTechnologies({ listTecnologies, webSite }) {
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-7 items-center justify-center ">
        <article className="flex flex-col gap-4 lg:items-center lg:border-r-1  ">
          <div className="inline-flex items-center gap-2 ">
            <IconTech estiloIcon={"size-6"} />
            <h4 className="text-white text-lg lg:text-xl font-bold  ">TECNOLOGIAS</h4>
          </div>
          <ul className="flex  flex-wrap   gap-3">
            {listTecnologies.map((tecnologia, index) => (
              <li className="text-sm py-1 px-3 " key={index}>
                <IconoRenderizado nombre={tecnologia} classe={"size-6"} />
              </li>
            ))}
          </ul>
        </article>

        <article className="flex flex-col gap-4    lg:items-center  ">
          <div className="inline-flex gap-2 items-center ">
            <IconWebsite estiloIcon={"size-6"} />
            <h4 className="text-white text-lg lg:text-xl  font-bold ">WEBSITE</h4>
          </div>

          <a
            className="underline font-semibold text-yellow-200 hover:text-yellow-400"
            href={webSite}
            target="_blank"
          >
            {webSite}
          </a>
        </article>
      </div>
    </>
  );
}
