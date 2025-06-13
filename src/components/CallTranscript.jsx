import { Search, ChevronLeft, ChevronRight, Mic, Clock, PhoneCall } from "lucide-react"
import Image from "../assets/download.png"

export default function CallHistory() {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Left Sidebar */}
      <div className="w-72 bg-white p-4 border-r border-gray-200">
        {/* Tabs */}
        <div className="flex space-x-2 mb-4">
          <button className="bg-blue-800 text-white px-4 py-1 rounded-full text-sm font-medium">All</button>
          <button className="bg-white text-gray-600 px-4 py-1 rounded-full text-sm font-medium border border-gray-200">
            Missed
          </button>
          <div className="ml-auto">
            <Search className="w-5 h-5 text-gray-400" />
          </div>
        </div>

        {/* Call List */}
        <div className="space-y-4 mt-6">
          {/* Missed Call */}
          <div className="flex items-start">
            <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center mr-3">
              <PhoneCall className="w-4 h-4 text-red-500" />
            </div>
            <div className="flex-1">
              <div className="flex items-center">
                <span className="text-red-500 font-medium">(262) 555-0131</span>
              </div>
              <div className="text-xs text-gray-500 mt-1">Missed Call · exp: 1</div>
              <div className="text-xs text-gray-400 mt-1">10 min</div>
            </div>
          </div>

          {/* Inbound Call */}
          <div className="flex items-start">
            <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-3">
              <PhoneCall className="w-4 h-4 text-blue-500" />
            </div>
            <div className="flex-1">
              <div className="flex items-center">
                <span className="text-blue-700 font-medium">(319) 555-0115</span>
              </div>
              <div className="text-xs text-gray-500 mt-1">Inbound Call · exp: 0</div>
              <div className="text-xs text-gray-400 mt-1">Sun, May 14</div>
            </div>
          </div>

          {/* Inbound Call */}
          <div className="flex items-start">
            <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-3">
              <PhoneCall className="w-4 h-4 text-blue-500" />
            </div>
            <div className="flex-1">
              <div className="flex items-center">
                <span className="text-blue-700 font-medium">(208) 555-0112</span>
              </div>
              <div className="text-xs text-gray-500 mt-1">Inbound Call · exp: 700</div>
              <div className="text-xs text-gray-400 mt-1">Fri, May 12</div>
            </div>
          </div>

          {/* Outbound Call */}
          <div className="flex items-start">
            <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center mr-3">
              <PhoneCall className="w-4 h-4 text-green-500" />
            </div>
            <div className="flex-1">
              <div className="flex items-center">
                <span className="text-green-700 font-medium">(571) 555-0110</span>
              </div>
              <div className="text-xs text-gray-500 mt-1">Outbound Call · exp: 0</div>
              <div className="text-xs text-gray-400 mt-1">Thu, Apr 27</div>
            </div>
          </div>

          {/* Outbound Call */}
          <div className="flex items-start">
            <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center mr-3">
              <PhoneCall className="w-4 h-4 text-green-500" />
            </div>
            <div className="flex-1">
              <div className="flex items-center">
                <span className="text-green-700 font-medium">(414) 555-0132</span>
              </div>
              <div className="text-xs text-gray-500 mt-1">Outbound Call · exp: 0</div>
              <div className="text-xs text-gray-400 mt-1">Wed, Apr 26</div>
            </div>
          </div>

          {/* Outbound Call */}
          <div className="flex items-start">
            <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center mr-3">
              <PhoneCall className="w-4 h-4 text-green-500" />
            </div>
            <div className="flex-1">
              <div className="flex items-center">
                <span className="text-green-700 font-medium">(480) 555-0103</span>
              </div>
              <div className="text-xs text-gray-500 mt-1">Outbound Call · exp: 0</div>
              <div className="text-xs text-gray-400 mt-1">Tue, Apr 25</div>
            </div>
          </div>

          {/* Inbound Call */}
          <div className="flex items-start">
            <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-3">
              <PhoneCall className="w-4 h-4 text-blue-500" />
            </div>
            <div className="flex-1">
              <div className="flex items-center">
                <span className="text-blue-700 font-medium">(208) 555-0112</span>
              </div>
              <div className="text-xs text-gray-500 mt-1">Inbound Call · exp: 700</div>
              <div className="text-xs text-gray-400 mt-1">Mon, Apr 24</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b border-gray-200 bg-white">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-blue-800">Recents</h1>
            <div className="flex ml-4">
              <button className="p-1 text-gray-400 hover:text-blue-800">
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button className="p-1 text-gray-400 hover:text-blue-800">
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
          <div className="flex items-center">
            <span className="text-gray-600 mr-2">Welcome! John Bravo</span>
            <div className="w-8 h-8 rounded-full bg-gray-200 overflow-hidden">
              {/* <Image
                src="/placeholder.svg?height=32&width=32"
                alt="Profile"
                width={32}
                height={32}
                className="object-cover"
              /> */}
            </div>
          </div>
        </div>

        {/* Call Details */}
        <div className="p-4">
          <div className="bg-gray-50 rounded-lg p-4 flex items-center justify-between">
            <div className="flex items-center">
              <div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden mr-4">
                {/* <Image
                  src="/placeholder.svg?height=48&width=48"
                  alt="Contact"
                  width={48}
                  height={48}
                  className="object-cover"
                /> */}
              </div>
              <div>
                <h2 className="text-xl font-bold text-blue-800">(319) 555-0115</h2>
                <p className="text-sm text-gray-500">Call to Arlene Fisher at exp. 0</p>
              </div>
            </div>
            <div className="flex space-x-2">
              <button className="p-2 rounded-full bg-gray-100 text-gray-500">
                <Mic className="w-5 h-5" />
              </button>
              <button className="p-2 rounded-full bg-gray-100 text-gray-500">
                <Clock className="w-5 h-5" />
              </button>
              <button className="p-2 rounded-full bg-green-500 text-white">
                <PhoneCall className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Call Info */}
          <div className="mt-4 flex items-center text-sm text-gray-500 space-x-4">
            <div className="flex items-center">
              <span className="text-gray-600">(319) 555-0115</span>
              <svg className="w-8 h-4 mx-1" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="1.5" fill="none" />
              </svg>
              <span className="text-gray-600">(308) 555-0121</span>
            </div>
            <div className="text-gray-400">Sun May 14 at 11:34 AM</div>
          </div>
          <div className="mt-2 flex items-center text-sm text-gray-500">
            <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24">
              <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="1.5" fill="none" />
            </svg>
            <span>Inbound Call - Exp. 0 (Representative)</span>
          </div>

          {/* Client Details */}
          <div className="mt-8">
            <div className="flex items-center mb-4">
              <h3 className="text-lg font-bold text-blue-800">Client details</h3>
              <button className="ml-2 text-blue-500">
                <svg className="w-4 h-4" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" fill="none" />
                  <path d="M12 8v8M8 12h8" stroke="currentColor" strokeWidth="1.5" />
                </svg>
              </button>
            </div>

            {/* Tabs */}
            <div className="flex border-b border-gray-200 mb-4">
              <button className="px-4 py-2 text-sm text-gray-600 border-b-2 border-blue-800">Uploaded Files</button>
              <button className="px-4 py-2 text-sm text-gray-400">Voicemail</button>
            </div>

            {/* Files */}
            <div className="flex space-x-4 mb-6">
              <div className="w-16 h-16 bg-red-100 rounded flex items-center justify-center">
                <span className="text-red-600 font-bold">PDF</span>
              </div>
              <div className="w-16 h-16 bg-blue-800 rounded flex items-center justify-center">
                <span className="text-white font-bold">DOC</span>
              </div>
            </div>

            {/* Voicemail */}
            <div className="bg-gray-50 rounded-lg p-4 flex items-center">
              <div className="flex-1">
                <div className="h-8 flex items-center">
                  {Array.from({ length: 40 }).map((_, i) => (
                    <div
                      key={i}
                      className="w-1 mx-0.5 bg-blue-800"
                      style={{
                        height: `${Math.sin(i * 0.5) * 16 + 20}%`,
                        opacity: i > 20 ? 0.5 : 1,
                      }}
                    />
                  ))}
                </div>
              </div>
              <div className="ml-4 flex items-center">
                <span className="text-gray-600 mr-2">00:36</span>
                <button className="w-8 h-8 rounded-full bg-blue-800 flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" viewBox="0 0 24 24">
                    <polygon points="5,3 19,12 5,21" fill="currentColor" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Message */}
            <div className="mt-6">
              <p className="text-gray-700">Dear John Bravo,</p>
              <p className="mt-4 text-gray-700">
                I am writing to inform you of our new pricing model effective February 1, 2019. On the first of
                February, we will be switching from an annual billing cycle to a quarterly billing cycle and this letter
                contains important information that may impact your organization.
              </p>
              <p className="mt-4 text-gray-700">
                Sincerely,
                <br />
                Arlene
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
