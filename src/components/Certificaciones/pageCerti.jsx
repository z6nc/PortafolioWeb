export function ComCertificado({ Certificaciones, limit }) {
  return (
    <section className="flex flex-wrap  gap-3 items-center justify-center  text-white max-w-6xl mx-auto">
      {Certificaciones.slice(0, limit).map((certificacion, index) => (
        <a
          key={index}
          className="flex gap-x-4  justify-center rounded-lg px-5 py-6  bg-transparent/20 border-1 border-gray-500 shadow-lg overflow-hidden"
          href={certificacion.url}
          target="_blank"
        >
          <img
            src={certificacion.certificadoImg}
            alt={certificacion.empresa}
            className="w-11 h-full rounded-lg "
            loading="lazy"
          />

          <div >
            <h3 className=" font-bold">{certificacion.empresa}</h3>
            <p className="  text-sm  text-gray-400 w-60 lg:w-96  truncate ">
              {certificacion.descripcion}
            </p>
            <p className="text-yellow-400/85 inline-block px-4 py-1  mt-2 rounded-lg bg-yellow-400/10 text-xs font-black tracking-widest">
              {certificacion.año}
            </p>
          </div>
        </a>
      ))}
    </section>
  );
}
