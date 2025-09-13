// App.jsx
import { Routes, Route } from "react-router-dom";
import { SignIn, SignUp } from "@clerk/clerk-react";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import About from "./pages/About";
import Documentation from "./pages/Documentation";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import FirestoreTest from "./components/FirestoreTest";
// 👈 Import dashboard entry

export default function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/documentation" element={<Documentation />} />
        <Route path="/contact" element={<Contact />} />

        {/* ✅ Firestore Test Route */}
        <Route path="/firestore-test" element={<FirestoreTest />} />

        {/* Clerk Auth Pages */}
        <Route path="/sign-in/*" element={<SignIn routing="path" path="/sign-in" />} />
        <Route path="/sign-up/*" element={<SignUp routing="path" path="/sign-up" />} />

        {/* ✅ Dashboard with UUID param */}
      </Routes>
      <Footer />
    </>
  );
}