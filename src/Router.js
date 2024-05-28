import React from "react"
import Content from "./components/Content";
import JobCard from "./components/JobCard";
import Login from "./components/Login";
import Qualification from "./components/Qualification";
import Register from "./components/Register";
import Settings from "./components/settings";
import StudentNotifications from "./components/StudentNotifications";
import About from "./components/about";
import CompanyNotifications from "./components/CompanyNotifications";
import LandingPage from "./components/LandingPage";
import { createBrowserRouter } from "react-router-dom";
import Notificationspage from "./components/Notificationspage";
import Homepage from "./components/Homepage";
import CompanyProfile from "./components/CompanyProfile";
import MyApplicationForm from "./components/MyApplicationForm";
import CompanySidebar from "./components/CompanySidebar";
import JobMatchingAlgorithm from "./Algorithm/JobMatchingAlgorithm";
import NewjobModal from "./components/Job/NewjobModal";
import FeedbackForm from "./components/FeedbackForm";


const router = createBrowserRouter([
    {
        path: "/",
        element: <LandingPage/>,
    },
    {
        path: "/studentnotifications",
        element: <StudentNotifications/>,
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
    }
    ,
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
        path: "/jobs",
        element: <JobCard/>,
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
    { path: "/applicationform",
    element: <MyApplicationForm/>
},
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