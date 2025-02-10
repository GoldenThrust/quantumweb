import mongodb from "./config/db.js";
import redis from "./config/db.js";
import Project from "./models/project.js";

const projects = [
    {
        name: 'Quantum Web',
        tools: [
            'javascript',
            'nodejs',
            'expressjs',
            'redis',
            'mongodb',
            'html5',
            'css3'
        ],
        gitLink: 'https://github.com/GoldenThrust/quantumweb',
        figmaLink: 'https://www.figma.com/design/8ZHpjIaL8a6k6Y0qZfOmf0/Personal-portfolio?node-id=120-2&t=isD0T968d0CJ0Ddo-1',
        projectPreview: 'quantumweb'
    },
    {
        name: 'Virtual Bank',
        tools: ['html5', 'css3', 'javascript', 'python', 'django', 'djangorestframework', 'mysql', 'postgresql', 'websocket', 'bootstrap'],
        gitLink: 'https://github.com/GoldenThrust/Virtual-Bank',
        figmaLink: 'https://www.figma.com/design/SWDFbjEQyHLYsyq6uJixZp/Virtual_Bank?node-id=0-1&t=W1ZM68LN0XVZYNzy-1',
        projectPreview: 'virtualbank'
    },
    {
        name: 'TrustXchange',
        tools: ['mongodb', 'expressjs', 'reactjs', 'nodejs'],
        gitLink: 'https://github.com/GoldenThrust/TrustXchange',
        figmaLink: '',
        projectPreview: 'trustxchange'
    },
    {
        name: 'Sync',
        tools: [
            'html5', ' css',
            'javascript', 'nodejs',
            'expressjs', 'reactjs',
            'redis', 'mongodb',
            'websocket', 'webrtc'
        ],
        gitLink: 'https://github.com/GoldenThrust/Sync',
        figmaLink: 'https://www.figma.com/design/EOKaTr0NrieNcS383hQIjm/Sync?node-id=171-2&t=DOmcVDDEY5ze3eJq-1',
        projectPreview: 'sync'
    },
    {
        name: 'Rocket Raiders',
        tools: [
            'html5', 'css3',
            'javascript', 'reactjs',
            'expressjs', 'javascript',
            'ejs', 'tailwind',
            'nodejs', 'websocket'
        ],
        gitLink: 'https://github.com/GoldenThrust/Rocket-Raiders',
        figmaLink: 'https://www.figma.com/design/GuMxW06ujn2MgnCZXPKjB8/rocket-raider?node-id=0-1&t=xV7NmQnNb6qbdBME-1',
        projectPreview: 'rocket-raiders'
    },
    {
        name: 'Team Sphere',
        tools: [
            'html', 'css3',
            'javascript', 'nodejs',
            'expressjs', 'reactjs',
            'typescript', 'webrtc',
            'websocket', 'mongodb',
            'tailwind'
        ],
        gitLink: 'https://github.com/GoldenThrust/TeamSphere',
        figmaLink: 'https://www.figma.com/design/KL14oovRRSfaKwVy9scuMQ/Design?node-id=0-1&t=yIo3yzEauQdIw858-1',
        projectPreview: 'teamsphere'
    },
    {
        name: 'Open Chat',
        tools: ['javascript', 'html5', 'css3', 'php', 'websocket'],
        gitLink: 'https://github.com/GoldenThrust/open_chat',
        figmaLink: '',
        projectPreview: 'openchat'
    },
    {
        name: 'AirBnB Clone',
        tools: [
            'html5',
            'css3',
            'flask',
            'javascript',
            'python',
            'mysql',
            'bash'
        ],
        gitLink: 'https://github.com/GoldenThrust/AirBnB_clone_v4',
        figmaLink: '',
        projectPreview: 'airbnb'
    },
    {
        name: 'File Manager',
        tools: ['nodejs', 'expressjs', 'redis', 'mongodb'],
        gitLink: 'https://github.com/GoldenThrust/alx-files_manager',
        figmaLink: '',
        projectPreview: 'alxfilemanager'
    },
    {
        name: 'Simple Shell',
        tools: ['c'],
        gitLink: 'https://github.com/GoldenThrust/simple_shell',
        figmaLink: '',
        projectPreview: 'simpleshell'
    },
    {
        name: 'Web Browser API',
        tools: ['html', ' css', 'javascript', 'php'],
        gitLink: 'https://github.com/GoldenThrust/Web-Browser-APIs',
        figmaLink: '',
        projectPreview: 'webbrowserapi'
    },
    {
        name: 'ALX Interview',
        tools: ['python'],
        gitLink: 'https://github.com/GoldenThrust/alx-interview',
        figmaLink: '',
        projectPreview: 'alxinterview'
    },
    {
        name: 'Backend User Data',
        tools: ['python'],
        gitLink: 'https://github.com/GoldenThrust/alx-backend-user-data',
        figmaLink: '',
        projectPreview: 'userdata'
    },
    {
        name: 'Backend Storage',
        tools: ['python', ' mysql', ' redis', 'mongodb'],
        gitLink: 'https://github.com/GoldenThrust/alx-backend-storage',
        figmaLink: '',
        projectPreview: 'backendstorage'
    },
    {
        name: 'System Engineering and DevOps',
        tools: ['bash', 'python', ' puppet', ' c'],
        gitLink: 'https://github.com/GoldenThrust/alx-system_engineering-devops',
        figmaLink: '',
        projectPreview: 'systemengineering'
    },
    {
        name: 'Higher Level Language',
        tools: ['python', 'javascript', ' html', ' mysql', 'c'],
        gitLink: 'https://github.com/GoldenThrust/alx-higher_level_programming',
        figmaLink: '',
        projectPreview: 'highlevel'
    },
    {
        name: 'Low Level Language',
        tools: ['c'],
        gitLink: 'https://github.com/GoldenThrust/alx-low_level_programming',
        figmaLink: '',
        projectPreview: 'lowlevel'
    },
    {
        name: 'Binary Tree',
        tools: [' c'],
        gitLink: 'https://github.com/GoldenThrust/binary_trees',
        figmaLink: '',
        projectPreview: 'binarytree'
    },
    {
        name: 'Piano',
        tools: ['html', ' css', ' javascript'],
        gitLink: 'https://github.com/GoldenThrust/Piano',
        figmaLink: '',
        projectPreview: 'piano'
    },
]

export default function createProjects() {
    // await mongodb.run();
    // await redis.run();

    const project = Project.find({});

    if (!project)
        projects.forEach(async (prjt, key) => {
            try {
                const { description, url, homepageUrl, isPrivate, stargazers } =
                    await fetchProject(prjt.gitLink);

                const hasVideo = await this._findVideo(prjt.projectPreview);

                const project = new Project({
                    key,
                    name: prjt.name,
                    description,
                    tools: prjt.tools,
                    preview: prjt.projectPreview,
                    private: isPrivate,
                    figma: prjt.projectfigmaLink,
                    stars: stargazers,
                    url,
                    hasvideo: hasVideo,
                    homepage: homepageUrl,
                });
                project.save();
            } catch (err) {
                console.error(err);
            }
        })

    // async function getFormattedProjects() {
    //     try {
    //         // Fetch all projects from the database
    //         const projectsFromDB = await Project.find({});

    //         // Format the projects in the desired structure
    //         const projects = projectsFromDB.map(project => ({
    //             name: project.name,
    //             tools: project.tools,
    //             gitLink: project.url,
    //             figmaLink: project.figma,
    //             projectPreview: project.preview
    //         }));

    //         // Return the formatted projects
    //         console.log(projects);
    //         return projects;
    //     } catch (error) {
    //         console.error('Error fetching projects:', error);
    //         return [];
    //     }
    // }

    // await getFormattedProjects()

    // process.exit(0);
};

// main().catch(err => {
//     console.error(err);
//     process.exit(1);
// });
