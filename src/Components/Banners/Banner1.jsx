
import speaker from "../../assets/images/Rectangle-56-1.png"
import playstation from "../../assets/images/Rectangle-59-1.png"


export default function Banner1() {
    return (
        <div className="lg:max-w-[1440px] md:max-w-[800px] max-w-[375px] mx-auto py-2 md:py-0 bg-gray-50 px-0 md:px-0">
            <div className="flex items-stretch justify-center flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 md:py-9 lg:space-x-6">
                <div className="flex flex-col md:flex-row items-stretch justify-between bg-gray-50 py-6 px-6 md:py-16  lg:px-12 md:w-8/12 lg:w-7/12 xl:w-8/12 2xl:w-9/12">
                    <div className="flex flex-col justify-center md:w-1/2">
                        <h1 className="text-3xl lg:text-4xl font-semibold text-gray-800">Best Deal</h1>
                        <p className="text-base lg:text-xl text-gray-800 mt-2">
                            Save upto <span className="font-bold">50%</span>
                        </p>
                    </div>
                    <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center md:justify-end">
                        <img src={speaker} alt="" />
                    </div>
                </div>
                <div className="md:w-4/12 lg:w-5/12 xl:w-4/12 2xl:w-3/12 bg-gray-50 py-6 px-6 md:py-16 md:px-4 lg:px-6 flex flex-col justify-center relative">
                    <div className="flex flex-col justify-center">
                        <h1 className="text-3xl lg:text-4xl font-semibold text-gray-800">Game Console</h1>
                        <p className="text-base lg:text-xl text-gray-800">
                            Save Upto <span className="font-bold">30%</span>
                        </p>
                    </div>
                    <div className="flex justify-end md:absolute md:bottom-4 md:right-4 lg:bottom-0 lg:right-0">
                        <img src={playstation} alt="" className="md:w-20 md:h-20 lg:w-full lg:h-full" />
                    </div>
                </div>
            </div>
        </div>
    );
}

