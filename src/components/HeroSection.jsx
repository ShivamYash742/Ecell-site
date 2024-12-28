import React from 'react';
import clip from '../public/IMG_1188.mp4'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react';

const HeroSection = () => {
    const [fontSize, setFontSize] = useState(5); 
    const [isFixed, setIsFixed] = useState(true);

    const handleScroll = () => {
        const scrollY = window.scrollY;
        const maxScroll = 300; 
        const enlargeFactor = Math.min(scrollY / 50, 6);
        const scrollTrigger = 400; 

        if (scrollY < scrollTrigger) {
            setIsFixed(true);
        } else {
            setIsFixed(false);
        }

        setFontSize(Math.min(5 + enlargeFactor, 10));
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    return (
        <section className={`${isFixed ? "fixed top-0 left-0 w-full" : "relative"
            } relative w-full h-screen bg-center`}>
            <div className="relative w-full h-screen bg-black flex items-center justify-center overflow-hidden ">
                {/* Background Video */}
                <video
                    className="absolute top-0 left-0 w-full h-full object-cover"
                    src={clip}
                    autoPlay
                    loop
                    muted
                ></video>
                {/* Overlay for Text */}
                <div className="relative z-10 sm:text-4xl text-2xl font-bold uppercase text-center text-transparent bg-clip-text">
                    <span
                        className="bg-clip-text text-transparent "
                        style={{
                            backgroundImage: { clip },
                            WebkitTextFillColor: "white",
                            WebkitBackgroundClip: "text",
                            fontSize: `${fontSize}rem`,
                            transition: "font-size 0.1s ease-in-out",
                        }}
                    >
                        Ecell MSIT
                    </span>
                </div>
            </div>
            <div className="absolute inset-0 flex justify-center items-center">
                <h1 className=" text-4xl sm:text-6xl font-bold ">
                    <div className=" " style={{

                    }}>
                        {/* Welcome to E-Cell MSIT */}
                    </div>
                </h1>
            </div>
        </section>
    );
};

export default HeroSection;
