/* eslint-disable react/prop-types */
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom"
import LoadingScreen from "../LoadingScreen/LoadingScreen";
import ScrollingUpIcon from "../ScrollingUpIcon/ScrollingUpIcon";
import { Helmet } from "react-helmet";



export default function Brands() {

  const [brands, setBrands] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    getBrands()
  }, [])


  async function getBrands() {
    setIsLoading(true)
    let { data } = await axios.get("https://ecommerce.routemisr.com/api/v1/brands")
    setBrands(data.data);
    console.log(data.data);
    setIsLoading(false)

  }



  return (
    <>
      <Helmet>
        <title>Brands</title>
      </Helmet>
      {isLoading ? <LoadingScreen />
        : <div className="bg-transparent dark:bg-dark -mt-10">
          <h2 className="text-center text-3xl font-bold mb-12 text-[#240253] dark:text-white">All Brands</h2>

          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mx-auto px-16 gap-10 bg-body dark:bg-dark">

            {brands?.map((brand, index) => {
              return <div key={index} className="bg-white rounded-3xl overflow-hidden w-[300px] ring-opacity-40 max-w-sm group relative border-[3.5px] hover:border-[3.5px] hover:shadow-2xl hover:border-[#7c005b] dark:hover:border-[#003783]">
                <div className="relative overflow-hidden w-full">
                  <Link>
                    <img className="w-full h-full group-hover:scale-110 rounded-lg transition duration-700" src={brand?.image} alt={brand?.name} />
                  </Link>
                </div>

              </div>
            })}
          </div>
          <ScrollingUpIcon />

        </div>}

    </>



  )
}


