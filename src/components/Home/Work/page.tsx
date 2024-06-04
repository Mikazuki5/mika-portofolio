'use client'
import 'swiper/css';
import 'swiper/css/pagination';

import Link from 'next/link';
import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules'
import { Button } from '@/components/ui/button';
import ProjectCard from '@/components/ui/projectCard';
import { ProjectData } from '@/constan/ProjectDatas';

const Work = () => {
  return (
    <section className="relative mb-12 xl:mb-48">
      <div className="container mx-auto">
        <div className="max-w-[400px] mx-auto xl:mx-0 text-center xl:text-left mb-12 xl:h-[400px] flex flex-col justify-center items-center xl:items-start">
          <h2 className="section-title mb-4">Latest Project</h2>
          <p className="subtitle mb-8">The following are projects for the last 1 year that have been worked on and are ready to be used. both web, Android and iOS.</p>
          <Link href={"/projects"}>
            <Button>All Project</Button>
          </Link>
        </div>
        <div className="xl:max-w-[900px] xl:absolute right-0 top-0">
          <Swiper className="h-[480px]" slidesPerView={1} breakpoints={{640: {slidesPerView: 2}}} spaceBetween={30} modules={[Pagination]} pagination={{clickable: true}}>
            {ProjectData.filter((item) => item.isLatest === true).slice(0, 4).map((item, idx) => {
              return (
                <SwiperSlide key={idx}>
                  <ProjectCard data={item} />
                </SwiperSlide>
              )
            })}
          </Swiper>
        </div>
      </div>
    </section>
  )
}

export default Work