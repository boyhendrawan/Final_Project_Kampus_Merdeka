import { Disclosure } from '@headlessui/react'
import { ReactComponent as DropButton } from '../assets/Neutral_button.svg'
import { ReactComponent as Koper } from '../assets/Group.svg'
import FlightCard from '../components/FilterCard'
import Jet from '../assets/Image.svg'
import React from 'react'

const FlightOptionCard = ({ show, item }) => {
    return (
        <div className='max-sm:pt-2 md:pb-4 lg:pb-6 max-sm:text-xs font-poppins'>
            <Disclosure as='div' className='flex border md:p-3 rounded-md flex-col'>
                <div className='flex justify-between md:order-1 order-2 max-sm:p-3'>
                    <div className='inline-flex gap-2'>
                        <div><img src={Jet} /></div>
                        <h3 className='font-semibold'>{`${item?.maskapai}`}</h3>
                    </div>
                    <Disclosure.Button>
                        <DropButton />
                    </Disclosure.Button>
                </div>

                <div className='flex justify-between md:order-2 order-1'>
                    <div className='inline-flex justify-between md:gap-4 gap-0'>
                        <div className='from p-3'>
                            <h2 className='font-bold'>{`${item?.departureTime}`}</h2>
                            <h3>{`${item?.departure}`}</h3>
                        </div>

                        <div className='text-gray-600 flex-col pt-3 text-center'>
                            <h4 className='lg:px-28 md:px-20 border-b-2 max-sm:px-0'>{`${item?.fligthTime}`}</h4>
                            <h4 className='lg:px-28 md:px-20 max-sm:px-4'>direct</h4>
                        </div>

                        <div className='to p-3'>
                            <h2 className='font-bold'>{`${item?.arrivedTime}`}</h2>
                            <h3>{`${item?.arrived}`}</h3>
                        </div>
                    </div>

                    <div className='flex items-center justify-end'>
                        <div className='flex items-center max-sm:w-4 px-4'>
                            <Koper />
                        </div>
                        <div className='price flex flex-col items-end w-full gap-2 max-sm:px-2'>
                            <h2 className='font-semibold text-right'>{`${item?.price}`}</h2>
                            <button type='button' className='px-10 max-sm:hidden py-1 max-w-[100px] items-center justify-center flex  hover:bg-purple-600 bg-purple-700 text-white rounded-xl'>Pilih</button>
                        </div>
                    </div>
                </div>

                <Disclosure.Panel className='text-gray-500 order-3'>
                    {`${item?.desc}`}
                    <p>{`${item?.info?.bagasi}`}</p>
                    <p>{`${item?.info?.availableTicket}`}</p>
                </Disclosure.Panel>
            </Disclosure>
        </div>
    )
}

export default FlightOptionCard