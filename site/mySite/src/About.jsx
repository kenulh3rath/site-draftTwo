import Certs from './Carousel.jsx';
import Experience from "./Experience.jsx";

export default function About() {
    return (
        <div className="flex justify-center" id="about">
            <div className=" max-w-7xl w-full h-screen rounded-none bg-blue-300">
                <h1 className="text-4xl text-center my-8">About Me</h1>
                <div className="flex md:flex-row mx-4">
                    <div className="md:basis-2/3">
                        <div>
                            <p className="p-8 text-justify leading-8 tracking-wide">
                                I am a passionate and dedicated second-year Computer Science undergraduate,
                                driven by a passion for technology and a curiosity to explore its limitless
                                possibilities.
                                Proficient in languages like Python, Java, and C++, I thrive on solving complex problems
                                and
                                transforming theoretical concepts into practical solutions. My journey includes hands-on
                                projects, academic excellence, and active participation in coding competitions. Eager
                                to delve deeper into specialized areas, I bring a blend of technical expertise,
                                collaborative spirit, and a commitment to continuous learning.
                            </p>
                        </div>

                        <div className="mx-8 mb-4">
                            <Certs/>
                        </div>
                    </div>

                    <div className="md:basis-1/3">
                        <div>
                            <h4 className="text-2xl text-center my-2">Experience</h4>
                            <Experience/>
                        </div>
                        <div className="space-y-8">
                            <div>
                                <h4 className="text-2xl text-center my-2">Languages</h4>
                                <ul className="text-center my-2">
                                    <li>English (Fluent)</li>
                                    <li>Sinhala (Fluent)</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="text-2xl text-center my-2">Hobbies</h4>
                                <ul className="text-center my-2">
                                    <li>Walking</li>
                                    <li>Coding</li>
                                    <li>Tennis</li>
                                    <li>Badminton</li>
                                </ul>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
}