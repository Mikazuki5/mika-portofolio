import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import DevImg from '@/components/Home/DevImg.component';
import { Briefcase, GraduationCap, HomeIcon, MailIcon, PhoneCall, User2 } from 'lucide-react';
import React from 'react';
import Image from 'next/image';

const userData = [
  {
    icon: <User2 size={20}/>,
    label: "Gamal Rivaldi M"
  },
  {
    icon: <PhoneCall size={20}/>,
    label: "+628 987 440 798"
  },
  {
    icon: <MailIcon size={20}/>,
    label: "gamalrvldi5@gmail.com"
  },
  {
    icon: <GraduationCap size={20}/>,
    label: "Yadika Soreang vocational high school"
  },
  {
    icon: <HomeIcon size={20}/>,
    label: "Bandung, Jawa Barat"
  },
]

const qualificationData = [
  {
    label: 'education',
    data: [
      {
        university: "Yadika Soreang Vocational high school",
        qualification: "Software Engineering",
        years: "2017 - 2020"
      },
      {
        university: "Cangkuang Junior High School",
        qualification: " - ",
        years: "2014 - 2017"
      },
      {
        university: "Dahniar Elementary School",
        qualification: " - ",
        years: "2008 - 2014"
      }
    ]
  },
  {
    label: "experience",
    data: [
      {
        company: "PT GajiCermat Indonesia",
        role: "Front-end Engineer",
        status: "Permanent",
        years: "2022 - Current"
      },
      {
        company: "PT Clodeo Indonesia Jaya",
        role: "Front-end developer | Mobile Apps Specialist",
        status: "Permanent",
        years: "2020 - 2022"
      },
      {
        company: "PT Industri Telekomunikasi Indonesia",
        role: "Fullstack - Django",
        status: "Internship",
        years: "Januari 2018 - Maret 2018"
      }
    ]
  }
]

const skillData = [
  {
    label: "skill",
    data: [
      {
        name: "HTML, CSS, Javascript"
      },
      {
        name: "React JS"
      },
      {
        name: "Front End Development"
      },
      {
        name: "React Native"
      },
      {
        name: "Tailwind CSS"
      },
      {
        name: "React Query"
      },
      {
        name: "Unit Testing"
      },
      {
        name: "NextJS"
      }
    ]
  },
  {
    label: "tools",
    data: [
      {
        imgPath: "/about/vscode.svg"
      },
      {
        imgPath: "/about/figma.svg"
      },
      {
        imgPath: "/about/android-studio.svg"
      },
      {
        imgPath: "/about/xcode.svg"
      },
      {
        imgPath: "/about/git.svg"
      },
      {
        imgPath: "/about/github.svg"
      },
      {
        imgPath: "/about/bitbucket.svg"
      }
    ]
  }
]

const About = () => {
  const getData = (arr: any, label: any) => {
    return arr.find((item: any) => item.label === label)
  }

  return (
   <section className="xl:min-h-[860px] pb-12 xl:py-24">
    <div className="container mx-auto">
      <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">About me</h2>
      <div className="flex flex-col xl:flex-row">
        <div className="hidden xl:flex flex-1 relative">
          <DevImg containerStyles="bg-about_shape_light dark:bg-about_shape_dark w-[505px] h-[505px] bg-no-repeat relative" imgSrc='/about/dev2.png' />
        </div>
        <div className="flex-1">
          <Tabs defaultValue="personal">
            <TabsList className="w-full grid xl:grid-cols-3 xl:max-w-[520px] xl:border dark:border-none">
              <TabsTrigger className="w-[162px] xl:w-auto" value="personal">Personal Info</TabsTrigger>
              <TabsTrigger className="w-[162px] xl:w-auto" value="qualification">Qualification</TabsTrigger>
              <TabsTrigger className="w-[162px] xl:w-auto" value="skills">Skills</TabsTrigger>
            </TabsList>
            <div className="text-lg mt-12 xl:mt-8">
              <TabsContent value="personal">
                <div className="text-center xl:text-left">
                  <h3 className="h3 mb-4">Unmatched Service Quality for Over 4 years</h3>
                  <p className="subtitle max-w-xl max-auto xl:mx-0">
                    I Specialize in crafting intuitive website with cutting edge technology, delivering dynamic and engaging user experiences.
                  </p>
                  <div className="grid xl:grid-cols-2 gap-4 mb-12">
                    {userData.map((item, idx) => {
                      return (
                        <div key={idx} className="flex items-center gap-x-4 mx-auto xl:mx-0">
                          <div className="text-primary">{item.icon}</div>
                          <div>{item.label}</div>
                        </div>
                      )
                    })}
                  </div>
                  <div className="flex flex-col gap-y-2">
                    <div className="text-primary">Language Skill</div>
                    <div className="border-b border-border" />
                    <div>English, Indonesia</div>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="qualification">
                <div>
                  <h3 className="h3 mb-8 text-center xl:text-left">My Journey</h3>
                  <div className="grid md:grid-cols-2 gap-y-8">
                    <div className="flex flex-col gap-y-6">
                      <div className="flex gap-x-4 items-center text-[22px] text-primary">
                        <Briefcase />
                        <h4 className="capitalize font-medium">{getData(qualificationData, 'experience').label}</h4>
                      </div>
                      <div className="flex flex-col gap-y-8">
                        {getData(qualificationData, 'experience').data.map((item: any, idx: number) => {
                          const { company, role, years, status } = item;
                          return (
                            <div className="flex gap-x-8 group" key={idx}>
                              <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                              </div>
                              <div>
                                <div className="font-semibold text-xl leading-none mb-2">{company}</div>
                                <div className="text-lg leading-none text-muted-foreground mb-2">{role}</div>
                                <div className="text-medium leading-none text-primary mb-2">{status}</div>
                                <div className="text-base font-medium">{years}</div>
                              </div>
                            </div>
                          )
                        })}
                      </div>
                    </div>
                    <div className="flex flex-col gap-y-6">
                      <div className="flex gap-x-4 items-center text-[22px] text-primary">
                        <GraduationCap size={28} />
                        <h4 className="capitalize font-medium">{getData(qualificationData, 'education').label}</h4>
                      </div>
                      <div className="flex flex-col gap-y-8">
                        {getData(qualificationData, 'education').data.map((item: any, idx: number) => {
                          const { university, qualification, years } = item;
                          return (
                            <div className="flex gap-x-8 group" key={idx}>
                              <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                              </div>
                              <div>
                                <div className="font-semibold text-xl leading-none mb-2">{university}</div>
                                <div className="text-lg leading-none text-muted-foreground mb-4">{qualification}</div>
                                <div className="text-base font-medium">{years}</div>
                              </div>
                            </div>
                          )
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="skills">
                <div className="text-center xl:text-left">
                  <h3 className="h3 mb-8">What I Use Everyday</h3>
                  <div className="mb-16">
                    <h4 className="text-xl font-semibold mb-2">Skills</h4>
                    <div className="border-b border-border mb-4" />
                    <div>{getData(skillData, 'skill').data.map((item: any, idx: number) => {
                      const { name } = item;
                      return (
                        <div key={idx} className="w-2/4 text-center xl:text-left mx-auto xl:mx-0">
                          <div className="font-medium">{name}</div>
                        </div>
                      )
                    })}</div>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2 xl:text-left">Tools</h4>
                    <div className="border-b border-border mb-4" />
                    <div className="flex gap-x-8 justify-center xl:justify-start">
                      {getData(skillData, 'tools').data.map((item:any, idx:number) => {
                        const { imgPath } = item;
                        return (
                          <div key={idx}>
                            <Image src={imgPath} width={48} height={48} alt='' priority />
                          </div>
                        )
                      })}
                    </div>
                  </div>
                </div>
              </TabsContent>
            </div>
          </Tabs>
        </div>
      </div>
    </div>
   </section>
  )
}

export default About