import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import AuthLayout from "../../layouts/AuthLayout"
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"
import { Link } from "react-router-dom"
import image from "../../images/register-img.jpg"

export default function Register() {
    const [showPassword, setShowPassword] = useState(false)
    const [aggree, setAggree] = useState(false)

    return (
        <AuthLayout image={image}>
            <div className="card-head">Join Us Today!</div>
            <div className="card-subhead">
                Register to unlock a world of exciting features and opportunities.
            </div>

            <form className="auth-form">
                <label htmlFor="fullname-input">Fullname</label>
                <input type="text" id="fullname-input" placeholder="Enter your full name" />
                <label htmlFor="email-input">Email</label>
                <input type="email" id="email-input" placeholder="Enter your email" />
                <label htmlFor="password-input">Password</label>
                <div className="input-container">
                    <input
                        type={showPassword ? "text" : "password"}
                        id="password-input"
                        placeholder="Enter your password"
                        className="bg-transparent w-full"
                    />
                    <button type="button" onClick={() => setShowPassword(!showPassword)}>
                        <FontAwesomeIcon icon={showPassword ? faEye : faEyeSlash} />
                    </button>
                </div>
                <div className="text-sm text-black font-semibold inline-flex gap-2 items-center">
                    <input
                        type="checkbox"
                        id="save-input"
                        className="w-4 h-4 accent-orange-500 text-white"
                        checked={aggree}
                        onChange={() => setAggree(!aggree)}
                    />
                    I agree to the Terms and Conditions.
                </div>
                <button className="px-4 py-2 rounded-3xl bg-orange-500 text-white font-semibold mt-2 hover:shadow-md hover:shadow-orange-500/50 transition-all duration-200 ease-in-out">
                    Register
                </button>
                <div className="text-center text-neutral-400 mt-1">
                    Already have an account?{" "}
                    <Link
                        to={"/auth"}
                        className="font-semibold text-orange-500 hover:underline underline-offset-2"
                    >
                        Sign In
                    </Link>
                </div>
            </form>
        </AuthLayout>
    )
}
