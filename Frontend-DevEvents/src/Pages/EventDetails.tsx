import { useEffect } from "react"
import GeneralLayout from "../Components/Layouts/GeneralLayout"
import GradientLayout from "../Components/Layouts/GradientLayout"
import MiniForm from "../Components/MiniForm"

const EventDetails = () => {
  useEffect(()=>{
    window.scrollTo({top:0,behavior:"smooth"});
  },[])
  return (
    <div>
      <GeneralLayout >
        <GradientLayout Gradient={1} />
        <div className="mt-20 p-10">
          <div>
          <h1 className="heading">GitHub Universe 2025</h1>
          <p className="text-[#ffffffe4] poppins-regular mt-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur ad officiis rerum dolorem aperiam fuga repudiandae eum quidem? Sint modi nemo asperiores tempore porro, labore voluptatibus officiis praesentium? Similique, nobis?</p>
        </div>
        <div className="mt-10 flex md:flex-row flex-col gap-10">
          <div className="w-full">
          <div className="flex justify-center">
            {/* image */}
            <img src="/images/event1.png" alt="Event Image" className="md:h-[40vw] "></img>
            
          </div>
           <div className="block md:hidden md:w-[70%] mt-10">
            {/* form */}
            <MiniForm />
          </div>
          <div className="mt-10 ">
            <h3 className="font-special-gothic">Overview</h3>
            <p className="poppins-regular text-sm ">GitHub Universe 2025 is back, bringing together developers, innovators, and industry leaders from around the world. This flagship event dives deep into the future of software, open source, and AI-driven development.</p>
          </div>
          <div className="mt-10 flex flex-col gap-4 poppins-regular">
            <h3 className="font-special-gothic">Event Details</h3>
            <div>
              <p className="text-sm">Date</p>
            </div>
            <div>
              <p className="text-sm">Time:</p>
            </div>
            <div>
              <p className="text-sm">Venue:</p>
            </div>
            <div>
              <p className="text-sm">Mode:</p>
            </div>
            <div>
              <p className="text-sm">Audience:</p>
            </div>
          </div>
          <div>
            <h3 className="mt-10 font-special-gothic">Agenda</h3>
            <p className="text-sm poppins-regular leading-loose mt-5">09:30 AM – 10:30 AM | Opening Keynote: The Future of AI & Open Source <br />
                10:45 AM – 12:00 PM | Breakout Sessions (Security, DevOps, Cloud, AI) <br />
                12:00 PM – 1:00 PM | Lunch & Networking <br />
                01:00 PM – 02:15 PM | Panel Discussion: Scaling Open Source Communities <br />
                02:30 PM – 04:00 PM | Expert Workshops & Demos <br />
                04:15 PM – 05:00 PM | Closing Fireside Chat</p>
          </div>
          <div className="mt-10 ">
            <h3 className="font-special-gothic">About Organizer</h3>
            <p className="poppins-regular text-sm ">GitHub Universe 2025 is back, bringing together developers, innovators, and industry leaders from around the world. This flagship event dives deep into the future of software, open source, and AI-driven development.</p>
          </div>
          </div>
          <div className="hidden md:block md:w-[70%]">
            {/* form */}
            <MiniForm />
          </div>
        </div>
        </div>
      </GeneralLayout>
    </div>
  )
}

export default EventDetails