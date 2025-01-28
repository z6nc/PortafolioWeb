import { Logo } from "../icon/logo";
import { useState } from "react";
import {IconHamburguer , IconClose} from "../icon/iconNavbar";
import { InfoNavbar } from "./infoNavbar";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
    <nav className="animate-fade-in-down w-[90%] lg:w-[60%] 2xl:w-[40%] lg:sticky flex justify-between items-center py-3 px-4 lg:p-3  mx-auto text-sm font-Montserrat my-8 text-white relative top-1 lg:top-4 z-50 bg-[#050520] rounded-2xl border-1 border-gray-600">
      <div className="inline-flex space-x-2 items-center">
        <Logo styleLogo={"w-10 "} />
        <span className="font-bold  text-yellow-200">Web developer </span>
      </div>
      
      <button className=" transition-all duration-150 ease-in-out" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? (
            <IconClose styleIcon={"w-6 lg:hidden"} />
          ) : (
            <IconHamburguer styleIcon={"w-6 lg:hidden"} />
          )}
        </button>
    

      <ul className="hidden justify-center items-center gap-5 lg:gap-7  mx-3 lg:flex ">
        <li>
          <a href="/" className="hover:text-yellow-300">
            Home
          </a>
        </li>
        <li>
          <a href="/AboutSection" className="hover:text-yellow-300">
            Sobre mí
          </a>
        </li>
        <li>
          <a href="/ListaProyectos" className="hover:text-yellow-300">
            Proyectos
          </a>
        </li>
        <li>
          <a href="/ListaCertificados" className="hover:text-yellow-300">
            Certificados
          </a>
        </li>
      
      </ul>

     <InfoNavbar   OpenInfo={isOpen}  />
    </nav>
    </>

    
  );
}
