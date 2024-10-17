import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home";
import InventoryPage from "./pages/Inventory";
import DebugPage from "./pages/debug";
function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/inventory" element={<InventoryPage />} />
      <Route path="/debug" element={<DebugPage />} />
    </Routes>
  );
}

export default App;
