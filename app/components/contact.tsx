import React from "react";

import Link from "next/link";
import Title from "./Title";

export default function Contact({content}: { content: any }) {

  return (
    <div className="md:inline block min-h-screen w-9/12 min-w-80 mx-auto py-32">
        <Title color="text-accent-green" name={content.sections.contact} />

        <div className="flex lg:flex-row flex-col lg:justify-around lg:items-center w-full lg:pt-[10%] min-w-80 mx-auto">
            <div className="flex flex-col mb-8">
                <h2 className="text-2xl font-bold mb-1 text-fg">
                    Email
                </h2>
                <Link href={`mailto:${content.email}`} className="underline text-accent-sky">
                    {content.email}
                </Link>
            </div>
            <div className="flex flex-col mb-8">
                <h2 className="text-2xl font-bold mb-1 text-fg">
                    Github
                </h2>
                <Link href={content.github} className="underline text-accent-sky">
                    {content.github.split("/").pop()}
                </Link>
            </div>
            <div className="flex flex-col mb-8">
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

