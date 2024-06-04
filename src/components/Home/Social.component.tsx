'use client'
import Link from 'next/link';
import React from 'react';
import { RiFacebookFill, RiGithubFill, RiInstagramFill, RiLinkedinFill, RiYoutubeFill } from 'react-icons/ri';
import { twMerge } from 'tailwind-merge';

const icons = [
  {
    path: '/',
    name: <RiLinkedinFill />
  },
  {
    path: '/',
    name: <RiGithubFill />
  },
  {
    path: '/',
    name: <RiFacebookFill />
  },
  {
    path: '/',
    name: <RiInstagramFill />
  },
]

const Social = ({containerStyles, iconStyles}: {containerStyles: string; iconStyles: string}) => {
  return (
    <div className={twMerge(containerStyles)}>
      {icons.map((items, idx) => {
        return (
          <Link href={items.path} key={idx}>
            <div className={twMerge(iconStyles)}>
              {items.name}
            </div>
          </Link>
        )
      })}
    </div>
  )
}

export default Social