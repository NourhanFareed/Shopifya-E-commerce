
import Footer from '../Footer/Footer'
import { Outlet } from 'react-router-dom'
import NavBar from '../NavBar/NavBar'

export default function Layout() {
    return (
        <>
            <NavBar />
            <div className='pt-64 pb-20 container-fluid mx-auto bg-body dark:bg-dark'>
                <Outlet />
            </div>

            <Footer />


        </>
    )
}
