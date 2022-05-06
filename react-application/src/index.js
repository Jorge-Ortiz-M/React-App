import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';

const first_name = "Jorge";
const last_name = "Ortiz";
const position = "Software engineer";
const company = "Icalia Labs"
const hobbies = ['Videogames', 'Soccer', 'Teaching']
const date = new Date();

const ruby_image = "https://cdn.iconscout.com/icon/free/png-256/ruby-47-1175102.png";
const rails_image = "https://image.pngaaa.com/154/4122154-middle.png";
const javascript_image = "https://ayudawp.com/wp-content/uploads/2017/01/javascript-logo-escudo.png";
const postgresql_image = "https://www.baculasystems.com/wp-content/uploads/2019/01/postgresql-logo.png";

const user_style = {
    color: "#036161",
    fontSize: "16px",
    fontWeight: "700",
    textAlign: "center"
}

const message_style ={
    color: "#000000",
    fontSize: "15px",
    fontWeight: "700",
    textAlign: "center"
}
const today_status = new Date();
const today_hour = today_status.getHours();
let message = "";

if(today_hour >= 4 && today_hour < 12){
    message = "morning";
    message_style.color = "00ff00"
} else if(today_hour >= 12 && today_hour <= 17){
    message = "afternoon";
    message_style.color = "#036161";
} else{
    message = "night";
    message_style.color = "gray"
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <section>
        <p style={message_style}>Good {message}.</p>
        <h1 className='hello-world'>Hello new world, My name is: {first_name} {last_name}.</h1>
        <p>I'm a {position} at {company}.</p>
        <h3>Skills</h3>
        <ul>
            <li>
                <img src={ruby_image} className='image-properties' alt="ruby-image" />
                Ruby.
            </li>
            <li>
                <img src={rails_image} className='image-properties' alt="rails-image" />
                Ruby on Rails.
            </li>
            <li>
                <img src={javascript_image} className='image-properties' alt="javascript-image" />
                Javascript.
            </li>
            <li>
                <img src={postgresql_image} className='image-properties' alt="postgresql-image" />
                PostgreSQL.
            </li>
        </ul>
        <h3>Hobbies</h3>
        <ul>
            <li>{hobbies[0]}</li>
            <li>{hobbies[1]}</li>
            <li>{hobbies[2]}</li>
        </ul>
        <p>Your lucky today's number is: <b>{Math.floor(Math.random() * 10)}</b></p>
        <footer>
            <p style={user_style}>
                Copyrigth - {date.getFullYear()} | Created by {first_name + " " + last_name}.
            </p>
        </footer>
    </section>
);
