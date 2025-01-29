import CCycle1 from "../images/c-cycle1.jpg";
import CCycle2 from "../images/c-cycle2.jpg";
import CCycle6 from "../images/c-cycle6.jpg";
import cycle1 from "../images/bg-cycle2.jpg";
import cycle2 from "../images/bg-cycle3.jpg";
import cycle3 from "../images/bg-cycle4.jpg";
import cycle4 from "../images/bg-cycle5.jpg";
import cycle5 from "../images/bg-cycle6.jpg";
import cycle6 from "../images/bg-cycle7.jpg";
import cycle7 from "../images/bg-cycle8.jpg";
import cycle8 from "../images/bg-cycle9.jpg";

export const headerMenu = [
  { label: "Home", value: "" },
  { label: "About", value: "about" },
  { label: "All Bicycles", value: "all-bicycles" },
  { label: "Dashboard", value: "dashboard" },
  { label: "Contact", value: "contact" },
];

export type Bicycle = {
  id: number;
  name: string;
  description: string;
  brand: string;
  image: string;
};

export type TBicycleData = {
  name: string;
  brand: string;
  model: string;
  url: string;
  price: number;
  type: string;
  description: string;
  quantity: number;
};

export const bicycles: Bicycle[] = [
  {
    id: 1,
    name: "On-Road, Off-Road, Any Road",
    description:
      "It's the most advanced, best performing alloy race bike ever made. Fitting, since aluminum is the 13th element.",
    brand: "Trek",
    image: CCycle1,
  },
  {
    id: 2,
    name: "Break Free From The Same Roads",
    description:
      "Don’t overthink it. Mellow to mad. Wild to mild. Whatever your trail riding style, Habit’s got what you need.",
    brand: "Giant",
    image: CCycle2,
  },
  {
    id: 3,
    name: "On-Road, Break Free From The Same Roads",
    description:
      "A perfect blend of road and mountain bike features. Whatever your trail riding style, Habit’s got what you need.",
    brand: "Specialized",
    image: CCycle6,
  },
];

export const bicycleData:TBicycleData[] = [
  {
    name: "Volt Electric Bike",
    brand: "GreenPower",
    model: "E-VLT500",
    url: cycle1,
    price: 1599.99,
    type: "Electric",
    description:
      "A premium electric bike with a long-range battery, perfect for eco-friendly commuting.",
    quantity: 8,
  },
  {
    name: "EcoRide Electric Bike",
    brand: "EcoPower",
    model: "E-ERX400",
    url: cycle2,
    price: 1299.99,
    type: "Electric",
    description:
      "A lightweight electric bike for smooth urban commuting with a fast-charging battery.",
    quantity: 15,
  },
  {
    name: "Swift Ride E-Bike",
    brand: "SwiftTech",
    model: "E-SR350",
    url: cycle3,
    price: 999.99,
    type: "Electric",
    description:
      "An affordable yet high-performance electric bike for everyday transportation.",
    quantity: 20,
  },
  {
    name: "FusionPro Electric Bike",
    brand: "FusionCycles",
    model: "E-FP600",
    url: cycle4,
    price: 1799.99,
    type: "Electric",
    description:
      "Built for speed and endurance, this e-bike is ideal for long-distance journeys.",
    quantity: 10,
  },
  {
    name: "City Cruiser Electric Bike",
    brand: "UrbanRiders",
    model: "E-CR200",
    url: cycle5,
    price: 899.99,
    type: "Electric",
    description:
      "A stylish and comfortable electric bike designed for city commuting.",
    quantity: 25,
  },
  {
    name: "Volt Pro E-Bike",
    brand: "GreenPower",
    model: "E-VLT700",
    url: cycle6,
    price: 1999.99,
    type: "Electric",
    description:
      "A high-end electric bike with advanced features and an enhanced battery system.",
    quantity: 12,
  },
  {
    name: "RideMax E-Bike",
    brand: "MaxCycles",
    model: "E-RMX500",
    url: cycle7,
    price: 1499.99,
    type: "Electric",
    description:
      "A versatile electric bike with a powerful motor, perfect for both city and off-road adventures.",
    quantity: 18,
  },
  {
    name: "UrbanGlide E-Bike",
    brand: "GlideTech",
    model: "E-UGT800",
    url: cycle8,
    price: 2199.99,
    type: "Electric",
    description:
      "A premium electric bike with a sleek design and long-lasting battery life for urban explorers.",
    quantity: 5,
  },
  {
    name: "TrailBlazer Electric Bike",
    brand: "OffRoadX",
    model: "E-TB650",
    url: cycle1,
    price: 1699.99,
    type: "Electric",
    description:
      "An off-road electric bike built for rugged terrains and extreme outdoor adventures.",
    quantity: 6,
  },
  {
    name: "Velocity Pro E-Bike",
    brand: "VelocityCycles",
    model: "E-VP600",
    url: cycle2,
    price: 1599.99,
    type: "Electric",
    description:
      "A high-performance electric bike designed for fast and efficient commuting over long distances.",
    quantity: 8,
  },
];
