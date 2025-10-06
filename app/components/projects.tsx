'use client';
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import ExportedImage from "next-image-export-optimizer";
import Link from "next/link";
import Tilt from "./Tilt";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGitAlt } from "@fortawesome/free-brands-svg-icons";

const ProjectSection = ({children}: {children: React.ReactNode}) => {
    const ref = useRef<HTMLDivElement | null>(null);
    const { scrollYProgress } = useScroll({target: ref, offset: ["start end", "end start"]});
    const scale = useTransform(scrollYProgress, [0, 0.4, 0.6, 1], [0.95, 1, 1, 0.95]);

    return (
        <section ref={ref}>
            <motion.div style={{scale}}>
                {children}
            </motion.div>
        </section>
    );
};

export default function Projects({content}: {content: any}) {

    const textColors = [
        "text-accent-green",
        "text-accent-peach",
        "text-accent-red",
        "text-accent-rosewater"
    ];

    return (
        <div className="w-9/12 min-w-80 relative mx-auto">
            <h3 className="text-6xl text-fg-dim mb-8"> {content.sections.projects} </h3>
            <div className="flex flex-col gap-32">
            {content?.projects.map((project: {
                name: string, description: string, url?: string, src?: string, image: string
                }, num: number) => (
                <ProjectSection key={num}>
                    <div className={"flex flex-col sm:flex-row items-stretch justify-around project-item max-w-6xl mx-auto"} >
                    <Link href={project.url || project.src || ""} >
                      <Tilt className="md:w-44 h-56 md:mx-5 md:mb-0 mb-5 mx-auto p-3 bg-bg-dim flex flex-col items-center md:float-left">
                            <div className="h-full w-full relative">
                              <ExportedImage className="pt-2 select-none object-cover" src={project.image} alt={`${project.name} ${num}`} fill />
                            </div>
                            <p className={`font-handdrawn text-black mt-4 rotate-3 text-3xl text-center`}>
                              {project.name}
                            </p>
                      </Tilt>
                    </Link>
                    <div className="flex flex-col justify-between px-2 py-2 bg-bg-dim/70 w-full">
                      <div className="text-fg">
                        <h2 className={`text-2xl font-bold mb-4 underline ${textColors[num % textColors.length]}`}>{project.name}</h2>
                        <p>
                          {project.description}
                        </p>
                      </div>
                      <div className="flex justify-around ms-auto">
                      { project.src &&
                        <Link href={project.src} className="text-fg hover:text-accent-sky transition-all">
                            <FontAwesomeIcon icon={faGitAlt} size="xl"/>
                        </Link>
                      }
                      </div>
                    </div>
                  </div>
                </ProjectSection>
            ))}
            </div>
        </div>
    );
}

