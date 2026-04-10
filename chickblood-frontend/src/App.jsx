import { lazy, Suspense } from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import "./App.css";
import "./translation/i18n";
import CustomCursor from "./utils/CustomCursor";
import { Box } from "@mui/material";
import LoadingPage from "./utils/LoadingPage";

const LandingPage = lazy(() => import("./components/LandingPage"));
const HomePage = lazy(() => import("./components/home/HomePage"));
const GenerationalBruise = lazy(() => import("./components/blog/generationalBruise/GenerationalBruise"));
const BlogMain = lazy(() => import("./components/blog/index/BlogMain"));
const ContactMain = lazy(() => import("./components/contact/ContactMain"));
const EventHome = lazy(() => import("./components/events/EventHome"));
const MemberPage = lazy(() => import("./components/member/MemberPage"));
const EventCalendar = lazy(() => import("./components/events/EventCalendar"));
const DayOne = lazy(() => import("./components/events/eventPages/DayOne"));
const ThatsMyPoster = lazy(() => import("./components/events/eventPages/ThatsMyPoster"));

function Layout({ children }) {
  return (
    <Box sx={{ height: "100vh", width: "100vw", overflow: "hidden" }}>
      <CustomCursor></CustomCursor>
      <Outlet></Outlet>
    </Box>
  );
}
export default function App() {
  return (
    <Suspense fallback={<LoadingPage openLoader={true} handleClose={() => {}} />}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<LandingPage />} />
          <Route path="/member" element={<MemberPage />} />
          <Route path="/blog" element={<BlogMain />} />
          <Route path="/contact" element={<ContactMain />} />
        </Route>
        <Route path="/home" element={<HomePage />} />
        <Route path="/eventhome" element={<EventHome />} />
        <Route path="/eventcalendar" element={<EventCalendar />} />
        <Route path="/blog/genbruise" element={<GenerationalBruise />} />
        <Route path="/dayone" element={<DayOne />} />
        <Route path="/thatsmypo" element={<ThatsMyPoster />} />
      </Routes>
    </Suspense>
  );
}
