import { Logo } from "./icon/logo";
export function PageCarga() {
  return (
    <div className="w-full min-h-screen">
      <div className="flex flex-col justify-center items-center">
        <Logo styleLogo="animate-pulse " />
        <p className="text-white text-center text-3xl  font-black animate-pulse ">
          CARGANDO ...
        </p>
      </div>
    </div>
  );
}
