import React, { FC, ReactNode } from 'react';
import { bgColors, borderColors } from './colors';

type HighlightedTextProps = {
    title: string;
    positioning: 'left' | 'right';
    children: ReactNode;
    color?: string;
};

const HighlightedText: FC<HighlightedTextProps> = ({ title, color = "primary", positioning, children }) => {
    const positionLeft = positioning === 'left'

    return (
        <div className={`relative flex flex-col px-1 ${positionLeft ? 'items-start' : 'items-end'}`}>
            <div className="relative flex items-center gap-2">
                {/* circle */}
                <div className={`h-10 w-10 rounded-full ${bgColors[color]} absolute ${!positionLeft && "right-0"}`}></div>
                <h2 className={`text-4xl bold shadow-none ${positionLeft ? "ml-12" : "mr-12 "}`}>
                    <span className={`z-10 absolute inset-y-0  border-r-8 rounded-sm ${borderColors[color]} ${positionLeft ? "left-0 ml-4" : "right-0 mr-4"}`}> </span>
                    {title}
                </h2>
            </div>
            <div className="mt-[-0.5px] pb-20 mb-[-0.5px] relative">
                {/* line */}
                <div className={`z-10 absolute inset-y-0  border-r-8 rounded-sm ${borderColors[color]} ${positionLeft ? "left-0 ml-4" : "right-0 mr-4"}`}> </div>
                <div className={`mt-4 drop-shadow-none ${positionLeft ? "ml-12" : "mr-12 text-right"}`}>
                    {children}
                </div>
            </div>

        </div>
    );
};

export default HighlightedText;