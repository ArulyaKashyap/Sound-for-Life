// FILE: lib/clinics.ts

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

const SHARED_PHONE = "+91 90 1540 1540";
const SHARED_WHATSAPP = "+91 80911 18091";
const HOWRAH_WHATSAPP = "+91 93119 63772";
const SHARED_HOURS =
  "Monday to Saturday, 10:00 AM – 7:00 PM | Sunday: Closed";

export const clinics: Clinic[] = [
  {
    slug: "greater-kailash-delhi",
    centreName: "Greater Kailash",
    city: "New Delhi",
    state: "Delhi",
    fullAddress:
      "M-2, Main Road, LGF, Greater Kailash Part-1, Near SCI Hospital, New Delhi-110048",
    phone: SHARED_PHONE,
    whatsapp: SHARED_WHATSAPP,
    hours: SHARED_HOURS,
  },
  {
    slug: "janakpuri-delhi",
    centreName: "Janakpuri",
    city: "New Delhi",
    state: "Delhi",
    fullAddress:
      "B-50, New Krishna Park, Dhauli Pyau Red Light Crossing, Service Lane, Near Raymond, Janakpuri, New Delhi-110018",
    phone: SHARED_PHONE,
    whatsapp: SHARED_WHATSAPP,
    hours: SHARED_HOURS,
  },
  {
    slug: "mayur-vihar-phase-1-delhi",
    centreName: "Mayur Vihar Phase 1",
    city: "New Delhi",
    state: "Delhi",
    fullAddress:
      "Shop No. 4, Pocket 1, DDA Market, Near BSES Office, Mayur Vihar Phase 1, New Delhi-110091",
    phone: SHARED_PHONE,
    whatsapp: SHARED_WHATSAPP,
    hours: SHARED_HOURS,
  },
  {
    slug: "old-rajendra-nagar-delhi",
    centreName: "Old Rajendra Nagar",
    city: "New Delhi",
    state: "Delhi",
    fullAddress:
      "6/88 Old Rajendra Nagar, Near Main Shankar Road, Karol Bagh, New Delhi-110060",
    phone: SHARED_PHONE,
    whatsapp: SHARED_WHATSAPP,
    hours: SHARED_HOURS,
  },
  {
    slug: "sector-22-noida",
    centreName: "Sector 22",
    city: "Noida",
    state: "Uttar Pradesh",
    fullAddress: "H-15, Sector-22, Noida-201301",
    phone: SHARED_PHONE,
    whatsapp: SHARED_WHATSAPP,
    hours: SHARED_HOURS,
  },
  {
    slug: "sector-3-noida",
    centreName: "Sector 3",
    city: "Noida",
    state: "Uttar Pradesh",
    fullAddress:
      "2nd Floor, G 43, Block G, Noida Sector 3, Noida, Uttar Pradesh 201301",
    phone: SHARED_PHONE,
    whatsapp: SHARED_WHATSAPP,
    hours: SHARED_HOURS,
  },
  {
    slug: "greater-noida",
    centreName: "Greater Noida",
    city: "Greater Noida",
    state: "Uttar Pradesh",
    fullAddress:
      "Shop No. GF-36, K.B. Complex, Plot No. I.S.-01, Sector Alpha-02, Greater Noida, U.P.-201308",
    phone: SHARED_PHONE,
    whatsapp: SHARED_WHATSAPP,
    hours: SHARED_HOURS,
  },
  {
    slug: "raj-nagar-ghaziabad",
    centreName: "Raj Nagar",
    city: "Ghaziabad",
    state: "Uttar Pradesh",
    fullAddress: "Shop No. 3, IGF B 1, RDC, Raj Nagar, Ghaziabad, UP-201017",
    phone: SHARED_PHONE,
    whatsapp: SHARED_WHATSAPP,
    hours: SHARED_HOURS,
  },
  {
    slug: "mg-road-gurugram",
    centreName: "M.G. Road",
    city: "Gurugram",
    state: "Haryana",
    fullAddress:
      "S-056, Sahara Mall, Ground Floor, Near MG Road Metro Station, Gurgaon, Haryana-122001",
    phone: SHARED_PHONE,
    whatsapp: SHARED_WHATSAPP,
    hours: SHARED_HOURS,
  },
  {
    slug: "bhim-nagar-gurugram",
    centreName: "Bhim Nagar",
    city: "Gurugram",
    state: "Haryana",
    fullAddress:
      "Shop No. 327/8, New Railway Road, Gali No. 24, Opp. Bagga Traders, Bhim Nagar, Gurugram, Haryana-122006",
    phone: SHARED_PHONE,
    whatsapp: SHARED_WHATSAPP,
    hours: SHARED_HOURS,
  },
  {
    slug: "sector-16-faridabad",
    centreName: "Sector 16",
    city: "Faridabad",
    state: "Haryana",
    fullAddress:
      "Booth No. 110, Main Market, Sector 16, Near ICICI Bank, Faridabad, Haryana-121007",
    phone: SHARED_PHONE,
    whatsapp: SHARED_WHATSAPP,
    hours: SHARED_HOURS,
  },
  {
    slug: "mughal-canal-market-karnal",
    centreName: "Mughal Canal Market",
    city: "Karnal",
    state: "Haryana",
    fullAddress:
      "SCO 401, Ground Floor, Mughal Canal Road, Main Market, Karnal, Haryana-132001",
    phone: SHARED_PHONE,
    whatsapp: SHARED_WHATSAPP,
    hours: SHARED_HOURS,
  },
  {
    slug: "ambala-city",
    centreName: "Ambala City",
    city: "Ambala",
    state: "Haryana",
    fullAddress:
      "422, Manali House, Near Petrol Pump, Ambala City, Haryana-134003",
    phone: SHARED_PHONE,
    whatsapp: SHARED_WHATSAPP,
    hours: SHARED_HOURS,
  },
  {
    slug: "sector-20c-chandigarh",
    centreName: "Sector 20C",
    city: "Chandigarh",
    state: "Chandigarh",
    fullAddress:
      "SCO-75, 1st Floor, Sector-20C, Near Gurudwara Chowk, Chandigarh-160020",
    phone: SHARED_PHONE,
    whatsapp: SHARED_WHATSAPP,
    hours: SHARED_HOURS,
  },
  {
    slug: "hoshiarpur",
    centreName: "Hoshiarpur",
    city: "Hoshiarpur",
    state: "Punjab",
    fullAddress:
      "SCO-40, 1st Floor, City Centre, Near Bus Stand, Hoshiarpur, Punjab-146001",
    phone: SHARED_PHONE,
    whatsapp: SHARED_WHATSAPP,
    hours: SHARED_HOURS,
  },
  {
    slug: "jalandhar",
    centreName: "Jalandhar",
    city: "Jalandhar",
    state: "Punjab",
    fullAddress:
      "192, Basement, Gujral Nagar, Near Sandhu Orthodontics Clinic, Opposite Amarjeet Scanning & Diagnostic Centre, Jalandhar, Punjab-144001",
    phone: SHARED_PHONE,
    whatsapp: SHARED_WHATSAPP,
    hours: SHARED_HOURS,
  },
  {
    slug: "ludhiana",
    centreName: "Ludhiana",
    city: "Ludhiana",
    state: "Punjab",
    fullAddress:
      "518 R Model Town, Above Axis Bank, Near Lallyarpur Sweets Road, Ludhiana, Punjab-141002",
    phone: SHARED_PHONE,
    whatsapp: SHARED_WHATSAPP,
    hours: SHARED_HOURS,
  },
  {
    slug: "amritsar",
    centreName: "Amritsar",
    city: "Amritsar",
    state: "Punjab",
    fullAddress:
      "Pillar No. 18-B, Near Yes Bank, Batala Road, Opposite Saroj Dhaba, Amritsar, Punjab-143001",
    phone: SHARED_PHONE,
    whatsapp: SHARED_WHATSAPP,
    hours: SHARED_HOURS,
  },
  {
    slug: "bathinda",
    centreName: "Bathinda",
    city: "Bathinda",
    state: "Punjab",
    fullAddress:
      "Shop No. 5, Shri Guru Nanakdev Ji Complex, 100 Feet Road, Near Ghore Wala Chowk, Street No. 6/4 B Corner, Bathinda, Punjab-151001",
    phone: SHARED_PHONE,
    whatsapp: SHARED_WHATSAPP,
    hours: SHARED_HOURS,
  },
  {
    slug: "agra",
    centreName: "Agra",
    city: "Agra",
    state: "Uttar Pradesh",
    fullAddress:
      "23/453, Shop No. 2, 1st Floor, Opp. Sanjay Talkies, Upon Pinch Of Spices, Wazirpura Road, Agra, U.P.-282003",
    phone: SHARED_PHONE,
    whatsapp: SHARED_WHATSAPP,
    hours: SHARED_HOURS,
  },
  {
    slug: "prayagraj",
    centreName: "Prayagraj",
    city: "Prayagraj",
    state: "Uttar Pradesh",
    fullAddress:
      "36C/4A, Ghaush Nagar Road, 12 Market, Near Chaursiya Chauraha, Opposite Shuhag Palace, Prayagraj-211016",
    phone: SHARED_PHONE,
    whatsapp: SHARED_WHATSAPP,
    hours: SHARED_HOURS,
  },
  {
    slug: "gomti-nagar-lucknow",
    centreName: "Gomti Nagar",
    city: "Lucknow",
    state: "Uttar Pradesh",
    fullAddress:
      "Sahara Plaza, Gate No. 3, Shop No. D-218, Patrakarpuram Chauraha, Gomti Nagar, Lucknow, UP-226010",
    phone: SHARED_PHONE,
    whatsapp: SHARED_WHATSAPP,
    hours: SHARED_HOURS,
  },
  {
    slug: "kanpur",
    centreName: "Kanpur",
    city: "Kanpur",
    state: "Uttar Pradesh",
    fullAddress:
      "House No. 3, New Shivli Road, Chungi Tiraha, Panki Road, Kalyanpur, Kanpur, UP-208017",
    phone: SHARED_PHONE,
    whatsapp: SHARED_WHATSAPP,
    hours: SHARED_HOURS,
  },
  {
    slug: "moradabad",
    centreName: "Moradabad",
    city: "Moradabad",
    state: "Uttar Pradesh",
    fullAddress:
      "Cross Road Mall, Shop No. 4, 1st Floor, Opp. Temptation Bakery, Civil Lines, Avas Vikas Pili Kothi, Moradabad-244001",
    phone: SHARED_PHONE,
    whatsapp: SHARED_WHATSAPP,
    hours: SHARED_HOURS,
  },
  {
    slug: "dehradun",
    centreName: "Dehradun",
    city: "Dehradun",
    state: "Uttarakhand",
    fullAddress:
      "51/38, Ballupur Road, Near Synergy Hospital, Dehradun, UTTARAKHAND-248001",
    phone: SHARED_PHONE,
    whatsapp: SHARED_WHATSAPP,
    hours: SHARED_HOURS,
  },
  {
    slug: "jaipur",
    centreName: "Jaipur",
    city: "Jaipur",
    state: "Rajasthan",
    fullAddress:
      "104, 1st Floor, The Mile Stone, Gandhinagar, Mode Tonk Road, Jaipur, Rajasthan-302015",
    phone: SHARED_PHONE,
    whatsapp: SHARED_WHATSAPP,
    hours: SHARED_HOURS,
  },
  {
    slug: "vadodara",
    centreName: "Vadodara",
    city: "Vadodara",
    state: "Gujarat",
    fullAddress:
      "Shop No. 12, Tulsidham Apartment, Tulsidham Char Rasta Chowk, Manjalpur, Vadodara, Gujarat-390011",
    phone: SHARED_PHONE,
    whatsapp: SHARED_WHATSAPP,
    hours: SHARED_HOURS,
  },
  {
    slug: "gandhinagar-gujarat",
    centreName: "Gandhinagar",
    city: "Gandhinagar",
    state: "Gujarat",
    fullAddress:
      "Shop No. 102, 1st Floor, Shree Ugati Corporate Park, Opp. HDFC Bank, Near Maruti Nexa Kudasan, Gandhinagar, Gujarat-382421",
    phone: SHARED_PHONE,
    whatsapp: SHARED_WHATSAPP,
    hours: SHARED_HOURS,
  },
  {
    slug: "surat",
    centreName: "Surat",
    city: "Surat",
    state: "Gujarat",
    fullAddress:
      "Shop No. U20, Krishna Complex, Gujarat Gas Circle, Near Raymond Showroom, Adajan, Surat, Gujarat-395009",
    phone: SHARED_PHONE,
    whatsapp: SHARED_WHATSAPP,
    hours: SHARED_HOURS,
  },
  {
    slug: "chandkheda-ahmedabad",
    centreName: "Chandkheda",
    city: "Ahmedabad",
    state: "Gujarat",
    fullAddress:
      "Shop No. FF-12, Aaron Elegance, Opp. Radhe Bungalows-1, Behind GTU College, Near IndusInd Bank, New CG Road, Chandkheda, Ahmedabad, Gujarat-382424",
    phone: SHARED_PHONE,
    whatsapp: SHARED_WHATSAPP,
    hours: SHARED_HOURS,
  },
  {
    slug: "anand",
    centreName: "Anand",
    city: "Anand",
    state: "Gujarat",
    fullAddress:
      "F-6, First Floor, Triveni Arcade, Anand Vidya Nagar, Anand, Gujarat-388120",
    phone: SHARED_PHONE,
    whatsapp: SHARED_WHATSAPP,
    hours: SHARED_HOURS,
  },
  {
    slug: "gandhinagar-jammu",
    centreName: "Gandhinagar",
    city: "Jammu",
    state: "Jammu & Kashmir",
    fullAddress:
      "355-A Gandhi Nagar, Near Pahalwans, Gol Market, Gandhinagar, Jammu-180004",
    phone: SHARED_PHONE,
    whatsapp: SHARED_WHATSAPP,
    hours: SHARED_HOURS,
  },
  {
    slug: "kalighat-kolkata",
    centreName: "Kalighat",
    city: "Kolkata",
    state: "West Bengal",
    fullAddress:
      "138, Shyama Prasad Mukherjee Road, Rash-Bihari More, Kalighat, Kolkata-700026, West Bengal. Landmark: Kalighat Metro Station Gate No. 1",
    phone: SHARED_PHONE,
    whatsapp: SHARED_WHATSAPP,
    hours: SHARED_HOURS,
  },
  {
    slug: "ultadanga-kolkata",
    centreName: "Ultadanga",
    city: "Kolkata",
    state: "West Bengal",
    fullAddress:
      "P-191, Ultadanga Main, CIT Scheme VII M, Ultadanga, Kolkata, West Bengal-700067. Near Bidhan Nagar Railway Station, Bank of Baroda ATM Building, Ground Floor",
    phone: SHARED_PHONE,
    whatsapp: SHARED_WHATSAPP,
    hours: SHARED_HOURS,
  },
  {
    slug: "howrah",
    centreName: "Howrah",
    city: "Howrah",
    state: "West Bengal",
    fullAddress:
      "Siemens Best Sound Centre, 55, Bijoy Kumar Mukherjee Road, P.S. Golabari, Howrah, West Bengal-711106",
    phone: SHARED_PHONE,
    whatsapp: HOWRAH_WHATSAPP,
    hours: SHARED_HOURS,
  },
  {
    slug: "nerul-navi-mumbai",
    centreName: "Nerul",
    city: "Navi Mumbai",
    state: "Maharashtra",
    fullAddress:
      "Shop No. 15, Krishna Kamal CHS, Plot No. 111/E, Opp. ICICI Bank, Sector 21, Nerul East, Navi Mumbai-400706",
    phone: SHARED_PHONE,
    whatsapp: SHARED_WHATSAPP,
    hours: SHARED_HOURS,
  },
  {
    slug: "kandivali-mumbai",
    centreName: "Kandivali",
    city: "Mumbai",
    state: "Maharashtra",
    fullAddress:
      "Shop No. 11, Burahni Heritage, M.G. Road, Kandivali West, Mumbai, Maharashtra-400067",
    phone: SHARED_PHONE,
    whatsapp: SHARED_WHATSAPP,
    hours: SHARED_HOURS,
  },
  {
    slug: "andheri-mumbai",
    centreName: "Andheri",
    city: "Mumbai",
    state: "Maharashtra",
    fullAddress:
      "D10/E6, Minoo Minar CHS, Veera Desai Road, Next to Courtyard Restaurant, Andheri West, Mumbai, Maharashtra-400053",
    phone: SHARED_PHONE,
    whatsapp: SHARED_WHATSAPP,
    hours: SHARED_HOURS,
  },
  {
    slug: "trivandrum",
    centreName: "Trivandrum",
    city: "Trivandrum",
    state: "Kerala",
    fullAddress:
      "Shop No. 66, City Plaza First Floor, Opp. Metro Scans, Medical College Ulloor Road, Trivandrum, Kerala-695011",
    phone: SHARED_PHONE,
    whatsapp: SHARED_WHATSAPP,
    hours: SHARED_HOURS,
  },
  {
    slug: "jayanagar-bengaluru",
    centreName: "Jayanagar",
    city: "Bengaluru",
    state: "Karnataka",
    fullAddress:
      "House No. 93, 7th Main Road, 30th Cross, Jayanagar 4th Block, Opposite Maiyas Restaurant, Bengaluru-560011",
    phone: SHARED_PHONE,
    whatsapp: SHARED_WHATSAPP,
    hours: SHARED_HOURS,
  },
  {
    slug: "sahakara-nagar-bengaluru",
    centreName: "Sahakara Nagar",
    city: "Bengaluru",
    state: "Karnataka",
    fullAddress: "2382, Block-E, Sahakara Nagar, Bengaluru-560092",
    phone: SHARED_PHONE,
    whatsapp: SHARED_WHATSAPP,
    hours: SHARED_HOURS,
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