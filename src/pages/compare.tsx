import { useSearchParams } from "react-router-dom"
import { Nav } from "../components/nav";
import { CompareData } from "../components/compare";


export const Compare = () => {
    const [searchParams] = useSearchParams()
    const leetcodeUsername = searchParams.get('leetcodeUsername');
    const githubUsername = searchParams.get('githubUsername');
    
    return (
        <div className="bg-black bg-[radial-gradient(#ffffff20_1px,transparent_1px)] [background-size:24px_24px] h-screen flex flex-col">
            <Nav />
            <div className="flex items-center flex-grow justify-center">
            <CompareData leetcodeUsername = {leetcodeUsername} githubUsername={githubUsername} />
            </div>
        </div>
)
}