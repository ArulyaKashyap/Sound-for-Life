import type { Metadata } from "next";
import ClinicsDirectoryClient from "@/components/clinics/ClinicsDirectoryClient";

export const metadata: Metadata = {
  title: "Hearing Clinic Near Me | Sound for Life Clinics",
  description:
    "Find a Sound for Life hearing clinic near you. Book a hearing test, meet an audiologist, request repair, or visit your nearest clinic.",
  alternates: {
    canonical: "/clinics",
  },
  openGraph: {
    title: "Find a Sound for Life Clinic Near You",
    description:
      "Looking for a nearby hearing clinic? Find your city, choose a clinic, book a hearing test, or request support from Sound for Life.",
    url: "/clinics",
    type: "website",
  },
};

export default function ClinicsPage() {
  return <ClinicsDirectoryClient />;
}