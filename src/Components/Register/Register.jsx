import axios from 'axios';
import { useFormik } from 'formik';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import style from "./Register.module.css"
import { Helmet } from 'react-helmet';


export default function Register() {


    const [isLoading, setIsLoading] = useState(false)
    const [errorMsg, setErrorMsg] = useState("")
    const [succussMsg, setSuccussMsg] = useState("")
    const navigate = useNavigate()

    const initialValues = {
        name: '',
        email: '',
        password: '',
        rePassword: '',
        phone: ''
    };

    const validationSchema = Yup.object({
        name: Yup.string().required('Username is required').min(3, "Username must be more than 3 characters").max(20, "Username must be less than 20 characters"),
        email: Yup.string().required("Email is required").email("Invalid email"),
        password: Yup.string().required("Password is required").matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/, "Password length must be at least 8 characters long and contain at least one letter, one number and one special character"),
        rePassword: Yup.string().required("RePassword is required").oneOf([Yup.ref("password")], "Password and Repassword must be the same"),
        phone: Yup.string().required("Phone number is required").matches(/^01[0125][0-9]{8}$/, "Invalid phone number"),


    });

    async function onSubmit() {
        setIsLoading(true)
        setErrorMsg("");
        setSuccussMsg("");

        await axios.post("https://ecommerce.routemisr.com/api/v1/auth/signup", values).then((response) => {
            setIsLoading(false);
            console.log(response.data);
            setSuccussMsg(response.data.message);
            setTimeout(() => {
                navigate("/login");
            }, 1000);

        }).catch((errors) => {
            setIsLoading(false);
            console.log(errors.response.data.message);
            setErrorMsg(errors.response.data.message);
        });

    }

    let { handleSubmit, values, handleChange, errors, touched, handleBlur } = useFormik({
        initialValues,
        onSubmit,
        validationSchema
    })



    return (
        <>
            <Helmet>
                <title>SIGN UP</title>
            </Helmet>
            <div className="flex justify-center items-start -mt-28">

                <div className={style.formContainer}>
                    <form onSubmit={handleSubmit} className="w-full flex flex-col px-8 py-8 rounded-2xl gap-4 bo bg-body dark:bg-dark">
                        <h1 id="heading" className="text-xl pt-0 pb-2 font-bold dark:text-white text-[#240253] text-center">Welcome to shopifya</h1>
                        <div className="flex justify-center items-center flex-col w-full">
                            <div className="field my-1 w-full bg-body shadow-4xl dark:shadow-3xl dark:bg-dark pt-2">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="input-icon ms-2 fill-[#240253] dark:fill-white ">
                                    <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z" clipRule="evenodd" />
                                </svg>
                                <input onBlur={handleBlur} onChange={handleChange} value={values.name} type="text" id="name" name="name" placeholder='Username' className="w-full px-3 py-1 border-none bg-transparent text-black dark:text-white focus:outline-none focus:border-none" />
                            </div>
                            {touched.name && errors.name && <p className='text-red-500 pt-2 ps-2'>{errors.name}</p>}
                        </div>
                        <div className="flex justify-center items-center flex-col w-full">
                            <div className="field my-1 w-full bg-body shadow-4xl dark:shadow-3xl dark:bg-dark pt-2">
                                <svg className="input-icon ms-2 fill-[#240253] dark:fill-white " xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" viewBox="0 0 16 16">
                                    <path d="M13.106 7.222c0-2.967-2.249-5.032-5.482-5.032-3.35 0-5.646 2.318-5.646 5.702 0 3.493 2.235 5.708 5.762 5.708.862 0 1.689-.123 2.304-.335v-.862c-.43.199-1.354.328-2.29.328-2.926 0-4.813-1.88-4.813-4.798 0-2.844 1.921-4.881 4.594-4.881 2.735 0 4.608 1.688 4.608 4.156 0 1.682-.554 2.769-1.416 2.769-.492 0-.772-.28-.772-.76V5.206H8.923v.834h-.11c-.266-.595-.881-.964-1.6-.964-1.4 0-2.378 1.162-2.378 2.823 0 1.737.957 2.906 2.379 2.906.8 0 1.415-.39 1.709-1.087h.11c.081.67.703 1.148 1.503 1.148 1.572 0 2.57-1.415 2.57-3.643zm-7.177.704c0-1.197.54-1.907 1.456-1.907.93 0 1.524.738 1.524 1.907S8.308 9.84 7.371 9.84c-.895 0-1.442-.725-1.442-1.914z" />
                                </svg>
                                <input onBlur={handleBlur} onChange={handleChange} value={values.email} type="email" id="email" name="email" placeholder='Email' className="w-full px-3 py-1 border-none bg-transparent text-black dark:text-white focus:outline-none focus:border-none" />
                            </div>
                            {touched.email && errors.email && <p className='text-red-500 pt-2 ps-4'>{errors.email}</p>}
                        </div>
                        <div className="flex justify-center items-center flex-col w-full">
                            <div className="field my-1 w-full bg-body shadow-4xl dark:shadow-3xl dark:bg-dark pt-2">
                                <svg className="input-icon ms-2 fill-[#240253] dark:fill-white " xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" viewBox="0 0 16 16">
                                    <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z" />
                                </svg>
                                <input onBlur={handleBlur} onChange={handleChange} value={values.password} type="password" id="password" name="password" placeholder='Password' className="w-full px-3 py-1 border-none bg-transparent text-black dark:text-white focus:outline-none focus:border-none focus:border-transparent" />
                            </div>
                            {touched.password && errors.password && <p className='text-red-500 pt-2 ps-4'>{errors.password}</p>}
                        </div>
                        <div className="flex justify-center items-center flex-col w-full">
                            <div className="field my-1 w-full bg-body shadow-4xl dark:shadow-3xl dark:bg-dark pt-2">
                                <svg className="input-icon ms-2 fill-[#240253] dark:fill-white " xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" viewBox="0 0 16 16">
                                    <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z" />
                                </svg>
                                <input onBlur={handleBlur} onChange={handleChange} value={values.rePassword} type="password" id="rePassword" name="rePassword" placeholder='Repassword' className="w-full px-3 py-1 border-none bg-transparent text-black dark:text-white focus:outline-none focus:border-none" />
                            </div>
                            {touched.rePassword && errors.rePassword && <p className='text-red-500 pt-2 ps-2'>{errors.rePassword}</p>}
                        </div>
                        <div className="flex justify-center items-center flex-col w-full">
                            <div className="field my-1 w-full bg-body shadow-4xl dark:shadow-3xl dark:bg-dark pt-2">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="input-icon ms-2 fill-[#240253] dark:fill-white ">
                                    <path d="M10.5 18.75a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5h-3Z" />
                                    <path fillRule="evenodd" d="M8.625.75A3.375 3.375 0 0 0 5.25 4.125v15.75a3.375 3.375 0 0 0 3.375 3.375h6.75a3.375 3.375 0 0 0 3.375-3.375V4.125A3.375 3.375 0 0 0 15.375.75h-6.75ZM7.5 4.125C7.5 3.504 8.004 3 8.625 3H9.75v.375c0 .621.504 1.125 1.125 1.125h2.25c.621 0 1.125-.504 1.125-1.125V3h1.125c.621 0 1.125.504 1.125 1.125v15.75c0 .621-.504 1.125-1.125 1.125h-6.75A1.125 1.125 0 0 1 7.5 19.875V4.125Z" clipRule="evenodd" />
                                </svg>

                                <input onBlur={handleBlur} onChange={handleChange} value={values.phone} type="tel" id="phone" name="phone" placeholder='Phone' className="w-full px-3 py-1 border-none bg-transparent text-black dark:text-white focus:outline-none focus:border-none" />
                            </div>
                            {touched.phone && errors.phone && <p className='text-red-500 pt-2 ps-2'>{errors.phone}</p>}
                        </div>


                        <div className="bg-transparent border-0 hover:bg-transparent mx-auto flex justify-center items-center flex-row flex-nowrap">
                            <Link to={"/login"} className="no-underline" ><button className="button2 me-3 text-white rounded-md shadow-sm  py-3 px-11 font-semibold">Sign in </button></Link>
                            <button type="submit" className="button1 text-white font-semibold  py-3 px-11 rounded-md shadow-sm disabled:bg-gray-600" disabled={isLoading}>Sign Up {isLoading && <i className="fa-solid fa-spinner fa-spin ms-1"></i>}</button>


                        </div>
                        {errorMsg && <p className='text-red-500 text-center'>{errorMsg}</p>}
                        {succussMsg && <p className='text-green-500 text-center'>{succussMsg} </p>}
                        {/* <Link className="text-center text-white text-sm link link-hover transition-all">Forgot Password?</Link> */}
                    </form>

                </div>
            </div >









        </>
    )
}
