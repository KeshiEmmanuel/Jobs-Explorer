import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <main className="max-container">
      <Navbar />
      <Outlet />
    </main>
  );
}
