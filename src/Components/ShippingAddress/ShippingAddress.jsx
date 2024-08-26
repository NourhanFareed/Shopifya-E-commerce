/* eslint-disable no-unused-vars */

import axios from 'axios';
import { useFormik } from 'formik';
import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import * as Yup from 'yup';
import style from './ShippingAddress.module.css';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet';

export default function ShippingAddress() {

    const [isLoading, setIsLoading] = useState(false)
    const { cartId } = useParams()
    console.log(cartId);

    const initialValues = {
        details: "",
        phone: "",
        city: ""

    };

    const validationSchema = Yup.object({
        details: Yup.string().required("Details is required"),
        phone: Yup.string().required("phone is required"),
        city: Yup.string().required("city is required"),
    });

    async function onSubmit(values) {
        setIsLoading(true)


        await axios.post("https://ecommerce.routemisr.com/api/v1/orders/checkout-session/" + cartId, { shippingAddress: values }, {
            headers: {
                token: localStorage.getItem("token")
            },
            params: {
                url: "http://localhost:5173"
            }
        }).then(({ data }) => {
            setIsLoading(false);
            console.log(data.session.url);
            location.href = data.session.url
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Your work has been saved",
                showConfirmButton: false,
                timer: 1500
            });
        }).catch((errors) => {
            setIsLoading(false);
        });

    }

    let { handleSubmit, values, handleChange, errors, touched, handleBlur } = useFormik({
        initialValues,
        onSubmit,
        validationSchema

    });


    return (
        <>
            <Helmet>
                <title>Shipping Address</title>
            </Helmet>
            <div className="flex justify-center items-start -mt-11">

                <div className={style.formContainer}>
                    <form onSubmit={handleSubmit} className="w-full flex flex-col p-10 rounded-2xl gap-4 bg-body dark:bg-dark">
                        <h1 id="heading" className="text-xl pt-0 pb-4 font-bold dark:text-white text-[#240253] text-center">Shipping Address</h1>
                        <div className="flex justify-center items-center flex-col w-full ">
                            <div className="field my-2 w-full bg-body shadow-4xl dark:shadow-3xl dark:bg-dark pt-2">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="input-icon ms-2 text-[#240253] dark:text-white size-6">
                                    <path fillRule="evenodd" d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clipRule="evenodd" />
                                </svg>
                                <input onBlur={handleBlur} onChange={handleChange} value={values.details} type="text" id="details" name="details" placeholder='Details' className="w-full px-3 py-1 border-none bg-transparent text-black dark:text-white focus:outline-none focus:border-none" />
                            </div>
                            {touched.details && errors.details && <p className='text-red-500 pt-2 ps-4'>{errors.details}</p>}
                        </div>

                        <div className="flex justify-center items-center flex-col w-full">
                            <div className="field my-2 w-full bg-body shadow-4xl dark:shadow-3xl dark:bg-dark pt-2">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="input-icon ms-2 text-[#240253] dark:text-white size-6">
                                    <path fillRule="evenodd" d="M8.161 2.58a1.875 1.875 0 0 1 1.678 0l4.993 2.498c.106.052.23.052.336 0l3.869-1.935A1.875 1.875 0 0 1 21.75 4.82v12.485c0 .71-.401 1.36-1.037 1.677l-4.875 2.437a1.875 1.875 0 0 1-1.676 0l-4.994-2.497a.375.375 0 0 0-.336 0l-3.868 1.935A1.875 1.875 0 0 1 2.25 19.18V6.695c0-.71.401-1.36 1.036-1.677l4.875-2.437ZM9 6a.75.75 0 0 1 .75.75V15a.75.75 0 0 1-1.5 0V6.75A.75.75 0 0 1 9 6Zm6.75 3a.75.75 0 0 0-1.5 0v8.25a.75.75 0 0 0 1.5 0V9Z" clipRule="evenodd" />
                                </svg>

                                <input onBlur={handleBlur} onChange={handleChange} value={values.city} type="text" id="city" name="city" placeholder='City' className="w-full px-3 py-1 border-none bg-transparent text-black dark:text-white focus:outline-none focus:border-none" />
                            </div>
                            {touched.city && errors.city && <p className='text-red-500 pt-2 ps-4'>{errors.city}</p>}
                        </div>
                        <div className="flex justify-center items-center flex-col w-full">
                            <div className="field my-2 w-full bg-body shadow-4xl dark:shadow-3xl dark:bg-dark pt-2">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="input-icon ms-2 fill-[#240253] dark:fill-white ">
                                    <path d="M10.5 18.75a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5h-3Z" />
                                    <path fillRule="evenodd" d="M8.625.75A3.375 3.375 0 0 0 5.25 4.125v15.75a3.375 3.375 0 0 0 3.375 3.375h6.75a3.375 3.375 0 0 0 3.375-3.375V4.125A3.375 3.375 0 0 0 15.375.75h-6.75ZM7.5 4.125C7.5 3.504 8.004 3 8.625 3H9.75v.375c0 .621.504 1.125 1.125 1.125h2.25c.621 0 1.125-.504 1.125-1.125V3h1.125c.621 0 1.125.504 1.125 1.125v15.75c0 .621-.504 1.125-1.125 1.125h-6.75A1.125 1.125 0 0 1 7.5 19.875V4.125Z" clipRule="evenodd" />
                                </svg>

                                <input onBlur={handleBlur} onChange={handleChange} value={values.phone} type="tel" id="phone" name="phone" placeholder='Phone' className="w-full px-3 py-1 border-none bg-transparent text-black dark:text-white focus:outline-none focus:border-none" />
                            </div>
                            {touched.phone && errors.phone && <p className='text-red-500 pt-2 ps-4'>{errors.phone}</p>}
                        </div>
                        <div className="mt-3 bg-transparent border-0 hover:bg-transparent flex justify-center items-center flex-row">
                            <button type="submit" className="button1 text-white rounded-md shadow-sm w-full py-3 px-11 font-semibold disabled:bg-gray-600" disabled={isLoading}>Checkout {isLoading && <i className="fa-solid fa-spinner fa-spin ms-1"></i>}</button>

                        </div>
                    </form>
                </div>

            </div>

        </>
    )
}



