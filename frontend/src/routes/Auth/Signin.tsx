import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import AuthLayout from "../../layouts/AuthLayout"
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"
import { Link } from "react-router-dom"
import image from "../../images/register-img.jpg"

export default function Signin() {
    const [showPassword, setShowPassword] = useState(false)
    const [saveMe, setSaveMe] = useState(false)

    return (
        <AuthLayout image={image}>
            <div className="card-head">Welcome Back!</div>
            <div className="card-subhead">
                Sign in to access your account and continue your journey with us.
            </div>

            <form className="auth-form">
                <label htmlFor="email-input">Email</label>
                <input type="email" id="email-input" placeholder="Enter your email" />
                <label htmlFor="password-input">Password</label>
                <div className="input-container">
                    <input
                        type={showPassword ? "text" : "password"}
                        id="password-input"
                        placeholder="Enter your password"
                        className="bg-transparent"
                    />
                    <button type="button" onClick={() => setShowPassword(!showPassword)}>
                        <FontAwesomeIcon icon={showPassword ? faEye : faEyeSlash} />
                    </button>
                </div>
                <div className="inline-flex justify-between items-center">
                    <label className="font-semibold inline-flex gap-2 items-center hover:text-orange-500 transition-colors duration-200 ease-in">
                        <input
                            type="checkbox"
                            id="save-input"
                            className="w-4 h-4 accent-orange-500 text-white"
                            checked={saveMe}
                            onChange={() => setSaveMe(!saveMe)}
                        />
                        Save me
                    </label>
                    <Link
                        to={"/auth/forgot"}
                        className="font-semibold hover:text-orange-500 transition-colors duration-200 ease-in"
                    >
                        Forgot password?
                    </Link>
                </div>
                <button className="px-4 py-2 rounded-3xl bg-orange-500 text-white font-semibold mt-2 hover:shadow-md hover:shadow-orange-500/50 transition-all duration-200 ease-in-out">
                    Login
                </button>
                <div className="text-center text-neutral-400 mt-1">
                    Don't have an account?{" "}
                    <Link
                        to={"/auth/register"}
                        className="font-semibold text-orange-500 hover:underline underline-offset-2"
                    >
                        Sign Up
                    </Link>
                </div>
            </form>
        </AuthLayout>
    )
}
