'use client';
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import ExportedImage from "next-image-export-optimizer";
import Link from "next/link";
import Title from "./Title";

const ProjectSection = ({content}: {content: React.ReactNode}) => {
    const ref = useRef<HTMLDivElement | null>(null);
    const { scrollYProgress } = useScroll({target: ref, offset: ["start end", "end start"]});
    const scale = useTransform(scrollYProgress, [0, 0.4, 0.6, 1], [0.95, 1, 1, 0.95]);

    return (
        <section ref={ref}>
            <motion.div style={{scale}}>
                {content}
            </motion.div>
        </section>
    );
};

export default function Projects({content}: {content: any}) {

    const borders = [
        "border-accent-green",
        "border-accent-peach",
        "border-accent-red",
        "border-accent-rosewater"
    ];

    const textColors = [
        "text-accent-green",
        "text-accent-peach",
        "text-accent-red",
        "text-accent-rosewater"
    ];

    return (
        <div className="w-9/12 min-w-80 relative mx-auto">
            <Title color="text-accent-sky" name={content.sections.projects} />

            <div className="flex flex-col gap-32">
            {content?.projects.map((project: {
                name: string, description: string, url?: string, src?: string, image: string
                }, num: number) => (
                <ProjectSection key={num} content={
                    <div className={"flex flex-col sm:flex-row items-stretch justify-around project-item max-w-6xl mx-auto"} >
                        <div className={`relative border-4 ${borders[num % borders.length]} rounded-sm md:w-72 md:h-56 w-full h-64`}>
                          <ExportedImage src={project.image} alt={`${project.name}-${num}`} fill={true} />
                        </div>
                        <div className="flex flex-col justify-between ps-2 py-8 bg-bg border-4 border-t-0 sm:border-t-4 sm:border-s-0 border-bg-dim w-full rounded-e-sm">
                            <div className="text-fg">
                                <h2 className={`text-2xl font-bold mb-4 underline ${textColors[num % textColors.length]}`}>{project.name}</h2>
                                <p>
                                    {project.description}
                                </p>
                            </div>
                            <div className="flex justify-around w-1/2 mx-auto">
                            { project.src &&
                                <Link href={project.src} className="text-accent-sky text-center">
                                    <span className="text-sm mx-1 underline">
                                        Source
                                    </span>
                                </Link>
                            }
                            { project.url &&
                                <Link href={project.url} className="text-accent-sky text-center">
                                    <span className="text-sm mx-1 underline">
                                        Demo
                                    </span>
                                </Link>
                            }
                            </div>
                        </div>
                    </div>
                } />
            ))}
            </div>
        </div>
    );
}

