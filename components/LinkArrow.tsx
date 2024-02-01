import Link from 'next/link'
import { FC } from 'react'

type LinkArrowProps = {
    href: string
    text: string
}

export const LinkArrow: FC<LinkArrowProps> = ({ href, text }) => {
    return (
        <Link
            href={href}
            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            aria-label={`Go to portfolio`}
        >
            {text} &rarr;
        </Link>
    )
}
