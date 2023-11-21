import DigitalClock from "@/components/tools/Time";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGaugeHigh,
  faCalendarAlt,
  faEye,
  faChartLine,
} from "@fortawesome/free-solid-svg-icons";

const Dashboard = () => {
  return (
    <>
      <div className="py-16 px-4 bg-[#002a2e] dark:bg-gray-950">
        <div className="mb-6">
          <h1 className="text-white text-center text-4xl font-bold ">
            Dashboard
            <FontAwesomeIcon
              icon={faGaugeHigh}
              className="ml-3 w-8 h-8 inline-block"
            />
          </h1>
        </div>
        <div className="flex flex-col md:flex-row justify-between md:px-4 lg:px-6">
          <div className="px-2 md:px-4 py-4 my-4 bg-[#003436] dark:bg-gray-900 rounded-sm flex justify-between md:w-1/4 shadow-md">
            <div className="px-2">
              <p className="text-white  font-bold text-md">Time</p>
              <div className="mt-2">
                <DigitalClock />
              </div>
            </div>
            <div>
              <FontAwesomeIcon
                icon={faCalendarAlt}
                className="mt-6 md:mt-4 mx-2 text-center w-8 h-10 inline-block text-white "
              />
            </div>
          </div>
          <div className="px-2 md:px-4 py-4 my-4 bg-[#003436] dark:bg-gray-900 rounded-sm flex justify-between md:w-1/4 shadow-md">
            <div className="px-2 md:pt-3">
              <p className="text-white font-bold text-md">Views</p>
              <div className="mt-2">
                <span className="mt-1 text-l font-bold text-white">0000000</span>
              </div>
            </div>
            <div>
              <FontAwesomeIcon
                icon={faEye}
                className="mt-2 md:mt-6 mx-2 text-center w-8 h-8 inline-block text-white "
              />
            </div>
          </div>
          <div className="px-2 md:px-4 py-4 my-4 bg-[#003436] dark:bg-gray-900 rounded-sm flex justify-between md:w-1/4 shadow-md">
            <div className="px-2 md:pt-3">
              <p className="text-white font-bold text-md">Total Request</p>
              <div className="mt-2">
                <span className="mt-1 text-l font-bold text-white">000000</span>
              </div>
            </div>
            <div>
              <FontAwesomeIcon
                icon={faChartLine}
                className="mt-2 md:mt-6 mx-2 text-center w-8 h-8 inline-block text-white "
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
