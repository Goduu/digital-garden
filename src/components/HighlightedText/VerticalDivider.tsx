import React, { FC } from 'react'
import { borderColors } from './colors';

type VerticalDividerProps = {
    direction: 'l-to-r' | 'r-to-l';
    color?: string;
}

export const VerticalDivider: FC<VerticalDividerProps> = ({ direction, color = "primary" }) => {
    const dirToRight = direction === 'l-to-r';

    return (
        <div className=' mx-5 relative'>
            <div className={`pb-5 h-5 ${borderColors[color]} ${dirToRight ? "border-l-8" : "border-r-8"} `} />
            <div className={`${dirToRight && "inset-y-0"} m-l-[-0.5px] m-b-[-0.5px] left-0 ${borderColors[color]} border-b-8 w-full`} />
            <div className={`pb-5 mb-[-0.5px] relative h-20 ${dirToRight ? "border-r-8" : "border-l-8"} ${borderColors[color]}`} />
        </div>
    )
}
