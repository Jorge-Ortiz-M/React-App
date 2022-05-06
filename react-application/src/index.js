import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const first_name = "Jorge";
const last_name = "Ortiz";
const position = "Software engineer";
const company = "Icalia Labs"
const hobbies = ['Videogames', 'Soccer', 'Teaching']

ReactDOM.render(
    <div>
        <h1>Hello new world, My name is: {first_name} {last_name}.</h1>
        <p>I'm a {position} at {company}.</p>
        <h2>Skills</h2>
        <ul>
            <li>Ruby on Rails</li>
            <li>Ruby</li>
            <li>Javascript</li>
            <li>PostgreSQL.</li>
        </ul>
        <h2>Hobbies</h2>
        <ul>
            <li>{hobbies[0]}</li>
            <li>{hobbies[1]}</li>
            <li>{hobbies[2]}</li>
        </ul>
    </div>
    , document.getElementById("root"));