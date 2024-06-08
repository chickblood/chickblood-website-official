import React from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import Story from "./components/Story";
import "./translation/i18n";
import Playground from "./beta/Playground";
import CustomCursor from "./utils/CustomCursor";
import "./App.css";
import useFontFamily from "./hooks/useFontFamily";
import ThemeProvider from "./context/ThemeProvider";
import Blog from "./components/blog/Blog";
import Issue1 from "./components/blog/issues/Issue1";

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
      <ThemeProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<LandingPage />} />
            <Route path="/story" element={<Story />} />

            <Route path="/blog" element={<Blog />} />
          </Route>
          <Route path="/playground" element={<Playground />} />
          <Route path="/blog/issue1" element={<Issue1 />} />
        </Routes>
      </ThemeProvider>
    </React.Fragment>
  );
}

export default App;
