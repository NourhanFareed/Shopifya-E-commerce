/* eslint-disable no-unused-vars */
// import { useState } from "react";
import LoadingScreen from "../LoadingScreen/LoadingScreen";
import { Helmet } from "react-helmet";
import ScrollingUpIcon from "../ScrollingUpIcon/ScrollingUpIcon";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../Context/CartContext";
import { useWishList } from "../../Context/wishlistContext";


export default function Offers() {
    const [isLoading, setIsLoading] = useState(true)

    const { addProductToWishList, productIdIcon } = useWishList()
    const { addProductToCart } = useCart()
    const [offers, setOffers] = useState()


    useEffect(() => {
        // getOtherProducts()
        getOfferProducts()
    }, []);


    // async function getOtherProducts() {
    //     let { data } = await axios.get("https://api.sampleapis.com/coffee/hot")
    //     setOffers(data);
    //     console.log(data);
    //  }

    async function getOfferProducts() {
        setIsLoading(true)
        let { data } = await axios.get("https://api.escuelajs.co/api/v1/products")
        setOffers(data);
        console.log(data);
        setIsLoading(false)
    }

    const handleAddWishlist = async (productId) => {
        let response = await addProductToWishList(productId);
        console.log(response)
        localStorage.setItem("icon", "text-red-500")

    }

    const handleAddCart = async (productId) => {
        let response = await addProductToCart(productId);
        console.log(response)
    }

    return (
        <>
            <Helmet>
                <title>Offers</title>
            </Helmet>
            {isLoading ? <LoadingScreen />
                :
                <div>
                    {/* <h1>Offers</h1> */}

                    <div className="grid xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mx-auto xs:px-3 xs:ms-5 sm:ms-36 md:ms-0 md:px-10 gap-14 bg-body dark:bg-dark">
                        {offers?.slice(1, 48).map((product, index) => {
                            return <>
                                <div key={index} className="rounded-lg relative transition-all ease-out overflow-visible w-fit h-fit group hover:border-[#7c005b] dark:hover:border-[#003783]  ">

                                    <div className="bg-white dark:bg-dark rounded-3xl overflow-hidden w-full shadow-lg ring-opacity-40 max-w-sm group relative border-2 group-hover:border-[#7c005b] dark:group-hover:border-[#0061a5] ">
                                        <div className="relative overflow-hidden">
                                            <Link to={"/offerDetails/" + product?.id}>
                                                <img className="w-full h-full group-hover:scale-110 transition duration-700" src={product?.images[0]} alt={product?.title} />
                                            </Link>
                                            <div className="absolute rotate-90 top-3 -right-2  bg-red-500 text-white px-4 py-1 mx-auto z-[70] rounded-none text-sm font-medium">SALE
                                            </div>
                                        </div>
                                        <div className="p-4">
                                            <Link to={"/offerDetails/" + product?.id}>
                                                <h3 className="text-lg mb-2 font-bold tracking-tight line-clamp-1 text-[#240253] dark:text-white link-hover">{product?.title}</h3>
                                            </Link>
                                            <p className="text-[#240253] text-sm font-medium line-clamp-2 dark:text-white">{product?.description}</p>

                                            <div className="flex justify-between w-full px-1 items-center mx-auto mt-5">
                                                <span className="font-bold text-lg text-[#240253] dark:text-white pb-2">EGP {product?.price}</span>
                                                <div className="-me-4 mb-3 ">
                                                    <button onClick={() => handleAddWishlist(product?._id)} className="flex justify-start items-center me-3 text-white w-[48px] h-[48px] rounded-full relative overflow-hidden transition-all shadow-sm group hover:w-[125px] active:translate-x-1 active:translate-y-1 py-2 px-2 font-semibold bg-[#240253] dark:bg-[#003783] hover:bg-[#432272] dark:hover:bg-[#0061a5]">
                                                        <div className="transition-all flex items-center justify-center group-hover:justify-start w-full">
                                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 flex items-center justify-center z-50 bg-[#240253] dark:bg[#003783] group-hover:bg-[#432272] dark:group-hover:bg-[#0061a5] rounded-full text-yellow-300">
                                                                <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                                                            </svg>
                                                        </div>
                                                        <div className="absolute right-0 w-[0%] opacity-0 text-white group-hover:opacity-100 transition-[100ms] group-hover:w-[70%]">Wishlist</div>
                                                    </button>



                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                    <div className="translate-x-[-50%] translate-y-[125%] rounded-full border-none bg-[#7c005b] hover:bg-[#7c005bd8] dark:bg-[#003783] dark:hover:bg-[#0061a5] text-white absolute left-[50%] bottom-0 opacity-0 transition-all ease-out group-hover:translate-x-[-50%] group-hover:translate-y-[50%] group-hover:opacity-100 group-hover:border-[#700c5b] dark:group-hover:border-[#003783] ">
                                        <button onClick={() => handleAddCart(product?._id)} className="bg-[#7c005b] hover:bg-[#7c005bd8] dark:bg-[#003783] dark:hover:bg-[#0061a5] mx-auto text-white font-bold py-3 px-6 rounded-3xl">
                                            Add to Cart
                                        </button>
                                    </div>

                                </div >

                            </>

                        })}
                    </div>

                    <ScrollingUpIcon />
                </div>
            }
        </>

    )
}
