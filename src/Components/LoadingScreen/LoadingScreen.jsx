
export default function LoadingScreen() {
    return (
        // <div className="flex justify-center items-center h-screen relative -mt-28 z-[100]" >
        //     <div className="animate-spin ease-linear rounded-full w-16 h-16 border-t-2 border-b-2 border-purple-500"></div>
        //     <div className="animate-spin ease-linear rounded-full w-16 h-16 border-t-2 border-b-2 border-red-500 ml-3"></div>
        //     <div className="animate-spin ease-linear rounded-full w-16 h-16 border-t-2 border-b-2 border-blue-500 ml-3"></div>
        // </div>


        <div className="min-h-screen  gap-4 -mt-40 w-full flex items-center justify-center">
            <div className="w-20 h-20 border-4 border-transparent text-blue-400 text-4xl animate-spin flex items-center justify-center border-t-blue-400 rounded-full">
                <div className="w-16 h-16 border-4 border-transparent text-red-400 text-2xl animate-spin flex items-center justify-center border-t-red-400 rounded-full" />
            </div>
        </div>


    )
}
