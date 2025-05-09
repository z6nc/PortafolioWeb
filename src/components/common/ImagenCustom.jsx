export const ImagenCustom = ({imagenPortada , nombre }) => {
  return (
    <div className=" w-full h-72  bg-black relative  rounded-md  ">
      <img
        className="w-full h-full object-cover  rounded-md  "
        src={imagenPortada}
        alt={`imagen de la web ${nombre}`}
      />
    </div>
  );
};
