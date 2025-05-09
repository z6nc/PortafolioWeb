import { certifications } from "../components/Certificaciones/certificaciones";

export const CertificadoLugares = [...new Set(certifications.map(item => item.company))];
