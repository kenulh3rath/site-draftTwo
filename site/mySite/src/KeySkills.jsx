import { Divider } from 'antd';

export default function KeySkills(){
    return(
        <div className="flex flex-col space-y-4">
            <div>
                <p className="text-[#b6bfc9]">
                    <b className="text-[#f0f2f4]">Adaptability</b>
                     : Demonstrated ability to adapt quickly to changing environments and requirements, showcased in various professional situations.
                </p>
            </div>

            <Divider />

            <div>
                <p className="text-[#b6bfc9]">
                    <b className="text-[#f0f2f4]">Problem Solving</b>
                    : Proficient in identifying and resolving complex issues efficiently, contributing to improved processes and outcomes.
                </p>
            </div>

            <Divider />

            <div>
                <p className="text-[#b6bfc9]">
                    <b className="text-[#f0f2f4]">Leadership</b>
                    : Proven capacity to lead and motivate teams towards common goals, fostering collaboration and
                    achieving success.
                </p>
            </div>

            <Divider />

            <div>
                <p className="text-[#b6bfc9]">
                    <b className="text-[#f0f2f4]">Creativity</b>
                    : Innovative approach to tasks, evidenced by the development of unique solutions and creative outputs.
                </p>
            </div>

            <Divider />

            <div>
                <p className="text-[#b6bfc9]">
                    <b className="text-[#f0f2f4]">Analytical Thinking</b>
                    : Strong analytical skills, utilized to assess situations critically and make informed decisions,
                    enhancing problem-solving capabilities.
                </p>
            </div>
        </div>
    );
};