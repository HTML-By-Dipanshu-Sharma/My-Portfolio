import React from "react";
import "./About.css";

const skills = [
    { label: "Frontend", technologies: "React.js, HTML, CSS, JavaScript" },
    { label: "Backend", technologies: "Node.js, Express.js" },
    { label: "Database", technologies: "MongoDB" },
    { label: "Tools & Platforms", technologies: "VS Code" },
];

const About = () => {
    return (
        <div className="aboutMainBox">
            <div className="aboutBox">
                <h1>About Us</h1>
                <div className="aboutTextBox">
                    <p>
                        Hi, I’m Dipanshu Sharma, a passionate Frontend Developer and MERN Stack
                        Developer from Noida, Uttar Pradesh, India. With a strong foundation
                        in web development and a keen eye for design, I specialize in
                        creating responsive, user-friendly, and dynamic web applications.
                    </p>
                    <p>
                        I am currently a fresher in the industry but have honed my skills
                        through hands-on projects and comprehensive training at DUCAT
                        Institute. My technical expertise includes:
                    </p>
                    <div className="skillsBox">
                        {skills.map((skill, index) => (
                            <p key={index}>
                                <span>{skill.label}:</span> {skill.technologies}
                            </p>
                        ))}
                    </div>
                    <p>
                        Apart from coding, I love exploring the latest technology trends and
                        traveling to discover new places. My goal is to deliver impactful
                        digital solutions that enhance user experiences and bring innovative
                        ideas to life.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;
