/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

import LoadingScreen from '../LoadingScreen/LoadingScreen'
import WishListProducts from '../WishListProducts/WishListProducts'
import { useWishList } from '../../Context/wishlistContext';
import { Helmet } from 'react-helmet';
import EmptyWishList from '../WishListProducts/EmptyWishList';

export default function WishList() {
    const { wishlistProducts, isLoading, wishlistProductsCounter } = useWishList()

    console.log(wishlistProducts);



    if (wishlistProductsCounter === 0) {
        return <EmptyWishList />
    }

    return (

        <>
            <Helmet>
                <title>Wishlist</title>
            </Helmet>

            {isLoading ? <LoadingScreen />
                :
                <div className="min-h-screen rounded-3xl xs:mx-8 -mt-10 pt-10 bg-body dark:bg-dark">
                    {/* <h1 className="mb-16 text-center text-[#240253] dark:text-white text-2xl font-bold">Wishlist</h1> */}

                    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mx-auto px-12 gap-14 bg-body dark:bg-dark">

                        {wishlistProducts?.map((product, index) => {
                            return <WishListProducts key={index} product={product} />
                        })}
                    </div>
                </div>
            }
        </>
    )
}
