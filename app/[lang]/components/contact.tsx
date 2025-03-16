import React from "react";

import Link from "next/link";

export default function Contact({ content }: { content: any }) {
  return (
    <div className="md:inline block min-h-screen w-9/12 min-w-80 mx-auto py-32">
        <h3 className="text-6xl text-fg-dim w-fit mb-32">
            <span className="text-accent-green">C</span>ontact
        </h3>

        <div className="flex flex-col justify-center items-center w-1/2 min-w-80 mx-auto">
            <div className="flex flex-col w-full mb-8">
                <h2 className="text-2xl font-bold mb-1 text-fg">
                    Email
                </h2>
                <Link href={`mailto:${content.email}`} className="underline text-accent-sky">
                    {content.email}
                </Link>
            </div>
            <div className="flex flex-col w-full mb-8">
                <h2 className="text-2xl font-bold mb-1 text-fg">
                    Github
                </h2>
                <Link href={content.github} className="underline text-accent-sky">
                    {content.github.split("/").pop()}
                </Link>
            </div>
            <div className="flex flex-col w-full mb-8">
                <h2 className="text-2xl font-bold mb-1 text-fg">
                    LinkedIn
                </h2>
                <Link href={content.linkedin} className="underline text-accent-sky">
                    {content.linkedin.split("/").pop()}
                </Link>
            </div>
        </div>
    </div>
  );
}

