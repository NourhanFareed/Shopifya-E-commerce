

import furniture1 from "../../assets/images/banner10_img1.png"
import furniture2 from "../../assets/images/banner10_img2.png"
import furniture3 from "../../assets/images/banner10_img3.png"

export default function Banner2() {

    return (
        <div>
            <div className="flex justify-center items-center flex-col px-2 md:px-0 xl:px-0 py-1 md:py-1 xl:py-1">
                <section className="hidden md:block">
                    <h1 className="leading-5 md:leading-6 xl:leading-9 text-gray-800 dark:text-white text-xl md:text-2xl xl:text-4xl font-semibold text-center">
                        Act Before it’s too late!
                    </h1>
                    <p className="text-gray-600 dark:text-gray-100 text-base text-center mt-2">
                        It is a long established fact that a reader will be distracted by the
                        readable content.
                    </p>
                </section>
                <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6 xl:gap-8 mt-2 md:mt-5 xl:mt-3">
                    <div className="w-full">
                        <img src={furniture1} />
                    </div>
                    <div className="w-full">
                        <img src={furniture2} />
                    </div>
                    <div className="w-full hidden xl:block">
                        <img src={furniture3} />
                    </div>
                </section>

            </div>
        </div>


    );
}


