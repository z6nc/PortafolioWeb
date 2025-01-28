import { useState } from "react";
import { certifications } from "./certificaciones";
import { ComCertificado } from "./pageCerti";
export function CertificacionesFilter({ empresa }) {
  const filterItem = certifications.filter(
    (certificacion) => certificacion.company === empresa
  );
  return (
    <>
      <section className="w-full">
        <div class="flex items-center justify-center mb-4 py-9">
          <span class="flex-grow border-t-1 border-white/25"></span>
          <h2 class="text-xl uppercase text-white font-bold mx-7">{empresa}</h2>
          <span class="flex-grow border-t-1 border-white/25"></span>
        </div>
        <ComCertificado Certificaciones={filterItem} limit={9} />
      </section>
    </>
  );
}
