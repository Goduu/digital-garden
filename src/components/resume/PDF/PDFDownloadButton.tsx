// "use client"
// import { FaFilePdf } from 'react-icons/fa6'
// import { FC } from 'react'
// import { PDFDownloadLink, usePDF } from '@react-pdf/renderer'
// import { CvPdf } from './MyCvPdf'
// import Link from 'next/link'
// import { useLocale } from '@/locale/useLocale'

// interface PDFDownloadButtonProps {
//     secret?: string
// }

// const PDFDownloadButton: FC<PDFDownloadButtonProps> = ({ secret }) => {
//     const { locale } = useLocale()
//     const [instance, updateInstance] = usePDF({
//         // document: <DocumentPDF title='Sample Invoice' printData={printData} />,
//         document: <CvPdf />,
//     });

//     return (
//         <Link href={instance.url || '#'} className='flex gap-4 items-center border w-fit p-2 rounded-md'>
//             <FaFilePdf className='w-8' size="sm" />
//             Download PDF s
//         </Link>
//     )
// }

// export default PDFDownloadButton
