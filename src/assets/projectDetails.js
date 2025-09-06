import interviewHub from "../images/InterviewHub.png";
import Todoist from "../images/Todoist.png";
import GroceryHub from "../images/GroceryHub.png";
import Zappose from "../images/Zappose.png";
import HowWellDoYouKnowMe from "../images/HowWellDoYouKnowMe.png";
import GitSweep from "../images/GitSweep.png";
import LibraryManagementSystem from "../images/LibraryManagementSystem.png";

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
    GitSweep: {
        title: "GitSweep - GitHub Repository Manager",
        image: GitSweep, // Make sure to import or define this image
        ghLink: "https://github.com/akmurmu82/gitsweep", // update with your actual repo link
        liveLink: "https://git-sweep.vercel.app/", // update with your actual deployed link
        description:
            "A web application to efficiently manage GitHub repositories with OAuth login, filtering, searching, and direct deletion features.",
        details: {
            features:
                "GitHub OAuth login, filter repositories (Private, Forked, Public), search by name, delete repositories with confirmation, Redux state management, user profile display",
            responsibility:
                "Developed full stack application: GitHub OAuth integration, frontend with React/Redux, backend APIs with Node.js/Express, repository filtering and deletion using GitHub API",
            techStack:
                "React, Vite, Tailwind CSS, Redux Toolkit, React Toastify, Node.js, Express, MongoDB, Passport.js (GitHub OAuth)",
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
        image: LibraryManagementSystem, // Make sure to import or define this image
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