import Link from 'next/link';
import React from 'react'

import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';

const links = [
  { path: '/', name: 'home' },
  { path: '/projects', name: 'my projects' },
  { path: '/contact', name: 'contact' },
]

const Navbar = ({containerStyles, linkStyles, underlineStyles}: {containerStyles: string; linkStyles: string, underlineStyles?: string}) => {
  const pathName = usePathname();
  return (
    <div className={`${containerStyles}`}>
      {links.map((item, idx) => {
        return (
          <Link href={item.path} key={idx} className={`capitalize ${linkStyles}`}>
            {item.path === pathName && (
              <motion.span initial={{ y: '-100%' }} animate={{ y:0 }} transition={{ type:'tween' }} layoutId='underline' className={`${underlineStyles}`} />
            )}
            {item.name}
          </Link>
        )
      })}
    </div>
  )
}

export default Navbar