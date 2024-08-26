/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
// import AddToWishlist from "../AddToWishlist/AddToWishlist";
import { useWishList } from "../../Context/wishlistContext";
import { useCart } from "../../Context/CartContext";
import { FaHeart } from "react-icons/fa";
import RatingsStars from "../RatingsStars/RatingsStars";



export default function CardDesign({ product }) {
    const { addProductToWishList, productIdIcon } = useWishList()
    const { addProductToCart } = useCart()




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


        <div className="rounded-lg relative transition-all ease-out overflow-visible w-fit h-fit group hover:border-[#7c005b] dark:hover:border-[#003783]  ">

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

                    <RatingsStars rating={product?.ratingsAverage} />
                    <div className="flex justify-between w-full px-1 items-center mx-auto mt-5">
                        <span className="font-bold text-lg text-[#240253] dark:text-white pb-2">EGP {product?.price}</span>
                        <div className="-me-4 mb-3 ">
                            <button onClick={() => handleAddWishlist(product?._id)} className="flex justify-start items-center me-3 text-white w-[45px] h-[45px] rounded-full relative overflow-hidden transition-all shadow-sm group hover:w-[125px] active:translate-x-1 active:translate-y-1 py-2 px-2 font-semibold bg-[#240253] dark:bg-[#003783] hover:bg-[#432272] dark:hover:bg-[#0061a5]">
                                <div className="transition-all flex items-center justify-center group-hover:justify-start w-full">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 flex items-center justify-center text-yellow-300">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                                    </svg>
                                </div>
                                <div className="absolute right-0 w-[0%] opacity-0 text-white group-hover:opacity-100 transition-all group-hover:w-[70%]">Wishlist</div>
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


    )
}


{/* <input id="toggle-heart" type="checkbox" className="group-checked:bg-[#e2264d]" />
                            <label onClick={() => handleAddWishlist(product?._id)} className="text-4xl absolute right-[10px] -top-1 group-checked:bg-[#e2264d]" htmlFor="toggle-heart" aria-label="like">❤</label> */}
{/* <FaHeart onClick={() => handleAddWishlist(product?._id)} size={30} className={product?._id === productIdIcon ? iconColor : "transparent"} /> */ }
{/* <label className="container">
                                <input type="checkbox" className={product?._id === productIdIcon ? " group-checked:bg-[#e2264d]" : ""} />
                                <div onClick={() => handleAddWishlist(product?._id)} className="checkmark">
                                    <svg viewBox="0 0 250 250" className="w-8 absolute right-[10px] -top-1">
                                        <rect height={250} width={250} className="fill-white dark:fill-dark" />
                                        <path d="M224.6,51.9a59.5,59.5,0,0,0-43-19.9,60.5,60.5,0,0,0-44,17.6L128,59.1l-7.5-7.4C97.2,28.3,59.2,26.3,35.9,47.4a59.9,59.9,0,0,0-2.3,87l83.1,83.1a15.9,15.9,0,0,0,22.6,0l81-81C243.7,113.2,245.6,75.2,224.6,51.9Z" strokeWidth="150px" stroke="none" />
                                    </svg>
                                </div>
                            </label> */}