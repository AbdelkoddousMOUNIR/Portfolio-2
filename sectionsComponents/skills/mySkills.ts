import html from "@/imgs/html.png";
import css from "@/imgs/css.png";
import js from "@/imgs/js.png";
import sass from "@/imgs/sass.png";
import react from "@/imgs/react.png";
import redux from "@/imgs/redux.png";
import tailwind from "@/imgs/tailwind.png";
import node from "@/imgs/nodeJs.png";
import express from "@/imgs/express.png";
import mongo from "@/imgs/mongoDb.png";
import figma from "@/imgs/figma.png";
import photoshop from "@/imgs/photoshop.png";
import illustrator from "@/imgs/AI.png";
import { skill } from "@/types/types";

export let mySkills : skill[] = [
  {
    title: "web development",
    skillImage: "https://cdn-icons-png.flaticon.com/512/4997/4997543.png",
    description: "Expert in building dynamic, responsive web apps with a focus on cutting-edge design and scalable solutions for optimal user engagement.",
    technologiesImages: [
      "https://static-00.iconduck.com/assets.00/next-js-icon-512x512-zuauazrk.png",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYQomCCgNf1P_3nGZzTeIvaf4i1BeH4uSy1Q&s",
      react, redux, tailwind, node, express, mongo
    ],
    colors: ["#4B57F9" , "#8C83FE"]
  },
  {
    title: "UI/UX design",
    skillImage: "https://media.istockphoto.com/id/1413670924/vector/hands-working-on-creating-interfaces-for-websites-and-mobile-app-ux-ui-design.jpg?s=612x612&w=0&k=20&c=U_HhB_jo_VomRaQLQyQAAD4VD0PaHtpC7cKLwz-ZkUA=",
    description: "Skilled in crafting intuitive and engaging user interfaces with a keen eye for detail, creating seamless and visually appealing experiences that captivate and delight users.",
    technologiesImages: [figma , photoshop, illustrator],
    colors: ["#ff8000" , "#8C83FE"]
  },
  {
    title: "project management",
    skillImage: "https://cdn-icons-png.flaticon.com/512/7910/7910609.png",
    description: "Skilled in managing projects with a focus on efficient workflows and team collaboration to ensure timely, high-quality results.",
    technologiesImages: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Git_icon.svg/2048px-Git_icon.svg.png",
      "https://cdn-icons-png.flaticon.com/512/25/25231.png",
      "https://cdn-icons-png.flaticon.com/512/5968/5968875.png",
    ],
    colors: ["#ff8000" , "#8C83FE"]
  }
]