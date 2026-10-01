import type { Section, Topic } from "../types/content";

/**
 * Single source of truth for the page structure.
 *
 * The router (app/App.tsx), the topic chapter navigation (components/TopicPage)
 * and the home page link cards (features/home/Home.tsx) are all derived from
 * this data. The first chapter of a topic is its introduction and is rendered
 * by the topic's index route; its path is intentionally empty.
 */
export const sections: Section[] = [
  {
    name: "Front End",
    description: "Front end technologies and libraries.",
    topics: [
      {
        title: "DOM",
        description:
          "The Document Object Model (DOM) is a programming interface for web documents.",
        tooltip: "Document Object Model",
        path: "frontend/dom",
        chapters: [
          { name: "About", path: "", loader: () => import("../features/frontend/dom/DOM") },
          {
            name: "Document",
            path: "document",
            loader: () => import("../features/frontend/dom/Document"),
          },
          {
            name: "Properties",
            path: "properties",
            loader: () => import("../features/frontend/dom/Properties"),
          },
        ],
      },
      {
        title: "React",
        description: "A JavaScript library for building user interfaces.",
        tooltip: "React",
        path: "frontend/react",
        chapters: [
          { name: "React", path: "", loader: () => import("../features/frontend/react/React") },
          {
            name: "Frameworks",
            path: "frameworks",
            loader: () => import("../features/frontend/react/Frameworks"),
          },
          {
            name: "Components",
            path: "components",
            loader: () => import("../features/frontend/react/Components"),
          },
          {
            name: "Props",
            path: "props",
            loader: () => import("../features/frontend/react/Props"),
          },
          {
            name: "Hooks",
            path: "hooks",
            loader: () => import("../features/frontend/react/Hooks"),
          },
        ],
      },
      {
        title: "Redux",
        description: "Provides a predictable state container for React applications.",
        tooltip: "Redux & Redux Toolkit",
        path: "frontend/redux",
        chapters: [
          { name: "Redux", path: "", loader: () => import("../features/frontend/redux/Redux") },
          {
            name: "Store",
            path: "store",
            loader: () => import("../features/frontend/redux/Store"),
          },
          {
            name: "Slice",
            path: "slice",
            loader: () => import("../features/frontend/redux/Slice"),
          },
          {
            name: "Middleware",
            path: "middleware",
            loader: () => import("../features/frontend/redux/Middleware"),
          },
        ],
      },
      {
        title: "Cookies",
        description: "Browser storage.",
        tooltip: "Cookies and storage",
        path: "frontend/cookies",
        chapters: [
          {
            name: "Cookies",
            path: "",
            loader: () => import("../features/frontend/cookies/Cookies"),
          },
        ],
      },
    ],
    externalLinks: [
      {
        title: "HTML",
        path: "https://developer.mozilla.org/en-US/docs/Web/HTML",
        tooltip: "Mozilla Developer Network`s HTML documentation",
      },
      {
        title: "CSS",
        path: "https://developer.mozilla.org/en-US/docs/Web/CSS",
        tooltip: "Mozilla Developer Network`s CSS documentation",
      },
      {
        title: "JavaScript",
        path: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
        tooltip: "Mozilla Developer Network`s JavaScript documentation",
      },
    ],
  },
  {
    name: "Back End",
    description: "Back end technologies and libraries.",
    topics: [
      {
        title: "Node",
        cardTitle: "Node.js",
        description:
          "A runtime that allows JavaScript to be executed outside of a browser environment.",
        tooltip: "Node.js",
        path: "backend/nodejs",
        chapters: [
          { name: "Node", path: "", loader: () => import("../features/backend/node/Node") },
          { name: "CLI", path: "cli", loader: () => import("../features/backend/node/REPL") },
          {
            name: "Modules",
            path: "modules",
            loader: () => import("../features/backend/node/Modules"),
          },
        ],
      },
      {
        title: "Express",
        cardTitle: "Express.js",
        description: "A framework to build backend servers.",
        tooltip: "Express.js",
        path: "backend/expressjs",
        chapters: [
          {
            name: "Express",
            path: "",
            loader: () => import("../features/backend/express/Express"),
          },
          {
            name: "Routing",
            path: "routing",
            loader: () => import("../features/backend/express/Routing"),
          },
          {
            name: "Middleware",
            path: "middleware",
            loader: () => import("../features/backend/express/Middleware"),
          },
        ],
      },
      {
        title: "CORS",
        description: "Cross-origin resource sharing controls who can access resources.",
        tooltip: "Cross-origin resource sharing",
        path: "backend/cors",
        chapters: [
          { name: "CORS", path: "", loader: () => import("../features/backend/cors/CORS") },
          {
            name: "TypeScript",
            path: "typescript",
            loader: () => import("../features/backend/cors/CORSJavascript"),
          },
        ],
      },
      {
        title: "PostgreSQL",
        description: "Open-source object-relational database.",
        tooltip: "PostgreSQL",
        path: "backend/postgres",
        chapters: [
          {
            name: "PostgreSQL",
            path: "",
            loader: () => import("../features/backend/postgres/Postgres"),
          },
          {
            name: "PSQL Commands",
            path: "psql-commands",
            loader: () => import("../features/backend/postgres/PostgresCmds"),
          },
        ],
      },
    ],
    externalLinks: [
      {
        title: "API",
        path: "https://developer.mozilla.org/en-US/docs/Web/API",
        tooltip: "Mozilla Developer Network`s API documentation",
      },
      {
        title: "Database",
        path: "https://developer.mozilla.org/en-US/docs/Web/API/Database",
        tooltip: "Mozilla Developer Network`s Database documentation",
      },
      {
        title: "Server",
        path: "https://developer.mozilla.org/en-US/docs/Web/API/Server",
        tooltip: "Mozilla Developer Network`s Server documentation",
      },
      {
        title: "Podman",
        path: "https://linuxize.com/cheatsheet/podman/",
        tooltip: "Linuxize`s quick reference guide for Podman",
      },
    ],
  },
  {
    name: "Web Security",
    description: "Creating secure applications.",
    topics: [
      {
        title: "Authentication",
        description: "Verify a users identity.",
        tooltip: "Authenticating users",
        path: "security/authentication",
        chapters: [
          {
            name: "Authentication",
            path: "",
            loader: () => import("../features/security/authentication/Authentication"),
          },
          {
            name: "Sessions",
            path: "sessions",
            loader: () => import("../features/security/authentication/Sessions"),
          },
          {
            name: "Express-session",
            path: "express-session",
            loader: () => import("../features/security/authentication/ExpressSession"),
          },
          {
            name: "Passport.js",
            path: "passportjs",
            loader: () => import("../features/security/authentication/PassportJS"),
          },
          {
            name: "JWT",
            path: "jwt",
            loader: () => import("../features/security/authentication/JWT"),
          },
        ],
      },
      {
        title: "Bcrypt",
        description: "JavaScript encryption library.",
        tooltip: "JavaScript encryption library",
        path: "security/bcrypt",
        chapters: [
          { name: "Bcrypt", path: "", loader: () => import("../features/security/bcrypt/Bcrypt") },
          {
            name: "Hashing",
            path: "hashing",
            loader: () => import("../features/security/bcrypt/Hashing"),
          },
        ],
      },
      {
        title: "oAuth 2.0",
        description: "Authorization framework.",
        tooltip: "JavaScript authentication library",
        path: "security/oAuth",
        chapters: [
          { name: "oAuth 2.0", path: "", loader: () => import("../features/security/oAuth/OAuth") },
        ],
      },
    ],
    placeholders: ["Authorization"],
  },
  {
    name: "Development",
    description: "Development methods.",
    topics: [
      {
        title: "Testing",
        description: "Automated testing.",
        tooltip: "Testing in development",
        path: "dev/testing",
        chapters: [
          { name: "Testing", path: "", loader: () => import("../features/dev/testing/Testing") },
        ],
      },
    ],
    placeholders: ["CI/CD"],
  },
  {
    name: "Data",
    description: "Data structures and algorithms.",
    topics: [
      {
        title: "Sort",
        description: "Algorithms for sorting.",
        tooltip: "Sorting algorithms",
        path: "data/sort",
        chapters: [
          { name: "Sort", path: "", loader: () => import("../features/data/sort/Sorting") },
          {
            name: "Bubble Sort",
            path: "bubble-sort",
            loader: () => import("../features/data/sort/BubbleSort"),
          },
          {
            name: "Insertion Sort",
            path: "insertion-sort",
            loader: () => import("../features/data/sort/InsertionSort"),
          },
          {
            name: "Selection Sort",
            path: "selection-sort",
            loader: () => import("../features/data/sort/SelectionSort"),
          },
          {
            name: "Quick Sort",
            path: "quick-sort",
            loader: () => import("../features/data/sort/QuickSort"),
          },
          {
            name: "Merge Sort",
            path: "merge-sort",
            loader: () => import("../features/data/sort/MergeSort"),
          },
        ],
      },
    ],
    placeholders: ["Search"],
  },
];

export const topics: Topic[] = sections.flatMap((section) => section.topics);
