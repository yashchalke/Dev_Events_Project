import { Link } from "react-router";
import AuthButton from "./AuthButton";

const Navbar = () => {
  return (
    <header>
    <nav>
        <Link to="/"><h1 className="flex gap-x-1 nav-logo"><span>Dev</span><span className="text-main">Events</span></h1></Link>
        <ul className="nav-ul">
            <Link to="/">Home</Link>
            <Link to="/myevents">My Events</Link>
            <Link to="/create-new-event">Create Event</Link>
        </ul>
           <AuthButton />
    </nav>
       
    </header>
  );
};

export default Navbar;
