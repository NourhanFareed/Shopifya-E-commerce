

export default function Statistics() {
    return (
        <div className="w-screen xs:px-[67px] md:px-20 mt-20 rounded-xl">
            <div className=" grid xs:grid-cols-1  lg:grid-cols-3 w-full bg-white dark:bg-[#1F2937] shadow-lg rounded-xl">
                <div className="stat xs:shadow-md xs:rounded-t-xl lg:rounded-l-xl">
                    <div className="stat-figure text-yellow-300 lg:-ms-5 hover:-translate-y-2 transition-all">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            className="inline-block h-8 w-8 stroke-current">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                    </div>
                    <div className="">
                        <div className="stat-title text-gray-900 dark:text-white pb-1">Purchase</div>
                        <div className="stat-value text-[#240253] dark:text-[#003783]">31K</div>
                        <div className="stat-desc text-gray-900 dark:text-white pt-1">Jan 1st - Feb 1st</div>
                    </div>

                </div>

                <div className="stat xs:shadow-md border-gray-200 rounded-none">
                    <div className="stat-figure text-yellow-300 lg:-ms-5 hover:-translate-y-2 transition-all">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            className="inline-block h-8 w-8 stroke-current">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path>
                        </svg>
                    </div>
                    <div className="stat-title text-gray-900 dark:text-white pb-1">New Users</div>
                    <div className="stat-value text-[#240253] dark:text-[#003783]">4,200</div>
                    <div className="stat-desc text-gray-900 dark:text-white pt-1">↗︎ 400 (22%)</div>
                </div>

                <div className="stat xs:shadow-md border-gray-200 xs:rounded-b-xl lg:rounded-bl-none lg:rounded-r-xl">
                    <div className="stat-figure text-yellow-300 lg:-ms-5 hover:-translate-y-2 transition-all">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            className="inline-block h-8 w-8 stroke-current">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path>
                        </svg>
                    </div>
                    <div className="stat-title text-gray-900 dark:text-white pb-1">New Registers</div>
                    <div className="stat-value text-[#240253] dark:text-[#003783]">1,200</div>
                    <div className="stat-desc text-gray-900 dark:text-white pt-1">↘︎ 90 (14%)</div>
                </div>
            </div>
        </div>
    )
}
