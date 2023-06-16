import { useState } from 'react'
import React from 'react'
import { ReactComponent as Left } from '../assets/fi_arrow-left.svg'
import { ReactComponent as Line } from '../assets/Thin.svg'
import FlightOptionCard from '../components/FlightOptionCard'

const FlightOption = () => {
    const [showFlightOptionCard, setShowFlightOptionCard] = useState(false)

    const handleFlightOptionCard = () => {
        setShowFlightOptionCard(!showFlightOptionCard)
    }

  return (
    <>
        <div className='max-sm:hidden pt-36 px-24 md:px-10 font-bold text-lg'>Pilih Penerbangan</div>

        <div className='flex max-sm:flex-wrap items-center justify-between gap-2 md:gap-4 pt-24 md:pt-16 px-2 md:px-10 lg:px-44'>
            <div className='inline-flex bg-primary-darkblue05 max-sm:w-full gap-2 py-2 md:gap-4 rounded-md md:flex-1'>
                <button type='button' className='flex items-center pl-2'>
                    <Left />
                </button>

                <ol className='inline-flex items-center text-xs font-poppins text-neutral-300'>
                    <li>
                        <a href='#' className='hover:text-white font-bold'>JKT</a>
                    </li>

                    <li>
                        <div>
                            <svg aria-hidden="true" class="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
                        </div>
                    </li>

                    <li>
                        <a href='#' className='hover:text-white font-bold'>MLB</a>
                    </li>

                    <li>
                        <div>
                            <svg aria-hidden="true" class="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
                        </div>
                    </li>

                    <li className='hover:text-white font-light'>
                        2 Penumpang
                    </li>

                    <li>
                        <div>
                            <svg aria-hidden="true" class="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
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
                    <div className='font-bold'>Selasa</div>
                    <div className='text-neutral-500 text-xs hover:text-neutral-200'>02/03/2023</div>
                </div>
            </div>

            <div className='flex items-center'>
                <Line />
            </div>

            <div className='text-center hover:cursor-pointer m-2'>
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
                    <div className='font-bold'>Selasa</div>
                    <div className='text-neutral-500 text-xs hover:text-neutral-200'>02/03/2023</div>
                </div>
            </div>

            <div className='flex items-center'>
                <Line />
            </div>

            <div className='text-center hover:cursor-pointer m-2'>
                <div className='p-2 md:px-4 hover:bg-purple-600 hover:text-white hover:rounded-md'>
                    <div className='font-bold'>Selasa</div>
                    <div className='text-neutral-500 text-xs hover:text-neutral-200'>02/03/2023</div>
                </div>
            </div>

            <div className='flex items-center'>
                <Line />
            </div>
        </div>

        {showFlightOptionCard && (
                <FlightOptionCard
                show={showFlightOptionCard}
                />
        )}
    </>
  )
}

export default FlightOption