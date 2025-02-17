import { Nav } from "../components/nav"
import { UsernameCard } from "../components/username-card"
import logo from "../assets/Vector.svg"


export const Landing = () => {
    return (
        <div className=" background absolute inset-0 h-full w-screen flex flex-col">
            <Nav />
            <div className="flex flex-col md:flex-row justify-center items-center flex-grow gap-16">
                <div className="flex flex-col items-center gap-3">
                    <div>
                        <p className="text-gray-300 text-xl m-4 font-sans text-center">Show off your dev skills and share them with your friends.</p>
                    </div>
                    <div className="flex items-center gap-3">
                        <p className="text-white text-5xl font-extrabold">{"<"}</p>
                        <img src={logo} alt="" />
                        <p className="text-white text-5xl font-extrabold">{"/>"}</p>
                    </div>
                </div>
                <UsernameCard />
            </div>
        </div>
    )
}