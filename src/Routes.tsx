import { Routes, Route, useLocation, Navigate } from "react-router-dom";

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
          {/* <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="*" element={<NoFound />} /> */}
        </Routes>
      </main>

      {/* {!hideNavbarAndFooter && <Footer />} */}
    </div>
  );
}

export default AppRoutes;