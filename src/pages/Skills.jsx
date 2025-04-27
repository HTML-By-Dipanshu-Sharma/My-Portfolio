import React from "react";
import "./Skills.css";

const Skills = () => {
    const skills = {
        Frontend: ["React.js", "HTML", "CSS", "JavaScript", "Bootstrap"],
        Backend: ["Node.js", "Express.js"],
        Database: ["MongoDB"],
        Tool: ["VS Code"],
    };

    return (
        <div className="mainBokSkills">
            <div className="skills-container">
                <h2 className="skills-heading">My Skills</h2>
                <div className="skills-grid">
                    {Object.entries(skills).map(([category, skillList]) => (
                        <div key={category} className="skill-category">
                            <h3 className="skill-title">{category}</h3>
                            <ul className="skill-list">
                                {skillList.map((skill, index) => (
                                    <li key={index} className="skill-item">
                                        {skill}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Skills;

