'use client';
import React, { useEffect, useRef } from 'react';
import { Delicious_Handrawn } from 'next/font/google';
import VanillaTilt from 'vanilla-tilt';
import ExportedImage from 'next-image-export-optimizer';
import Title from './Title';

const delicious = Delicious_Handrawn({
  subsets: ['latin'],
  weight: '400',
});

function Tilt(props: any) {
  const { options, ...rest } = props;
  const tilt = useRef(null);

  useEffect(() => {
    if (!tilt.current) {
      return;
    }
    VanillaTilt.init(tilt.current, options);
  }, [options]);

  return <div ref={tilt} {...rest} />;
}

export default function About( { content }: { content: any } ) {
    const options = {
        reverse: true,
        max: 7,
        reset: false,
        glare: true,
        'max-glare': 0.2,
    };


    return (
        <div id="about" className="w-9/12 min-w-80 mx-auto py-52 flex flex-col justify-center relative">
            <Title color="text-accent-red" name={content.sections.about} />
            <div>
                <Tilt className="w-44 md:mx-5 md:mb-0 mb-5 mx-auto p-3 bg-accent-rosewater flex flex-col items-center md:float-left" options={options}>
                    <ExportedImage className="ps-2 pt-2 bg-fg-dim" src="/profile.svg" alt="Profile" width={150} height={150} />
                    <p className={`${delicious.className} text-black mt-4 rotate-3 text-3xl text-center`}>
                        {content?.name}
                    </p>
                </Tilt>
                <div className="md:inline block">
                    {content?.abouts.map((about: string, num: number) => (
                        <p key={num} className="text-xl mb-2 text-fg">
                            {about}
                        </p>
                    ))}
                </div>
            </div>
        </div>
    );
}
