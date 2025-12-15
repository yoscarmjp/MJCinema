import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import HomePage from "./Pages/HomePage";

function Logout() {
  localStorage.clear();
  return <Navigate to="/" />;
}

function AppRoutes() {
  const location = useLocation(); 
  const hideOnLogin = ["/login", "/register"].includes(location.pathname);
  const hideNavbarAndFooter = hideOnLogin;

  return (
    <div className="min-h-screen flex flex-col">
      {/* {!hideNavbarAndFooter && <Navbar />} */}

      <main className="flex-1">
        <Routes>
          <Route path="/logout" element={<Logout />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
      </main>

      {/* {!hideNavbarAndFooter && <Footer />} */}
    </div>
  );
}

export default AppRoutes;