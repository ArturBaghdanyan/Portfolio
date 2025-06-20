import { Skill } from "@/types/skills";
import {
  FaHtml5,
  FaCss3Alt,
  FaSass,
  FaReact,
  FaGithubSquare,
  FaFigma,
  FaVuejs
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiJavascript,
  SiTypescript,
  SiNextdotjs,
  SiPostman,
  SiRedux,
  SiEslint,
  SiPrettier
} from "react-icons/si";

export const listSkills: Skill[] = [
  { id: 1, imgSrc: FaHtml5, text: "HTML" },
  { id: 2, imgSrc: FaCss3Alt, text: "CSS" },
  { id: 3, imgSrc: FaSass, text: "Sass/SCSS" },
  { id: 4, imgSrc: SiTailwindcss, text: "Tailwind CSS" },
  { id: 5, imgSrc: SiJavascript, text: "JavaScript" },
  { id: 6, imgSrc: SiTypescript, text: "TypeScript" },
  { id: 7, imgSrc: FaReact, text: "React JS" },
  { id: 8, imgSrc: SiRedux, text: "Redux Toolkit" },
  { id: 9, imgSrc: SiNextdotjs, text: "Next JS" },
  { id: 10, imgSrc: FaVuejs , text: "Vue JS" },
  { id: 11, imgSrc: FaGithubSquare, text: "Git" },
  { id: 12, imgSrc: SiPostman, text: "Postman" },
  { id: 13, imgSrc: FaFigma, text: "Figma" },
  { id: 14, imgSrc: SiEslint, text: "ESLint" },
  { id: 15, imgSrc: SiPrettier, text: "Prettier" },
];
