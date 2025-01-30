export function ComCertificado({ Certificaciones, limit }) {
  
  return (
    <section className="flex flex-wrap  gap-3 items-center justify-center  text-white max-w-6xl mx-auto">
      {Certificaciones.slice(0, limit).map((certificacion, index) => (
        <a
          key={index}
          className="flex gap-x-4  justify-center rounded-lg px-5 py-6  bg-transparent/20 border-1 border-gray-500 shadow-lg overflow-hidden animate-bounce-fade-in"
          href={certificacion.url}
          target="_blank"
        >
          <img
            src={certificacion.logo}
            alt={certificacion.company}
            className="w-10 h-full rounded-md "
            loading="lazy"
          />

          <div >
            <h3 className=" font-bold">{certificacion.company}</h3>
            <p className="  text-sm  text-gray-400 w-60 lg:w-96  truncate ">
              {certificacion.description}
            </p>
            <p className="text-yellow-400/85 inline-block px-4 py-1  mt-2 rounded-lg bg-yellow-400/10 text-xs font-black tracking-widest">
              {certificacion.year}
            </p>
          </div>
        </a>
      ))}
    </section>
  );
}
