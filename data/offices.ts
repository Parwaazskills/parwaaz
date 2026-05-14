export type Office = {
  id: string;
  city: string;
  name: string;
  address: string;
  lat: number;
  lng: number;
  phone?: string;
  email?: string;
  hours?: string;
};

export const offices: Office[] = [
  {
    id: "lahore",
    city: "Lahore",
    name: "Parwaaz Lahore Office",
    address:
      "3rd Floor, Daftarkhwan, Vogue Towers, M. M. Alam Road, Lahore",
    lat: 31.5087851,
    lng: 74.3498209,
    phone: "+92 300 2855800",
    email: "info@parwaaz.com",
    hours: "Mon – Sat: 10:00 AM – 6:00 PM",
  },
  {
    id: "karachi",
    city: "Karachi",
    name: "Parwaaz Karachi Office",
    address:
      "Suite # 43 & 44, Old Rally Building, Talpur Road, Lalazar, Karachi City, Sindh 74000",
    lat: 24.8477917,
    lng: 67.0022454,
    phone: "+92 300 2855800",
    email: "info@parwaaz.com",
    hours: "Mon – Sat: 10:00 AM – 6:00 PM",
  },
  {
    id: "islamabad",
    city: "Islamabad",
    name: "Parwaaz Islamabad Office",
    address:
      "Office 201-204, 2nd Floor, Block 08, F-6 Markaz, Islamabad",
    lat: 33.7289535,
    lng: 73.0743528,
    phone: "+92 300 2855800",
    email: "info@parwaaz.com",
    hours: "Mon – Sat: 10:00 AM – 6:00 PM",
  },
];