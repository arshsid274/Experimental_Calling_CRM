import { useState } from "react";
import Dialer from "./Dialer";

function ConnectionStatus() {
  const [isConnected, setIsConnected] = useState(false);
  const [showDialer, setShowDialer] = useState(false);
  const phoneNumber = "(774) 905-2255";
  const name = "Bently Ericson";

  const toggleConnection = () => {
    setIsConnected(!isConnected);
  };

  const openDialer = () => {
    setShowDialer(true);
  };

  return (
    <div className="absolute top-2 right-4 z-50 flex items-center gap-2">
      <div className="flex items-center gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-5 w-5 text-gray-500"
        >
          <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
          <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
        </svg>
        <div className="flex items-center gap-1">
          <div className="relative">
            <button
              onClick={toggleConnection}
              className={`flex items-center gap-1 px-2 py-1 rounded-md ${
                isConnected ? "bg-[#22c55e] text-white" : "bg-red-500 text-white"
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
              <span className="text-xs">{isConnected ? "Connected" : "Connect"}</span>
            </button>
          </div>
          <div
            onClick={openDialer}
            className="flex items-center gap-1 px-2 py-1 bg-[#3b82f6] text-white rounded-md cursor-pointer"
          >
            <div className="flex flex-col">
              <span className="text-xs font-medium">Bently Ericson</span>
              <span className="text-xs">(774) 905-2255</span>
            </div>
          </div>
        </div>
      </div>
      {showDialer && <Dialer onClose={() => setShowDialer(false)} name={name} phoneNumber={phoneNumber} />}
    </div>
  );
}

export default ConnectionStatus;