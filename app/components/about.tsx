'use client';
import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { Delicious_Handrawn } from 'next/font/google';
import VanillaTilt from 'vanilla-tilt';

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
        <div id="about" className="w-9/12 min-w-80 mx-auto min-h-screen flex justify-center items-center relative">
            <div>
                <Tilt className="w-44 md:m-5 mx-auto p-3 bg-accent-rosewater flex flex-col items-center md:float-left" options={options}>
                    <Image className="ps-2 pt-2 bg-fg-dim" src="/profile.svg" alt="Profile" width={150} height={150} />
                    <p className={`${delicious.className} text-black mt-4 rotate-3 text-3xl text-center`}>
                        Antoine Lemarchand
                    </p>
                </Tilt>
                <div className="md:inline block">
                    <h3 className="text-4xl text-fg-dim">
                        <span className="text-accent-red">A</span>bout me
                    </h3>
                    <p className='text-xl mb-2'>
                        I am a software engineer based in France. I appreciate clean, maintainable and efficient code.
                        I have a strong interest in both front-end and back-end development.
                        I mainly use JavaScript and TypeScript framework, but I am sometimes working with other technologies (Golang, PHP...).
                    </p>
                    <p className='text-xl'>
                        I like to work on personal projects, such as this website, to learn new technologies and improve my skills.
                        I am also interested in music production and pixel art (or at least trying as you can see !).
                    </p>
                </div>
            </div>
        </div>
    );
}
