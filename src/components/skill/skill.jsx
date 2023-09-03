import React from "react";
import "./skill.css";
import Frontend from "./Frontend";
import Backend from "./Backend";

const Skills = () => {
    return(
        <section class Name="skills selection" id="skills">
            <h2 className="selection_title"> Skills</h2>
            <span className="section_subtitle">My technical level </span>

            <div className="skill_container container grid">
                <Frontend />
                <Backend />

            </div>
        </section>
    )
}
export default Skills