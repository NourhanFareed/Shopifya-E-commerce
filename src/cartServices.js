/* eslint-disable no-constant-condition */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import axios from "axios";
import { document } from "postcss";
import { useState } from "react";
import { Bounce, toast } from "react-toastify";

export async function addProductToCart(productId) {
  let { data } = await axios.post(
    "https://ecommerce.routemisr.com/api/v1/cart",
    {
      productId: productId,
    },
    {
      headers: {
        token: localStorage.getItem("token"),
      },
    }
  );
  console.log("Added to the Cart!");
  toast.success(data.message, {
    position: "bottom-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
    theme: "light",
    pauseOnFocusLoss: false,
    transition: Bounce,
  });
}
export async function addProductToWishList(productId) {
  let { data } = await axios.post(
    "https://ecommerce.routemisr.com/api/v1/wishlist",
    {
      productId: productId,
    },
    {
      headers: {
        token: localStorage.getItem("token"),
      },
    }
  );

  console.log("Added to the wishlist!");

  console.log(data);

  toast.success(data.message, {
    position: "bottom-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
    theme: "light",
    pauseOnFocusLoss: false,
    transition: Bounce,
  });
}
