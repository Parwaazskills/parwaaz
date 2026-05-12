// Office locations — replace placeholders with real coords when ready
// How to get exact coords: Google Maps → right-click on location → click coords to copy

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
    address: "Parwaaz Headquarters",
    phone: "+92 300 2855800",
    email: "lahore@parwaaz.co",
    lat: 31.5204,
    lng: 74.3587,
  },
  {
    id: "karachi",
    city: "Karachi",
    country: "Pakistan",
    address: "Parwaaz Office",
    phone: "+92 300 2855800",
    email: "karachi@parwaaz.co",
    lat: 24.8607,
    lng: 67.0011,
  },
  {
    id: "islamabad",
    city: "Islamabad",
    country: "Pakistan",
    address: "Parwaaz Office",
    phone: "+92 300 2855800",
    email: "islamabad@parwaaz.co",
    lat: 33.6844,
    lng: 73.0479,
  },
  {
    id: "faisalabad",
    city: "Faisalabad",
    country: "Pakistan",
    address: "Parwaaz Office",
    phone: "+92 300 2855800",
    email: "faisalabad@parwaaz.co",
    lat: 31.4504,
    lng: 73.135,
  },
];