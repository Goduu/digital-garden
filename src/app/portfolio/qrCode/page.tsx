"use client"
import QRCode from 'react-qr-code'
import { usePathname } from 'next/navigation'
import siteMetadata from '@/data/siteMetadata'
import { useTranslation } from '@/locale/useTranslation'


export default function Page({ params }) {
  const T = useTranslation({ en, fr, de, pt })
  const qrCodeUrl = usePathname()
  const qrCodeValue = siteMetadata.siteUrl + "/" + qrCodeUrl.split("/")[1]

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <h1 className="text-3xl font-extrabold leading-9 tracking-tight sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
        {T.portfolio}
      </h1>
      <QRCode
        size={256}
        className='h-5/6 w-5/6 bg-white p-2'
        value={qrCodeValue}
        viewBox={`0 0 256 256`}
      />
      <h2 className="text-xl font-extrabold leading-9 tracking-tight sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
        {qrCodeValue}
      </h2>
    </div>
  )
}

const en = {
  portfolio: 'Portfolio',
}
const fr: typeof en = {
  portfolio: 'Portfolio',
}
const de: typeof en = {
  portfolio: 'Portfolio',
}
const pt: typeof en = {
  portfolio: 'Portifólio',
}
