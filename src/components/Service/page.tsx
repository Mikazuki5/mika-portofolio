import { Blocks, GanttChartSquare, Gem, Aperture } from 'lucide-react'
import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card'

const serviceData = [
  {
    icon: <Aperture size={72} strokeWidth={0.8} />,
    title: "Photo / Videography",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum veritatis doloremque vero, modi ducimus minima officiis non aspernatur quis repudiandae, ex optio ipsum aliquam eum quam illo id veniam culpa."
  },
  {
    icon: <Blocks size={72} strokeWidth={0.8} />,
    title: "Web Development",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum veritatis doloremque vero, modi ducimus minima officiis non aspernatur quis repudiandae, ex optio ipsum aliquam eum quam illo id veniam culpa."
  },
  {
    icon: <Gem size={72} strokeWidth={0.8} />,
    title: "App Development",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum veritatis doloremque vero, modi ducimus minima officiis non aspernatur quis repudiandae, ex optio ipsum aliquam eum quam illo id veniam culpa."
  },
]

const Service = () => {
  return (
    <section className="mb-12 xl:mb-36">
      <div className="container mx-auto">
        <h2 className="section-title mb-12 xl:mb-24 text-center mx-auto">My Service</h2>
        <div className="grid xl:grid-cols-3 justify-center gap-y-12 xl:gap-y-24 xl:gap-x-8">
          {serviceData.map((item, idx) => {
            return (
              <Card className="w-full max-w-[424px] h-[300px] flex flex-col pt-16 pb-10 justify-center items-center relative" key={idx}>
                <CardHeader className="text-primary absolute -top-[60px]">
                  <div className="w-[140px] h-[80px] bg-white dark:bg-background flex justify-center items-center">
                    {item.icon}
                  </div>
                </CardHeader>
                <CardContent className="text-center">
                  <CardTitle className='mb-4'>{item.title}</CardTitle>
                  <CardDescription className="text-lg">{item.description}</CardDescription>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Service