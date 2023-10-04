import { RouterProvider, createBrowserRouter } from "react-router-dom"
import ReactDOM from "react-dom/client"
import Home from "./routes/Home"
import React from "react"
import "./styles/index.css"
import Signin from "./routes/Auth/Signin"
import Register from "./routes/Auth/Register"
import Forgot from "./routes/Auth/Forgot"
import App from "./routes/App/App"
import { ToastProvider } from "./providers/ToastProvider"

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/auth",
        element: <Signin />,
    },
    {
        path: "/auth/register",
        element: <Register />,
    },
    {
        path: "/auth/forgot",
        element: <Forgot />,
    },
    {
        path: "/app",
        element: <App />,
    },
])

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <ToastProvider>
            <RouterProvider router={router} />
        </ToastProvider>
    </React.StrictMode>
)
