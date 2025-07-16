import interviewHub from "../images/InterviewHub.png";
import Todoist from "../images/Todoist.png";
import GroceryHub from "../images/GroceryHub.png";
import Zappose from "../images/Zappose.png";
import HowWellDoYouKnowMe from "../images/HowWellDoYouKnowMe.png";

const projectDetails = {
    interviewHub: {
        title: "Interview Hub",
        image: interviewHub,
        ghLink: "https://github.com/akmurmu82/InterviewIQ-Hub",
        liveLink: "https://fe-interviewiq-hub.netlify.app/",
        description:
            "A collaborative full stack project made to solve real-life problems.",
        details: {
            features: "Landing page, MCQ listing, Result according to marks",
            responsibility: "Implemented the Backend by myself",
            techStack: "Reack, Chakra UI, Node.js, Express, Mongoose",
        },
    },
    todoist: {
        title: "Todoist",
        image: Todoist,
        ghLink: "https://github.com/akmurmu82/Todoist-clone",
        liveLink: "https://todoist-clone-ak.vercel.app/",
        description: "Made this in a LinkedIn Challenge in just 7 days.",
        details: {
            features:
                "Add Todo, Edit todo and delete todo, collapsable side panel, UI resembled original site.",
            responsibility: "Navbar, Footer",
            techStack: "HTML, CSS, JavaScript, React",
        },
    },
    zapposClone: {
        title: "Zappos.com Clone",
        image: Zappose, // Make sure to import or define this image
        ghLink: "https://github.com/akmurmu82/zappos-clone/",
        liveLink: "https://zappos-clone-ak.vercel.app/",
        description:
            "A frontend clone of Zappos.com with responsive design and user-friendly interface.",
        details: {
            features: "Authenticatino, Product Listing, Product Details, Cart Functionality",
            responsibility: "Designed and implemented the UI components. Build the database.",
            techStack: "React, Tailwind CSS, Express, MongoDB, Mongoose, React Redux",
        },
    },
    groceryHub: {
        title: "GroceryHub",
        image: GroceryHub,
        ghLink: "https://github.com/akmurmu82/Grocery_Hub",
        liveLink: "https://velvety-chebakia-b2faa1.netlify.app/",
        description: "Collaborative project made in Construct week in just 7 days",
        details: {
            features: "Multiple product listing, Car",
            responsibility: "Navbar, Footer",
            techStack: "HTML, CSS, Java Script, JSON server",
        },
    },
    howWellDoYouKnowMe: {
        title: "How Well Do You Know Me",
        image: HowWellDoYouKnowMe, // replace this with the appropriate image variable or path
        ghLink: "https://github.com/akmurmu82/HowWellDoYouKnowMe", // update if needed
        liveLink: "https://howwelldoyouknowme2.vercel.app/", // replace with the actual live link
        description: "An interactive quiz app where I can test how well my friends know me.",
        details: {
            features: "User login, personalized quiz, scoring system, dynamic leaderboard, downloadable certificates",
            responsibility: "Implemented the frontend with React, designed the database schema.",
            techStack: "React, Chakra UI, Node.js, Express, MongoDB",
        },
    },
    LibraryManagementApp: {
        title: "MyBook Library",
        image: HowWellDoYouKnowMe, // Make sure to import or define this image
        ghLink: "https://github.com/akmurmu82/library-management-app",
        liveLink: "https://library-management-app-ak.vercel.app/",
        description:
            "A modern full-stack web app to discover, manage, and track your personal library with light/dark theme support.",
        details: {
            features: "Search & add books from Google Books API, personal library, reading status, ratings, dashboard stats, dark/light theme",
            responsibility: "Designed and developed full stack: frontend UI/UX, backend APIs, theming, integration with external APIs",
            techStack: "React, Vite, Tailwind CSS, Node.js, Express, MongoDB, Mongoose, JWT Authentication",
        },
    },
};

export default projectDetails