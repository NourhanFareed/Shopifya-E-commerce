/* eslint-disable react/prop-types */
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom"
import style from "../Categories/Categories.module.css"
import LoadingScreen from "../LoadingScreen/LoadingScreen";
import ScrollingUpIcon from "../ScrollingUpIcon/ScrollingUpIcon";
import { Helmet } from "react-helmet";


export default function Categories() {
  const [categories, setCategories] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    getCategories()

  }, [])


  async function getCategories() {
    setIsLoading(true)
    let { data } = await axios.get("https://ecommerce.routemisr.com/api/v1/categories")
    setCategories(data.data);
    console.log(data.data);
    setIsLoading(false)
  }

  return (
    <>
      <Helmet>
        <title>Categories</title>
      </Helmet>
      {isLoading ? <LoadingScreen />
        :
        <div className="min-h-screen rounded-3xl xs:mx-8 -mt-16  lg:mx-4 pt-10 bg-body dark:bg-dark">
          <h1 className="mb-10 text-center text-[#240253] dark:text-white text-3xl font-bold">All Categories</h1>

          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mx-auto px-16 gap-14 bg-body dark:bg-dark">
            {categories?.map((category, index) => {
              return <div key={index} className={style.card}>
                <div className="bg-white rounded-3xl overflow-hidden w-full h-full ring-opacity-40 max-w-sm group relative border-[3.5px] hover:border-[3.5px] hover:shadow-2xl hover:border-[#7c005b] dark:hover:border-[#003783]">
                  <div className="relative overflow-hidden w-full h-full">
                    <Link className="w-full h-full">
                      <img className="w-full h-full object-center group-hover:scale-110 shadow-lg rounded-lg transition duration-700" src={category?.image} alt={category?.name} />
                    </Link>
                    <Link to={"/subcategories/" + category?._id}>
                      <h2 className="text-2xl absolute mx-auto font-bold tracking-tight line-clamp-1 text-[#7c005b]  hidden group-hover:flex inset-0 z-50 group-hover:justify-center group-hover:items-center hover:bg-[#f4f6f89b] transition-all dark:text-[#003783]">{category?.name}</h2>
                    </Link>
                  </div>

                </div>
              </div>
            })}

            <ScrollingUpIcon />


          </div>
        </div>}


    </>

  )
}
