export default function Header() {
    return (
        <div className="flex justify-center">
            <Navbar rounded className="bg-blue-800 ustify-center max-w-7xl w-full flex ">
                <Navbar.Collapse className="mx-auto bg-blue-400">
                    <Navbar.Link href="#">About</Navbar.Link>
                    <Navbar.Link href="#">Services</Navbar.Link>
                    <Navbar.Link href="#">Pricing</Navbar.Link>
                    <Navbar.Link href="#">Contact</Navbar.Link>
                </Navbar.Collapse>
            </Navbar>
        </div>

)
}

'use client';

import { Navbar } from 'flowbite-react';
