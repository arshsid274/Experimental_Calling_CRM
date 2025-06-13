const contacts = [
  {
    id: "1",
    name: "Susan Daniel",
    phone: "+1 (415) 555-1234",
    avatar: "/placeholder.svg?height=40&width=40",
    lastActive: "2m",
    hasUnread: false,
  },
  {
    id: "2",
    name: "Walter Bowman",
    phone: "+1 (415) 236-3855",
    avatar: "/placeholder.svg?height=40&width=40",
    lastActive: "5m",
    hasUnread: true,
    isActive: true,
  },
  {
    id: "3",
    name: "Terry MacGuire",
    phone: "+1 (415) 555-4567",
    avatar: "/placeholder.svg?height=40&width=40",
    lastActive: "10m",
    hasUnread: true,
  },
  {
    id: "4",
    name: "Jennifer Lopez",
    phone: "+1 (415) 555-7890",
    avatar: "/placeholder.svg?height=40&width=40",
    lastActive: "15m",
    hasUnread: true,
  },
  {
    id: "5",
    name: "Steve Darwin",
    phone: "+1 (415) 555-2345",
    avatar: "/placeholder.svg?height=40&width=40",
    lastActive: "30m",
    hasUnread: true,
  },
  {
    id: "6",
    name: "Jeff Martin",
    phone: "+1 (415) 555-3456",
    avatar: "/placeholder.svg?height=40&width=40",
    lastActive: "1h",
    hasUnread: false,
  },
  {
    id: "7",
    name: "Sam Leffler",
    phone: "+1 (415) 555-5654",
    avatar: "/placeholder.svg?height=40&width=40",
    lastActive: "2h",
    hasUnread: true,
  },
  {
    id: "8",
    name: "Clara Winslet",
    phone: "+1 (415) 555-6543",
    avatar: "/placeholder.svg?height=40&width=40",
    lastActive: "3h",
    hasUnread: false,
  },
  {
    id: "9",
    name: "Alan Wilbanks",
    phone: "+1 (415) 555-8765",
    avatar: "/placeholder.svg?height=40&width=40",
    lastActive: "5h",
    hasUnread: false,
  },
  {
    id: "10",
    name: "Jennifer Scalzi",
    phone: "+1 (415) 555-9876",
    avatar: "/placeholder.svg?height=40&width=40",
    lastActive: "1d",
    hasUnread: false,
  },
  {
    id: "11",
    name: "Jane Cameron",
    phone: "+1 (415) 555-3456",
    avatar: "/placeholder.svg?height=40&width=40",
    lastActive: "2d",
    hasUnread: false,
  },
  {
    id: "12",
    name: "Mark Pittson",
    phone: "+1 (415) 234-2345",
    avatar: "/placeholder.svg?height=40&width=40",
    lastActive: "3d",
    hasUnread: false,
  },
];

function ContactsList({ selectedContact, onSelectContact }) {
  return (
    <div className="w-72 border-r border-gray-200 flex flex-col h-full">
      <div className="flex items-center justify-between p-4 border-b border-gray-200">
        <div className="flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-4 h-4 text-gray-500"
          >
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
          <span className="font-medium">Contacts</span>
        </div>
        <div className="flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-4 h-4 text-gray-500"
          >
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-4 h-4 text-gray-500"
          >
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </div>
      </div>
      <div className="p-3">
        <div className="relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
          <input
            type="search"
            placeholder="Search contacts..."
            className="pl-8 bg-gray-100 border-0 rounded-md w-full py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>
      </div>
      <div className="overflow-auto flex-1">
        {contacts.map((contact) => (
          <div
            key={contact.id}
            className={`flex items-center justify-between p-3 cursor-pointer hover:bg-gray-50 ${
              selectedContact.id === contact.id ? "bg-blue-50" : ""
            }`}
            onClick={() => onSelectContact(contact)}
          >
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
                  <img
                    src={contact.avatar || "/placeholder.svg"}
                    alt={contact.name}
                    className="h-full w-full object-cover"
                  />
                </div>
                {contact.isActive && (
                  <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-green-500 border-2 border-white"></span>
                )}
              </div>
              <div>
                <div className="font-medium text-sm">{contact.name}</div>
                <div className="text-xs text-gray-500">{contact.phone}</div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs text-gray-500">{contact.lastActive}</span>
              {contact.hasUnread && <div className="w-2 h-2 rounded-full bg-[#ef4444]"></div>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ContactsList;