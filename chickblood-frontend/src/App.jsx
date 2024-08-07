import React from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import "./translation/i18n";
import CustomCursor from "./utils/CustomCursor";
import "./App.css";

function Layout({ children }) {
  return (
    <>
      <CustomCursor></CustomCursor>
      <Outlet></Outlet>
    </>
  );
}
export default function App() {
  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/home" element={<HomePage />} />
          {/* <Route path="/" element={<LandingPage />} />
            <Route path="/member" element={<MemberPage />} />
            <Route path="/blog" element={<BlogMain />} />
            <Route path="/contact" element={<ContactMain />} />
            <Route path="/eventhome" element={<EventHome />} />
            <Route path="/blog/genbruise" element={<GenerationalBruise />} /> */}
        </Route>
      </Routes>
    </React.Fragment>
  );
}
