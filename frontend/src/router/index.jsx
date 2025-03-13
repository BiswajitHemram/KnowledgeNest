import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import App from "../App";
import Home from "../components/Home/Home";
import CommonCard from "../components/Home/CommonCard";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<Home />} />
      <Route path="/test" element={<CommonCard />} />
    </Route>
  )
);


export default router;
