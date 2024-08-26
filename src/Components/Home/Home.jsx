/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios"
import { useEffect, useState } from "react"
import CardDesign from "../CardDesign/CardDesign"
import CategoriesSlider from "../CategoriesSlider/CategoriesSlider"
import LoadingScreen from "../LoadingScreen/LoadingScreen"
import ScrollingUpIcon from "../ScrollingUpIcon/ScrollingUpIcon"
import Banners from "../Banners/Banners"
import ContactUs from "../ContactUs/ContactUs"
import ClientsReviews from "../ClientsReviews/ClientsReviews"
import { Helmet } from "react-helmet"
import Statistics from "../Statictics/Statictics"




export default function Home() {

    const [products, setProducts] = useState([])
    const [categories, setCategories] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        getProducts()
        getCategories()
        setTimeout(() => {

        }, 1000);
        // getOtherProducts()
    }, [])

    //https://api.sampleapis.com/coffee/hot https://ecommerce.routemisr.com/api/v1/products https://dummyjson.com/products https://api.escuelajs.co/api/v1/products   https://fakestoreapi.com/products/category/jewelery
    async function getProducts() {
        setIsLoading(true)
        let { data } = await axios.get("https://ecommerce.routemisr.com/api/v1/products")
        setProducts(data.data);
        console.log(data.data);
        setIsLoading(false)
    }

    async function getCategories() {
        setIsLoading(true)
        let { data } = await axios.get("https://ecommerce.routemisr.com/api/v1/categories")
        setCategories(data.data);
        console.log(data.data);
        setIsLoading(false)
    }
    // async function getOtherProducts() {
    //     let { data } = await axios.get("https://api.sampleapis.com/coffee/hot")
    //     setProducts(data);
    //     console.log(data);

    // }

    return (

        <>
            <Helmet>
                <title>Home</title>
            </Helmet>

            {isLoading ? <LoadingScreen />
                : <div className="bg-transparent dark:bg-transparent">

                    <Banners />
                    <CategoriesSlider categories={categories} />
                    <div className="grid xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mx-auto xs:px-3 xs:ms-5 sm:ms-36 md:ms-0 md:px-10 gap-14 bg-body dark:bg-dark">
                        {products?.map((product, index) => {
                            return <CardDesign product={product} key={index} />
                        })}
                    </div>
                    <Statistics />
                    <ClientsReviews />
                    <ContactUs />
                    <ScrollingUpIcon />
                </div>}

        </>


    )
}

