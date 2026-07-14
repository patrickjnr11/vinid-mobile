export type Mechanic = {
  id: string;
  name: string;
  rating: number;
  distance: string;
  verified: boolean;
};

export const mechanics: Mechanic[] = [
  {
    id: "1",
    name: "AutoFix Garage",
    rating: 4.9,
    distance: "2.3 km away",
    verified: true,
  },
  {
    id: "2",
    name: "Joe's Auto Clinic",
    rating: 4.8,
    distance: "3.1 km away",
    verified: true,
  },
  {
    id: "3",
    name: "Prime Motors",
    rating: 4.7,
    distance: "4.8 km away",
    verified: true,
  },
  {
    id: "4",
    name: "Elite Auto Care",
    rating: 4.6,
    distance: "5.5 km away",
    verified: true,
  },
  {
    id: "5",
    name: "RapidFix Workshop",
    rating: 4.5,
    distance: "6.2 km away",
    verified: false,
  },
];