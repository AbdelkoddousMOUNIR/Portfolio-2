import abdoshop from "@/imgs/shop.jpg";
import restaurant from "@/imgs/restaurant.jpg";
import doit from "@/imgs/doit.jpg";
import nikestore from "@/imgs/nikestore.jpg";
import bookilik from "@/imgs/bookilik.jpg";
import digild from "@/imgs/agency.jpg";
import { project } from "@/types/types";

export const projects: project[] = [
  {
    projectName: "Bookilik",
    projectImage: bookilik,
    projectLink: "https://bookilik.com",
  },
  {
    projectName: "Digild Agency",
    projectImage: digild,
    projectLink: "https://digild.com",
  },
  {
    projectName: "Abdo Shop",
    projectImage: abdoshop,
    projectLink: "https://abdoshop.netlify.app",
  },
  {
    projectName: "DoIt",
    projectImage: doit,
    projectLink: "https://doitproject.netlify.app",
  },
  {
    projectName: "Restaurant",
    projectImage: restaurant,
    projectLink: "https://italianfoodrestaurant.netlify.app",
  },
  {
    projectName: "Nike Store",
    projectImage: nikestore,
    projectLink: "https://nikestoreproject.netlify.app",
  },
];
