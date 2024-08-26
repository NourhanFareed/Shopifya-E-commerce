import axios from "axios"
import { useEffect, useState } from "react"
import { jwtDecode } from "jwt-decode";
import { dateFormate } from "../../DateFormate";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";

export default function Orders() {
    let [orders, setOrders] = useState([])
    async function getUserOrders() {
        Swal.fire({
            position: "center",
            icon: "success",
            title: "Thank you for your purchase!",
            text: "It was a successful process",
            showConfirmButton: false,
            timer: 2000
        });
        let decoded = jwtDecode(localStorage.getItem("token"))
        let { data } = await axios.get("https://ecommerce.routemisr.com/api/v1/orders/user/" + decoded.id)
        setOrders(data);
        console.log(data);

    }

    useEffect(() => {
        getUserOrders()

        // Output: October 1, 2024


    }, [])


    return (

        <>

            <Helmet>
                <title>Orders</title>
            </Helmet>

            <div className="min-h-screen rounded-3xl xs:mx-8 -mt-16  lg:mx-14 pt-10 bg-body dark:bg-dark">
                <h1 className="mb-10 text-center text-[#240253] dark:text-white text-2xl font-bold">Orders</h1>
                <div className="2xl:container 2xl:mx-auto py-10 px-0 md:px-4 xl:px-10">
                    <div className="flex flex-col gap-8 justify-start mx-auto items-start xl:space-y-0">
                        {orders.map((order, index) => {
                            return <>
                                <div key={index} className="flex justify-center flex-col items-start w-full xl:w-full border rounded-3xl p-10">
                                    <h3 className="text-3xl xl:text-4xl font-semibold leading-7 xl:leading-9 w-full  md:text-left text-[#240253] dark:text-white">Order Summary</h3>
                                    <p className="text-base leading-none mt-4 text-gray-900 dark:text-gray-100">
                                        Paid using credit card ending with <span className="font-semibold bg-[#240253] dark:bg-[#003783] p-1 text-white">8822</span>
                                    </p>
                                    <div className="flex items-start justify-between w-full p-0 xs:flex-col xl:flex-row">

                                        <div className="flex justify-between items-center mt-3 flex-col space-y-4 w-full xl:w-8/12">
                                            <div className="justify-between items-center mt-3 flex-col space-y-4 w-full">
                                                <div className="flex md:justify-between md:flex-row items-center xs:flex-col xs:justify-start xs:items-start xs:gap-3 md:gap-0">
                                                    <p className="flex justify-start text-sm leading-none text-[#240253] dark:text-white font-semibold">
                                                        payment Method: <span className="ps-1 font-semibold text-gray-700 dark:text-[#003783]"> {order.paymentMethodType}</span>
                                                    </p>
                                                    <p className="flex justify-end text-sm leading-none text-[#240253] dark:text-white font-semibold">
                                                        Order placed :
                                                        <time dateTime="2024-02-22" className="ps-1 font-semibold text-gray-700 dark:text-[#003783]">
                                                            {dateFormate(order.createdAt.split("T")[0])}
                                                        </time>

                                                    </p>
                                                </div>
                                                {order.cartItems.map((product, index) => (
                                                    <div key={index} className="w-full shadow-lg">
                                                        <div className="flex flex-col sm:flex-row justify-start items-start md:items-center xs:w-80  sm:w-full overflow-hidden border border-gray-200">
                                                            <div className="w-full sm:w-56 md:w-32">
                                                                <Link to={"/productDetails/" + product.product._id}><img className="hidden md:block w-full" src={product.product.imageCover} alt={product.product.title} /></Link>
                                                                <Link to={"/productDetails/" + product.product._id}><img className="md:hidden w-full" src={product.product.imageCover} alt={product.product.title} /></Link>
                                                            </div>
                                                            <div className="flex justify-center md:justify-between items-start md:items-center  relative flex-col md:flex-row w-full py-8 px-3 md:px-8">
                                                                <div className="flex flex-col justify-between">
                                                                    <Link to={"/productDetails/" + product.product._id} className="w-full">
                                                                        <h3 className="text-lg w-full md:text-xl line-clamp-1 font-semibold leading-6 md:leading-5 text-[#240253] dark:text-white link-hover">{product.product.title}</h3>
                                                                    </Link>


                                                                    <div className="flex justify-between items-center mt-7 w-full">
                                                                        <div className="left-2">
                                                                            <p className="absolute text-sm leading-none text-[#240253] dark:text-white font-semibold">
                                                                                Quantity: <span className="text-gray-700 dark:text-gray-50">{product.count}</span>
                                                                            </p>
                                                                        </div>

                                                                        <div className="absolute right-8">
                                                                            <p className="text-lg lg:text-xl font-semibold leading-5 lg:leading-6 text-[#240253] dark:text-white">{product.price * product.count} <span className="font-medium text-base text-gray-900 dark:text-[#003783] ">EGP</span></p>
                                                                        </div>
                                                                    </div>

                                                                </div>
                                                            </div>
                                                        </div>

                                                    </div>))}
                                            </div>
                                        </div>



                                        <div className="flex xs:flex-col xs:m-0 md:justify-between xl:ms-5 xs:gap-0 items-center md:flex-row xl:flex-col xs:-mx-2 w-full xl:w-4/12 gap-4">
                                            <div className="w-full flex justify-start  items-start flex-col mt-11 xl:mx-2 p-6 border border-gray-200 md:me-5 py-8 shadow-lg">
                                                <div className="flex justify-start items-start flex-col pt-2 pb-0">
                                                    <p className="text-base font-semibold leading-4 text-[#240253] dark:text-white pb-3">Billing Address:</p>
                                                    <p className="text-sm leading-5 text-gray-600 dark:text-gray-100">{order.shippingAddress.details}, {order.shippingAddress.city}</p>
                                                </div>
                                                <div className="flex justify-start items-start flex-col pt-5 pb-0">
                                                    <p className="text-base font-semibold leading-4 text-[#240253] dark:text-white pb-3">Shipping Address:</p>
                                                    <p className="text-sm leading-5 text-gray-600 dark:text-gray-100">{order.shippingAddress.details}, {order.shippingAddress.city}</p>
                                                </div>
                                                <div className="flex justify-start items-start flex-col pt-5 pb-2">
                                                    <p className="text-base font-semibold leading-4 text-[#240253] dark:text-white pb-3">Phone:</p>
                                                    <p className="text-sm leading-5 text-gray-600 dark:text-gray-100">{order.shippingAddress.phone}</p>
                                                </div>
                                            </div>

                                            <div className="w-full flex justify-start items-start  flex-col mt-8 xl:mt-8 xl:mx-10 p-6 border border-gray-200 md:ms-5 lg:py-6 sm:py-6 shadow-lg">
                                                <div className="flex justify-center items-center w-full space-y-4 flex-col border-gray-200 border-b pb-4">
                                                    <div className="flex justify-between  w-full">
                                                        <p className="text-base leading-4 text-[#240253] dark:text-white">Subtotal:</p>
                                                        <p className="text-base leading-4 text-gray-600 dark:text-gray-100">{order.totalOrderPrice}</p>
                                                    </div>
                                                    <div className="flex justify-between  w-full">
                                                        <p className="text-base leading-4 text-[#240253] dark:text-white">
                                                            Tax:
                                                        </p>
                                                        <p className="text-base leading-4 text-gray-600 dark:text-gray-100">{order.taxPrice}</p>
                                                    </div>
                                                    <div className="flex justify-between  w-full">
                                                        <p className="text-base leading-4 text-[#240253] dark:text-white">Shipping:</p>
                                                        <p className="text-base leading-4 text-gray-600 dark:text-gray-100">{order.shippingPrice}</p>
                                                    </div>
                                                </div>
                                                <div className="flex justify-between items-center w-full space-y-4 border-gray-200 border-b py-2">
                                                    <p className="text-base font-semibold leading-4 text-[#240253] dark:text-white">Total</p>
                                                    <p className="text-base font-semibold leading-4 text-gray-600 dark:text-gray-100">EGP {order.totalOrderPrice + order.taxPrice + order.shippingPrice}</p>
                                                </div>
                                                <div className="flex w-full justify-center items-center pt-1 md:pt-4  xl:pt-8 space-y-6 md:space-y-8 flex-col">
                                                    <button className="py-5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800  w-full text-base font-medium leading-4 text-white bg-[#240253] dark:bg-[#003783] hover:bg-black dark:hover:bg-black">Track Your Order</button>
                                                </div>
                                            </div>
                                        </div>


                                    </div>
                                </div></>

                        })}
                    </div>
                </div>
            </div >

        </>

    )
}



