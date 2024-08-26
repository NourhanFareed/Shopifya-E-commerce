/* eslint-disable react/prop-types */
import DarkModeToggle from '../DarkModeToggle/DarkModeToggle'

export default function Toggle({ scrollNav }) {
    return (
        <div className={scrollNav ? "flex justify-end items-center -me-10" : "hidden"}>
            <DarkModeToggle />
        </div>
    )
}
