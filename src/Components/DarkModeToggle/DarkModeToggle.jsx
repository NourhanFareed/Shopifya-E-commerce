/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable no-constant-condition */
import { useEffect } from "react"
import localStorage from "use-local-storage"



export default function DarkModeToggle() {

    // const [mode, setMode] = useState(localStorage.getItem("theme") ?? "light");
    const [mode, setMode] = localStorage("mode" ? "dark" : "light");


    useEffect(() => {
        if (mode === "dark") {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }


    }, [mode])

    const handleModeSwitch = () => {
        setMode(mode === "dark" ? "light" : "dark");
    }





    return (
        <div className="flex justify-end items-center mt-2">
            <div className=" bg-transparent">
                <button onClick={handleModeSwitch} className="btn btn-ghost dark:btn-ghost h-12 w-12 rounded-full p-2 pt-1">
                    <svg className="fill-[#4608a2] block dark:hidden ps-1 rotate-6" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                    </svg>
                    <svg className="fill-yellow-300 hidden dark:block" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" fillRule="evenodd" clipRule="evenodd" />
                    </svg>
                </button>
            </div>

        </div>







    )
}
