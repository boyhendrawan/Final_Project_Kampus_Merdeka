import FilterCard from '../components/FilterCard'
import FlightOptionCard from '../components/FlightOptionCard'
import { ReactComponent as Left } from '../assets/fi_arrow-left.svg'
import { ReactComponent as Line } from '../assets/Thin.svg'
import React from 'react'
import { ReactComponent as Termurah } from '../assests/Prefix icon.svg'
import { useState } from 'react'

const FlightOption = () => {
    const [showFlightOptionCard, setShowFlightOptionCard] = useState(false)
        
    const arrayDummy = [
        {
            maskapai: "Jet Air - Economy",
            departureTime: "07.00",
            fligthTime: "04h 0m",
            arrivedTime: "11.00",
            departure: "JKT",
            arrived: 'MLB',
            price: "IDR. 4.950.000",
            desc: 'Testing Desc1',
            info: {
                bagasi: '30KG',
                availableTicket: 30
            }
        },
        {
            maskapai: "LION AIR - Bussiness",
            departureTime: "20.00",
            fligthTime: "04h 0m",
            arrivedTime: "24.00",
            departure: "PLG",
            arrived: 'YOG',
            price: "IDR. 8.950.000",
            desc: 'Testing Desc2'
        },
        {
            maskapai: "Jet Air - First Class",
            departureTime: "07.00",
            fligthTime: "04h 0m",
            arrivedTime: "11.00",
            departure: "JKT",
            arrived: 'MLB',
            price: "IDR. 4.950.000",
            desc: 'Testing Desc3'
        },
        {
            maskapai: "Jet Air - Bussines",
            departureTime: "10.00",
            fligthTime: "04h 0m",
            arrivedTime: "14.00",
            departure: "JKT",
            arrived: 'DBI',
            price: "IDR. 10.950.000",
            desc: 'Testing Desc4'
        },
    ]

    const handleFlightOptionCard = () => {
        setShowFlightOptionCard(current => !current);
    }

    return (
        <>
            <div className='max-sm:hidden pt-36 lg:px-64 md:px-10 font-bold text-lg'>Pilih Penerbangan</div>

            <div className='flex max-sm:flex-wrap items-center justify-between gap-2 md:gap-4 pt-24 md:pt-10 px-2 md:px-10 lg:px-72'>
                <div className='inline-flex bg-primary-darkblue05 max-sm:w-full gap-2 py-2 md:gap-4 rounded-md md:flex-1'>
                    <button type='button' className='flex items-center ml-4 hover:bg-primary-darkblue04 hover:rounded-3xl'>
                        <Left />
                    </button>

                    <ol className='inline-flex items-center text-xs font-poppins text-neutral-300'>
                        <li>
                            <span href='#' className='hover:text-white font-bold'>JKT</span>
                        </li>

                        <li>
                            <div>
                                <svg aria-hidden="true" className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
                            </div>
                        </li>

                        <li>
                            <span href='#' className='hover:text-white font-bold'>MLB</span>
                        </li>

                        <li>
                            <div>
                                <svg aria-hidden="true" className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
                            </div>
                        </li>

                        <li className='hover:text-white font-light'>
                            2 Penumpang
                        </li>

                        <li>
                            <div>
                                <svg aria-hidden="true" className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
                            </div>
                        </li>

                        <li className='hover:text-white font-light'>
                            Economy
                        </li>
                    </ol>
                </div>

                <button type='button' className='bg-lime-600 hover:bg-lime-400 max-sm:w-full text-center rounded-md text-white font-bold py-2 md:px-20'>Ubah Pencarian</button>
            </div>

            <div className='inline-flex max-sm:relative md:justify-center border-b-2 w-full md:text-lg text-sm max-sm:overflow-scroll'>
                <div onClick={handleFlightOptionCard} className='text-center hover:cursor-pointer m-2'>
                    <div className='p-2 md:px-4 hover:bg-purple-600 hover:text-white hover:rounded-md'>
                        <div className='font-bold'>Selasa</div>
                        <div className='text-neutral-500 text-xs hover:text-neutral-200'>02/03/2023</div>
                    </div>
                </div>

                <div className='flex items-center'>
                    <Line />
                </div>

                <div className='text-center hover:cursor-pointer m-2'>
                    <div className='p-2 md:px-4 hover:bg-purple-600 hover:text-white hover:rounded-md'>
                        <div className='font-bold'>Rabu</div>
                        <div className='text-neutral-500 text-xs hover:text-neutral-200'>02/03/2023</div>
                    </div>
                </div>

                <div className='flex items-center'>
                    <Line />
                </div>

                <div className='text-center hover:cursor-pointer m-2'>
                    <div className='p-2 md:px-4 hover:bg-purple-600 hover:text-white hover:rounded-md'>
                        <div className='font-bold'>Kamis</div>
                        <div className='text-neutral-500 text-xs hover:text-neutral-200'>02/03/2023</div>
                    </div>
                </div>

                <div className='flex items-center'>
                    <Line />
                </div>

                <div className='text-center hover:cursor-pointer m-2'>
                    <div className='p-2 md:px-4 hover:bg-purple-600 hover:text-white hover:rounded-md'>
                        <div className='font-bold'>Jumat</div>
                        <div className='text-neutral-500 text-xs hover:text-neutral-200'>02/03/2023</div>
                    </div>
                </div>

                <div className='flex items-center'>
                    <Line />
                </div>

                <div className='text-center hover:cursor-pointer m-2'>
                    <div className='p-2 md:px-4 hover:bg-purple-600 hover:text-white hover:rounded-md'>
                        <div className='font-bold'>Sabtu</div>
                        <div className='text-neutral-500 text-xs hover:text-neutral-200'>02/03/2023</div>
                    </div>
                </div>

                <div className='flex items-center'>
                    <Line />
                </div>
            </div>

            <div className='flex justify-end lg:mx-72 lg:py-6 max-lg:p-2 max-sm:text-xs'>
                <button type='button' className='flex flex-row gap-4 border-2 border-primary-darkblue04 px-3 py-2 items-center rounded-3xl'>
                    <Termurah />

                    <div className='text-primary-darkblue04 font-medium hover:underline'>
                        Termurah
                    </div>
                </button>
            </div>

            <div className='flex justify-center lg:gap-4 '>
                <div className='max-lg:hidden'>
                    <FilterCard />
                </div>

                <div>
                    {showFlightOptionCard && 
                        arrayDummy?.map((item, i) => (
                            <FlightOptionCard key={i} index={i}
                                show={showFlightOptionCard}
                                item={item}
                            />
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default FlightOption