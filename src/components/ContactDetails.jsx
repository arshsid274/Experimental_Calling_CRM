import { useState } from "react";
import Dialer from "./Dialer";

function ContactDetails({ contact }) {
  const [showDialer, setShowDialer] = useState(false);

  return (
    <div className="w-80 h-full overflow-auto">
      <div className="p-4 flex flex-col items-center border-b border-gray-200">
        <div className="h-16 w-16 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
          <img src={contact.avatar || "/placeholder.svg"} alt={contact.name} className="h-full w-full object-cover" />
        </div>
        <h2 className="font-semibold mt-2">{contact.name}</h2>
        <div className="flex items-center gap-1 text-sm text-gray-500">
          <span className="cursor-pointer hover:text-[#3b82f6]" onClick={() => setShowDialer(true)}>
            {contact.phone}
          </span>
          <span className="px-1 py-0.5 text-xs bg-[#fef9c3] text-[#ca8a04] border border-[#fde047] rounded">GOLD</span>
        </div>

        <div className="flex gap-3 mt-3">
          <button
            className="h-10 w-10 rounded-full flex items-center justify-center hover:bg-gray-100"
            onClick={() => setShowDialer(true)}
          >
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
          <button className="h-10 w-10 rounded-full flex items-center justify-center hover:bg-gray-100">
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
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
            </svg>
          </button>
          <button className="h-10 w-10 rounded-full flex items-center justify-center hover:bg-gray-100">
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
              <polygon points="23 7 16 12 23 17 23 7"></polygon>
              <rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect>
            </svg>
          </button>
          <button className="h-10 w-10 rounded-full flex items-center justify-center hover:bg-gray-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5 text-[#eab308]"
            >
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
            </svg>
          </button>
          <button className="h-10 w-10 rounded-full flex items-center justify-center hover:bg-gray-100">
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
              <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
              <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
            </svg>
          </button>
        </div>
      </div>

      <div className="p-4 border-b border-gray-200">
        <h3 className="font-medium text-sm mb-2">All Numbers</h3>

        <div className="space-y-3">
          <div>
            <div className="flex items-center">
              <span className="text-xs text-gray-500">Home</span>
              <span className="ml-2 px-1 py-0.5 text-xs bg-[#fef9c3] text-[#ca8a04] border border-[#fde047] rounded">
                PRIMARY
              </span>
            </div>
            <div className="text-sm">543-234-5678</div>
          </div>

          <div>
            <div className="flex items-center">
              <span className="text-xs text-gray-500">Work</span>
              <span className="ml-2 px-1 py-0.5 text-xs bg-[#cffafe] text-[#0891b2] border border-[#a5f3fc] rounded">
                BUSINESS
              </span>
            </div>
            <div className="text-sm">775-453-2264</div>
          </div>

          <button className="text-xs text-[#3b82f6] hover:underline flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-3 w-3 mr-1"
            >
              <line x1="12" y1="5" x2="12" y2="19"></line>
              <line x1="5" y1="12" x2="19" y2="12"></line>
            </svg>
            Add Number
          </button>
        </div>
      </div>

      <div className="p-4 border-b border-gray-200">
        <h3 className="font-medium text-sm mb-2">About this Contact</h3>

        <div className="space-y-3 text-sm">
          <div className="flex items-center gap-2">
            <span className="text-gray-500 w-24">Source:</span>
            <span>TechSoft Integration</span>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-gray-500 w-24">Created:</span>
            <span>May 14, 2023</span>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-gray-500 w-24">City & State:</span>
            <span>Sunnyvista, CA</span>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-gray-500 w-24">Company Info:</span>
            <span>www.example.com</span>
          </div>
        </div>
      </div>

      <div className="p-4 border-b border-gray-200">
        <div className="flex items-center justify-between mb-2">
          <h3 className="font-medium text-sm">Tags</h3>
          <button className="text-xs text-[#3b82f6] hover:underline flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-3 w-3 mr-1"
            >
              <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
              <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
            </svg>
            Modify Tags
          </button>
        </div>

        <div className="flex flex-wrap gap-2">
          <span className="px-2 py-1 text-xs bg-gray-100 rounded-full">Auto Repair</span>
          <span className="px-2 py-1 text-xs bg-[#dbeafe] text-[#1d4ed8] rounded-full">Luxury Rim Tag</span>
        </div>
      </div>

      <div className="p-4 border-b border-gray-200">
        <h3 className="font-medium text-sm mb-2">Notes</h3>
        <p className="text-sm text-gray-700">It was nice speaking to you today to go over all options.</p>
      </div>

      <div className="p-4">
        <h3 className="font-medium text-sm mb-2">Integrations</h3>

        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <div className="h-6 w-6 bg-[#f97316] rounded-md flex items-center justify-center text-white text-xs font-bold">
              H
            </div>
            <span className="text-sm">HubSpot</span>
          </div>

          <div className="flex items-center gap-2">
            <div className="h-6 w-6 bg-[#3b82f6] rounded-md flex items-center justify-center text-white text-xs font-bold">
              V
            </div>
            <span className="text-sm">Vulcan Enterprises</span>
          </div>
        </div>
      </div>
      {showDialer && <Dialer onClose={() => setShowDialer(false)} name={contact.name} phoneNumber={contact.phone} />}
    </div>
  );
}

export default ContactDetails;