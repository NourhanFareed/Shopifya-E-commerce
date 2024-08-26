/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";


export default function EmptyCart() {





    return (
        <div className="min-h-screen rounded-3xl xs:mx-8  lg:mx-14 pt-0 bg-body dark:bg-dark">
            <h1 className="text-center text-[#240253] dark:text-[#003783] text-2xl font-bold mb-20">Cart Items</h1>
            <div className="mx-auto rounded-3xl  bg-gray-100 dark:bg-dark shadow-2xl justify-center items-start xs:px-3 md:px-4 py-8 md:flex md:space-x-6 lg:px-8">
                <div className="rounded-lg w-full mx-5">

                    <h2 className="text-center text-[#240253] dark:text-white text-xl font-bold pt-10">Your cart is currently empty.</h2>
                    <Link to={"/"} className="text-[#240253] dark:text-white mt-8 w-fit flex justify-start items-center font-semibold underline underline-offset-4 group hover:text-black dark:hover:text-[#003783]">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-6 me-1 group-hover:-translate-x-2 group-hover:duration-200">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                        </svg>
                        Continue shopping
                    </Link>
                </div>

            </div>
        </div>
    )
}
