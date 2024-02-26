"use client"
import { HeaderNavLinks, headerNavLinkTranslations } from "src/data/headerNavLinks";
import { useTranslation } from "src/locale/useTranslation";
import Link from "next/link";
import { FC } from "react";

export type HeaderLinkProps = {
    link: HeaderNavLinks
}
export const HeaderLink: FC<HeaderLinkProps> = ({ link }) => {
    const T = useTranslation(headerNavLinkTranslations)

    return !!T ? (
        <Link
            key={link.title}
            href={link.href}
            className="hidden font-medium text-gray-900 dark:text-gray-100 sm:block"
        >
            {T[link.title]}
        </Link>
    ) : null



}