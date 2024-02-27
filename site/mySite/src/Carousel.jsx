
'use client';

import { Carousel } from 'flowbite-react';

export default function Certs() {
    return (
        <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
            <Carousel slideInterval={3000}>
                <img src="/Cert_W3schools_CSharp.jpg" alt="C# Certification" className="w-3/4 h-auto" />
                <img src="/Cert_Arduino.jpg" alt="Arduino Certification" className="w-3/4 h-auto" />
            </Carousel>
        </div>
    );
}
