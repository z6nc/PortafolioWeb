export function VisitProjectButton({ webSite }) {
  return (
    <a
      href={webSite}
      target="_blank"
      className="bg-orange-600 py-3 rounded-md border-b-8 border-orange-800   hover:bg-orange-500  text-center mt-7 hover:animate-tilt "
    >
      <span className="text-white  font-black tracking-wide uppercase">
        Visitar Sitio
      </span>
    </a>
  );
}
