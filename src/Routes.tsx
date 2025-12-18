import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import Navbar from "./Components/Navbar/Navbar";
import Login from "./Pages/Login";
import Plans from "./Pages/Plans";
import Footer from "./Components/Navbar/Footer";
import Movies from "./Pages/Movies";
import Genre from "./Pages/Genre";
import MyList from "./Pages/MyList";
import NoFound from "./Pages/NoFound";

function Logout() {
  localStorage.clear();
  return <Navigate to="/" />;
}

function AppRoutes() {
  const location = useLocation(); 
  const hideOnLogin = ["/login", "/register", "/plans"].includes(location.pathname);
  const hideNavbarAndFooter = hideOnLogin;

  return (
    <div className="min-h-screen flex flex-col">
      {!hideNavbarAndFooter && <Navbar />}

      <main className="flex-1">
        <Routes>
          <Route path="/logout" element={<Logout />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/plans" element={<Plans />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/genres" element={<Genre />} />
          <Route path="/my-list" element={<MyList />} />
          <Route path="*" element={<NoFound />} />
        </Routes>
      </main>

      {!hideNavbarAndFooter && <Footer />}
    </div>
  );
}

export default AppRoutes;