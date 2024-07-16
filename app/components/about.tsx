import React from 'react';
import style from '../styles.module.css';

export default function About() {
    return (
        <div className={style.window}>
            <div className="bg-bg w-full p-5 border-2 border-fg">
                <h1 className="text-6xl text-fg">
                    About
                </h1>
                <p className="text-3xl text-fg-dim">
                    This is the about page.
                </p>
            </div>
        </div>
    );
}
