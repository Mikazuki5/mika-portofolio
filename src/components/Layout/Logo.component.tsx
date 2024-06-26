
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const Logo = () => {
  return (
    <>
      <Link href='/'>
        <Image src='/logos.svg' width={54} height={54} priority alt='logo' />
      </Link>
    </>
  )
}

export default Logo;