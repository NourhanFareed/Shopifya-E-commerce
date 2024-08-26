/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import Slider from "react-slick"





export default function ProductSlider({ images, title }) {

    var settings = {
        dots: true,
        infinite: true,
        speed: 200,
        slidesToShow: 1,
        slidesToScroll: 1,

    }

    return (

        <div className="mx-auto mb-10">
            <div className="max-w-96 min-h-[300px] relative mx-auto rounded-lg overflow-visible">

                <Slider {...settings}>
                    {images?.map((image, index) => {
                        return <img key={index} className="object-cover" src={image} alt={title} />
                    })}
                </Slider>
            </div>
        </div>



    )
}

