import { ArrowDown } from "../icon/iconQuestion";
import { PreguntasFrecuentes } from "./preguntasFrecuentes";
import { useState } from "react";

export function ComponentesPreguntas() {
  const [activeIndex, setActiveIndex] = useState(null); // index 

  const togglePregunta = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <article className="text-white flex flex-col space-y-5 p-4">
      {PreguntasFrecuentes.map((pregunta, index) => {
        const isActive = activeIndex === index; 
        return (
          <button
            onClick={() => togglePregunta(index)}
            key={pregunta.id}
            className=" cursor-pointer w-[80dvh] text-start space-y-1 overflow-hidden rounded-lg bg-blue-950/45  border-l-2 border-gray-400"
          >
            <div className="flex justify-between font-medium items-center px-3 py-5 rounded-lg bg-transparent/30">
              <h2>{pregunta.pregunta}</h2>
              <div
                className={` transition-transform duration-300 ${
                  isActive ? "rotate-180" : "rotate-0"
                }`}
              >
                <ArrowDown styleIcon="size-4" />
              </div>
            </div>

            {isActive && (
              <div className="  text-gray-300 px-3 py-4 rounded-lg animate-fade-in">
                {pregunta.respuesta}
              </div>
            )}
          </button>
        );
      })}
    </article>
  );
}
