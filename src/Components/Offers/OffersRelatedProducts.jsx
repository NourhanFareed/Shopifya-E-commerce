/* eslint-disable react/prop-types */

import Slider from "react-slick";
import style from "../MoreProducts/MoreProducts.module.css";
import { Link } from "react-router-dom";

export default function OffersRelatedProducts({ products }) {

    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, display: "block", background: "gray", borderRadius: "10px", paddingTop: "2px", paddingBottom: "2px" }}
                onClick={onClick}
            />
        );
    }

    function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, display: "block", background: "gray", borderRadius: "10px", paddingTop: "2px", paddingBottom: "2px" }}
                onClick={onClick}
            />
        );
    }

    const settings = {
        dots: true,
        infinite: true,
        speed: 200,
        slidesToShow: 5,
        slidesToScroll: 5,
        initialSlide: 0,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    dots: true
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false
                }
            }
        ]
    };
    return (


        <div className="mt-16">
            <h2 className="text-center text-3xl font-bold mb-9 text-[#240253] dark:text-white">More Products</h2>
            <div className="slider-container md:mx-16 px-16 gap-20">
                <Slider {...settings}  >

                    {products?.slice(1, 48).map((product, index) => {
                        return <div key={index} className={style.card}>

                            <div className="bg-white rounded-3xl overflow-hidden w-fit ring-opacity-40 max-w-sm group relative border-white hover:border-[#7c005b] dark:hover:border-[#003783] border-[3px] ">
                                <div className="relative overflow-hidden w-fit">
                                    <Link to={"/offerDetails/" + product?.id}>
                                        <img className="w-full h-full group-hover:scale-110 shadow-lg rounded-lg transition duration-700" src={product?.images[0]} alt={product?.title} />
                                    </Link>
                                </div>

                            </div>

                        </div>
                    })}


                </Slider>
            </div>
        </div>





    )
}
