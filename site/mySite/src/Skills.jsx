import TechnicalSkills from "./TechnicalSkills.jsx";
import KeySkills from "./KeySkills.jsx";
import DevelopmentSkills from "./DevelopmentSkills.jsx";

export default function Skills() {
    return (
        <div className="flex justify-center" id="skills">
            <div className=" max-w-7xl w-full rounded-none ">
            {/*<div className=" max-w-7xl w-full h-screen rounded-none bg-blue-300">*/}
                <h1 className="text-4xl text-center text-sectionHeadings font-bold my-8">Skills</h1>
                <div className="flex flex-col md:flex-row mx-4">
                    {/*<div className="basis-3/5 p-8 border-black border-2">*/}
                    <div className="basis-3/5 p-8">
                        <h4 className="text-2xl text-center text-sectionSubHeadings mb-8">Technical Skills</h4>
                        <TechnicalSkills/>
                        <h4 className="text-2xl text-center text-sectionSubHeadings my-8">Development Skills</h4>
                        <div className="pr-20">
                            <DevelopmentSkills/>
                        </div>
                    </div>
                    {/*<div className="basis-2/5 p-8 border-black border-2">*/}
                    <div className="basis-2/5 p-8">
                        <h4 className="text-2xl text-center text-sectionSubHeadings mb-8">Key Skills</h4>
                        <KeySkills/>
                    </div>
                </div>

            </div>
        </div>
    );
}