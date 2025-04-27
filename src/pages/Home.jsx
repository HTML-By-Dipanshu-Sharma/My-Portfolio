import React from "react";
import "./Home.css";
import pic from "../assets/1.jpg";
import resume from '../assets/2.pdf'


const Home = () => {
    const object = {
        name: "Hi I'm Dipanshu Sharma",
        hadding: "Frontend Developer based in India.",
        paragraph:
            "I'm a Frontend developer from Noida, India, and a fresher frontend developer. Currently, I’m undergoing comprehensive training in MERN Stack Development at Ducat India Institute, where I’m learning to build robust, dynamic, and scalable web applications.",
    };

    return (
        <section className="home">
            <div className="home-info">
                <h1>{object.name}</h1>
                <h2>{object.hadding}</h2>
                <p>{object.paragraph}</p>

                <div className="btn-sci">
                    <a href={resume} className="bttn" download>
                        Download CV
                    </a>
                
                </div>
            </div>

            <div className="home-img">
                <div className="img-box">
                    <div className="img-item">
                        <img src={pic} alt="Profile" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;
