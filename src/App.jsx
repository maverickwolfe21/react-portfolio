import "./App.css";
import { Outlet } from "react-router-dom";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <div className="flex flex-col items-center">
      <Header />

      <div>
        <Outlet />
      </div>

      {/* Import Footer */}
      <Footer />
    </div>
  );
}
