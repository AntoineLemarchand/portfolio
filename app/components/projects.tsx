'use client';
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

import data from "@/app/content.json";

const ProjectSection = ({content}: {content: React.ReactNode}) => {
    const ref = useRef<HTMLDivElement | null>(null);
    const { scrollYProgress } = useScroll({target: ref, offset: ["start end", "end start"]});
    const opacity = useTransform(scrollYProgress, [0, 0.4, 0.6, 1], [0, 1, 1, 0]);
    const rotateX = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [-90, 0, 0, 90]);

    return (
        <section ref={ref}>
            <motion.div style={{opacity, rotateX}}>
                {content}
            </motion.div>
        </section>
    );
};

export default function Projects() {

    const colors = [
        "accent-green",
        "accent-peach",
        "accent-red",
        "accent-rosewater"
    ];

    return (
        <div className="w-9/12 min-w-80 relative mx-auto">
            <h3 className="text-6xl text-fg-dim w-fit bg-white mb-32">
                <span className="text-accent-sky">P</span>rojects
            </h3>

            {data.projects.map((project: {
                name: string, description: string, url: string, image: string
                }, num: number) => (
                <ProjectSection key={num} content={
                    <div className={"flex flex-col sm:flex-row items-stretch justify-around project-item mb-52 max-w-6xl mx-auto"} >
                        <Image src={project.image} alt={`${project.name}-${num}`} width={400} height={400}
                            className={`border-4 border-${colors[num % colors.length]} rounded-sm`} />
                        <div className="flex flex-col justify-between ps-2 py-8 bg-bg border-4 border-t-0 sm:border-t-4 sm:border-s-0 border-bg-dim w-full rounded-e-sm">
                            <div>
                                <h2 className={`text-2xl font-bold mb-4 underline decoration-${colors[num % colors.length]}`}>{project.name}</h2>
                                <p>
                                    {project.description}
                                </p>
                            </div>
                            <div className="flex justify-around w-1/2 mx-auto">
                                <a href={project.url} className="text-accent-sky text-center">
                                    <span className="text-sm mx-1 underline">
                                        Source
                                    </span>
                                </a>
                                <a href={project.url} className="text-accent-sky text-center">
                                    <span className="text-sm mx-1 underline">
                                        Demo
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                } />
            ))}
        </div>
    );
}

