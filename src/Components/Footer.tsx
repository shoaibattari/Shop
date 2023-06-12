import Link from 'next/link'
import React from 'react'

export default function Footer() {
    return (
        <>

           
            <div className='md:flex justify-between py-[10px] text-center 
            mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 bg-white
            '>
                <p className=' font-bold'>All Rights Reserved © | <br className='md:hidden' /><Link href='https://github.com/shoaibattari' target='_blank' > Shoaib Memon </Link></p>
                <div>
                    <Link href={'#'}>Legals </Link>|
                    <Link href={'#'}> Terms Of Use </Link>|
                    <Link href={'#'}> Privacy Policy</Link>
                </div>
            </div>
        </>
    )
}