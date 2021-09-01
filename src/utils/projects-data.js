import para from "../assets/projects/para3.JPG";
import crown from "../assets/projects/crown.JPG";
import portfolio from "../assets/projects/portfolio.png";
import alensao from "../assets/projects/alensao.png";
import forum from "../assets/projects/forum.png";

const Projects = [
  {
    id: 1,
    projectId: "parapharmacie",
    title: "Parapharmacie",
    subtitle: "website for parapharmacie",
    img: para,
    description:
      " a Parapharmacie website a static website  for product showcase  ",
    tools: " Html - css - javascript",
    href: "https://ahmed-elmeskyny.github.io/",
    hrefCode: "https://github.com/ahmed-elmeskyny/ahmed-elmeskyny.github.io",
  },
  {
    id: 2,
    projectId: "forum",
    title: "Forum Ensao",
    subtitle: "website for ensao forum",
    img: forum,
    description:
      "website for bloging and publishing upcoming events for Forum Ensao",
    tools:
      "javascript Framework: Next.js - redux/react-redux - firebase - sass - react-icons",
    href: "https://forum-ensao.vercel.app/",
    hrefCode: "https://github.com/ahmed-elmeskyny/forum-ensao-next",
  },
  {
    id: 3,
    projectId: "crownshop",
    title: "Crown Shop",
    subtitle: "online clothes shop",
    img: crown,
    description: " an online clothes shop with user authentication ",
    tools:
      " javascript Framework: React.js - redux/react-redux - firebase - stripe payment API",
    href: "https://github.com/ahmed-elmeskyny/Crown-shop",
    hrefCode: "https://github.com/ahmed-elmeskyny/Crown-shop",
  },
  {
    id: 4,
    projectId: "portfolio",
    title: "Portfolio",
    subtitle: "CV template",
    img: portfolio,
    description: " my  portfolio , cv template ",
    tools:
      "javascript Framework: React.js - redux/react-redux - firebase - gsap",
    href: "https://github.com/ahmed-elmeskyny/portfolio-v1",
    hrefCode: "https://github.com/ahmed-elmeskyny/portfolio-v1",
  },
  {
    id: 5,
    projectId: "ALENSAO",
    title: "Alensao",
    subtitle: "website for ALENSAO",
    img: alensao,
    description:
      " built and launched a dynamic website with user authentication  for  alensao (association of laureates of the national school of applied sciences) to be the portal between students and laureates of ENSAO ( National School Of Applied Sciences) ",
    tools: "javascript Framework: Next.js - redux/react-redux - firebase",
    href: "https://alensao.com/",
    hrefCode: "https://github.com/ahmed-elmeskyny/alensao-v2",
  },
];

export default Projects;
