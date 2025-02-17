import { BubbleText } from "./logo"


export const Nav = () => {
    const handleOpenNewTab = () => {
        window.open('https://github.com/ks-iitjmu/devcard', '_blank')
    }
    return (
        <div className="flex justify-between px-10 py-3 items-center">
            <BubbleText />
            <div>
            <button className="relative inline-block h-8 sm:h-10 font-semibold group px-4 " onClick={handleOpenNewTab}>
                <span className="absolute inset-0 w-full h-full transition duration-400 ease-out transform translate-x-1 translate-y-1 bg-white group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                <span className="absolute inset-0 w-full h-full bg-white border border-black group-hover:bg-white"></span>
                <span className="relative text-black flex items-center gap-1">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-4">
                <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clip-rule="evenodd" />
                </svg>
                Github
                </span>
            </button>
            </div>
        </div>
    )
}