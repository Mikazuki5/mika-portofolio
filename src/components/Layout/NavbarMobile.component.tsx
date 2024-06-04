import React from 'react'
import { Sheet, SheetContent, SheetTrigger } from '../ui/sheet'
import { AlignJustify } from 'lucide-react'
import Logo from './Logo.component'
import Navbar from './Navbar.component'
import Social from '../Home/Social.component'

const NavbarMobile = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <AlignJustify />
      </SheetTrigger>
      <SheetContent>
        <div className="flex flex-col items-center justify-between h-full py-8">
          <div className="flex flex-col items-center gap-y-32">
            <Logo />
            <Navbar containerStyles='flex flex-col items-center gap-y-6' linkStyles='text-2xl' />
          </div>
          <Social containerStyles="flex gap-x-4" iconStyles="text-2xl" />
        </div>
      </SheetContent>
    </Sheet>
  )
}

export default NavbarMobile