import {RouteObject} from "react-router-dom";
import React from "react";
import Home from "../views/Home";
import About from "../views/About";
import OccultKnowledge from "../views/OccultKnowledge";
import My from "../views/My";
import Login from "../views/Login";

const routesConfig: RouteObject[] = [
    {
        element: <Login/>,
        path: "/",
    },
    {
        element: <Login/>,
        path: "/login",
    },
    {
        element: <Home/>,
        path: "/home",
        // children: [
        //     {
        //         path: "/home",
        //         element: <Home/>,
        //     },
        //     // {
        //     //     path: "about",
        //     //     element: <About/>,
        //     // },
        //     // {
        //     //     path: "/corp-list/:id",
        //     //     element: DetailCorp,
        //     // },
        // ],
    },
    {
        element: <About/>,
        path: "/about",
    },
    {
        element: <OccultKnowledge/>,
        path: "/ockn",
    },
    {
        element: <My/>,
        path: "/me",
    },
    // {
    //     element: <AboutComponent />,
    //     path: "/about",
    // },
    // {
    //     children: [
    //         {
    //             path: "auth/login",
    //             element: Login,
    //         },
    //         {
    //             path: "auth/signup",
    //             element: Login,
    //         },
    //     ],
    // },
];


export default routesConfig;
