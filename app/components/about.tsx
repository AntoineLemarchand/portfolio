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
        <div className="w-9/12 min-w-80 mx-auto">
            <Tilt className="m-5 p-6 bg-fg w-fit h-80 flex flex-col items-center float-left" options={options}>
                <Image className="pb-0 pe-0 bg-bg" src="/profile.svg" alt="Profile" width={200} height={200} />
                <p className={`${delicious.className} text-black mt-4 rotate-3 text-3xl`}>
                    Nice meeting you !
                </p>
            </Tilt>
            <div className="inline">
                <h3 className={`text-5xl text-fg`}>
                    About me
                </h3>
                <p className='text-xl'>
                    I am a software engineer based in France. I have a passion for concise, efficient, and maintainable code. I also like to play some bass and draw pixel art.
                </p>
            </div>
        </div>
    );
}
