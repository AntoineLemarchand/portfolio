'use client';
import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Image from "next/image";

export default function Projects() {
    const scrollRef = useRef<HTMLDivElement | null>(null);
    const horizontalRef = useRef<HTMLDivElement | null>(null);

    const { scrollYProgress } = useScroll({
        target: scrollRef,
        offset: ["start start", "end end"],
    });

    const xTransform = useTransform(scrollYProgress, [0, 1], ["0%", "-90%"]);
    const slowedXTransform = useTransform(xTransform, (value) => `${parseFloat(value) * 0.5}%`); // Scale down the movement speed

    return (
        <div ref={scrollRef} className="relative w-full h-[500vh]">
            <h3 className="text-4xl text-fg-dim w-fit mb-4 sticky top-0 bg-white p-4 z-10">
                <span className="text-accent-sky">P</span>rojects
            </h3>

            <div className="sticky top-0 h-screen flex items-center overflow-hidden">
                <motion.div
                    ref={horizontalRef}
                    style={{ x: xTransform }}
                    className="flex space-x-8"
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                >
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                        <div key={num} className="flex flex-col items-center justify-center w-screen h-screen flex-shrink-0 snap-center">
                            <Image src="/profile.png" alt={`profile-${num}`} width={400} height={400} />
                            <h2 className="text-2xl font-bold">#{String(num).padStart(3, "0")}</h2>
                            <p className="text-center max-w-md">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit...
                            </p>
                        </div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
}

