import React from 'react';
import Stain from '../../Assets/Pictures/Mancha.svg';

export default function Title({ title }) {
    return (
        <div>
            <h1 className=" text-2xl md:text-4xl font-bold text-black relative z-10">{title}</h1>
            <img src={Stain} alt="Stain" className="mt-[-15px] relative z-0 md:w-250 w-40" />
        </div>
    );
}