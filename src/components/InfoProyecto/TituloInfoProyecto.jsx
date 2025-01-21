import { IconEstrella } from "../icon/iconInfoProyect"
import { useState } from "react";
export function TituloProyecto({NombreProyecto , LinkGithub}) {
  const [ClikStar, setClikStar] = useState(false);
  const StyleStar = ClikStar ? " text-yellow-400  " : "fill-current";

    return (
        <>
        <div className="inline-flex items-center justify-between">
              <h1 className=" tracking-wide  text-2xl lg:text-3xl text-gray-100  text-center lg:text-start font-black   ">
                {NombreProyecto}
              </h1>
              <a
                href={LinkGithub}
                target="_blank"
                className={`hover:text-yellow-300 hover:animate-tada ${StyleStar}`}
                onClick={() => setClikStar(!ClikStar)}
              >
                <IconEstrella estiloIcon={" size-8 lg:size-9"} />
              </a>
            </div>
        </>
    )
}