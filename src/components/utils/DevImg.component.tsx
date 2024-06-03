import Image from 'next/image';
import React from 'react'
import { twMerge } from 'tailwind-merge';

const DevImg = ({containerStyles, imgSrc}: {containerStyles: string; imgSrc: string;}) => {
  return (
    <div className={twMerge(containerStyles)}>
      <Image src={imgSrc} fill priority alt='DevImg' />
    </div>
  )
}

export default DevImg