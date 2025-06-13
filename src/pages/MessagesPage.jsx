import { useState } from "react";
import ContactsList from "../components/ContactsList";
import ChatPanel from "../components/ChatPanel";
import ContactDetails from "../components/ContactDetails";
import ConnectionStatus from "../components/ConnectionStatus";

function MessagesPage() {
  const [selectedContact, setSelectedContact] = useState({
    id: "2",
    name: "Walter Bowman",
    phone: "(543) 236-3855",
    avatar: "/placeholder.svg?height=40&width=40",
    status: "gold",
  });

  return (
    <div className="flex h-full">
      <ContactsList selectedContact={selectedContact} onSelectContact={setSelectedContact} />
      <div className="flex-1 flex flex-col relative">
        <ConnectionStatus />
        <ChatPanel selectedContact={selectedContact} />
      </div>
      <ContactDetails contact={selectedContact} />
    </div>
  );
}

export default MessagesPage;