import CCycle1 from "../images/c-cycle1.jpg";
import CCycle2 from "../images/c-cycle2.jpg";
import CCycle6 from "../images/c-cycle6.jpg";
import cycle1 from "../images/bg-cycle2.jpg";
import cycle2 from "../images/bg-cycle3.jpg";
import cycle3 from "../images/bg-cycle4.jpg";
import cycle4 from "../images/bg-cycle5.jpg";
import cycle5 from "../images/bg-cycle6.jpg";
import cycle6 from "../images/bg-cycle7.jpg";
import Apparel from "../images/apparel.jpeg";
import Accessories from "../images/accesorie.jpeg";
import Component from "../images/component.jpeg";
import Bag from "../images/bag.jpg";
import Shoes from "../images/shoes.jpg";
import Kit from "../images/kit.jpg";

export const headerMenu = [
  { label: "Home", value: "" },
  { label: "About", value: "about" },
  { label: "All Bicycles", value: "all-bicycles" },
  { label: "Dashboard", value: "dashboard" },
  { label: "Contact", value: "contact" },
];

export type TBicycleType = {
  Mountain: "Mountain";
  Road: "Road";
  Hybrid: "Hybrid";
  BMX: "BMX";
  Electric: "Electric";
};

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
  description: string;
  type: TBicycleType[keyof TBicycleType];
  frame: {
    material: string;
    size: string;
    color: string;
  };
  wheel?: {
    size?: number;
    rim_material?: string;
    tire_type?: string;
  };
  gear?: {
    shifters?: string;
    derailleurs?: {
      front: string;
      rear: string;
    };
    number_of_gears?: number;
  };
  brakes: {
    type: string;
    brand: string;
  };
  suspension: {
    type: string;
    front_fork: string;
  };
  handlebar: {
    type: string;
    material: string;
    width: string;
  };
  saddle?: {
    type: string;
    brand: string;
  };
  pedals: {
    type: string;
    material: string;
  };
  weight: string;
  accessories?: {
    bell?: boolean;
    kickstand?: boolean;
    rear_rack?: boolean;
    fenders?: boolean;
    lights?: {
      front?: boolean;
      rear?: boolean;
    };
  };
  price: number;
  quantity: number;
  inStock: boolean;
  image: {
    front_view: string;
    side_view?: string;
    back_view?: string;
    rear_view?: string;
    close_up_gears?: string;
  };
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

export const customerReviews = [
  {
    id: "c1",
    name: "Darrell Steward",
    email: "@darrels",
    comment:
      "You made it so simple. My new site is so much faster and easier to work with than my old site. I just choose the page, make the change and click save",
    about: "#another",
  },
  {
    id: "c2",
    name: "Leslie Alexander",
    email: "@lesslie",
    comment:
      "Simply the best. Better than all the rest. I’d recommend this product to beginners and advanced users.",
    about: "#postcrafts",
  },
  {
    id: "c3",
    name: "Jenny Wilson",
    email: "@jennywilson",
    comment:
      "This is a top quality product. No need to think twice before making it live on web.",
    about: "#make_it_fast",
  },
  {
    id: "c4",
    name: "Kristin Watson",
    email: "@darrels",
    comment:
      "Finally, I’ve found a template that covers all bases for a bootstrapped startup. We were able to launch in days, not months.",
    about: "#postcrafts",
  },
  {
    id: "c5",
    name: "Guy Hawkins",
    email: "@jennywilson",
    comment:
      "This is a top quality product. No need to think twice before making it live on web.",
    about: "#make_it_fast",
  },
  {
    id: "c6",
    name: "Marvin McKinney",
    email: "@jennywilson",
    comment:
      "With Postcrafts, it’s quicker with the customer, the customer is more ensured of getting exactly what they ordered, and I’m all for the efficiency.",
    about: "#dev #tools",
  },
  {
    id: "c7",
    name: "Annette Black",
    email: "@jennywilson",
    comment:
      "You made it so simple. My new site is so much faster and easier to work with than my old site. I just choose the page, make the change and click save.",
    about: "#another",
  },
  {
    id: "c8",
    name: "Floyd Miles",
    email: "@jennywilson",
    comment:
      "My new site is so much faster and easier to work with than my old site. I just choose the page, make the change and click save.",
    about: "#postcrafts",
  },
];

export const bicyclesData: TBicycleData[] = [
  {
    name: "Mountain Explorer 5000",
    brand: "TrailMaster",
    model: "MX-5000",
    description: "A robust mountain bike designed for off-road adventures.",
    type: "Mountain",
    frame: {
      material: "Aluminum",
      size: "M",
      color: "Red",
    },
    wheel: {
      size: 27,
      rim_material: "Alloy",
      tire_type: "Knobby",
    },
    brakes: {
      type: "Disc",
      brand: "Shimano",
    },
    suspension: {
      type: "Full",
      front_fork: "RockShox",
    },
    handlebar: {
      type: "Flat",
      material: "Aluminum",
      width: "720mm",
    },
    pedals: {
      type: "Clipless",
      material: "Composite",
    },
    weight: "13kg",
    price: 799.99,
    quantity: 10,
    inStock: true,
    image: {
      front_view: cycle1,
      side_view: "image1-side.jpg",
    },
  },
  {
    name: "Speedster Road Pro",
    brand: "SpeedCycle",
    model: "S-200",
    description: "A high-performance road bike for speed enthusiasts.",
    type: "Road",
    frame: {
      material: "Carbon",
      size: "L",
      color: "Blue",
    },
    wheel: {
      size: 28,
      rim_material: "Carbon",
      tire_type: "Road",
    },
    brakes: {
      type: "Caliper",
      brand: "Campagnolo",
    },
    suspension: {
      type: "None",
      front_fork: "Carbon Fork",
    },
    handlebar: {
      type: "Drop",
      material: "Carbon",
      width: "400mm",
    },
    pedals: {
      type: "Clipless",
      material: "Carbon",
    },
    weight: "7.8kg",
    price: 1499.99,
    quantity: 20,
    inStock: true,
    image: {
      front_view: cycle2,
      side_view: "image2-side.jpg",
    },
  },
  {
    name: "Mountain Bike X1",
    brand: "Trek",
    model: "Marlin 7",
    description: "A great entry-level mountain bike for exploring trails.",
    type: "Mountain",
    frame: {
      material: "Aluminum",
      size: '17.5"',
      color: "Black",
    },
    wheel: {
      size: 29,
      rim_material: "Aluminum",
      tire_type: "Knobby",
    },
    gear: {
      shifters: "Shimano Altus",
      derailleurs: {
        front: "Shimano Tourney",
        rear: "Shimano Altus",
      },
      number_of_gears: 21,
    },
    brakes: {
      type: "Hydraulic Disc",
      brand: "Tektro",
    },
    suspension: {
      type: "Front",
      front_fork: "SR Suntour XCT",
    },
    handlebar: {
      type: "Riser",
      material: "Aluminum",
      width: "720mm",
    },
    saddle: {
      type: "Sport",
      brand: "Bontrager",
    },
    pedals: {
      type: "Platform",
      material: "Plastic",
    },
    weight: "14 kg",
    accessories: {
      kickstand: true,
    },
    price: 600,
    quantity: 0,
    inStock: false,
    image: {
      front_view: cycle3,
      side_view: "/images/trek_marlin7_side.jpg",
      back_view: "/images/trek_marlin7_back.jpg",
    },
  },
  {
    name: "Road Bike Aero",
    brand: "Giant",
    model: "Contend AR 4",
    description: "Fast and comfortable road bike for long rides.",
    type: "Road",
    frame: {
      material: "Aluminum",
      size: "54cm",
      color: "Blue",
    },
    wheel: {
      size: 700,
      rim_material: "Aluminum",
      tire_type: "Road",
    },
    gear: {
      shifters: "Shimano Claris",
      derailleurs: {
        front: "Shimano Claris",
        rear: "Shimano Claris",
      },
      number_of_gears: 16,
    },
    brakes: {
      type: "Rim",
      brand: "Tektro",
    },
    suspension: {
      type: "None",
      front_fork: "N/A",
    },
    handlebar: {
      type: "Drop",
      material: "Aluminum",
      width: "42cm",
    },
    saddle: {
      type: "Racing",
      brand: "Giant",
    },
    pedals: {
      type: "Clipless",
      material: "Aluminum",
    },
    weight: "9.5 kg",
    accessories: {
      lights: {
        front: true,
        rear: true,
      },
    },
    price: 850,
    quantity: 10,
    inStock: true,
    image: {
      front_view: cycle4,
    },
  },
  {
    name: "Hybrid Bike City",
    brand: "Cannondale",
    model: "Quick 5",
    description: "Perfect for commuting and city riding.",
    type: "Hybrid",
    frame: {
      material: "Aluminum",
      size: "Medium",
      color: "Grey",
    },
    wheel: {
      size: 700,
      rim_material: "Aluminum",
      tire_type: "Hybrid",
    },
    gear: {
      shifters: "Shimano Tourney",
      derailleurs: {
        front: "Shimano Tourney",
        rear: "Shimano Tourney",
      },
      number_of_gears: 7,
    },
    brakes: {
      type: "V-Brake",
      brand: "Promax",
    },
    suspension: {
      type: "None",
      front_fork: "N/A",
    },
    handlebar: {
      type: "Flat",
      material: "Aluminum",
      width: "680mm",
    },
    saddle: {
      type: "Comfort",
      brand: "Cannondale",
    },
    pedals: {
      type: "Platform",
      material: "Plastic",
    },
    weight: "12 kg",
    accessories: {
      rear_rack: true,
      fenders: true,
    },
    price: 500,
    quantity: 50,
    inStock: false,
    image: {
      front_view: cycle5,
      side_view: "/images/cannondale_quick5_side.jpg",
    },
  },
  {
    name: "BMX Bike Freestyle",
    brand: "Cult",
    model: "Gateway",
    description: "Ideal for tricks and skatepark riding.",
    type: "BMX",
    frame: {
      material: "Chromoly",
      size: '20.5"',
      color: "Red",
    },
    wheel: {
      size: 20,
      rim_material: "Aluminum",
      tire_type: "BMX",
    },
    gear: {
      number_of_gears: 1,
    },
    brakes: {
      type: "U-Brake",
      brand: "Cult",
    },
    suspension: {
      type: "None",
      front_fork: "N/A",
    },
    handlebar: {
      type: "BMX",
      material: "Chromoly",
      width: '8.75"',
    },
    pedals: {
      type: "Platform",
      material: "Plastic",
    },
    weight: "11 kg",
    price: 400,
    quantity: 5,
    inStock: true,
    image: {
      front_view: cycle6,
    },
  },
];

export const bicycleAccessory = [
  {
    id: 1,
    image: Apparel,
    name: "Apparel",
  },
  {
    id: 2,
    image: Accessories,
    name: "Accesories",
  },
  {
    id: 3,
    image: Component,
    name: "Component",
  },
  {
    id: 4,
    image: Bag,
    name: "Bicycle Bag",
  },
  {
    id: 5,
    image: Shoes,
    name: "Shoes",
  },
  {
    id: 6,
    image: Kit,
    name: "Custom Cycling Kit",
  },
];
