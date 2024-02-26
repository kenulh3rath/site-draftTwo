'use client';

import { Button, Card } from 'flowbite-react';

export default function Projects() {
    return(
        <div className="flex justify-center" id="projects">
            {/*<div className=" max-w-7xl w-full h-screen rounded-none bg-blue-300">*/}
            <div className=" max-w-7xl w-full rounded-none">
                <h1 className="text-4xl text-center text-sectionHeadings font-bold my-8">Projects</h1>

                <div className="flex justify-center mt-12">
                    <div className="grid lg:grid-cols-2 lg:grid-rows-2 gap-8">
                        <Card className="max-w-sm h-full w-full bg-projectsCard border-0">
                            <div className="flex flex-col h-full w-full space-y-4">
                                <div className="flex-none">
                                    <h5 className="text-2xl text-center font-bold text-sectionSubHeadings">
                                        Flight Simulator
                                    </h5>
                                </div>
                                <div className="flex-1 flex flex-col justify-center">
                                    <p className="font-normal text-textFont">
                                        Here are the biggest enterprise technology acquisitions of 2021 so far, in
                                        reverse chronological order.
                                    </p>
                                </div>
                                <div className="flex-none text-center">
                                    <a href="" className="text-textFont">Read More...</a>
                                </div>
                            </div>
                        </Card>

                        <Card className="max-w-sm h-full w-full bg-projectsCard border-0">
                            <div className="flex flex-col h-full w-full space-y-4">
                                <div className="flex-none">
                                    <h5 className="text-2xl text-center font-bold text-sectionSubHeadings">
                                        Car Crash Avoidance System
                                    </h5>
                                </div>
                                <div className="flex-1 flex flex-col justify-center">
                                    <p className="font-normal text-textFont">
                                        Here are the biggest enterprise technology acquisitions of 2021 so far, in
                                        reverse chronological order.
                                    </p>
                                </div>
                                <div className="flex-none text-center">
                                    <a href="" className="text-textFont">Read More...</a>
                                </div>
                            </div>
                        </Card>

                        <Card className="max-w-sm h-full w-full bg-projectsCard border-0">
                            <div className="flex flex-col h-full w-full space-y-4">
                                <div className="flex-none">
                                    <h5 className="text-2xl text-center font-bold text-sectionSubHeadings">
                                        Inventory Management System
                                    </h5>
                                </div>
                                <div className="flex-1 flex flex-col justify-center">
                                    <p className="font-normal text-textFont">
                                        Here are the biggest enterprise technology acquisitions of 2021 so far, in
                                        reverse chronological order.
                                    </p>
                                </div>
                                <div className="flex-none text-center">
                                    <a href="" className="text-textFont">Read More...</a>
                                </div>
                            </div>
                        </Card>

                        <Card className="max-w-sm h-full w-full bg-projectsCard border-0">
                            <div className="flex flex-col h-full w-full space-y-4">
                                <div className="flex-none">
                                    <h5 className="text-2xl text-center font-bold text-sectionSubHeadings">
                                        Vending Machine Simulator
                                    </h5>
                                </div>
                                <div className="flex-1 flex flex-col justify-center">
                                    <p className="font-normal text-textFont">
                                        Here are the biggest enterprise technology acquisitions of 2021 so far, in
                                        reverse chronological order.
                                    </p>
                                </div>
                                <div className="flex-none text-center">
                                    <a href="" className="text-textFont">Read More...</a>
                                </div>
                            </div>
                        </Card>

                    </div>
                </div>

                <p className="text-center text-textFont mt-8">
                    Checkout my <a href="" className="text-sectionSubHeadings">Github</a> for more projects.
                </p>


            </div>
        </div>
    );
}