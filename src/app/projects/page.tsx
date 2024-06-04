'use client'
import ProjectCard from '@/components/ui/projectCard';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ProjectData } from '@/constan/ProjectDatas';
import React, { useState } from 'react';


const uniqueCategories = [
  'all projects', 
  ...new Set(ProjectData.map((item) => item.category)),
];

const Projects = () => {
  const [categories, setCategories] = useState(uniqueCategories);
  const [category, setCatagory] = useState('all projects');

  const filteredProjects = ProjectData.filter((item) => {
    return category === 'all projects' ? item : item.category === category;
  })

  return (
    <section className="min-h-screen pt-12">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
          My Project
        </h2>
        <Tabs defaultValue={category} className="mb-24 xl:mb-48">
          <TabsList className="w-full grid h-full md:grid-cols-5 lg:max-w-[640xp] mb-12 mx-auto md:border dark:border-none">
            {categories.map((item, idx) => {
              return (
                <TabsTrigger onClick={() => setCatagory(item)} className="capitalize w-[162px] md:w-auto" key={idx} value={item}>{item}</TabsTrigger>
              )
            })}
          </TabsList>
          <div className="text-lg xl:mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4">
            {filteredProjects.map((values, idx) => {
              return (
                <TabsContent key={idx} value={category}>
                  <ProjectCard data={values} isProjectPage />
                </TabsContent>
              )
            })}
          </div>
        </Tabs>
      </div>
    </section>
  )
}

export default Projects;