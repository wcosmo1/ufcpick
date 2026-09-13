import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import { EventDashboard } from "./pages/EventDashboard";
import { FightCardPage } from "./pages/FightCardPage";

export default function App() {
  return (
    <BrowserRouter basename="/ufcpick">
      <Layout>
        <Routes>
          <Route path="/" element={<EventDashboard />} />
          <Route path="/event/:eventId" element={<FightCardPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
