import { RouterProvider, createBrowserRouter } from "react-router-dom"
import ReactDOM from "react-dom/client"
import Home from "./routes/Home"
import React from "react"
import "./styles/index.css"

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
])

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
)
