import TechnicalSkills from "./TechnicalSkills.jsx";

export default function Skills() {
    return (
        <div className="flex justify-center" id="skills">
            <div className=" max-w-7xl w-full h-screen rounded-none bg-blue-300">
                <h1 className="text-4xl text-center my-8">Skills</h1>
                <div className="flex flex-row mx-4">
                    <div className="basis-3/5 border-black border-2">
                        <h4 className="text-2xl text-center my-2">Technical Skills</h4>
                        <TechnicalSkills/>
                    </div>
                    <div className="basis-2/5 border-black border-2">
                        <h4 className="text-2xl text-center my-2">Key Skills</h4>
                    </div>
                </div>

            </div>
        </div>
    );
}