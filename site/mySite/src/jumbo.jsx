'use client';

import React from 'react';
import Dividers from "./Dividers.jsx";

class Jumbo extends React.Component {
    scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }

    render() {
        return (
            <>
                <div className="flex justify-center items-center h-screen px-8">
                    <div className="text-center max-w-7xl w-full text-headingOne">
                        <h1 className="md:text-5xl font-bold tracking-tight inline-block ">Hey There, I'm Kenul Herath</h1>
                        <h3 className="md:text-3xl tracking-tight inline-block text-headingTwo">(Kenzy)</h3>
                        <h1 className="md:text-5xl font-bold tracking-tight inline-block">!</h1>
                        <h1 className="md:text-5xl tracking-tight text-headingTwo">Welcome to my Portfolio</h1>

                        <div className="md:max-w-4xl max-w-2xl w-full mx-auto">
                            <Dividers/>
                        </div>


                        <p className="md:text-2xl max-w-4xl mx-auto text-headingOne">
                            Aspiring software developer with a passion for creating diverse applications.
                            Currently pursuing Computer Science at the University of South Wales.
                        </p>

                        <div className="text-center mt-32"
                            onClick={() => this.scrollToSection('about')}
                             style={{cursor: 'pointer'}}>

                            <svg className="bi bi-chevron-compact-down text-center mx-auto animate-bounce text-headerFont"
                                 xmlns="http://www.w3.org/2000/svg"
                                 width="16" height="16"
                                 fill="currentColor"
                                 viewBox="0 0 16 16">

                                <path fillRule="evenodd"
                                      d="M1.553 6.776a.5.5 0 0 1 .67-.223L8 9.44l5.776-2.888a.5.5 0 1 1 .448.894l-6
                                      3a.5.5 0 0 1-.448 0l-6-3a.5.5 0 0 1-.223-.67"/>

                            </svg>
                        </div>

                    </div>
                </div>
            </>
        );
    }

}

export default Jumbo;
