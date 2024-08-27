/* eslint-disable react-hooks/exhaustive-deps */

import { Link } from "react-router-dom"
import LoadingScreen from "../LoadingScreen/LoadingScreen"
import EmptyCart from "./EmptyCart"
import CartProducts from "../CartProducts/CartProducts"
import ScrollingUpIcon from "../ScrollingUpIcon/ScrollingUpIcon"
import { Helmet } from "react-helmet"
import { useCart } from "../../Context/CartContext"
// import { useState } from "react"



export default function Cart() {
    // const [isLoading, setIsLoading] = useState(true)

    const { cartProducts, cartProductsCounter, clearCart, isLoading } = useCart()

    // console.log(cartProducts);



    if (cartProductsCounter === 0) {
        return <EmptyCart cart={cartProducts} />
    }

    return (
        <>
            <Helmet>
                <title>Cart</title>
            </Helmet>
            {isLoading ? <LoadingScreen />
                :

                <div className="min-h-screen rounded-3xl xs:mx-8 -mt-12  lg:mx-14 pt-10 bg-body dark:bg-dark">
                    <h1 className="mb-10 text-center text-[#240253] dark:text-white text-2xl font-bold">Cart Items</h1>
                    <div className="flex justify-between items-center">
                        <h1 className="text-left ms-6 mb-2 text-[#240253] dark:text-gray-50 font-semibold">Cart: {cartProductsCounter}</h1>
                        <h1 onClick={() => clearCart()} className="text-left ms-6 mb-2 text-[#240253] dark:text-gray-50 font-semibold link-hover">Clear Cart</h1>

                    </div>


                    <div className="mx-auto rounded-3xl  bg-gray-100 justify-center items-start xs:px-3 md:px-4 py-8 md:flex md:space-x-6 lg:px-8 dark:border dark:bg-dark">

                        <div className="rounded-lg md:w-2/3 ms-1">
                            <>

                                {cartProducts?.data.products.map((product, index) => {
                                    return <CartProducts key={index} product={product} />
                                })}
                            </>

                            <Link to={"/"} className="text-[#240253] dark:text-white w-fit flex justify-start items-center font-semibold underline underline-offset-4 group">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-6 me-1 group-hover:-translate-x-2 group-hover:duration-200">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                                </svg>
                                Continue shopping
                            </Link>
                        </div>
                        {/* Sub total */}
                        <div className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3 me-8 xs:mx-auto dark:bg-dark dark:shadow-2xl" >
                            <div className="mb-2 flex justify-between">
                                <p className="text-gray-900 dark:text-white font-bold">Subtotal</p>
                                <p className="text-gray-900 dark:text-white font-bold">EGP {cartProducts?.data.totalCartPrice}</p>
                            </div>
                            <div className="flex justify-between">
                                <p className="text-gray-900 dark:text-white font-bold">Shipping</p>
                                <p className="text-gray-900 dark:text-white font-bold">EGP 5.00</p>
                            </div>
                            <hr className="my-4" />
                            <div className="flex justify-between">
                                <p className="text-lg font-bold text-gray-900 dark:text-white">Total</p>
                                <div className>
                                    <p className="mb-1 text-center text-lg font-bold text-gray-900 dark:text-white">EGP {cartProducts?.data.totalCartPrice + 5.00}</p>
                                    <p className="text-sm text-gray-900 dark:text-white font-bold">including VAT</p>
                                </div>
                            </div>
                            <Link to={"/shippingAddress/" + cartProducts?.data._id}><button className="mt-6 w-full rounded-md bg-blue-500 dark:bg-[#003783] dark:hover:bg-[#0061a5] py-1.5 font-medium text-blue-50 hover:bg-blue-600">Check out</button></Link>
                        </div>
                    </div>
                    <ScrollingUpIcon />

                </div>
            }
        </>
    )
}
