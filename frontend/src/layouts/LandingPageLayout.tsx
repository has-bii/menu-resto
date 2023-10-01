import { ReactNode } from "react"
import Navbar from "../components/Navbar"

type Props = {
    children: ReactNode
}

export default function LandingPageLayout({ children }: Props) {
    return (
        <div className="container mx-auto">
            <Navbar />
            {children}
        </div>
    )
}
