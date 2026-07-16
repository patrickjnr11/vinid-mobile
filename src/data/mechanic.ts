export type Mechanic = {

  id: string;

  name: string;

  service: string;

  rating: number;

  reviews: number;

  distance: string;

  available: boolean;

  image: string;

};

export const mechanics: Mechanic[] = [

  {

    id: "1",

    name: "Mike Auto Clinic",

    service: "Engine Specialist",

    rating: 4.9,

    reviews: 184,

    distance: "1.2 km",

    available: true,

    image:

      "https://images.unsplash.com/photo-1613214150384-df8cf8c7a4d8?w=500",

  },

  {

    id: "2",

    name: "Prime Garage",

    service: "General Repairs",

    rating: 4.8,

    reviews: 141,

    distance: "2.4 km",

    available: true,

    image:

      "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?w=500",

  },

  {

    id: "3",

    name: "Kings Motors",

    service: "Transmission",

    rating: 4.7,

    reviews: 96,

    distance: "3.8 km",

    available: false,

    image:

      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=500",

  },

  {

    id: "4",

    name: "Elite Auto Hub",

    service: "Electrical Diagnostics",

    rating: 5.0,

    reviews: 302,

    distance: "900 m",

    available: true,

    image:

      "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?w=500",

  },

];