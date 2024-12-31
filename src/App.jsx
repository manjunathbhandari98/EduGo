import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import CourseDetail from "./pages/CourseDetail";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Cart from "./pages/Cart";
import NotFound from "./pages/NotFound";
import Pricing from "./pages/Pricing";
import { useState } from "react";
import Forum from "./pages/Forum";

function App() {
  const [isLoggedIn, setIsLoggedIn] =
    useState(false);
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Navbar
          isLoggedIn={isLoggedIn}
          setIsLoggedIn={setIsLoggedIn}
        />
        <main className="flex-grow">
          <Routes>
            <Route
              path="/"
              element={<Home />}
            />
            <Route
              path="/course/:id"
              element={<CourseDetail />}
            />
            <Route
              path="/profile"
              element={<Profile />}
            />
            <Route
              path="/pricing"
              element={<Pricing />}
            />
            <Route
              path="/login"
              element={<Login />}
            />
            <Route
              path="/signup"
              element={<Signup />}
            />
            <Route
              path="/cart"
              element={<Cart />}
            />
            <Route
              path="/community"
              element={<Forum />}
            />
            <Route
              path="*"
              element={<NotFound />}
            />
          </Routes>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
