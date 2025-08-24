import App from "@/App";
import Login from "@/Pages/Auth/Login";
import Signup from "@/Pages/Auth/Signup";
import About from "@/Pages/Website/About/About";
import Contact from "@/Pages/Website/Contact/Contact";
import Faq from "@/Pages/Website/Faq/Faq";
import Feature from "@/Pages/Website/Feature/Feature";
import Home from "@/Pages/Website/Home/Home.tsx";
import Pricing from "@/Pages/Website/Pricing/Pricing";
import { createBrowserRouter } from "react-router";

export const router = createBrowserRouter([
  {
    Component: App,
    path: "/",
    children: [
      {
        Component: Home,
        path: "/",
      },
      {
        Component: About,
        path: "about",
      },
      {
        Component: Feature,
        path: "feature",
      },
      {
        Component: Pricing,
        path: "pricing",
      },
      {
        Component: Faq,
        path: "faq",
      },
      {
        Component: Contact,
        path: "contact",
      },
      {
        Component: Login,
        path: "login",
      },
      {
        Component: Signup,
        path: "signup",
      },
    ],
  },
]);
