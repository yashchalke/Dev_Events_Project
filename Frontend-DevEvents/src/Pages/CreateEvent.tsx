import GeneralLayout from "../Components/Layouts/GeneralLayout";
import GradientLayout from "../Components/Layouts/GradientLayout";

const CreateEvent = () => {
  return (
    <div>
      <GeneralLayout>
        <GradientLayout Gradient={1} />
        <div className="md:h-screen py-30 px-4 flex justify-center">
          <form className="md:min-w-150 h-fit border-3 border-bg-main">
            <div className="flex justify-center mt-5">
              <h2 className=" flex gap-1 nav-logo">
                <span>Dev</span>
                <span className="text-bg-main">Events</span>
              </h2>
            </div>
            <div className="px-2 py-6 flex flex-col gap-4">
              <label
                htmlFor="file"
                className="block w-full px-4 py-9 border-2 border-dashed border-gray-300 rounded-xl text-center text-gray-600 bg-white cursor-pointer hover:border-bg-main focus:outline-none"
              >
                Upload Banner Image
              </label>
              <input type="file" id="file" className="hidden" />
              <div>
                <label>Event Title:</label>
                <input
                  type="text"
                  className="border-b w-full p-1"
                  placeholder="Enter the Title of Event here"
                ></input>
              </div>
              <div>
                <label>Event Description:</label>
                <input
                  type="text"
                  className="border-b w-full p-1"
                  placeholder="Enter the Description of Event here"
                ></input>
              </div>
              <div>
                <label>Event Location:</label>
                <input
                  type="text"
                  className="border-b w-full p-1"
                  placeholder="Enter the Location of Event here"
                ></input>
              </div>
              <div>
                <label>Event Address:</label>
                <input
                  type="text"
                  className="border-b w-full p-1"
                  placeholder="Enter the Address of Event here"
                ></input>
              </div>
              <div className="flex md:flex-row flex-col md:gap-6 gap-4">
                <div className="flex flex-col gap-1">
                  <label>Select Event Date:</label>
                  <input
                    type="date"
                    className="w-full border bg-bg-secondary p-2 rounded"
                  ></input>
                </div>
                <div className="flex flex-col gap-1">
                  <label>Select Time of Event</label>
                  <input
                    type="time"
                    className="w-full border bg-bg-secondary p-2 rounded"
                  ></input>
                </div>
              </div>
              <button className="button-rounded">Create Event</button>
            </div>
          </form>
        </div>
      </GeneralLayout>
    </div>
  );
};

export default CreateEvent;
