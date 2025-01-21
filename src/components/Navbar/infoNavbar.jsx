export function InfoNavbar( {OpenInfo} ) {
    const StyleInfo = OpenInfo ? "flex animate-fade-in-down" : "animate-fade-out-up";
  return (
    <div className={`${StyleInfo} lg:hidden  font-Montserrat text-white bg-[#050520] h-72 p-5 absolute top-16 w-[95%] text-start rounded-xl left-2 border-1 border-gray-600`}>
      <ul className="flex flex-col   gap-5 lg:gap-7  mx-3 space-y-3 pt-4  ">
        <li>
          <a href="/" className="hover:text-yellow-300">
            Home
          </a>
        </li>
        <li>
          <a href="/" className="hover:text-yellow-300">
            Sobre mí
          </a>
        </li>
        <li>
          <a href="/#C-Proyectos" className="hover:text-yellow-300">
            Proyectos
          </a>
        </li>
        <li>
          <a href="/#C-Proyectos" className="hover:text-yellow-300">
            Certificacion
          </a>
        </li>
      </ul>
    </div>
  );
}
