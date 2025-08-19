import React from "react";

import Link from "next/link";

export default function Contact(props: { content: any }) {
  const email = props.content?.email ?? "";
  const github = props.content?.github ?? "";
  const linkedin = props.content?.linkedin ?? "";

  return (
    <div className="md:inline block min-h-screen w-9/12 min-w-80 mx-auto py-32">
        <h3 className="text-6xl text-fg-dim w-fit mb-32">
            <span className="text-accent-green">C</span>ontact
        </h3>

        <div className="flex lg:flex-row flex-col lg:justify-around lg:items-center w-full lg:pt-[10%] min-w-80 mx-auto">
            <div className="flex flex-col mb-8">
                <h2 className="text-2xl font-bold mb-1 text-fg">
                    Email
                </h2>
                <Link href={`mailto:${email}`} className="underline text-accent-sky">
                    {email}
                </Link>
            </div>
            <div className="flex flex-col mb-8">
                <h2 className="text-2xl font-bold mb-1 text-fg">
                    Github
                </h2>
                <Link href={github} className="underline text-accent-sky">
                    {github.split("/").pop()}
                </Link>
            </div>
            <div className="flex flex-col mb-8">
                <h2 className="text-2xl font-bold mb-1 text-fg">
                    LinkedIn
                </h2>
                <Link href={linkedin} className="underline text-accent-sky">
                    {linkedin.split("/").pop()}
                </Link>
            </div>
        </div>
    </div>
  );
}

