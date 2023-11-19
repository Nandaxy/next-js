import CounterComponent from "../CounterDisplay";
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
      <div className="py-16 px-4 bg-gray-950">
        <div className="mb-6">
          <h1 className="text-center text-4xl font-bold ">
            Dashboard
            <FontAwesomeIcon
              icon={faGaugeHigh}
              className="ml-3 w-8 h-8 inline-block"
            />
          </h1>
        </div>
        <div className="flex flex-col justify-between">
          <div className="px-2 py-4 my-4 bg-gray-900 rounded-sm flex justify-between">
            <div className="px-2">
              <p className="font-bold text-md">Time</p>
              <div className="mt-2">
                <span className="mt-1 text-l font-bold ">
                </span>
              </div>
              <div className="mt-2">
                <span className="mt-1 text-md"></span>
              </div>
            </div>
            <div>
              <FontAwesomeIcon
                icon={faCalendarAlt}
                className="mt-6 mx-2 text-center w-8 h-10 inline-block"
              />
            </div>
          </div>
          <div className="px-2 py-4 my-4 bg-gray-900 rounded-sm flex justify-between">
            <div className="px-2">
              <p className="font-bold text-md">Views</p>
              <div className="mt-2">
                <span className="mt-1 text-l font-bold ">
                <CounterComponent type="views" />
                </span>
              </div>
            </div>
            <div>
              <FontAwesomeIcon
                icon={faEye}
                className="mt-2 mx-2 text-center w-8 h-8 inline-block"
              />
            </div>
          </div>
          <div className="px-2 py-4 my-4 bg-gray-900 rounded-sm flex justify-between">
            <div className="px-2">
              <p className="font-bold text-md">Total Request</p>
              <div className="mt-2">
                <span className="mt-1 text-l font-bold ">
                <CounterComponent type="totalRequests" />
                </span>
              </div>
            </div>
            <div>
              <FontAwesomeIcon
                icon={faChartLine}
                className="mt-2 mx-2 text-center w-8 h-8 inline-block"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
