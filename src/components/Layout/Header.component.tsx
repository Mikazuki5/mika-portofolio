'use client';
import ThemesToggler from "@/components/Themes/ThemesToggler.component";
import Logo from "@/components/Layout/Logo.component";
import Navbar from "@/components/Layout/Navbar.component";
import NavbarMobile from "@/components/Layout/NavbarMobile.component";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const Header = () => {
  const [header, setHeader] = useState<boolean>(false);
  const pathName = usePathname();

  useEffect(() => {
    const scrollYPos: any = window.addEventListener('scroll', () => {
      window.scrollY > 50 ? setHeader(true) : setHeader(false);
    });
  
    return () => window.removeEventListener('scroll', scrollYPos)
  }, [])
  

  return (
    <header 
      className={`${
        header 
          ? 'py-4 bg-white shadow-lg dark:bg-accent' 
          : 'py-6 dark:bg-transparent'} 
        sticky top-0 z-30 transition-all ${pathName === '/' && 'bg-[#fef9f5]'}`
      }
    >
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <Logo />
          <div className="flex items-center gap-x-6">
            <Navbar containerStyles="hidden xl:flex gap-x-8 items-center" linkStyles="relative hover:text-primary transition-all" underlineStyles="absolute left-0 top-full h-[2px] bg-primary w-full" />
            <ThemesToggler />
            <div className="xl:hidden">
              <NavbarMobile />
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header;
