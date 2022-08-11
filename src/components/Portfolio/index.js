import React from 'react';
import Project from "../Project";

const projects = [
    {
        id: 0,
        title: "Search Party",
        languages: "JavaScript, HTML, CSS",
        packages: "none required",
        image: "/images/search-party-snap-shot.png",
        description: "An application that lets users search events near them by zipcode. IF they do not wish to go out there is a night in button that suggests a recepie to try at home.",
        repo: "https://github.com/tmenture/Front-End-Project",
        live: "https://tmenture.github.io/Front-End-Project/"
    },
    {
        id: 1,
        title: "Better Reads",
        languages: "JavaScript, HTML, CSS",
        packages: "axios, bcrypt, bootstrap, connect-session-sequelize, dotenv, express, express-handlebars, express-session, handlebars, mysql, mysql2, sequelize",
        image: "/images/better-reads-snap-shot.png",
        description: "A blog for readers to search books, and share opinions on books they have already read.",
        repo: "https://github.com/tmenture/Better-Reads",
        live: "https://bestest-reads.herokuapp.com/"
    },
    {
        id: 2,
        title: "Deep Thoughts",
        languages: "JavaScript, HTML, CSS",
        packages: "apollo/client, graphql, jwt-decode, react, react-dom, react-router-dom, react-scripts, web-vitals, nodemon, apollo-server-express, bcrypt, express, faker, jsonwebtoken, mongoose, concurrently ",
        image: "/images/deep-thought-snap-shot.png",
        description: "This is a social media style application where users can make friends share thoughts, and react to the thoughts of others.",
        repo: "https://github.com/tmenture/deep-thought",
        live: "https://deep-thoughts-classwork.herokuapp.com/"
    },
    {
        id: 4,
        title: "Budget Tracker",
        languages: "JavaScript, HTML, CSS",
        packages: "Express, Compression, Mongoose, Morgan",
        image: "/images/budget-tracker-snap-shot.png",
        description: "A progressive web application (PWA) that helps users budget their money.",
        repo: "https://github.com/tmenture/Budget-Tracker",
        live: "https://toms-budget-tracker.herokuapp.com/"
    },
    {
        id: 5,
        title: "Better Reads 2",
        languages: "JavaScript, JSX, CSS, HTML",
        packages: "Concurrently, apollo-server-express, bcrypt, express, jsonwebtoken, moment, mongoose, nodemon, @apollo/react-hooks, @stripe/react-stripe-js, @stripe/stripe-js, @testing-library/jest-dom, @testing-library/react, @testing-library/user-event, apollo-boost, axios, bootstrap, graphql, graphql-tag, jwt-decode, react, react-bootstrap, react-dom, react-router-dom, react-scripts, react-stripe-checkout, react-toastify, stripe",
        image: "/images/better-reads-2-snap-shot.png",
        description: "A virtual book shelf for the busy reader so that they never forget that book they wanted to read.",
        repo: "https://github.com/tmenture/Better-Reads-2.0",
        live: "https://better-reads-2.herokuapp.com/"
    }
];

function Portfolio() {
    return (
        <div>
            <p className='content is-medium'>Portfolio</p>
            <br />

            <Project projects={projects} />
        </div>
    );
}

export default Portfolio;