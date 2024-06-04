import Form from "@/components/Contact/Form.component";
import { HomeIcon, LinkedinIcon, MailIcon, PhoneCall } from "lucide-react";
import Link from "next/link";

const Contact = () => {
  return (
    <section>
     <div className="container mx-auto">
      <div className="grid xl:grid-cols-2 pt-12 xl:h-[480px] mb-6 xl:mb-24">
        <div className="flex flex-col justify-center">
          <div className="flex items-center gap-x-4 text-primary text-lg mb-4">
            <span className="w-[30px] h-[2px] bg-primary" />
            <div>Say Hello 👋🏻</div>
          </div>
          <h1 className="h1 max-w-md mb-8">{"Let's Work Together."}</h1>
          <p className="subtitle max-w-[400px]">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas odit eaque eius illum harum odio a voluptatibus totam, adipisci dolorem eveniet aliquid sed quos non quasi? Quae odit minus sunt.</p>
        </div>
        <div className="hidden xl:flex w-full bg-contact_light dark:bg-contact_dark bg-contain bg-top bg-no-repeat"></div>
      </div>
      <div className="grid xl:grid-cols-2 mb-24 xl:mb-32">
        <div className="flex flex-col gap-y-4 xl:gap-y-14 mb-12 xl:mb-24 text-base xl:text-lg">
          <div className="flex items-center gap-x-8">
            <MailIcon size={18} className="text-primary" />
            <div>gamalrvldi5@gmail.com</div>
          </div>
          <div className="flex items-center gap-x-8">
            <HomeIcon size={18} className="text-primary" />
            <div>Bandung, Jawa Barat</div>
          </div>
          <div className="flex items-center gap-x-8">
            <LinkedinIcon size={18} className="text-primary" />
            <div>
              <Link href="https://www.linkedin.com/in/gamlrvldi5/">Gamal Rivaldi</Link>
            </div>
          </div>
        </div>
        <Form />
      </div>
     </div>
    </section>
  )
};

export default Contact;