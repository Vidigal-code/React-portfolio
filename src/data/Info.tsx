import { LangPT } from "./Langs/LangPT.tsx";
import { LangEN } from "./Langs/LangEN.tsx";
import { LangES } from "./Langs/LangES.tsx";

export const languages = [
  { code: "en", label: "English" },
  { code: "pt", label: "Portuguese" },
  { code: "es", label: "Spanish" }
];

export const Bio = {
  pt: LangPT,
  en: LangEN,
  es: LangES
};
