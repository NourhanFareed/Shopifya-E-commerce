/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import CardDesign from "../CardDesign/CardDesign";
import axios from "axios";
import LoadingScreen from "../LoadingScreen/LoadingScreen";
import ScrollingUpIcon from "../ScrollingUpIcon/ScrollingUpIcon";
import { Helmet } from "react-helmet";

export default function Products() {

  const [products, setProducts] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    getProducts()

  }, [])

  async function getProducts() {
    setIsLoading(true)
    let { data } = await axios.get("https://ecommerce.routemisr.com/api/v1/products")
    setProducts(data.data);
    console.log(data.data);
    setIsLoading(false)
  }

  return (

    <>
      <Helmet>
        <title>Products</title>
      </Helmet>
      {isLoading ? <LoadingScreen />
        : <div className="-mt-10">
          <h2 className="text-center text-3xl font-bold mb-12 text-[#240253] dark:text-white">Our Products</h2>
          <div className="grid xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mx-auto xs:px-3 xs:ms-5 sm:ms-36 md:ms-0 md:px-10 gap-14 bg-body dark:bg-dark">

            {products?.map((product, index) => {
              return <CardDesign product={product} key={index} />
            })}
          </div>

          <ScrollingUpIcon />

        </div>}
    </>


  )
}
