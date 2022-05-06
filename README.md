# REACT Course.

React is a javascript library used to design the user interface. It's one the most popular front-end tools. React builds components that are used to create all the parts of a random website.

## Getting started.

* In order to create a react app: `npx create-react-app my-app`.
* In order to run the web application: `npm start`.

## Practice 01. Adding simple text.

In your src/index.js, you can type single text.

```
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

ReactDOM.render(
    <section>
        <h1>Hello new world<h1>
    </section>
    , document.getElementById("root"));
```

## Practice 02. Embbeded Javascript.

Whether you want to add javascript within your src/index.js file:

```
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const first_name = "Jorge";
const last_name = "Ortiz";
const position = "Software engineer";
const company = "Icalia Labs"
const hobbies = ['Videogames', 'Soccer', 'Teaching']

ReactDOM.render(
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
    </section>
    , document.getElementById("root"));
```
