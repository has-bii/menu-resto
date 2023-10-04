import { ReactNode } from "react"
import Navbar from "../components/Navbar"

type Props = {
    children: ReactNode
}

export default function AppLayout({ children }: Props) {
    return (
        <div className="w-screen h-screen flex flex-row divide-x">
            <div className="w-auto h-full">
                <Navbar />
            </div>
            <div className="grow h-full overflow-auto">{children}</div>
        </div>
    )
}
