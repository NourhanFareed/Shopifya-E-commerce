/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable react/prop-types */

// import axios from "axios";
import { RiCloseLine } from "react-icons/ri"
import { useState } from "react";
import { useCart } from "../../Context/CartContext";
import axios from "axios";

export default function CartProducts({ product, index }) {
    const [isLoadingIcon, setIsLoadingIcon] = useState(false);
    const [productCount, setProductCount] = useState(product.count);
    const { removeProductFromCart, setCartProducts, updateProductInCart, cartProductsCounter } = useCart();



    // async function removeProductFromCart(productId) {
    //     let { data } = await axios.delete("https://ecommerce.routemisr.com/api/v1/cart/" + productId, {
    //         headers: {
    //             token: localStorage.getItem("token")
    //         }
    //     })
    //     console.log(data);
    //     cartProducts(data);
    //     toast.success("Product removed successfully from the cart", {
    //         position: "bottom-right",
    //         autoClose: 3000,
    //         hideProgressBar: false,
    //         closeOnClick: true,
    //         pauseOnHover: true,
    //         draggable: true,
    //         progress: undefined,
    //         theme: "light",
    //         transition: Bounce,
    //     });

    // }
    const handleRemoveFromCart = async (productId) => {
        let response = await removeProductFromCart(productId);
        console.log(response)
    }
    const handleUpdateCart = async (productId, count) => {
        setIsLoadingIcon(true)
        let response = await updateProductInCart(productId, count);
        console.log(response)
        setIsLoadingIcon(false)
    }


    // async function updateProductInCart(productId, count) {
    //     setIsLoadingIcon(true)
    //     if (count != 0) {
    //         let { data } = await axios.put("https://ecommerce.routemisr.com/api/v1/cart/" + productId, {
    //             count
    //         }, {
    //             headers: {
    //                 token: localStorage.getItem("token")
    //             }
    //         })
    //         console.log(data);
    //         setCartProducts(data);
    //         setProductCount(product.count)
    //     }
    //     setIsLoadingIcon(false)
    // }




    return (
        <div key={index} className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start dark:border dark:bg-dark dark:shadow-2xl">
            <img src={product.product.imageCover} alt={product.product.title} className="w-full rounded-lg sm:w-40" />
            <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                <div className="mt-5 sm:mt-0">
                    <h2 className="mt-3 text-lg font-bold text-[#240253] dark:text-white">{product.product.title}</h2>
                    <p className="mt-3 text-lg text-gray-900 dark:text-white">${product.price}</p>
                </div>
                <div className="mt-14 flex justify-between flex-col items-end sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">

                    <div className="button-container rounded-lg border flex justify-center m-5">
                        <button disabled={product.count == 1} onClick={() => handleUpdateCart(product.product._id, product.count - 1)} className="button-3d  relative border-0 px-2 min-w-2 min-h-2 bg-transparent cursor-pointer rounded-2xl my-2.5 appearance-none group ">
                            <div className="button-top shadow-2xl flex justify-center items-center relative z-[2] py-1.5 px-4 text-white translate-y-0 bg-[#240253] dark:bg-[#003783] rounded-[4px] group-active:rounded-lg group-active:translate-y-[2px] group-disabled:bg-gray-500">
                                <span className="material-icons">-</span>
                            </div>
                            <div className="button-bottom absolute z-[1] bottom-1 left-1 rounded-2xl pt-1.5 " />
                            <div className="button-base absolute z-0 top-1 left-0 rounded-2xl group-active:pt-0" />
                        </button>
                        <input onBlur={() => product.count != productCount && handleUpdateCart(product.product._id, productCount)} onChange={(e) => setProductCount(Number(e.target.value))} className="h-8 w-8 border bg-white text-center text-xs text-[#240253] font-semibold outline-none flex items-center justify-center my-3 py-2" value={product.count} min={1} />
                        <button disabled={isLoadingIcon} onClick={() => handleUpdateCart(product.product._id, product.count + 1)} className="button-3d  relative border-0 px-2 min-w-2 min-h-2 bg-transparent cursor-pointer rounded-2xl my-2.5 appearance-none group">
                            <div className="button-top shadow-2xl flex justify-center items-center relative z-[2] py-1.5 px-3.5 text-white translate-y-0 bg-[#240253] dark:bg-[#003783] rounded-[4px] group-active:rounded-lg group-active:translate-y-[2px]">
                                <span className="material-icons">{isLoadingIcon ? <i className="fa-solid fa-spinner fa-spin m-0 fa-1"></i> : "+"}</span>
                            </div>
                            <div className="button-bottom absolute z-[1] bottom-1 left-1 rounded-2xl pt-1.5 " />
                            <div className="button-base absolute z-0 top-1 left-0 rounded-2xl group-active:pt-0" />
                        </button>
                    </div>
                    <div className="flex items-center justify-start space-x-16 mx-auto">
                        <p className="text-base text-[#240253] dark:text-white ">
                            <span className="font-bold me-1">EGP</span>
                            {product.price * product.count}</p>
                        <RiCloseLine onClick={() => handleRemoveFromCart(product.product._id)} className="text-[#240253] dark:text-white hover:text-red-600 font-bold text-2xl" />
                    </div>
                </div>
            </div>
        </div>
    )
}


