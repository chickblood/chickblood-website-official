import React from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import Story from "./components/Story";
import "./translation/i18n";
import Playground from "./beta/Playground";
import CustomCursor from "./utils/CustomCursor";
import "./App.css";
import useFontFamily from "./hooks/useFontFamily";

function Layout({ children }) {
  return (
    <>
      <CustomCursor></CustomCursor>
      <Outlet></Outlet>
    </>
  );
}

function App() {
  useFontFamily();
  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<LandingPage />} />
          <Route path="/story" element={<Story />} />
          <Route path="/playground" element={<Playground />} />
        </Route>
      </Routes>
    </React.Fragment>
  );
}

export default App;
