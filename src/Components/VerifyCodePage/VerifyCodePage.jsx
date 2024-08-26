/* eslint-disable no-unused-vars */
import axios from 'axios';
import { useFormik } from 'formik';
import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { AuthContext } from '../../Context/AuthContext';
import style from "./VerifyCodePage.module.css"
import { Helmet } from 'react-helmet';



export default function VerifyCodePage() {


    const [isLoading, setIsLoading] = useState(false)
    const [errorMsg, setErrorMsg] = useState("")
    const [succussMsg, setSuccussMsg] = useState("")
    const navigate = useNavigate()
    let { setUserToken } = useContext(AuthContext)

    const initialValues = {
        resetCode: '',


    };

    const validationSchema = Yup.object({
        resetCode: Yup.string().required("Reset Code is required")

    });
    console.log("Hi!!!");



    async function onSubmit() {
        setErrorMsg("");
        setSuccussMsg("");
        setIsLoading(true)


        await axios.post("https://ecommerce.routemisr.com/api/v1/auth/verifyResetCode", values).then((response) => {
            setIsLoading(false);
            setUserToken(response.data.token);
            setSuccussMsg(response.data.message);
            setTimeout(() => {
                navigate("/resetPassword");
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

    });

    return (

        <>
            <Helmet>
                <title>Verification</title>
            </Helmet>

            <div className="flex justify-center items-start -mt-20">

                <div className={style.formContainer}>
                    <form onSubmit={handleSubmit} className="w-full flex flex-col p-10 rounded-2xl gap-4 bg-body dark:bg-dark">
                        <h1 id="heading" className="text-xl pt-0 pb-4 font-bold dark:text-white text-[#240253] text-center">Verification</h1>
                        <div className="flex justify-center items-center flex-col w-full ">
                            <div className="field my-2 w-full bg-body shadow-4xl dark:shadow-3xl dark:bg-dark pt-2">
                                <svg className="input-icon ms-2 fill-[#240253] dark:fill-white " xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" viewBox="0 0 16 16">
                                    <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z" />
                                </svg>
                                <input onBlur={handleBlur} onChange={handleChange} value={values.resetCode} type="text" id="resetCode" name="resetCode" placeholder='Reset code' className="w-full px-3 py-1 border-none bg-transparent text-black dark:text-white focus:outline-none focus:border-none" />
                            </div>
                            {touched.resetCode && errors.resetCode && <p className='text-red-500 pt-2 ps-4'>{errors.resetCode}</p>}
                        </div>


                        <div className="mt-3 bg-transparent border-0 hover:bg-transparent flex justify-center items-center flex-row">
                            <button type="submit" className="button1 text-white rounded-md shadow-sm w-full  py-3 px-11 font-semibold disabled:bg-gray-600" disabled={isLoading}>Verify {isLoading && <i className="fa-solid fa-spinner fa-spin ms-1"></i>}</button>


                        </div>
                        {errorMsg && <p className='text-red-500 text-center'>{errorMsg}</p>}
                        {succussMsg && <p className='text-green-500 text-center'>{succussMsg} </p>}

                    </form>
                </div>


            </div>
        </>



    )
}



