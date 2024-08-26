import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import style from "../SubCategories/SubCategories.module.css"
import LoadingScreen from "../LoadingScreen/LoadingScreen";
import { Helmet } from "react-helmet";

export default function SubCategories() {
    const [subCategories, setSubCategories] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        getSubCategories()
    }, [])


    async function getSubCategories() {
        setIsLoading(true)
        let { data } = await axios.get("https://ecommerce.routemisr.com/api/v1/subcategories")
        setSubCategories(data.data);
        console.log(data.data);
        setIsLoading(false)
    }

    return (
        <>
            <Helmet>
                <title>SubCategories</title>
            </Helmet>
            {isLoading ? <LoadingScreen />
                : <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mx-auto px-16 gap-14 bg-body">

                    {subCategories?.map((subCategory, index) => {
                        return <div key={index} className={style.card}>
                            <div className="bg-white rounded-3xl overflow-hidden w-full h-full ring-opacity-40 max-w-sm group relative">
                                <div className="relative overflow-hidden w-full h-full">
                                    <Link>
                                        <h2 className="text-2xl absolute mx-auto font-bold tracking-tight line-clamp-1 text-[#7c005b] flex inset-0 z-50 justify-center items-center hover:bg-[#f4f6f89b] transition-all dark:text-white">{subCategory?.name}</h2>
                                    </Link>
                                </div>

                            </div>
                        </div>
                    })}



                </div>}
        </>
    )
}
