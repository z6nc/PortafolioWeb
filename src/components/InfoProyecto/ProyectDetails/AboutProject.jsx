export function AboutProject({descripcionProyect }) {
    return(
        <div className="flex flex-col gap-2 py-4 ">
        <h4 className="text-xl lg:text-2xl text-white uppercase font-bold">
          About
        </h4>
        <p className="text-sm lg:text-base">{descripcionProyect}</p>
      </div>
    )
}