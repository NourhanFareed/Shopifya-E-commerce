/* eslint-disable no-undef */
/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import axios from 'axios'
import { createContext, useContext, useEffect, useState } from 'react'
import { Bounce, toast } from 'react-toastify'

export const CartContext = createContext()

export const CartProvider = ({ children }) => {
    const [cartProducts, setCartProducts] = useState(null)
    const [cartProductsCounter, setCartProductsCounter] = useState(0)
    const [isLoading, setIsLoading] = useState(true)


    const getUserCart = async () => {
        setIsLoading(true)
        try {

            let { data } = await axios.get("https://ecommerce.routemisr.com/api/v1/cart", {
                headers: {
                    token: localStorage.getItem("token")
                }
            })
            console.log(data);
            setCartProducts(data);
            setCartProductsCounter(data.numOfCartItems)
            setIsLoading(false)
            return data;
        } catch (error) {
            console.log(error);
            setCartProducts([])

        }

        let { data } = await axios.get("https://ecommerce.routemisr.com/api/v1/cart", {
            headers: {
                token: localStorage.getItem("token")
            }
        })
        console.log(data);
        setCartProducts(data);
        setCartProductsCounter(data.numOfCartItems)
        setIsLoading(false)
        return data;
    }

    const addProductToCart = async (productId) => {
        let { data } = await axios.post(
            "https://ecommerce.routemisr.com/api/v1/cart",
            {
                productId: productId,
            },
            {
                headers: {
                    token: localStorage.getItem("token"),
                },
            }
        );

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

        getUserCart();
        return data;
    }
    const removeProductFromCart = async (productId) => {
        let { data } = await axios.delete(
            "https://ecommerce.routemisr.com/api/v1/cart/" + productId,
            {
                headers: {
                    token: localStorage.getItem("token")
                }
            })

        console.log("Product removed successfully from the cart");

        toast.success("Product removed successfully from the cart", {
            position: "bottom-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
        });

        getUserCart();
        return data;
    }
    const clearCart = async () => {
        let { data } = await axios.delete(
            "https://ecommerce.routemisr.com/api/v1/cart",
            {
                headers: {
                    token: localStorage.getItem("token")
                }
            })

        console.log("Product removed successfully from the cart");

        toast.success("Your cart is successfully cleared", {
            position: "bottom-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
        });

        getUserCart();
        return data;
    }
    const updateProductInCart = async (productId, count) => {
        if (count != 0) {
            let { data } = await axios.put("https://ecommerce.routemisr.com/api/v1/cart/" + productId, {
                count
            }, {
                headers: {
                    token: localStorage.getItem("token")
                }
            })
            console.log(data);
            setCartProducts(data);
            // console.log(cartProducts)

        }
        console.log("Product removed successfully from the cart");

        getUserCart();
        return data;
    }


    useEffect(() => {
        getUserCart();
    }, [])


    return <CartContext.Provider value={{ addProductToCart, cartProducts, setCartProducts, removeProductFromCart, setCartProductsCounter, cartProductsCounter, isLoading, updateProductInCart, clearCart, getUserCart }}>
        {children}
    </CartContext.Provider>
}

export const useCart = () => {
    return useContext(CartContext)
}

