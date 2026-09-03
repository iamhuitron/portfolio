import type { Metadata } from "next";
import { SITE } from "@/data/site";

export const metadata: Metadata = {
  title: `CV / Résumé — ${SITE.fullName}`,
  description: `Currículum Vitae de ${SITE.fullName}, desarrollador de software y estudiante de Informática en la UNAM. Especializado en React Native, TypeScript, Python y automatización.`,
  alternates: {
    canonical: "/cv",
  },
};

export default function CvLayout({ children }: { children: React.ReactNode }) {
  return <div data-theme="home">{children}</div>;
}
