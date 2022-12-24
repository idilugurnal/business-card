import React from "react";
import LinkedIn from "../assets/linkedIn.png"
import Instagram from "../assets/instagram.png"
import Github from "../assets/github.png"
import "../../style.css"
function Footer()
{
    
    return (
        <footer className="footer--container">
            <div className="footer--container_icons">
                <a href="https://www.linkedin.com/in/idilugurnal/" target="_blank">
                    <img src={LinkedIn} />
                </a>
                <a>
                    <img src={Instagram} />
                </a>
                <a href="https://github.com/idilugurnal" target="_blank">
                    <img src={Github} />
                </a>
            </div>
        </footer>  
    )
}

export default Footer