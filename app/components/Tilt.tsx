'use client'
import { useEffect, useRef } from 'react';
import VanillaTilt from 'vanilla-tilt';

type OptionsProps = {
  reverse: boolean,
  max: number,
  reset: boolean,
  glare: boolean,
  'max-glare': number,
}

type TiltProps = {
  options?: OptionsProps;
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;


const defaultOptions: OptionsProps = {
  reverse: true,
  max: 7,
  reset: false,
  glare: true,
  'max-glare': 0.2,
};


export default function Tilt( {options = defaultOptions, children, ...rest} : TiltProps) {
  const tilt = useRef(null);

  useEffect(() => {
    if (!tilt.current) {
      return;
    }
    VanillaTilt.init(tilt.current, options);
  }, [options]);

  return <div ref={tilt} {...rest}>{children}</div>;
}

