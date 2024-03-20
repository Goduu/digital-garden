"use client"
import React, { FC } from 'react';
import { FaDownload } from 'react-icons/fa6';
import { useTheme } from 'next-themes';
import { useTranslation } from '@/locale/useTranslation';

const opt = {
    margin: 1,
    filename: 'Igor_Cangussu_CV.pdf',
    jsPDF: { unit: "cm", putOnlyUsedFonts: true },
    html2canvas: {
        scale: 2,           // higher quality
        windowWidth: 1440   // simulate a browser size that causes the page's responsive CSS to output a pleasing layout in the rendered PDF
    },
    enableLinks: true,
};

const PDFDownloadButton: FC = () => {
    const { theme, setTheme } = useTheme()
    const T = useTranslation({ en, de, fr, pt })

    const handleDownloadPDF = () => {
        const element = document.getElementById('pdf-content');
        const currentTheme = theme
        currentTheme === "dark" && setTheme('light')

        // html2pdf.js uses some client functions that are not available in the server
        import('html2pdf.js').then((html2pdf) => {
            html2pdf.default().set(opt).from(element).save().then(() => {
                currentTheme === "dark" && setTheme("dark")
            });
        });
    };

    return (
        <button onClick={handleDownloadPDF} className="group border-neutral-5 rounded-md border px-3 font-bold py-2 flex gap-4 items-center">
            <FaDownload className='group-hover:animate-bounce' />
            {T.download}
        </button>
    );
};

export default PDFDownloadButton;

const en = {
    download: "Download PDF"
}
const de: typeof en = {
    download: "PDF herunterladen"
}
const fr: typeof en = {
    download: "Télécharger le PDF"
}
const pt: typeof en = {
    download: "Baixar PDF"
}