'use client'
import Link from 'next/link';
import React from 'react';
import { RiFacebookFill, RiGithubFill, RiInstagramFill, RiLinkedinFill, RiYoutubeFill } from 'react-icons/ri';
import { twMerge } from 'tailwind-merge';

const icons = [
  {
    path: 'https://www.linkedin.com/in/gamlrvldi5/',
    name: <RiLinkedinFill />
  },
  {
    path: 'https://github.com/Mikazuki5/',
    name: <RiGithubFill />
  },
  {
    path: '/',
    name: <RiFacebookFill />
  },
  {
    path: 'https://www.instagram.com/gamalrvldi/',
    name: <RiInstagramFill />
  },
]

const Social = ({containerStyles, iconStyles}: {containerStyles: string; iconStyles: string}) => {
  return (
    <div className={twMerge(containerStyles)}>
      {icons.map((items, idx) => {
        return (
          <Link href={items.path} key={idx} target="_blank">
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