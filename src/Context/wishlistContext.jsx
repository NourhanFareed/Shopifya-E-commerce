/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import axios from 'axios'
import { createContext, useContext, useEffect, useState } from 'react'
import { Bounce, toast } from 'react-toastify'


export const WishListContext = createContext()



export const WishlistProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(true)
    const [wishlistProducts, setWishlistProducts] = useState(null)
    const [wishlistProductsCounter, setWishlistProductsCounter] = useState(0)
    const [productIdIcon, setProductIdIcon] = useState(0);



    const getUserWishList = async () => {
        setIsLoading(true)
        let { data } = await axios.get("https://ecommerce.routemisr.com/api/v1/wishlist", {
            headers: {
                token: localStorage.getItem("token")
            }
        })
        console.log(data.data);
        setWishlistProducts(data.data);
        setIsLoading(false)
        return data;
    }

    const addProductToWishList = async (productId) => {
        let { data } = await axios.post(
            "https://ecommerce.routemisr.com/api/v1/wishlist",
            {
                productId: productId,
            },
            {
                headers: {
                    token: localStorage.getItem("token"),
                },
            }
        );

        console.log("Added to the wishlist!");
        setWishlistProductsCounter(wishlistProductsCounter + 1)
        setProductIdIcon(productId)
        console.log(data);

        toast.success(data.message, {
            position: "bottom-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            pauseOnFocusLoss: false,
            theme: "light",
            transition: Bounce,
        });

        getUserWishList();
        return data;
    }
    const removeProductFromWishList = async (productId) => {
        let { data } = await axios.delete(
            "https://ecommerce.routemisr.com/api/v1/wishlist/" + productId,
            {
                headers: {
                    token: localStorage.getItem("token"),
                },
            }
        );

        console.log("Product has been removed from the wishlist!");

        console.log(data);

        toast.success(data.message, {
            position: "bottom-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            pauseOnFocusLoss: false,
            theme: "light",
            transition: Bounce,
        });

        getUserWishList();
        return data;
    }

    // const wishListToggle = () => {
    //     if (isClicked) {
    //         addProductToWishList(productId)
    //         setIsClicked(true);
    //     } else {
    //         removeProductFromWishList(productId)
    //         setIsClicked(true);
    //     }
    // }


    useEffect(() => {
        getUserWishList();
    }, [])


    return <WishListContext.Provider value={{ addProductToWishList, wishlistProducts, removeProductFromWishList, isLoading, wishlistProductsCounter, productIdIcon }}>
        {children}
    </WishListContext.Provider>
}

export const useWishList = () => {
    return useContext(WishListContext)
}
