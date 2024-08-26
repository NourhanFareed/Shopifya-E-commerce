/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";
import Slider from "react-slick";
import style from "../CategoriesSlider/CategoriesSlider.module.css";
import Categories from "../Categories/Categories";


export default function CategoriesSlider({ categories }) {


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
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true
                }
            }, {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true
                }
            }
        ]
    };


    return (
        <div className="mb-20">
            <h2 className="text-center text-3xl font-bold mb-9 text-[#240253] dark:text-white mt-20">Shop our categories</h2>
            <div className="slider-container md:mx-10 px-10 md:px-24 gap-8 mx-auto flex items-center justify-center">
                <Slider {...settings} className="mx-auto w-full">
                    {categories?.map((category, index) => {
                        return <div key={index} className={style.card}>
                            <div className="bg-white rounded-3xl overflow-hidden w-full h-full ring-opacity-40 max-w-sm group relative xs:mx-auto">
                                <Link to={"/subcategories/" + category?._id} className="relative overflow-hidden w-[350px] h-[500px]">
                                    <img className="w-[350px] h-[500px] object-center object-cover group-hover:scale-110 shadow-lg rounded-lg transition duration-700" src={category?.image} alt={category?.name} />
                                </Link>
                                <Link to={"/subcategories/" + category?._id}>
                                    <h2 className="text-2xl absolute mx-auto font-bold tracking-tight line-clamp-1 text-[#7c005b]  hidden group-hover:flex inset-0 z-50 group-hover:justify-center group-hover:items-center hover:bg-[#f4f6f89b] transition-all dark:text-white">{category?.name}</h2>
                                </Link>
                            </div>

                        </div>
                    })}
                </Slider>
            </div>
        </div>
    )
}

{/* <div className="bg-white rounded-3xl overflow-hidden w-fit ring-opacity-40 max-w-sm group relative">
    <div className="relative overflow-hidden w-fit">
        <Link to={"/productDetails/" + product?._id}>
            <img className="w-full h-full group-hover:scale-110 shadow-lg rounded-lg transition duration-700" src={product?.imageCover} alt={product?.title} />
        </Link>
    </div>

</div> */}
