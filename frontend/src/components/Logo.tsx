import { faBowlRice } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "react-router-dom"

type Props = {
    className?: string
}

export default function Logo({ className }: Props) {
    return (
        <Link to={"/"} className={`inline-flex items-center gap-3 ${className}`}>
            <FontAwesomeIcon icon={faBowlRice} size="2xl" className=" text-orange-500" />
            <span className="font-extrabold text-black text-xl">My Menu</span>
        </Link>
    )
}
