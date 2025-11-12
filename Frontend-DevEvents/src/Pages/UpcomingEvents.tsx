import EventCard from "../Components/EventCard";
import GradientLayout from "../Components/Layouts/GradientLayout";
import { events } from "../Components/constants"

const UpcomingEvents = () => {
  return (
    <div className="relative h-fit overflow-visible">
      <div className="absolute top-1/2 w-full h-fit">
  <GradientLayout Gradient={1} />
</div>
      
      <h1 className="p-10 subheading z-20 text-white">Upcoming Events</h1>
      <div className="flex justify-center mb-10">
      <ul className="events">
        
          {events.map((event)=>(
            <li key={event.title} className="list-none glass p-2 bg-white/10">
              <EventCard 
              {...event}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default UpcomingEvents;