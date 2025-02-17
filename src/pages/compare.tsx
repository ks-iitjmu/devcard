import { useSearchParams } from "react-router-dom"
import { Nav } from "../components/nav";
import Footer from "../components/footer";
import { CompareData } from "../components/compare";


export const Compare = () => {
    const [searchParams] = useSearchParams()
    const leetcodeUsername = searchParams.get('leetcodeUsername');
    const githubUsername = searchParams.get('githubUsername');

    return (
        <div className="background h-screen flex flex-col">
            <Nav />
            <div className="flex items-center flex-auto justify-center">
                <CompareData leetcodeUsername={leetcodeUsername} githubUsername={githubUsername} />
            </div>
            <Footer></Footer>
        </div>
    )
}