"use client"
// import React from 'react';
// import { Document, PDFViewer, Page } from '@react-pdf/renderer';
// import { AuthorLayout } from '@/layouts/AuthorLayout';
// import Professional from '../Articles/Professional';
// import Achievements from '../Articles/Achievements';
// import { AdditionalInfo } from '../Articles/AdditionalInfo';

// export const MyCvPdf = () => (
//     <PDFViewer>
//         <>
//             <AuthorLayout />
//             <div className="prose max-w-none space-y-2 pb-8 dark:prose-invert md:space-y-5 xl:col-span-2">
//                 <div className="mt-5">
//                     <Professional />
//                 </div>
//                 <div className="mt-5">
//                     <Achievements />
//                 </div>
//                 <div className="mt-5">
//                     <AdditionalInfo />
//                 </div>
//             </div>
//         </>
//     </PDFViewer>
// );

import { AuthorLayout } from 'src/layouts/AuthorLayout';
import { AppLocale } from 'src/locale/useLocale';
import { useTranslation } from 'src/locale/useTranslation';
import { allAuthors } from '@contentlayer/generated';
import {
    Document,
    Page,
    Text,
} from '@react-pdf/renderer';
import { MDXLayoutRenderer } from 'pliny/mdx-components';

interface LabProps {
    title?: string;
}

export const CvPdf: React.FC<LabProps> = () => {
    const T = { en, de, fr, pt }

    return (
        <Document>
            <Page size='A4' >
                <Text fixed>
                    <Text ></Text>
                </Text>
            </Page>
        </Document>
    )
}


const en = {
    about: "About"
}
const de: typeof en = {
    about: "About"
}
const fr: typeof en = {
    about: "About"
}
const pt: typeof en = {
    about: "About"
}
