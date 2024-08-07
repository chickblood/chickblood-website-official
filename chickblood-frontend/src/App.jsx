import React from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./components/HomePage";
import GenerationalBruise from "./components/blog/generationalBruise/GenerationalBruise";
import BlogMain from "./components/blog/index/BlogMain";
import ContactMain from "./components/contact/ContactMain";
import EventHome from "./components/events/EventHome";
import MemberPage from "./components/member/MemberPage";
import "./translation/i18n";
import CustomCursor from "./utils/CustomCursor";

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
          {/* <Route path="/" element={<LandingPage />} /> */}
          <Route path="/member" element={<MemberPage />} />
          <Route path="/blog" element={<BlogMain />} />
          <Route path="/contact" element={<ContactMain />} />
          <Route path="/eventhome" element={<EventHome />} />
          <Route path="/blog/genbruise" element={<GenerationalBruise />} />
        </Route>
      </Routes>
    </React.Fragment>
  );
}
