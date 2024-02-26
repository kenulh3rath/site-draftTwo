'use client';

import {Navbar } from 'flowbite-react';

export default function Header() {
    return (
        <div className="flex justify-center">
            <Navbar className="bg-blue-200 justify-center max-w-7xl w-full flex ">
                <Navbar.Toggle />
                <Navbar.Collapse className="mx-auto">
                    <Navbar.Link href="#about" className="mx-8">About</Navbar.Link>
                    <Navbar.Link href="#skills" className="mx-8">Skills</Navbar.Link>
                    <Navbar.Link href="#" className="mx-8">Projects</Navbar.Link>
                    <Navbar.Link href="#" className="mx-8">Contact</Navbar.Link>
                </Navbar.Collapse>
            </Navbar>
        </div>

    )
}


