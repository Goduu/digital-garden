"use client"
import { useLocale } from "src/locale/useLocale";
import { FC, ReactNode } from "react";
import { KBarSearchProvider } from "./Kbar";

type SearchProviderLocalizedProps = {
    children: ReactNode
}

export const SearchProviderLocalized: FC<SearchProviderLocalizedProps> = ({ children }) => {
    const { locale } = useLocale()

    return (
        <KBarSearchProvider kbarConfig={{ searchDocumentsPath: `search_${locale}.json`, }}>
            {children}
        </KBarSearchProvider>)
}
