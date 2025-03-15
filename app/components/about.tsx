'use client';
import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { Delicious_Handrawn } from 'next/font/google';
import VanillaTilt from 'vanilla-tilt';

import data from "@/app/content.json";

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

export default function About() {
    const options = {
        reverse: true,
        max: 7,
        reset: false,
        glare: true,
        'max-glare': 0.2,
    };

    return (
        <div id="about" className="w-9/12 min-w-80 mx-auto min-h-screen flex flex-col justify-center relative">
            <h3 className="text-5xl text-fg-dim mb-8">
                <span className="text-accent-red">A</span>bout me
            </h3>
            <div>
                <Tilt className="w-44 md:mx-5 md:mb-0 mb-5 mx-auto p-3 bg-accent-rosewater flex flex-col items-center md:float-left" options={options}>
                    <Image className="ps-2 pt-2 bg-fg-dim" src="/profile.svg" alt="Profile" width={150} height={150} />
                    <p className={`${delicious.className} text-black mt-4 rotate-3 text-3xl text-center`}>
                        Antoine Lemarchand
                    </p>
                </Tilt>
                <div className="md:inline block">
                    {data.abouts.map((about: string, num: number) => (
                        <p key={num} className="text-xl mb-2">
                            {about}
                        </p>
                    ))}
                </div>
            </div>
        </div>
    );
}
