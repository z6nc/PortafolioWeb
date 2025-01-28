const IconClik = ()=>(
  <svg
  xmlns="http://www.w3.org/2000/svg"
  fill="none"
  viewBox="0 0 24 24"
  strokeWidth={1.5}
  stroke="currentColor"
  className="size-6"
>
  <path
    strokeLinecap="round"
    strokeLinejoin="round"
    d="M15.042 21.672 13.684 16.6m0 0-2.51 2.225.569-9.47 5.227 7.917-3.286-.672ZM12 2.25V4.5m5.834.166-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243-1.59-1.59"
  />
</svg>
)

export function ButtonUrl({ url, text }) {
  return (
    <a
      href={url}
      rel="noopener noreferrer"
      className="inline-flex items-center gap-x-2 font-semibold text-sm text-secundario  bg-yellow-400/20 border-1 border-yellow-500  mx-auto py-2 px-4 rounded-md hover:scale-105 transition-transform duration-100 "
    >
      {text}
      <IconClik/>
     
    </a>
  );
}
