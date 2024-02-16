import { LocalizedText } from "@/locale/LocalizedText";
import { useTranslation } from "@/locale/state";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FC } from "react";

export type PaginationProps = {
    totalPages: number
    currentPage: number
}

export const Pagination: FC<PaginationProps> = ({ totalPages, currentPage }) => {
    const T = useTranslation({ en, de, fr, pt })
    const pathname = usePathname()
    const basePath = pathname.split('/')[1]
    const prevPage = currentPage - 1 > 0
    const nextPage = currentPage + 1 <= totalPages

    return (
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
            <nav className="flex justify-between">
                {!prevPage && (
                    <button className="cursor-auto disabled:opacity-50" disabled={!prevPage}>
                        {T.previous}
                    </button>
                )}
                {prevPage && (
                    <Link
                        href={currentPage - 1 === 1 ? `/${basePath}/` : `/${basePath}/page/${currentPage - 1}`}
                        rel="prev"
                    >
                        {T.previous}
                    </Link>
                )}
                <span>
                    {currentPage} of {totalPages}
                </span>
                {!nextPage && (
                    <button className="cursor-auto disabled:opacity-50" disabled={!nextPage}>
                        {T.next}
                    </button>
                )}
                {nextPage && (
                    <Link href={`/${basePath}/page/${currentPage + 1}`} rel="next">
                        {T.next}
                    </Link>
                )}
            </nav>
        </div>
    )
}

const en = {
    previous: 'Previous',
    next: 'Next'
}
const de: typeof en = {
    previous: 'Zurück',
    next: 'Weiter'
}
const fr: typeof en = {
    previous: 'Précédent',
    next: 'Suivant'
}
const pt: typeof en = {
    previous: 'Anterior',
    next: 'Próximo'
}
