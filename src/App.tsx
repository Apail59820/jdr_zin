import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home";
import InventoryPage from "./pages/Inventory";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchActiveUser } from "./store/slices/userSlice";
import { AppDispatch } from "./store/store";

function App() {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchActiveUser());
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/inventory" element={<InventoryPage />} />
    </Routes>
  );
}

export default App;
