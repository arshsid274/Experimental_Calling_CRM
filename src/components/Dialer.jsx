import { useState, useEffect } from "react";

function Dialer({ onClose, name, phoneNumber }) {
  const [callDuration, setCallDuration] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const [isHolding, setIsHolding] = useState(false);
  const [showDialPad, setShowDialPad] = useState(false);
  const [isRecording, setIsRecording] = useState(false);

  useEffect(() => {
    // Start call timer
    const timer = setInterval(() => {
      setCallDuration((prev) => prev + 1);
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const formatDuration = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
  };

  const toggleMute = () => setIsMuted(!isMuted);
  const toggleHold = () => setIsHolding(!isHolding);
  const toggleDialPad = () => setShowDialPad(!showDialPad);
  const toggleRecording = () => setIsRecording(!isRecording);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-[#0f172a] text-white rounded-lg w-[230px] overflow-hidden shadow-xl">
        {/* Header */}
        <div className="flex items-center justify-between p-2 border-b border-gray-700">
          <div className="text-sm font-medium">{formatDuration(callDuration)}</div>
          <div className="text-sm">Personal Line</div>
          <div className="flex items-center gap-2">
            <div className="flex items-center">
              <div className="h-2 w-2 bg-green-500 rounded-full mr-1"></div>
              <div className="h-2 w-2 bg-green-500 rounded-full mr-1"></div>
              <div className="h-2 w-2 bg-green-500 rounded-full"></div>
            </div>
            <button onClick={onClose} className="text-gray-400 hover:text-white">
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
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>
        </div>

        {/* Contact Info */}
        <div className="p-3 flex flex-col items-center">
          <div className="h-16 w-16 bg-gray-600 rounded-full flex items-center justify-center mb-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-8 w-8 text-gray-300"
            >
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
          </div>
          <div className="flex items-center">
            <div className="h-2 w-2 bg-green-500 rounded-full mr-2"></div>
            <h3 className="font-medium text-base">{name}</h3>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4 w-4 ml-1 text-blue-400"
            >
              <circle cx="12" cy="12" r="10"></circle>
              <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
              <line x1="12" y1="17" x2="12.01" y2="17"></line>
            </svg>
          </div>
          <div className="flex items-center gap-1 text-sm text-gray-300">
            <span>{phoneNumber}</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-3 w-3"
            >
              <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
              <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
            </svg>
          </div>
          <div className="text-xs text-gray-400 mt-1">Acme, Inc • 12:02 PM</div>
        </div>

        {/* Call Controls */}
        <div className="grid grid-cols-4 gap-2 p-2 border-t border-gray-700">
          <button
            onClick={toggleMute}
            className={`flex flex-col items-center ${isMuted ? "text-red-500" : "text-gray-300"}`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5 mb-1"
            >
              <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path>
              <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
              <line x1="12" y1="19" x2="12" y2="23"></line>
              <line x1="8" y1="23" x2="16" y2="23"></line>
            </svg>
            <span className="text-xs">Mute</span>
          </button>
          <button
            onClick={toggleHold}
            className={`flex flex-col items-center ${isHolding ? "text-yellow-500" : "text-gray-300"}`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5 mb-1"
            >
              <rect x="6" y="4" width="4" height="16"></rect>
              <rect x="14" y="4" width="4" height="16"></rect>
            </svg>
            <span className="text-xs">Hold</span>
          </button>
          <button
            onClick={toggleDialPad}
            className={`flex flex-col items-center ${showDialPad ? "text-blue-400" : "text-gray-300"}`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5 mb-1"
            >
              <rect x="3" y="3" width="4" height="4"></rect>
              <rect x="10" y="3" width="4" height="4"></rect>
              <rect x="17" y="3" width="4" height="4"></rect>
              <rect x="3" y="10" width="4" height="4"></rect>
              <rect x="10" y="10" width="4" height="4"></rect>
              <rect x="17" y="10" width="4" height="4"></rect>
              <rect x="3" y="17" width="4" height="4"></rect>
              <rect x="10" y="17" width="4" height="4"></rect>
              <rect x="17" y="17" width="4" height="4"></rect>
            </svg>
            <span className="text-xs">Dial Pad</span>
          </button>
          <button
            onClick={toggleRecording}
            className={`flex flex-col items-center ${isRecording ? "text-red-500" : "text-gray-300"}`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5 mb-1"
            >
              <circle cx="12" cy="12" r="10"></circle>
              <circle cx="12" cy="12" r="3"></circle>
            </svg>
            <span className="text-xs">Record</span>
          </button>
        </div>

        {/* Secondary Controls */}
        <div className="flex justify-between p-2 border-t border-gray-700">
          <button className="flex flex-col items-center text-gray-300 px-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5 mb-1"
            >
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
              <polyline points="14 2 14 8 20 8"></polyline>
              <line x1="16" y1="13" x2="8" y2="13"></line>
              <line x1="16" y1="17" x2="8" y2="17"></line>
              <polyline points="10 9 9 9 8 9"></polyline>
            </svg>
            <span className="text-xs">Notes</span>
          </button>
          <button className="flex flex-col items-center text-gray-300 px-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5 mb-1"
            >
              <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path>
              <line x1="7" y1="7" x2="7.01" y2="7"></line>
            </svg>
            <span className="text-xs">Tags</span>
          </button>
          <button className="flex flex-col items-center text-gray-300 px-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5 mb-1"
            >
              <polyline points="16 18 22 12 16 6"></polyline>
              <polyline points="8 6 2 12 8 18"></polyline>
            </svg>
            <span className="text-xs">Scripts</span>
          </button>
        </div>

        {/* Bottom Controls */}
        <div className="flex justify-center p-2 border-t border-gray-700">
          <button className="flex flex-col items-center justify-center bg-red-500 text-white rounded-full h-12 w-12">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Dialer;