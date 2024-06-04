import React from 'react'
import { Card, CardHeader } from './card'
import { Badge } from './badge'
import Image from 'next/image'
import Link from 'next/link'
import { Link2Icon } from 'lucide-react'
import { twJoin } from 'tailwind-merge'
import { RiInstagramLine } from 'react-icons/ri'

const ProjectCard = ({ data, isProjectPage }: any) => {
  return (
    <Card className="group overflow-hidden relative">
      <CardHeader className="p-0">
       <div className="relative w-full h-[300px] flex items-center justify-center bg-tertiary dark:bg-secondary/40 xl:bg-work_project_bg_light xl:dark:bg-work_project_bg_dark xl:bg-[110%] xl:bg-no-repeat overflow-hidden">
        <Image className="absolute bottom-0 shadow-2xl" src={data.image} width={247} height={250} alt='' priority />
        <div className="flex gap-x-1">
          <Link href={data.link} target="_blank" className="bg-secondary w-[54px] h-[54px] rounded-full flex justify-center items-center scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-200">
            <Link2Icon className="text-white" />
          </Link>
          {data.instagram ? (
            <Link href={data.instagram} target="_blank" className="bg-secondary w-[54px] h-[54px] rounded-full flex justify-center items-center scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-200">
              <RiInstagramLine size={30} className="text-white" />
            </Link>
          ): null}
        </div>
       </div>
      </CardHeader>
      <div className="h-full px-8 py-6">
        <div className="absolute top-4 left-5 flex gap-x-1">
          <Badge className="uppercase text-sm font-medium mb-2">
            {data.category}
          </Badge>
          {isProjectPage && data.isLatest ? (
            <Badge className="uppercase text-sm font-medium mb-2 bg-[#5958B1] hover:bg-[#5958B1]">
              Latest
            </Badge>
          ): null}
        </div>
        <h4 className="h4 mb-1">{data.name}</h4>
        <p className={twJoin("text-muted-foreground text-lg line-clamp-3", isProjectPage && "hover:line-clamp-none")}>{data.description}</p>
      </div>
    </Card>
  )
}

export default ProjectCard