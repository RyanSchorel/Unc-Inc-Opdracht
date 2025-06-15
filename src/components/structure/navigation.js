
import { Home } from "../pages/Home"
import { Login } from "../pages/Login"
import { Private } from "../pages/Private"
import { Dashboard } from "../pages/Dashboard"



export const nav = [
     { path: "/", name: "Home", element: <Home />, isMenu: true, isPrivate: false },
     { path: "/login", name: "Login", element: <Login />, isMenu: false, isPrivate: false },
     { path: "/private", name: "Private", element: <Private />, isMenu: true, isPrivate: true },
     { path: "/dashboard", name: "Dashboard", element: <Dashboard />, isMenu: true, isPrivate: true },




]