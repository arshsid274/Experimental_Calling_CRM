import { Routes, Route } from "react-router-dom";
import NavigationSidebar from "./components/NavigationSidebar";
import MessagesPage from "./pages/MessagesPage";
import CallsPage from "./pages/CallsPage";
import CallDetailsPage from "./pages/CallDetailsPage";
import NotesPage from "./pages/NotesPage";
import AnalyticsPage from "./pages/AnalyticsPage";
import SettingsPage from "./pages/SettingsPage";

function App() {
  return (
    <div className="flex h-screen bg-white">
      <NavigationSidebar />
      <div className="flex flex-1 flex-col relative">
        <Routes>
          <Route path="/" element={<MessagesPage />} />
          <Route path="/messages" element={<MessagesPage />} />
          <Route path="/calls" element={<CallsPage />} />
          <Route path="/call-details" element={<CallDetailsPage />} />
          <Route path="/notes" element={<NotesPage />} />
          <Route path="/analytics" element={<AnalyticsPage />} />
          <Route path="/settings" element={<SettingsPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
