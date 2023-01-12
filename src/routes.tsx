import { createBrowserRouter } from "react-router-dom";
import Main from "./pages/Main";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsAndCondtions from "./pages/TermsAndCondtions";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
    }, 
    {
        path: "/terms-and-conditions",
        element: <TermsAndCondtions/>,
    },
    {
        path: "/privacy-policy",
        element: <PrivacyPolicy/>,
    }
])