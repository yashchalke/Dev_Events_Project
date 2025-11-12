import { Route, Routes } from "react-router";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import EventDetails from "./Pages/EventDetails";
import CreateEvent from "./Pages/CreateEvent";
import MyEvents from "./Pages/MyEvents";


const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/events/:id" element={<EventDetails />}></Route>
        <Route path="/myevents" element={<MyEvents />}></Route>
        <Route path="/create-new-event" element={<CreateEvent/>}></Route>
      </Routes>
    </>
  );
};

export default App;
