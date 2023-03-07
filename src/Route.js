import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "./Components/Home";
import ListAll from "./Components/ListAll";

const Router=()=>{
  let routes = useRoutes([
    {
        path: '/',
        element: <Home />
    },
    {
      path:'list',
      element: <ListAll />
    }
  ])
  return routes;
}

export default Router;