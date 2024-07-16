'use client';
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGitAlt, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
    const buttonStyle = "text-6xl text-fg border-4 border-fg p-2 ms-4 size-fit hover:bg-fg hover:text-bg transition-all duration-300 ease-in-out cursor-pointer";
    return (
        <div className="min-h-lvh flex justify-center items-center">
            <Image src="/sprites/isle.svg" alt="Me on a floating island" width={300} height={300} className="animate-float"/>
            <div className="h-fit">
                <h1 className="text-6xl text-fg">Antoine Lemarchand</h1>
                <h2 className="text-4xl text-fg-dim">Full stack developer</h2>
                <div className="h-fit flex justify-end py-4">
                    <a className={buttonStyle}><FontAwesomeIcon icon={faGitAlt}/></a>
                    <a className={buttonStyle}><FontAwesomeIcon icon={faLinkedin}/></a>
                    <a className={buttonStyle}><FontAwesomeIcon icon={faEnvelope}/></a>
                </div>
            </div>
        </div>
    );
}

