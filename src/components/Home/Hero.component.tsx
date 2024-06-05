import React from 'react'

import { RiArrowDownSLine, RiBriefcase4Fill, RiTeamFill, RiTodoFill } from 'react-icons/ri'
import { Button } from '../ui/button'
import Link from 'next/link'
import { Download, Send } from 'lucide-react'
import Social from './Social.component'
import DevImg from './DevImg.component'
import Badge from './Badge.component'

const Hero = () => {
  return (
    <section className="py-12 xl:py-24 min-h-[84vh] xl:pt-12 bg-hero bg-no-repeat bg-cover bg-bottom dark:bg-none">
      <div className="container mx-auto">
        <div className="flex justify-between gap-x-8">
          <div className="flex flex-col mx-auto max-w-[600px] justify-center text-center xl:mx-0 xl:text-left">
            <div className="text-sm uppercase font-semibold mb-4 text-primary tracking-[4px]">Frontend Engineer</div>
            <h1 className='h1'>Hello, my name is Gamal Rivaldi M</h1>
            <p className='subtitle max-w-[490px] mx-auto xl:mx-0'>Brief description with insight into myself, my vocational journey, and what engage in professionally.</p>

            <div className='flex flex-col md:flex-row gap-y-3 gap-x-3 mx-auto xl:mx-0'>
              <Link href={'/contact'}>
                <Button className='gap-x-2'>Contact Me <Send size={18} /></Button>
              </Link>
              <Link href={'/'}>
                <Button variant={'secondary'} className='gap-x-2'>Download CV  <Download size={18} /></Button>
              </Link>
            </div>

            <Social containerStyles="flex gap-x-6 mx-auto xl:mx-0 mt-8" iconStyles="text-foreground text-[22px] hover:text-primary transition-all" />
          </div>
          <div className="hidden xl:flex relative">
            <Badge 
              containerStyles="absolute top-[24%] -left-[5rem]" 
              icon={<RiBriefcase4Fill />} 
              endCountNum={3} 
              badgeText="Years of experience" 
            />
            <Badge 
              containerStyles="absolute top-[55%] -right-8" 
              icon={<RiTodoFill />} 
              endCountNum={10} 
              endCountText='+'
              badgeText="Finished project" 
            />
            <div className="bg-hero_shape2_light dark:bg-hero_shape2_dark w-[500px] h-[500px] bg-no-repeat absolute -top-1 -right-2"/>
            <DevImg containerStyles="bg-hero_shape w-[510px] h-[462px] bg-no-repeat relative bg-bottom" imgSrc='/hero/developer-2.png' />
          </div>
        </div>
        <div className='hidden md:flex absolute left-2/4 bottom-44 xl:bottom-12 animate-bounce'>
          <RiArrowDownSLine className="text-3xl text-primary" />
        </div>
      </div>
    </section>
  )
}

export default Hero;