'use client';
import Magnet from "../ui/Magnet/Magnet";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGitAlt, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faChevronDown, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export default function Header() {
    const buttonStyle = "text-5xl text-fg-dim  size-fit transition-all duration-300 ease-in-out cursor-pointer hover:scale-110";
    function scrollToElement(id: string) {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }
    return (
        <div className="min-h-screen w-auto flex lg:flex-row flex-col justify-center items-center relative px-8 mx-auto gap-2">
            <Magnet magnetStrength={-10}>
                <Image src="/sprites/isle.svg" alt="Me on a floating island" width={300} height={300} className="animate-float w-auto h-80" priority/>
            </Magnet>
            <div className="h-fit lg:text-left text-center">
                <h1 className="text-4xl sm:text-6xl text-fg ">Antoine Lemarchand</h1>
                <h2 className="text-3xl sm:text-5xl animate-text bg-gradient-to-r from-accent-red via-accent-peach to-accent-green bg-clip-text text-transparent">Full-stack web developer</h2>
                <div className="h-fit flex gap-8 justify-center sm:justify-end py-4">
                    <Link className={buttonStyle + ' hover:text-accent-red'} href="https://github.com/antoinelemarchand">
                        <FontAwesomeIcon icon={faGitAlt}/>
                    </Link>
                    <a className={buttonStyle + ' hover:text-accent-sky'}><FontAwesomeIcon icon={faLinkedin}/></a>
                    <a className={buttonStyle + ' hover:text-accent-green'}><FontAwesomeIcon icon={faEnvelope}/></a>
                </div>
                <div className="absolute hidden h-fit md:flex justify-center items-center bottom-8 left-1/2 right-1/2">
                    <Magnet magnetStrength={10}>
                    <a className="text-fg text-3xl cursor-pointer" onClick={() => scrollToElement('about')}>
                        <FontAwesomeIcon icon={faChevronDown}/>
                    </a>
                    </Magnet>
                </div>
            </div>
        </div>
    );
}

