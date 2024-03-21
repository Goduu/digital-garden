"use client"

import React from 'react'
import { useTranslation } from 'src/locale/useTranslation'
import PDFDownloadButton from './PDF/PDFDownloadButton'
import { BsQrCode } from "react-icons/bs";
import Link from 'next/link';
import { QrCodeLink } from '../QrCodeLink/QrCodeLink';

export const AboutTitle = () => {
  const T = useTranslation({ en, de, fr, pt })

  return (
    <div className="space-y-2 pb-8 pt-6 md:space-y-5 flex justify-between">
      <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
        {T.title}
      </h1>
      <div className='flex gap-1'>
        <PDFDownloadButton />
        <QrCodeLink />
      </div>
    </div>
  )
}

const en = {
  title: 'About',
}
const de: typeof en = {
  title: 'Über mich',
}
const fr: typeof en = {
  title: 'À propos',
}
const pt: typeof en = {
  title: 'Sobre',
}

export const aboutTranslations = { en, de, fr, pt }