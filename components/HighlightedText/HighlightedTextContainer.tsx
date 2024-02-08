


import React, { FC, ReactNode } from 'react'


type HighlightedTextContainerProps = {
    children: ReactNode;
};

export const HighlightedTextContainer: FC<HighlightedTextContainerProps> = ({ children }) => {

    return (
        <div className='flex flex-col gap-0 py-4 drop-shadow-[0_0_0.9rem_#55555590] dark:drop-shadow-[0_0_0.9rem_#ffffff70]'>{children}</div>
    )
}
