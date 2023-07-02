import React from 'react'
import Ilustrator from "../assets/illustration.svg"
import { Link,useNavigate,useRouteError} from 'react-router-dom'

const PageError = () => {
    const navigation=useNavigate();
    const getError=useRouteError();
    // console.log(getError);
  return (
    <section className="bg-white dark:bg-gray-900 ">
    <div className="container min-h-screen px-6 py-12 mx-auto lg:flex lg:items-center lg:gap-12">
        <div className="w-full lg:w-1/2">
            <p className="text-sm font-medium text-primary-darkblue03 dark:text-primary-darkblue03-400">{getError.status} error</p>
            <h1 className="mt-3 text-2xl font-semibold text-gray-800 dark:text-white md:text-3xl">Page {getError.statusText}</h1>
            <p className="mt-4 text-gray dark:text-gray-400">Sorry, {getError.data}</p>

            <div className="flex items-center mt-6 gap-x-3">
                <button onClick={e=> navigation(-1)} className="flex items-center justify-center w-1/2 px-5 py-2 text-sm text-gray-700 transition-colors duration-200 bg-white border rounded-lg gap-x-2 sm:w-auto dark:hover:bg-gray-800 dark:bg-gray-900 hover:bg-gray-100 dark:text-gray-200 dark:border-gray-700">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 rtl:rotate-180">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
                    </svg>


                    <span >Go back</span>
                </button>

                <Link to="/" className="w-1/2 px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 bg-primary-darkblue03 rounded-lg shrink-0 sm:w-auto hover:bg-primary-darkblue03-600 dark:hover:bg-primary-darkblue03 dark:bg-primary-darkblue03-600">
                    Take me home
                </Link >
            </div>
        </div>

        <div className="relative w-full mt-12 lg:w-1/2 lg:mt-0">
            <img className="w-full max-w-lg lg:mx-auto" src={Ilustrator} alt=""/>
        </div>
    </div>
    </section>
  )
}

export default PageError