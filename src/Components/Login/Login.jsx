
import axios from 'axios';
import { useFormik } from 'formik';
import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { AuthContext } from '../../Context/AuthContext';
import style from './login.module.css';
import { Helmet } from 'react-helmet';

export default function Login() {

  const [isLoading, setIsLoading] = useState(false)
  const [errorMsg, setErrorMsg] = useState("")
  const [succussMsg, setSuccussMsg] = useState("")
  const navigate = useNavigate()
  let { setUserToken } = useContext(AuthContext)

  const initialValues = {
    email: '',
    password: '',

  };

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string().required("Password is required").matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/, "Password length must be at least 8 characters long and contain at least one letter, one number and one special character"),

  });

  async function onSubmit() {
    setErrorMsg("");
    setSuccussMsg("");
    setIsLoading(true)


    await axios.post("https://ecommerce.routemisr.com/api/v1/auth/signin", values).then((response) => {
      setIsLoading(false);
      setUserToken(response.data.token);
      setSuccussMsg(response.data.message);
      localStorage.setItem("token", response.data.token);
      if (location.pathname == "/login") {
        navigate("/");

      } else {
        navigate(location.pathname);
      }



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
        <title>SIGN IN</title>
      </Helmet>
      <div className="flex justify-center items-start -mt-20">

        <div className={style.formContainer}>
          <form onSubmit={handleSubmit} className="w-full flex flex-col p-10 rounded-2xl gap-4 bg-body dark:bg-dark">
            <h1 id="heading" className="text-xl pt-0 pb-4 font-bold dark:text-white text-[#240253] text-center">Welcome back to Shopifya.</h1>
            <div className="flex justify-center items-center flex-col w-full ">
              <div className="field my-2 w-full bg-body shadow-4xl dark:shadow-3xl dark:bg-dark pt-2">
                <svg className="input-icon ms-2 fill-[#240253] dark:fill-white " xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" viewBox="0 0 16 16">
                  <path d="M13.106 7.222c0-2.967-2.249-5.032-5.482-5.032-3.35 0-5.646 2.318-5.646 5.702 0 3.493 2.235 5.708 5.762 5.708.862 0 1.689-.123 2.304-.335v-.862c-.43.199-1.354.328-2.29.328-2.926 0-4.813-1.88-4.813-4.798 0-2.844 1.921-4.881 4.594-4.881 2.735 0 4.608 1.688 4.608 4.156 0 1.682-.554 2.769-1.416 2.769-.492 0-.772-.28-.772-.76V5.206H8.923v.834h-.11c-.266-.595-.881-.964-1.6-.964-1.4 0-2.378 1.162-2.378 2.823 0 1.737.957 2.906 2.379 2.906.8 0 1.415-.39 1.709-1.087h.11c.081.67.703 1.148 1.503 1.148 1.572 0 2.57-1.415 2.57-3.643zm-7.177.704c0-1.197.54-1.907 1.456-1.907.93 0 1.524.738 1.524 1.907S8.308 9.84 7.371 9.84c-.895 0-1.442-.725-1.442-1.914z" />
                </svg>
                <input onBlur={handleBlur} onChange={handleChange} value={values.email} type="email" id="email" name="email" placeholder='Email' className="w-full px-3 py-1 border-none bg-transparent text-black dark:text-white focus:outline-[#e81cff] focus:border-[#e81cff]" />
              </div>
              {touched.email && errors.email && <p className='text-red-500 pt-2 ps-4'>{errors.email}</p>}
            </div>
            <div className="flex justify-center items-center flex-col w-full">
              <div className="field my-2 w-full bg-body shadow-4xl dark:shadow-3xl dark:bg-dark pt-2">
                <svg className="input-icon ms-2 fill-[#240253] dark:fill-white " xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" viewBox="0 0 16 16">
                  <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z" />
                </svg>
                <input onBlur={handleBlur} onChange={handleChange} value={values.password} type="password" id="password" name="password" placeholder='Password' className="w-full px-3 py-1 border-none bg-transparent text-black dark:text-white focus:outline-none focus:border-none" />
              </div>
              {touched.password && errors.password && <p className='text-red-500 pt-2 ps-4'>{errors.password}</p>}
            </div>

            <div className="mt-3 bg-transparent border-0 hover:bg-transparent flex justify-center items-center flex-row">
              <button type="submit" className="button1 text-white rounded-md shadow-sm  py-3 px-11 font-semibold disabled:bg-gray-600" disabled={isLoading}>Sign in {isLoading && <i className="fa-solid fa-spinner fa-spin ms-1"></i>}</button>

              <Link to={"/register"} className=" text-white" ><button className="button2 text-white rounded-md shadow-sm  py-3 px-11 font-semibold">Sign Up</button></Link>
            </div>
            {errorMsg && <p className='text-red-500 text-center'>{errorMsg}</p>}
            {succussMsg && <p className='text-green-500 text-center'>{succussMsg} </p>}
            <Link to={"/forgetPasswords"} className="text-center text-[#240253] dark:text-white link link-hover transition-all mt-3">Forgot Password?</Link>
          </form>
        </div>

      </div>






    </>
  )
}

