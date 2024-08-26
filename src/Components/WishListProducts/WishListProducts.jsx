/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom'
import { addProductToCart } from "../../cartServices";
import { useWishList } from "../../Context/wishlistContext";
import { useCart } from '../../Context/CartContext';



export default function WishListProducts({ product, index }) {
    const { removeProductFromWishList } = useWishList()
    const { addProductToCart } = useCart()


    const handleAddCart = async (productId) => {
        let response = await addProductToCart(productId);
        console.log(response)
    }

    // async function removeProductFromWishList(productId) {
    //     let { data } = await axios.delete("https://ecommerce.routemisr.com/api/v1/wishlist/" + productId, {
    //         headers: {
    //             token: localStorage.getItem("token")
    //         }
    //     })
    //     console.log(data);
    //     toast.success("Product removed successfully from the wishlist", {
    //         position: "bottom-right",
    //         autoClose: 3000,
    //         hideProgressBar: false,
    //         closeOnClick: true,
    //         pauseOnHover: true,
    //         draggable: true,
    //         progress: undefined,
    //         theme: "light",
    // pauseOnFocusLoss: false,
    //         transition: Bounce,
    //     });

    // }


    return (

        <>

            <div key={index} className="rounded-lg relative transition-all ease-out overflow-visible w-fit h-fit group hover:border-[#7c005b] dark:hover:border-[#003783]  ">

                <div className="bg-white dark:bg-dark rounded-3xl overflow-hidden w-full shadow-lg ring-opacity-40 max-w-sm group relative border-2 group-hover:border-[#7c005b] dark:group-hover:border-[#0061a5] ">
                    <div className="relative overflow-hidden">
                        <Link to={"/productDetails/" + product?._id}>
                            <img className="w-full h-full group-hover:scale-110 transition duration-700" src={product?.imageCover} alt={product?.title} />
                        </Link>
                        {/* <div className="absolute rotate-90 top-3 -right-2  bg-red-500 text-white px-4 py-1 mx-auto z-[70] rounded-none text-sm font-medium">SALE
                    </div> */}
                    </div>
                    <div className="p-4">
                        <Link to={"/productDetails/" + product?._id}>
                            <h3 className="text-lg mb-2 font-bold tracking-tight line-clamp-1 text-[#240253] dark:text-white link-hover">{product?.title}</h3>
                        </Link>
                        <p className="text-[#240253] text-sm font-medium line-clamp-2 dark:text-white">{product?.description}</p>
                        <div className="flex justify-between items-center mx-auto mt-2 mb-2">
                            <span className="font-bold text-lg text-[#240253] dark:text-white">EGP {product?.price}</span>

                            <div className=" pe-0">
                                <button onClick={() => { removeProductFromWishList(product?._id) }} className="me-3 text-white rounded-md shadow-sm  py-2 px-3 font-semibold bg-[#7c005b] dark:bg-[#003783] hover:bg-red-600 dark:hover:bg-red-600"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                </svg>
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

            </div>
        </>


    )
}
