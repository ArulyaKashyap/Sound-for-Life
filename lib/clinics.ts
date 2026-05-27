export type Clinic = {
  slug: string;
  centreName: string;
  city: string;
  state: string;
  fullAddress: string;
  phone: string;
  whatsapp: string;
  hours: string;
};

export const clinics: Clinic[] = [
  {
    slug: "greater-kailash-delhi",
    centreName: "Greater Kailash",
    city: "New Delhi",
    state: "Delhi",
    fullAddress:
      "M-2, Main Road, LGF, Greater Kailash Part-1, Near SCI Hospital, New Delhi – 110048",
    phone: "+91 90 1540 1540",
    whatsapp: "+91 80911 18091",
    hours: "Monday to Saturday, 10:00 AM – 7:00 PM | Sunday: Closed",
  },
  {
    slug: "janakpuri-delhi",
    centreName: "Janakpuri",
    city: "New Delhi",
    state: "Delhi",
    fullAddress:
      "B-50, New Krishna Park, Dhauli Pyau Red Light Crossing, Service Lane, Near Raymond, Janakpuri, New Delhi – 110018",
    phone: "+91 90 1540 1540",
    whatsapp: "+91 80911 18091",
    hours: "Monday to Saturday, 10:00 AM – 7:00 PM | Sunday: Closed",
  },
];

export function getClinicBySlug(slug: string) {
  return clinics.find((clinic) => clinic.slug === slug);
}

export function formatPhoneHref(phone: string) {
  return `tel:${phone.replace(/[^\d+]/g, "")}`;
}

export function formatWhatsAppHref(phone: string) {
  const cleaned = phone.replace(/[^\d]/g, "");
  return `https://wa.me/${cleaned}`;
}