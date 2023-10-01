import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import LandingPageLayout from "../layouts/LandingPageLayout"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
import macbook from "../images/macbook.png"

export default function Home() {
    return (
        <LandingPageLayout>
            {/* Hero */}
            <div className="w-full h-[calc(100vh-80px)] lg:h-[calc(100vh-90px)] flex flex-col items-center gap-2 lg:gap-4 relative overflow-hidden">
                <h1 className="text-4xl lg:text-8xl text-center font-bold lg:font-semibold px-4 lg:px-0 pt-10 lg:pt-24">
                    Effortless Online Menus <br className="hidden lg:block" /> for Your Restaurant
                </h1>
                <h4 className="text-xl lg:text-2xl text-center font-light text-neutral-400 px-4 lg:px-0">
                    Create, Update, and Showcase Your Delicious Dishes with Ease
                </h4>
                <button className="capitalize w-fit inline-flex items-center gap-6 pl-6 pr-2 py-2 mt-4 text-lg text-white font-semibold bg-orange-500 rounded-full">
                    get started
                    <div className="w-10 h-10 bg-white text-orange-500 rounded-full relative">
                        <FontAwesomeIcon
                            icon={faArrowRight}
                            size="lg"
                            className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2"
                        />
                    </div>
                </button>
                <div className="static mt-4 lg:mt-0 lg:absolute -z-10 bottom-10 lg:-bottom-52 lg:left-1/2 lg:-translate-x-1/2 w-full px-4 lg:px-0 lg:w-4/5">
                    <img src={macbook} alt="" className="w-full h-full" loading="eager" />
                </div>
            </div>
        </LandingPageLayout>
    )
}
