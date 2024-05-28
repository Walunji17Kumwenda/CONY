import Content from "./components/Content";

import FeedbackForm from "./components/FeedbackForm";
import React from "react";
import Login from "./components/Login";
import Register from "./components/Register";
import LandingPage from "./components/LandingPage";
import { createBrowserRouter } from "react-router-dom";
import CompanySidebar from "./components/CompanySidebar";
import CompanyProfile from "./components/CompanyProfile";
import Homepage from "./components/Homepage.js";
import About from "./components/about";
import Notificationspage from "./components/Notificationspage";
import Settings from "./components/settings";
import NewjobModal from "./components/Job/NewjobModal";
import CompanyNotifications from "./components/CompanyNotifications";
import JobMatchingAlgorithm from "./components/Algorithm/JobMatchingAlgorithm";
import Qualification from "./components/Qualification";


const router = createBrowserRouter([
    {
        path: "/",
        element: <LandingPage/>,
    },
    
    {
        path: "/companynotifications",
        element: <CompanyNotifications/>,
    }
    ,
    {
        path: "/profile",
        element: <CompanySidebar/>,
    },
    {
        path: "/jobs",
        element: <JobMatchingAlgorithm/>,
    },
    
    {
        path: "/content",
        element: <Content/>,
    },
    {
        path: "/about",
        element: <About/>,

    }
    ,
    {
        path: "/settings",
        element: <Settings/>,
    }
    ,  
    {
        path: "/apply",
        element: <Qualification/>,
    }
   
    ,
    {
        path: "/login",
        element: <Login/>,
    }
    ,
    {
        path: "/register",
        element: <Register/>,
    }
    ,
    {
        path: "/homepg",
        element: <Homepage/>,
    }
    ,
    {
        path: "/notifications",
        element: <Notificationspage/>,
    }
    ,
    {
        path:"/companyprofile",
        element:<CompanyProfile/>
    }
    ,
{
    path:"/jobpost",
    element: <NewjobModal/>
},
    {
        path:"/feedback",
        element: <FeedbackForm/>
    }
        
    
    
    
    
    

]);
export default router;