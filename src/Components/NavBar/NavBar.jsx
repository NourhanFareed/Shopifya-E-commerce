/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
/* eslint-disable react/no-unknown-property */
import { useContext, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthContext";
import style from "./navBar.module.css"
import { LuShoppingBag } from "react-icons/lu";
import DarkModeToggle from "../DarkModeToggle/DarkModeToggle";
import Toggle from "../Toggle/Toggle";
import { useCart } from "../../Context/CartContext";

export default function NavBar() {

    const { cartProductsCounter } = useCart();
    const [scrollNav, setScrollNav] = useState(false)
    const changeNav = () => {
        if (window.scrollY >= 150) {
            setScrollNav(true)
        } else {
            setScrollNav(false)
        }
    }

    window.addEventListener('scroll', changeNav)

    let { userToken, setUserToken } = useContext(AuthContext)
    console.log(AuthContext);
    const navigate = useNavigate();

    function signOut() {
        setUserToken(null);
        localStorage.removeItem("token");
        navigate("/login")
    }


    return (


        <div className="nav flex flex-col justify-center items-start fixed z-[100]">

            {/* //  First Nav */}

            <div className={scrollNav ? "hidden bg-[#7c005b] dark:bg-[#003783] w-screen transition-all ease-in-out duration-1000" : "flex justify-center items-center bg-[#7c005b] dark:bg-[#003783] w-screen"} id="FNav">
                <p className="flex justify-center items-center text-white mt-0 py-2.5">🥳 Free Shipping on orders over EGP 1500 🥳</p>
            </div>
            {/* ------------------------------------------------------------------------------------------------- */}

            {/* //  Second Nav  mafee4 userToken */}
            {!userToken && <div className={scrollNav ? "w-screen navbar justify-between items-center bg-white dark:bg-dark shadow-lg" : "w-screen navbar justify-between items-center bg-white dark:bg-dark border-b dark:border-b-slate-800"}>
                <div className=" flex bg-transparent">
                    <Link to={"/"} className="btn btn-ghost text-left md:text-center dark:text-white text-3xl text-[#240253] font-bold">Shopifya.</Link>
                </div>
                <DarkModeToggle />
            </div>}






            {userToken && <>
                {/* //  Second Nav  lama wekon fe userToken */}
                <div className={scrollNav ? "hidden w-screen h-20 dark:bg-dark bg-white transition-all ease-in-out duration-1000" : "flex items-center justify-between w-screen h-20 border border-gray-100 dark:border-gray-800  dark:bg-dark bg-white"} id="SNav">


                    <div className="navbar-start flex items-center ms-5 bg-white dark:bg-dark">

                        {userToken && <div className="dropdown z-[65] flex md:hidden">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16M4 18h7" />
                                </svg>
                            </div>
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content bg-body dark:bg-dark rounded-box z-[1] mt-16 flex justify-center items-center mx-auto py-2 shadow">
                                <li className=" p-2"><Link to={"/"} className={"dark:text-white text-[#240253] font-bold"}>Home</Link></li>
                                <li className=" p-2"><Link to={"/categories"} className={"dark:text-white text-[#240253] font-bold"}>Categories</Link></li>
                                <li className=" p-2"><Link to={"/brands"} className={"dark:text-white text-[#240253] font-bold"}>Brands</Link></li>
                                <li className=" p-2"><Link to={"/products"} className={"dark:text-white text-[#240253] font-bold"}>Products</Link></li>
                                <li className=" p-2"><Link to={"/wishList"} className={"dark:text-white text-[#240253] font-bold"}>Wishlist</Link></li>
                                <li className=" p-2"><Link to={"/offers"} className={"dark:text-white text-[#240253] font-bold"}>Offers</Link></li>

                            </ul>
                        </div>}


                        {userToken && <form className={style.form}>
                            <button>
                                <svg width={20} height={18} fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="search">
                                    <path d="M7.667 12.667A5.333 5.333 0 107.667 2a5.333 5.333 0 000 10.667zM14.334 14l-2.9-2.9" stroke="currentColor" strokeWidth="1.333" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                            <input className={style.inputSearch} placeholder="Search..." required type="search" />
                            <button className="reset rounded-full" type="reset">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 invisible focus:visible z-[60]">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                                </svg>

                            </button>
                        </form>}
                        {userToken && <div className="navbar-center flex justify-start md:hidden bg-transparent">
                            <Link to={"/"} className="btn btn-ghost text-left md:text-center dark:text-white text-3xl text-[#240253] font-bold">Shopifya.</Link>
                        </div>}
                    </div>



                    {userToken && <div className="navbar-center justify-center bg-transparent hidden md:flex">
                        <Link to={"/"} className="btn btn-ghost text-left md:text-center dark:text-white text-3xl text-[#240253] font-bold">Shopifya.</Link>
                    </div>}



                    {userToken && <div className={style.navBarEnd}>

                        <DarkModeToggle />

                        {userToken && <>
                            <Link to={"/cart"} className="btn-ghost dark:btn-ghost p-3 rounded-full flex justify-center font-bold items-center relative mt-2 ">
                                <LuShoppingBag className="indicator text-2xl text-[#240253]  dark:text-white" />
                                <span className="badge text-xs p-1  bg-[#240253] dark:bg-[#003783]  border-none text-white font-bold indicator-item absolute top-0 right-0">{cartProductsCounter}</span>
                            </Link>
                            <button className="btn btn-ghost btn-circle me-2 mt-2 bg-white dark:btn-ghost">
                                <div className="indicator text-[#240253] dark:text-white">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor">
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                                    </svg>
                                    <span className="badge badge-xs bg-[#7c005b] dark:bg-[#003783] border-[#7c005b] dark:border-[#003783] indicator-item"></span>
                                </div>
                            </button>

                        </>}

                        {userToken && <div className=" me-1 mt-2 z-[110] rounded-full bg-transparent">
                            <button
                                className="dropdown dropdown-end dark:text-white  rounded-full p-0"
                            >

                                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle me-2 text-[#240253] bg-white dark:btn-ghost"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" className="text-[#240253] fill-[#240253] dark:fill-white"><path d="M12 2a5 5 0 1 0 5 5 5 5 0 0 0-5-5zm0 8a3 3 0 1 1 3-3 3 3 0 0 1-3 3zm9 11v-1a7 7 0 0 0-7-7h-4a7 7 0 0 0-7 7v1h2v-1a5 5 0 0 1 5-5h4a5 5 0 0 1 5 5v1z"></path></svg></div>
                                <ul tabIndex={0} className="menu dropdown-content bg-base-100x bg-body border-transparent hover:border-white rounded-lg z-[1] w-52 shadow dark:bg-slate-700 text-left mt-3 p-0">
                                    <li className=" dark:hover:bg-slate-700 hover:rounded-lg text-left w-full group pb-1">
                                        <Link to={""} className={"hover:border-white py-2 text-[#240253] dark:text-white mx-auto flex justify-start rounded-lg dark:group-hover:bg-white dark:group-hover:text-[#003783] w-full font-bold"}><i className="fa-regular fa-circle-user me-1 dark:text-white text-[#240253] text-lg dark:group-hover:text-[#003783] "></i>My profile</Link>
                                    </li>
                                    <li className=" dark:hover:bg-slate-700 hover:rounded-lg text-left w-full group py-1">
                                        <Link to={""} className={"hover:border-white py-2 text-[#240253] dark:text-white mx-auto flex justify-start rounded-lg dark:group-hover:bg-white dark:group-hover:text-[#003783] w-full font-bold"}><i className="fa-solid fa-bag-shopping me-1 dark:text-white text-[#240253] text-lg dark:group-hover:text-[#003783] "></i>My orders</Link>
                                    </li>
                                    <li className=" dark:hover:bg-slate-700 hover:rounded-lg text-left w-full group py-1">
                                        <Link to={"/wishList"} className={"hover:border-white py-2 text-[#240253] dark:text-white mx-auto flex justify-start rounded-lg dark:group-hover:bg-white dark:group-hover:text-[#003783] w-full font-bold"}><i className="fa-regular fa-heart me-1 dark:text-white text-[#240253] text-lg dark:group-hover:text-[#003783] "></i>My Wishlist</Link>
                                    </li>
                                    <li className=" dark:hover:bg-slate-700 hover:rounded-lg text-left w-full group py-1">
                                        <Link to={""} className={"hover:border-white py-2 text-[#240253] dark:text-white mx-auto flex justify-start rounded-lg dark:group-hover:bg-white dark:group-hover:text-[#003783] w-full font-bold"}><i className="fa-solid fa-gear me-1 dark:text-white text-[#240253] text-lg dark:group-hover:text-[#003783] "></i> Settings</Link>
                                    </li>
                                    <li onClick={signOut} className=" dark:hover:bg-slate-700 hover:rounded-lg text-left w-full group pt-1">
                                        <Link to={"/login"} className={"hover:border-white py-2 text-[#240253] dark:text-white mx-auto flex justify-start rounded-lg dark:group-hover:bg-white dark:group-hover:text-[#003783] w-full font-bold"}><i className="fa-solid fa-right-from-bracket me-1 dark:text-white text-[#240253] text-lg dark:group-hover:text-[#003783] "></i> Logout</Link>
                                    </li>
                                </ul>
                            </button>

                        </div>}
                    </div>
                    }
                </div>





                {/* ------------------------------------------------------------------------------------------------- */}


                {/* // Third Nav */}
                <div className="w-screen">



                    {userToken && <div className={scrollNav ? "navbar justify-between w-screen dark:bg-gray-900 bg-[#F4F6F8] py-2 flex items-center shadow-lg z-[100]" : "navbar justify-between w-screen dark:bg-gray-900 bg-[#F4F6F8] py-2 hidden md:flex items-center border-b-2 dark:border-dark z-[100]"}>

                        {/* {userToken && <form className={scrollNav ? style.form : "hidden"}>
                            <button>
                                <svg width={20} height={18} fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="search">
                                    <path d="M7.667 12.667A5.333 5.333 0 107.667 2a5.333 5.333 0 000 10.667zM14.334 14l-2.9-2.9" stroke="currentColor" strokeWidth="1.333" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                            <input className="text-base bg-transparent shadow-none w-96 h-full p-2 border-none text-[#240253] focus:outline-none focus:w-96 xs:hidden xl:block focus:border-none" placeholder="Search..." required type="search" />
                            <button className="reset rounded-full" type="reset">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 invisible focus:visible z-[60]">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                                </svg>

                            </button>
                        </form>} */}
                        <div className="navbar-start">
                            {userToken && <div className={scrollNav ? "dropdown z-[65] flex md:hidden" : "hidden"}>
                                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor">
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M4 6h16M4 12h16M4 18h7" />
                                    </svg>
                                </div>
                                <ul
                                    tabIndex={0}
                                    className="menu menu-sm dropdown-content bg-body dark:bg-dark rounded-box z-[1] mt-16 flex justify-center items-center mx-auto py-2 shadow">
                                    <li className=" p-2"><Link to={"/"} className={"dark:text-white text-[#240253] font-bold"}>Home</Link></li>
                                    <li className=" p-2"><Link to={"/categories"} className={"dark:text-white text-[#240253] font-bold"}>Categories</Link></li>
                                    <li className=" p-2"><Link to={"/brands"} className={"dark:text-white text-[#240253] font-bold"}>Brands</Link></li>
                                    <li className=" p-2"><Link to={"/products"} className={"dark:text-white text-[#240253] font-bold"}>Products</Link></li>
                                    <li className=" p-2"><Link to={"/wishlist"} className={"dark:text-white text-[#240253] font-bold"}>Wishlist</Link></li>
                                    <li className=" p-2"><Link to={"/offers"} className={"dark:text-white text-[#240253] font-bold"}>Offers</Link></li>

                                </ul>
                            </div>}
                            {userToken && <div className={scrollNav ? "navbar-center flex justify-start md:hidden bg-transparent" : "hidden"}>
                                <Link to={"/"} className="btn btn-ghost text-left md:text-center dark:text-white text-3xl text-[#240253] font-bold">Shopifya.</Link>
                            </div>}
                        </div>

                        {userToken && <div className={scrollNav ? "navbar-center hidden ms-12 md:flex lg:justify-center mx-auto" : "navbar-center hidden md:flex lg:justify-center mx-auto"} >
                            <ul className="flex items-center justify-around bg-transparent">
                                <li className="mx-2 hover:rounded-lg p-2 "><NavLink to={"/"} className={"dark:text-white text-[#240253] font-semibold"}>Home</NavLink></li>
                                <li className="mx-2 hover:rounded-lg p-2 "><NavLink to={"/categories"} className={"dark:text-white text-[#240253] font-semibold"}>Categories</NavLink></li>
                                <li className="mx-2 hover:rounded-lg p-2 "><NavLink to={"/brands"} className={"dark:text-white text-[#240253] font-semibold"}>Brands</NavLink></li>
                                <li className="mx-2 hover:rounded-lg p-2 "><NavLink to={"/products"} className={"dark:text-white text-[#240253] font-semibold"}>Products</NavLink></li>
                                <li className="mx-2 hover:rounded-lg p-2 "><NavLink to={"/wishlist"} className={"dark:text-white text-[#240253] font-semibold"}>Wishlist</NavLink></li>
                                <li className="mx-2 hover:rounded-lg p-2 "><NavLink to={"/offers"} className={"dark:text-white text-[#240253] font-semibold"}>Offers</NavLink></li>
                            </ul>
                        </div>
                        }


                        <div className="navbar-end">
                            <Toggle scrollNav={scrollNav} />
                            <button className={scrollNav ? "btn btn-ghost btn-circle me-2 mt-2 bg-transparent dark:btn-ghost ms-10" : "hidden"} >
                                <Link to={"/cart"} className="flex justify-center font-bold items-center relative p-2 ">
                                    <LuShoppingBag className="indicator text-2xl text-[#240253] dark:text-white " />
                                    <span className="badge text-xs p-1 bg-[#240253] dark:bg-[#003783] border-none text-white font-bold indicator-item absolute -top-0 -right-0">{cartProductsCounter}</span>
                                </Link>
                            </button>
                        </div>

                        {userToken && <div className={scrollNav ? "flex justify-end items-center mt-2 z-[110] rounded-full bg-transparent" : "hidden"}>
                            <button
                                className="dropdown dropdown-end dark:text-white  rounded-full p-0"
                            >

                                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle me-2 bg-transparent dark:btn-ghost"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" className="text-[#240253] fill-[#240253] dark:fill-white"><path d="M12 2a5 5 0 1 0 5 5 5 5 0 0 0-5-5zm0 8a3 3 0 1 1 3-3 3 3 0 0 1-3 3zm9 11v-1a7 7 0 0 0-7-7h-4a7 7 0 0 0-7 7v1h2v-1a5 5 0 0 1 5-5h4a5 5 0 0 1 5 5v1z"></path></svg></div>
                                <ul tabIndex={0} className="menu dropdown-content bg-base-100x bg-body border-transparent hover:border-white rounded-lg z-[1] w-52 shadow dark:bg-slate-700 text-left mt-3 p-0">
                                    <li className=" dark:hover:bg-slate-700 hover:rounded-lg pb-1 text-left w-full group">
                                        <Link to={""} className={"hover:border-white py-2 text-[#240253] dark:text-white mx-auto flex justify-start rounded-lg dark:group-hover:bg-white dark:group-hover:text-[#003783] w-full font-bold"}><i className="fa-regular fa-circle-user me-1 dark:text-white text-[#240253] text-lg dark:group-hover:text-[#003783] "></i>My profile</Link>
                                    </li>
                                    <li className=" dark:hover:bg-slate-700 hover:rounded-lg py-1 text-left w-full group">
                                        <Link to={""} className={"hover:border-white py-2 text-[#240253] dark:text-white mx-auto flex justify-start rounded-lg dark:group-hover:bg-white dark:group-hover:text-[#003783] w-full font-bold"}><i className="fa-solid fa-bag-shopping me-1 dark:text-white text-[#240253] text-lg dark:group-hover:text-[#003783] "></i>My orders</Link>
                                    </li>
                                    <li className=" dark:hover:bg-slate-700 hover:rounded-lg py-1 text-left w-full group">
                                        <Link to={"/wishlist"} className={"hover:border-white py-2 text-[#240253] dark:text-white mx-auto flex justify-start rounded-lg dark:group-hover:bg-white dark:group-hover:text-[#003783] w-full font-bold"}><i className="fa-regular fa-heart me-1 dark:text-white text-[#240253] text-lg dark:group-hover:text-[#003783] "></i>My Wishlist</Link>
                                    </li>
                                    <li className=" dark:hover:bg-slate-700 hover:rounded-lg py-1 text-left w-full group">
                                        <Link to={""} className={"hover:border-white py-2 text-[#240253] dark:text-white mx-auto flex justify-start rounded-lg dark:group-hover:bg-white dark:group-hover:text-[#003783] w-full font-bold"}><i className="fa-solid fa-gear me-1 dark:text-white text-[#240253] text-lg dark:group-hover:text-[#003783] "></i> Settings</Link>
                                    </li>
                                    <li onClick={signOut} className=" dark:hover:bg-slate-700 hover:rounded-lg pt-1 text-left w-full group">
                                        <Link to={"/login"} className={"hover:border-white py-2 text-[#240253] dark:text-white mx-auto flex justify-start rounded-lg dark:group-hover:bg-white dark:group-hover:text-[#003783] w-full font-bold"}><i className="fa-solid fa-right-from-bracket me-1 dark:text-white text-[#240253] text-lg dark:group-hover:text-[#003783] "></i> Logout</Link>
                                    </li>
                                </ul>
                            </button>

                        </div>}

                    </div >


                    }
                </div>
            </>}




        </div >



    )
}
