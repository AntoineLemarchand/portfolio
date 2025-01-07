'use client';
import Magnet from "../ui/Magnet/Magnet";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGitAlt, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faChevronDown, faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
    const buttonStyle = "text-6xl text-fg border-4 border-fg p-2 ms-4 size-fit hover:bg-fg hover:text-bg transition-all duration-300 ease-in-out cursor-pointer";
    function scrollToElement(id: string) {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }
    return (
        <div className="min-h-screen flex lg:flex-row flex-col justify-center items-center relative w-11/12 mx-auto gap-2">
            <Magnet magnetStrength={-10}>
                <Image src="/sprites/isle.svg" alt="Me on a floating island" width={300} height={300} className="animate-float"/>
            </Magnet>
            <div className="h-fit lg:text-left text-center">
                <h1 className="text-6xl text-fg">Antoine Lemarchand</h1>
                <h2 className="text-4xl text-fg-dim">Full stack developer</h2>
                <div className="h-fit flex lg:justify-end justify-center py-4">
                    <a className={buttonStyle}><FontAwesomeIcon icon={faGitAlt}/></a>
                    <a className={buttonStyle}><FontAwesomeIcon icon={faLinkedin}/></a>
                    <a className={buttonStyle}><FontAwesomeIcon icon={faEnvelope}/></a>
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

