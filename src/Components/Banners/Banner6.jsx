import cream from "../../assets/images/hairCare.png"


export default function Banner6() {
    return (
        <>
            <div className='bg-gray-100 w-fit h-fit flex justify-center items-center mx-auto'>
                <div className="px-0 py-0 mb-0">
                    <div className="lg:max-w-[1440px] md:max-w-[800px] max-w-[375px] mx-auto bg-white lg:px-20 md:px-2  md:py-16 px-2 py-0 w-screen">
                        <div className="md:flex justify-around items-center">
                            <div>
                                <img src={cream} alt="hair_care" className="lg:block md:hidden block" />
                                {/* <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/image%2015.png" alt className="lg:hidden md:block hidden" /> */}
                            </div>
                            <div>
                                <p className="lg:text-4xl md:text-3xl text-3xl font-semibold md:text-left text-center text-gray-900">
                                    Hair Care
                                </p>
                                <p className="text-base text-gray-600 max-w-[624px] w-full mt-6 md:text-left text-center">
                                    “Spoil” your hair with our new hair restoration mask. Manage
                                    common hair related problems such as hair fall, dryness, dandruff,
                                    frizzy hair, thinning hair with our new product.
                                </p>
                                <button className="bg-gray-800 text-base font-medium lg:max-w-[205px] w-full px-3 py-2 text-white mt-11 hover:bg-gray-700 transition duration-300 ease-in-out lg:block md:hidden block">
                                    Buy Now
                                </button>
                            </div>
                        </div>
                        <button className="bg-gray-800 text-base font-medium  w-full px-3 py-2 text-white mt-6 hover:bg-gray-700 transition duration-300 ease-in-out lg:hidden md:block hidden">
                            Buy Now
                        </button>
                    </div>
                </div>

            </div>


        </>
    )
}

