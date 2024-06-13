import { Routes, Route, Navigate } from "react-router-dom";

// import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProtectedRoute from "./components/protectedRoute";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Notfound from "./pages/NotFound";

function Logout() {
  localStorage.clear();
  return <Navigate to="/login" />;
}

function RegisterAndLogout() {
  localStorage.clear();
  return <Register />;
}


export default function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<RegisterAndLogout />} />
        <Route path="*" element={<Notfound />}></Route>
      </Routes>
    </>
  );
}
