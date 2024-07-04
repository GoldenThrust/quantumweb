import "dotenv/config";

export const GITHUB_TOKEN = process.env.OCTOTOKEN;

export const DEV = process.env.DEV === 'true' ? true : false;

export const redisOptions = DEV ? '127.0.0.1:6379' : {
  password: process.env.REDIS_PASSWORD,
  socket: {
    host: process.env.REDIS_HOST,
    port: process.env.REDIS_PORT,
  },
}

export const mongoDBURI = DEV ? 'mongodb://127.0.0.1:27017/quantumweb' : process.env.MONGODB_URI;

export const featureRepo = [
    "GoldenThrust/quantumweb",
    "GoldenThrust/Virtual-Bank",
    "GoldenThrust/TeamSphere",
    "GoldenThrust/open_chat",
    "GoldenThrust/Maven",
    "GoldenThrust/AirBnB_clone_v4",
];
  
export const masterRepo = [
    "GoldenThrust/Piano",
    "GoldenThrust/Web-Browser-APIs/CSS_counter_styles",
    "GoldenThrust/Web-Browser-APIs/CSS_font_loading",
    "GoldenThrust/Web-Browser-APIs/backgroundtasks",
    "GoldenThrust/Web-Browser-APIs/battery",
    "GoldenThrust/Web-Browser-APIs/broadcast_channel",
    "GoldenThrust/alx-files_manager",
    "GoldenThrust/simple_shell",
];


export const testWorkData = [
  {
    name: 'Personnal portfolio - Quantum Web',
    thumbnail: 'thumbnail.png',
    tools: 'HTML  - CSS - JavaScript',
    trailer: 'trailer.mp4',
    figma: 'https://www.figma.com/design/8ZHpjIaL8a6k6Y0qZfOmf0/Personal-portfolio?node-id=120-2',
    id: '0',
    description: 'My name is Adeniji Olajide. I am a full stack web developer and a software engineer. This is my portfolio.',
    url: 'https://github.com/GoldenThrust/personal-portfolio',
    homepageUrl: 'https://quantumweb-6icm.onrender.com/',
    star: 3
  },
  {
    name: 'Virtual Bank',
    thumbnail: 'virtualbank.png',
    tools: 'Django - Djangorestframework - Bootstrap - Bash - Ansible - Docker - Nginx - PostgreSQL - MySQL - Redis - Ubuntu - JavaScript - CSS3 - HTML5',
    trailer: 'virtualbank.mp4',
    figma: 'https://www.figma.com/design/SWDFbjEQyHLYsyq6uJixZp/Virtual_Bank?m=dev&node-id=833-2&t=g1WRxE1C3U0wVh7f-1',
    id: '1',
    description: 'Alx Foundation portfolio project: Virtual Bank Web App & API. Simulating real banking systems for developers, offering a secure, user-friendly environment to test financial transactions within web/mobile apps. Enhance API integration with robust, simulated transactions.',
    url: 'https://github.com/GoldenThrust/Virtual-Bank',
    homepageUrl: 'https://virtualbank.tech',
    star: 16
  },
  {
    name: 'TeamSphere',
    thumbnail: 'teamsphere.png',
    tools: 'ExpressJS - NodeJS - ReactJS - MongoDB - Typescript - WebRTC - Ubuntu',        
    trailer: 'teamsphere.mp4',
    figma: 'https://www.figma.com/design/KL14oovRRSfaKwVy9scuMQ/Design?m=dev&node-id=134-12&t=e86WtvSc9wbwsi4F-1',
    id: '2',
    description: "Welcome to TeamSphere, your all-in-one solution for enhancing team collaboration in virtual environments. Whether you're conducting online teaching sessions or organizing important meetings, TeamSphere ensures a smooth and productive experience.",        
    url: 'https://github.com/GoldenThrust/TeamSphere',
    homepageUrl: null,
    star: 2
  },
  {
    name: 'Openchat',
    thumbnail: 'openchat.png',
    tools: 'PHP - Websocket - Javascript - CSS - HTML',
    trailer: 'openchat.mp4',
    figma: null,
    id: '3',
    description: null,
    url: 'https://github.com/GoldenThrust/open_chat',
    homepageUrl: null,
    star: 0
  },
  {
    name: 'Maven - Elearning',
    thumbnail: 'maven.png',
    tools: 'PHP - CSS - JavaScript',
    trailer: 'maven.mp4',
    figma: null,
    id: '4',
    description: null,
    url: null,
    homepageUrl: null,
    star: 0
  },
  {
    name: 'AirBNB Clone',
    thumbnail: 'airbnb.png',
    tools: 'Python - FLask - MySQL - Bash - HTML - CSS',
    trailer: 'airbnb.mp4',
    figma: null,
    id: '5',
    description: "The AirBnB project at ALX entails building a web application that replicates AirBnB's functionalities. It combines database storage, a backend API, and a user-friendly front-end. Students engage in database management, server-side logic via the API, and front-end design.",
    url: 'https://github.com/GoldenThrust/AirBnB_clone_v4',
    homepageUrl: 'http://beyondimagination.tech/',
    star: 1
  }
]
