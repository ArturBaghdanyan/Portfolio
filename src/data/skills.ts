import { Skill } from "../types/skills";
import {
  FaHtml5,
  FaCss3Alt,
  FaSass,
  FaReact,
  FaGithubSquare,
  FaFigma,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiJavascript,
  SiTypescript,
  SiNextdotjs,
  SiPostman,
} from "react-icons/si";

export const listSkills: Skill[] = [
  { id: 1, imgSrc: FaHtml5, text: "HTML" },
  { id: 2, imgSrc: FaCss3Alt, text: "CSS" },
  { id: 3, imgSrc: FaSass, text: "Sass/SCSS" },
  { id: 4, imgSrc: SiTailwindcss, text: "Tailwind CSS" },
  { id: 5, imgSrc: SiJavascript, text: "JavaScript" },
  { id: 6, imgSrc: SiTypescript, text: "TypeScript" },
  { id: 7, imgSrc: FaReact, text: "React.js" },
  { id: 8, imgSrc: SiNextdotjs, text: "Next.js" },
  { id: 9, imgSrc: FaGithubSquare, text: "Git" },
  { id: 10, imgSrc: SiPostman, text: "Postman" },
  { id: 11, imgSrc: FaFigma, text: "Figma" },
];
