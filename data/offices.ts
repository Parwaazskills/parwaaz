// Office locations with real addresses and verified coordinates.

export type Office = {
  id: string;
  city: string;
  country: string;
  address: string;
  phone: string;
  email: string;
  lat: number;
  lng: number;
};

export const offices: Office[] = [
  {
    id: "lahore",
    city: "Lahore",
    country: "Pakistan",
    address: "Vogue Towers, MM Alam Road, Gulberg 3, Lahore",
    phone: "+92 300 2855800",
    email: "contact@parwaaz.co",
    lat: 31.5087851,
    lng: 74.3498209,
  },
  {
    id: "karachi",
    city: "Karachi",
    country: "Pakistan",
    address:
      "Suite # 43 & 44, Old Rally Building, Talpur Road, Lalazar, Karachi, Sindh 74000",
    phone: "+92 300 2855800",
    email: "contact@parwaaz.co",
    lat: 24.8477917,
    lng: 67.0022454,
  },
  {
    id: "islamabad",
    city: "Islamabad",
    country: "Pakistan",
    address: "Office 201-204, 2nd Floor, Block 08, F-6 Markaz, Islamabad",
    phone: "+92 300 2855800",
    email: "contact@parwaaz.co",
    lat: 33.7289535,
    lng: 73.0743528,
  },
  {
    id: "singapore",
    city: "Singapore",
    country: "Singapore",
    address: "68 Circular Road, #02-01, Singapore 049422",
    phone: "+92 300 2855800",
    email: "contact@parwaaz.co",
    lat: 1.2864377,
    lng: 103.8491657,
  },
];