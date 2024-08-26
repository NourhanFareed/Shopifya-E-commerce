// import style from "./NotFound.module.css"

import { Link } from "react-router-dom";



export default function NotFound() {
  return (
    <div className="flex h-fit flex-col bg-transparent -mt-[67px] mb-0 pb-0">
      <img
        src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548&q=80"
        alt=""
        className="h-96 w-full object-cover"
      />

      <div className="flex flex-1 items-start justify-center">
        <div className="mx-auto max-w-xl px-4 pt-8  text-center">
          <h1 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            We can not find that page.
          </h1>

          <p className="mt-4 text-gray-500">
            Try searching again, or return home to start from the beginning.
          </p>

          <Link
            to={"/"}
            className="mt-6 inline-block rounded bg-indigo-600 px-5 py-3 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring"
          >
            Go Back Home
          </Link>
        </div>
      </div>
    </div>

  )
}
