/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import RatingsStars from "../RatingsStars/RatingsStars";
import LoadingScreen from "../LoadingScreen/LoadingScreen";
import ProductSlider from "../ProductSlider/ProductSlider";
import MoreProducts from "../MoreProducts/MoreProducts";
import { useWishList } from "../../Context/wishlistContext";
import { useCart } from "../../Context/CartContext";
// import CardDesign from "../CardDesign/CardDesign";
// import style from "./ProductDetails.module.css"



export default function ProductDetails() {

    let { id } = useParams()
    console.log(id);

    const [productsDetails, setProductsDetails] = useState(null)
    const [relatedProducts, setRelatedProducts] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const { addProductToWishList } = useWishList()
    const { addProductToCart } = useCart()

    // const [counter, setCounter] = useState(2)

    useEffect(() => {
        getProductsDetails()

    }, [id])




    async function getProductsDetails() {
        setIsLoading(true)
        let { data } = await axios.get("https://ecommerce.routemisr.com/api/v1/products/" + id)
        setProductsDetails(data.data);
        getRelatedProducts(data.data?.category._id)
        setIsLoading(false)
    }

    async function getRelatedProducts(categoryId) {
        setIsLoading(true)
        let { data } = await axios.get("https://ecommerce.routemisr.com/api/v1/products", {
            params: {
                "category": categoryId
            }
        })
        setRelatedProducts(data.data);
        setIsLoading(false)
    }

    const handleAddWishlist = async (productId) => {
        let response = await addProductToWishList(productId);
        console.log(response)
    }

    const handleAddCart = async (productId) => {
        let response = await addProductToCart(productId);
        console.log(response)
    }

    return (

        <>

            {isLoading ? <LoadingScreen />
                :

                <div className="w-screen">
                    <div className="bg-gray-100 dark:bg-gray-800 py-8 md:mx-20 rounded-lg shadow-lg overflow-visible">
                        <div className=" mx-auto px-4 sm:px-6 lg:px-8">
                            <div className="flex flex-col min-w-96 md:flex-row mx-4">
                                <div className="md:flex-1 px-4">
                                    <div className="rounded-lg bg-white dark:bg-gray-700 p-0">
                                        {/* <img className="w-full h-full object-cover" src={productsDetails?.imageCover} alt={productsDetails?.title} /> */}

                                        <ProductSlider images={productsDetails?.images} title={productsDetails?.title} />

                                    </div>
                                    <div className="flex -mx-2 my-4">
                                        <div className="w-1/2 px-2">
                                            <button onClick={() => handleAddCart(productsDetails?._id)} className="w-full bg-[#7c005b] dark:bg-[#003783] text-white py-2 px-4 rounded-full font-bold hover:bg-[#7c005bd8] dark:hover:bg-black">Add to Cart</button>
                                        </div>
                                        <div className="w-1/2 px-2">
                                            <button onClick={() => handleAddWishlist(productsDetails?._id)} className="w-full bg-gray-200 dark:bg-gray-700 text-[#240253] dark:text-white py-2 px-4 rounded-full font-bold hover:bg-gray-300 dark:hover:bg-gray-600">
                                                Add to Wishlist
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="md:flex-1 px-4 md:ms-5">


                                    <div className="flex mb-4 justify-between items-center">
                                        <h2 className="text-2xl font-bold text-[#240253] dark:text-white mb-2">{productsDetails?.title}</h2>
                                        <div className="flex justify-start items-center">
                                            <label className="-mt-2 mr-2 text-[#240253] dark:text-[#003783] font-bold" htmlFor="rating">Rating:</label>
                                            <RatingsStars rating={productsDetails?.ratingsAverage ?? 0} />
                                        </div>
                                    </div>
                                    <hr className="mt-2" />

                                    <div className="mt-8">
                                        <span className="font-bold text-[#240253] dark:text-[#003783]">Product Description:</span>
                                        <p className="text-gray-900 font-medium dark:text-gray-300 text-sm mt-2">{productsDetails?.description}</p>
                                    </div>
                                    <div className="mt-4">
                                        <label className="text-[#240253] dark:text-[#003783] font-bold" htmlFor="category">Category:</label>
                                        <h3 className="text-gray-900 dark:text-gray-300 font-medium">{productsDetails?.category.name}</h3>
                                    </div>
                                    <div className="mt-4">
                                        <label className="text-[#240253] dark:text-[#003783] font-bold" htmlFor="subcategory">Subcategory:</label>
                                        <h3 className="text-gray-900 dark:text-gray-300 font-medium">{productsDetails?.subcategory[0].name}</h3>
                                    </div>
                                    <div className="mt-4">
                                        <label className="text-[#240253] dark:text-[#003783] font-bold" htmlFor="brand">Brand:</label>
                                        <h3 className="text-gray-900 dark:text-gray-300 font-medium">{productsDetails?.brand.name}</h3>
                                    </div>
                                    <div className="mt-4">
                                        <span className="font-bold text-[#240253] dark:text-[#003783] me-1">Availability:</span>
                                        <span className="text-gray-900 font-semibold dark:text-gray-300">In Stock</span>
                                    </div>
                                    <div className="mt-4">
                                        <span className="font-bold text-[#240253] dark:text-[#003783] me-1">Price:</span>
                                        <span className="text-gray-900  font-semibold dark:text-gray-300">EGP {productsDetails?.price}</span>
                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>
                    <MoreProducts products={relatedProducts} />
                </div>

            }



        </>

    )
}
