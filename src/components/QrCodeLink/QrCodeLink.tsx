"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import { BsQrCode } from 'react-icons/bs'

export const QrCodeLink = () => {
    const path = usePathname()


    return (
        <Link href={path + "/qrCode"} aria-label={"See qr code"} className="group border-neutral-5 rounded-md border font-bold flex items-center h-11 w-11 align-middle justify-center">
            <BsQrCode className='w-7 h-7' />
        </Link>
    )
}
