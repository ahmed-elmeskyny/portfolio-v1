import para from "../assets/projects/para3.JPG";
import todo from "../assets/projects/todo.JPG";
import crown from "../assets/projects/crown.JPG";
import portfolio from '../assets/projects/portfolio.JPG';





const Projects = [
    {
        id: 1,
        projectId: "parapharmacie",
        title: "Parapharmacie",
        subtitle: "website for parapharmacie",
        img: para,
        description: " a Parapharmacie website a static website  for product showcase  ",
        tools: " Html - css - javascript",
        href: "https://ahmed-elmeskyny.github.io/",
        hrefCode: "https://github.com/ahmed-elmeskyny/ahmed-elmeskyny.github.io",
    },
    {
        id: 2,
        projectId: "todoapp",
        title: "ToDo app",
        subtitle: "app for time management",
        img: todo,
        description: "a simple todo app with user authentication and its own data to manage your upcoming tasks and events",
        tools: "javascript Framework: React.js - redux/react-redux - firebase - sass - react-icons",
        href: "https://ahmed-todo.herokuapp.com/",
        hrefCode: "https://github.com/ahmed-elmeskyny/ToDo-app",
    },
    {
        id: 3,
        projectId: "crownshop",
        title: "Crown Shop",
        subtitle: "online clothes shop",
        img: crown,
        description: " an online clothes shop with user authentication ",
        tools: " javascript Framework: React.js - redux/react-redux - firebase - stripe payment API",
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
        tools: "javascript Framework: React.js - redux/react-redux - firebase - gsap",
        href: "https://github.com/ahmed-elmeskyny/portfolio-v1",
        hrefCode: "https://github.com/ahmed-elmeskyny/portfolio-v1",
    }
]

export default Projects;