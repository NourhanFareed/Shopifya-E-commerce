import sneakers from "../../assets/images/sneakers.png"


export default function Banner4() {
    return (
        <>
            <div className="py-0 px-0">
                <div className="lg:max-w-[1440px] md:max-w-[800px] max-w-[375px] mx-auto bg-white relative lg:px-3 md:px-0 px-4 py-4">
                    <div className="lg:max-w-[1405px] md:max-w-[770px] max-w-[343px] mx-auto bg-gray-200">
                        <div className="lg:flex md:flex block justify-between items-stretch">
                            <div className="md:px-10 md:py-12 p-4">
                                <p className="text-base leading-none text-gray-800">
                                    Save upto 30%
                                </p>
                                <p className="text-3xl font-semibold leading-9 text-gray-800 py-4">
                                    Summer Sale
                                </p>
                                <p className="text-base leading-normal text-gray-600">
                                    Want to save some cash and still look like a fashion diva ?
                                    <br />
                                    Checkout our summer sale now !!!
                                </p>
                            </div>
                            <div className="md:px-10 md:py-12 p-4">
                                <img
                                    src={sneakers}
                                    className="w-full h-full"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

