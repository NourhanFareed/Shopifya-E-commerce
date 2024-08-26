/* eslint-disable react/prop-types */
import Slider from "react-slick";
import Banner1 from "./Banner1";
import Banner2 from "./Banner2";
import Banner4 from "./Banner4";
import Banner5 from "./Banner5";
import Banner6 from "./Banner6";


export default function Banners() {

    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, display: "none" }}
                onClick={onClick}
            />
        );
    }

    function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, display: "none" }}
                onClick={onClick}
            />
        );
    }
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
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
        <div className="rounded-none  mb-5  w-screen">
            <div className="slider-container mx-0 w-full">
                <Slider {...settings} className=" absolute bg-cover bg-center flex justify-center items-center">
                    <div>
                        <Banner5 />
                    </div>
                    <div>
                        <Banner4 />
                    </div>
                    <div>
                        <Banner1 />

                    </div>
                    <div>
                        <Banner2 />
                    </div>


                    <div>
                        <Banner6 />
                    </div>
                </Slider>
            </div>

        </div>
    )
}
// className="w-full h-[650px] rounded-3xl"