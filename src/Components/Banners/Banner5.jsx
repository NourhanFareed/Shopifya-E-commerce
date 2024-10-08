import chair from "../../assets/images/chair.png"


export default function Banner5() {
    return (
        <div className="lg:max-w-[1440px] md:max-w-[800px] max-w-[375px] mx-auto py-0 px-0 xl:px-0 flex justify-center items-center flex-col">
            <div className="flex justify-between bg-gray-50 items-stretch flex-row">
                <div className="flex items-center bg-gray-800 justify-center">
                    <p className="transform flex flex-shrink-0 -rotate-90 text-2xl font-semibold tracking-wide leading-normal text-white">50% OFF</p>
                </div>
                <div className="flex justify-center items-start flex-col xl:w-2/5 md:w-5/12 xl:px-7 px-6 md:px-4 md:py-0 py-5">
                    <div>
                        <p className="text-3xl xl:text-4xl font-semibold leading-9 text-gray-800">Act before it’s too late!</p>
                    </div>
                    <div className="xl:mt-4 mt-2">
                        <p className="text-base xl:text-xl leading-7 text-gray-600 pr-4">Furniture that looks modern and is comfortable as well. Avail the 50% offer now.</p>
                    </div>
                </div>
                <div className="hidden md:block h-60 md:h-72 lg:h-96">
                    <img className="hidden h-full xl:block" src={chair} alt="chair" />

                </div>
            </div>
            <div className="md:hidden mt-6 w-full flex">
                <img src={chair} alt="chair" className="w-full" />
            </div>
        </div>
    );
}


