import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home";
import InventoryPage from "./pages/Inventory";
function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="inventory" element={<InventoryPage />} />
    </Routes>
  );
}

export default App;
