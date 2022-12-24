import React from "react";
import LinkedIn from "../assets/linkedIn.png"
function Main()
{
    
    return (
        <main>
            <h1 >Idil Ugurnal</h1>
            <h3 className="main--title">Software Engineer</h3>
            <div className="main--button_container">
            <form action="mailto:idilugurnal@me.com" method="get" target="_blank">
                <button className="main--button" type="submit">
                    Email
                </button>
            </form>
            <form action="https://www.linkedin.com/in/idilugurnal/" method="get" target="_blank">
            <button className="main--button_linkedIn"  type="submit">
                    LinkedIn
                </button>
            </form>
            </div>
            <h3>About</h3>
            <p>I am currently working as full-stack web developer with front-end focus. In 2020, I have graduated from
                Istanbul Technical Unviersity with BSc. degree in Computer Engineering. In my senior year, I was working
                at Accenture Istanbul as a Software Developer and have continued to work there after my studies as well. 
                At Accenture, I developed web application features using Typescript and React for almost a year.
            </p>
            <p>
                Then, I moved to Berlin to commence my master's degree at Humboldt University of Berlin. My studies were
                in Management and Economics with the focus of Quantitative Management Science.
                During my studies, I had the chance to work at Hypatos GmbH. At Hypatos we are providing solutions for 
                document hyperautomation with Machine Learning. Initially, I was working as a part time 
                Data Analyst. During this time, my responsibilites included building ETL 
                pipelines for visualizing and analyzing marketing campaign performance of the company. With this information,
                other departments gained insights on customer success metrics and made critical decisions. I have assumed this
                role for 6 months.
            </p>
            <p>
                After 6 months of working as a data analyst, I switched to the software engineering department
                working as a Software Engineer. Initially, I have made contributions to many services mainly using Java Spring.
                I am currently working at Hypatos Studio as a Full-Stack developer with front-end focus and I am building responsive components and features hand in hand
                with the design team and clients. During this time, I have been developing key features for the product such as
                multi-company users, authentication reset mechanism, data normalization, undo-redo mechanism,
                and so on using React, Typescript and Python.
            </p>
            <h3>Skills</h3>
            <p>Typescript, Javascript, React.js, Python, Java</p>
            <h3>Languages</h3>
            <ul className="main--languages">
                <li>English - Fluent</li>
                <li>Turkish - Native</li>
                <li>German - Intermediate (B1)</li>
            </ul>
        </main>
    )
}

export default Main