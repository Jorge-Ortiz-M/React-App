import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const first_name = "Jorge";
const last_name = "Ortiz";
const position = "Software engineer";
const company = "Icalia Labs"
const hobbies = ['Videogames', 'Soccer', 'Teaching']
const date = new Date();

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <section>
        <h1>Hello new world, My name is: {first_name} {last_name}.</h1>
        <p>I'm a {position} at {company}.</p>
        <h3>Skills</h3>
        <ul>
            <li>Ruby on Rails</li>
            <li>Ruby</li>
            <li>Javascript</li>
            <li>PostgreSQL.</li>
        </ul>
        <h3>Hobbies</h3>
        <ul>
            <li>{hobbies[0]}</li>
            <li>{hobbies[1]}</li>
            <li>{hobbies[2]}</li>
        </ul>
        <p>Your lucky today's number is: <b>{Math.floor(Math.random() * 10)}</b></p>
        <footer>
            <p>
                Copyrigth - {date.getFullYear()} | Created by {first_name + " " + last_name}.
            </p>
        </footer>
    </section>
);
