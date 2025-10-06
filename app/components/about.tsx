import React from 'react';
import ExportedImage from 'next-image-export-optimizer';
import Tilt from './Tilt';

export default function About( { content }: { content: any } ) {

    return (
        <div id="about" className="w-9/12 min-w-80 mx-auto py-52 flex flex-col justify-center relative">
            <h3 className="text-6xl text-fg-dim mb-8"> {content.sections.about} </h3>
            <div>
                <Tilt className="w-44 md:mx-5 md:mb-0 mb-5 mx-auto p-3 bg-accent-rosewater flex flex-col items-center md:float-left">
                    <ExportedImage className="ps-2 pt-2 bg-fg-dim select-none" src="/profile.svg" alt="Profile" width={150} height={150} />
                    <p className={`font-handdrawn text-black mt-4 rotate-3 text-3xl text-center`}>
                        {content?.name}
                    </p>
                </Tilt>
                <div className="md:inline block">
                    {content?.abouts.map((about: string, num: number) => <p key={num} className="text-xl mb-2 text-fg"> {about} </p>)}
                </div>
            </div>
        </div>
    );
}
