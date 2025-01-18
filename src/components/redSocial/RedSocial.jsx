
import { RedesIcon } from "../icon/redSocialIcon";

export function RedSocial() {
  return (
    <ul className="flex justify-center items-center space-x-3 text-white my-3">
      {RedesIcon.map((red) => (
        <li key={red.nombre} className="hover:animate-jelly bg-transparent/35 p-2 rounded-lg border-1 border-gray-700">
          <a href={red.link} target="_blank " className="">
            {red.icono({ style: "w-5 h-5" })}
          </a>
        </li>
      ))}
    </ul>
  );
}
