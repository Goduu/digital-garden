import { genPageMetadata } from "app/seo"

export const metadata = genPageMetadata({ title: 'Notes' })

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <div>
            {children}
        </div>
    )
}
