import React from "react";
import Blog from '../assets/Blog.png';
import summarise from '../assets/summarise.png';
import Task from '../assets/Task.png'; // Add your image paths
import TickTac from '../assets/TickTac.png';
import Footer from './Footer';

const ProjectCard = ({ image, title, description, git, technologies }) => {
    return (
        <div className="max-w-sm sm:max-w-sm md:max-w-sm bg-gray-900 border border-neutral-100 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            {title === 'Blog' && <a href="#">
                <img className="w-full rounded-t-lg h-auto object-cover" src={Blog} alt="Blog" />
            </a>}
            {title === 'Summariser' && <a href="#">
                <img className="w-full rounded-t-lg h-auto object-cover" src={summarise} alt="Summariser" />
            </a>}
            {title === 'Tic Tac Toe' && <a href="#">
                <img className="w-full rounded-t-lg h-auto object-cover" src={TickTac} alt="Tic Tac Toe" />
            </a>}
            {title === 'Task Manager' && <a href="#">
                <img className="w-full rounded-t-lg h-auto object-cover" src={Task} alt="Task Manager" />
            </a>}
            <div className="p-4 sm:p-6">
                <a href="#">
                    <h5 className="text-2xl sm:text-xl md:text-2xl lg:text-3xl font-bold tracking-tight text-white bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 to-pink-500">{title}</h5>
                </a>
                <p className="font-normal text-sm sm:text-base md:text-lg text-gray-300 dark:text-gray-400">{description}</p>
            </div>
            <div className='m-2 sm:m-4 lg:m-6 flex justify-between'>
                <div className='flex flex-wrap gap-2 pl-2'>
                    {technologies.map((tag, index) => (
                        <p
                            key={`${index}-${tag}`}
                            className='text-[14px] text-blue-500'
                        >
                            #{tag}
                        </p>
                    ))}
                </div>
                <a href={git} className="text-red-300 border border-gray-200 rounded-lg shadow p-1 sm:p-2 lg:p-3 hover:text-green-500 duration-300">GitHub</a>
            </div>
        </div>
    );
};

const Projects = () => {
    return (
        <div className="bg-black">
            <div className="flex flex-wrap gap-7 justify-center items-center m-12 p-12">
                {project.map((item, index) => (
                    <ProjectCard
                        key={index}
                        image={item.image}
                        title={item.title}
                        description={item.description}
                        git={item.git}
                        technologies={item.technologies}
                    />
                ))}
            </div>
            <Footer />
        </div>
    );
}

export const project = [
    {
        title: 'Blog',
        description: 'This is a Blog Application built using the MERN stack, featuring user authentication and allowing users to create, edit, delete, and search blog posts dynamically. It demonstrates CRUD operations and secure login functionality.',
        image: Blog,
        git: 'https://github.com/Santho09/Blog_Application',
        technologies: ['Mongodb', 'Express','ReactJS','NodeJS']
    },
    {
        title: 'Summariser',
        description: 'This project is a Flask-based web application that performs text summarization using Hugging Faces transformers library. It supports summarizing both plain text entered manually and text extracted from uploaded files (PDF, DOCX, and TXT).',
        image: summarise,
        git: 'https://github.com/Santho09/Personal-project',
        technologies: ['Python', 'Flask', 'HTML','CSS']
    },
    {
        title: 'Tic Tac Toe',
        description: 'Tic Tac Toe is a classic game built using Html,Css and Js with a simple interface for users to play.',
        image: TickTac,
        git: 'https://github.com/Santho09/SCT_WD_3',
        technologies: ['HTML','CSS','JS']
    },
    {
        title: 'Task Manager',
        description: 'Task Manager helps users organize and track their tasks efficiently with features like Add,edit and delete task effortlessly',
        image: Task,
        git: 'https://github.com/Santho09/SCT_WD_4',
        technologies: ['HTML', 'CSS','JS']
    }
];

export default Projects;
