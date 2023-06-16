import { Disclosure } from '@headlessui/react'
import { ReactComponent as DropButton } from '../assets/Neutral_button.svg'
import { ReactComponent as Koper } from '../assets/Group.svg'
import Jet from '../assets/Image.svg'
import React from 'react'

const FlightOptionCard = (show) => {
  return (
    <div className='md:p-10 p-2 max-sm:text-xs font-poppins'>
        <Disclosure as='div' className='flex lg:mx-72 border mb-3 md:p-3 rounded-md flex-col'>
            <div className='flex justify-between md:order-1 order-2 max-sm:p-3'>
                <div className='inline-flex gap-2'>
                    <div><img src={Jet}/></div>
                    <h3 className='font-semibold'>Jet Air - Economy</h3>
                </div>
                <Disclosure.Button>
                    <DropButton />
                </Disclosure.Button>
            </div>

            <div className='flex justify-between md:order-2 order-1'>
                <div className='inline-flex justify-between md:gap-4 gap-0'>
                    <div className='from p-3'>
                        <h2 className='font-bold'>07:00</h2>
                        <h3>JKT</h3>
                    </div>
                    
                    <div className='text-gray-600 flex-col pt-3 text-center'>
                        <h4 className='lg:px-40 md:px-20 border-b-2 max-sm:px-0'>4h 0m</h4>
                        <h4 className='lg:px-40 md:px-20 max-sm:px-4'>direct</h4>
                    </div>

                    <div className='to p-3'>
                        <h2 className='font-bold'>11:00</h2>
                        <h3>MLB</h3>
                    </div>

                    <div className='flex items-center max-sm:w-4'>
                        <Koper />
                    </div>
                </div>

                <div className='flex items-center'>
                    <div className='price max-sm:px-2'>
                        <h2 className='font-semibold text-right'>IDR 4.950.000</h2>
                        <button type='button' className='px-10 max-sm:hidden py-1 hover:bg-purple-600 bg-purple-700 text-white rounded-xl'>Pilih</button>
                    </div>
                </div>
            </div>

                <Disclosure.Panel className='text-gray-500 order-3'>
                    bla bla
                </Disclosure.Panel>
        </Disclosure>

        <Disclosure as='div' className='flex lg:mx-72 border mb-3 md:p-3 rounded-md flex-col'>
            <div className='flex justify-between md:order-1 order-2 max-sm:p-3'>
                <div className='inline-flex gap-2'>
                    <div><img src={Jet}/></div>
                    <h3 className='font-semibold'>Jet Air - Economy</h3>
                </div>
                <Disclosure.Button>
                    <DropButton />
                </Disclosure.Button>
            </div>

            <div className='flex justify-between md:order-2 order-1'>
                <div className='inline-flex justify-between md:gap-4 gap-0'>
                    <div className='from p-3'>
                        <h2 className='font-bold'>07:00</h2>
                        <h3>JKT</h3>
                    </div>
                    
                    <div className='text-gray-600 flex-col pt-3 text-center'>
                        <h4 className='lg:px-40 md:px-20 border-b-2 max-sm:px-0'>4h 0m</h4>
                        <h4 className='lg:px-40 md:px-20 max-sm:px-4'>direct</h4>
                    </div>

                    <div className='to p-3'>
                        <h2 className='font-bold'>11:00</h2>
                        <h3>MLB</h3>
                    </div>

                    <div className='flex items-center max-sm:w-4'>
                        <Koper />
                    </div>
                </div>

                <div className='flex items-center'>
                    <div className='price max-sm:px-2'>
                        <h2 className='font-semibold text-right'>IDR 4.950.000</h2>
                        <button type='button' className='px-10 max-sm:hidden py-1 hover:bg-purple-600 bg-purple-700 text-white rounded-xl'>Pilih</button>
                    </div>
                </div>
            </div>

                <Disclosure.Panel className='text-gray-500 order-3'>
                    bla bla
                </Disclosure.Panel>
        </Disclosure>

        <Disclosure as='div' className='flex lg:mx-72 border mb-3 md:p-3 rounded-md flex-col'>
            <div className='flex justify-between md:order-1 order-2 max-sm:p-3'>
                <div className='inline-flex gap-2'>
                    <div><img src={Jet}/></div>
                    <h3 className='font-semibold'>Jet Air - Economy</h3>
                </div>
                <Disclosure.Button>
                    <DropButton />
                </Disclosure.Button>
            </div>

            <div className='flex justify-between md:order-2 order-1'>
                <div className='inline-flex justify-between md:gap-4 gap-0'>
                    <div className='from p-3'>
                        <h2 className='font-bold'>07:00</h2>
                        <h3>JKT</h3>
                    </div>
                    
                    <div className='text-gray-600 flex-col pt-3 text-center'>
                        <h4 className='lg:px-40 md:px-20 border-b-2 max-sm:px-0'>4h 0m</h4>
                        <h4 className='lg:px-40 md:px-20 max-sm:px-4'>direct</h4>
                    </div>

                    <div className='to p-3'>
                        <h2 className='font-bold'>11:00</h2>
                        <h3>MLB</h3>
                    </div>

                    <div className='flex items-center max-sm:w-4'>
                        <Koper />
                    </div>
                </div>

                <div className='flex items-center'>
                    <div className='price max-sm:px-2'>
                        <h2 className='font-semibold text-right'>IDR 4.950.000</h2>
                        <button type='button' className='px-10 max-sm:hidden py-1 hover:bg-purple-600 bg-purple-700 text-white rounded-xl'>Pilih</button>
                    </div>
                </div>
            </div>

                <Disclosure.Panel className='text-gray-500 order-3'>
                    bla bla
                </Disclosure.Panel>
        </Disclosure>

        <Disclosure as='div' className='flex lg:mx-72 border mb-3 md:p-3 rounded-md flex-col'>
            <div className='flex justify-between md:order-1 order-2 max-sm:p-3'>
                <div className='inline-flex gap-2'>
                    <div><img src={Jet}/></div>
                    <h3 className='font-semibold'>Jet Air - Economy</h3>
                </div>
                <Disclosure.Button>
                    <DropButton />
                </Disclosure.Button>
            </div>

            <div className='flex justify-between md:order-2 order-1'>
                <div className='inline-flex justify-between md:gap-4 gap-0'>
                    <div className='from p-3'>
                        <h2 className='font-bold'>07:00</h2>
                        <h3>JKT</h3>
                    </div>
                    
                    <div className='text-gray-600 flex-col pt-3 text-center'>
                        <h4 className='lg:px-40 md:px-20 border-b-2 max-sm:px-0'>4h 0m</h4>
                        <h4 className='lg:px-40 md:px-20 max-sm:px-4'>direct</h4>
                    </div>

                    <div className='to p-3'>
                        <h2 className='font-bold'>11:00</h2>
                        <h3>MLB</h3>
                    </div>

                    <div className='flex items-center max-sm:w-4'>
                        <Koper />
                    </div>
                </div>

                <div className='flex items-center'>
                    <div className='price max-sm:px-2'>
                        <h2 className='font-semibold text-right'>IDR 4.950.000</h2>
                        <button type='button' className='px-10 max-sm:hidden py-1 hover:bg-purple-600 bg-purple-700 text-white rounded-xl'>Pilih</button>
                    </div>
                </div>
            </div>

                <Disclosure.Panel className='text-gray-500 order-3'>
                    bla bla
                </Disclosure.Panel>
        </Disclosure>

        <Disclosure as='div' className='flex lg:mx-72 border mb-3 md:p-3 rounded-md flex-col'>
            <div className='flex justify-between md:order-1 order-2 max-sm:p-3'>
                <div className='inline-flex gap-2'>
                    <div><img src={Jet}/></div>
                    <h3 className='font-semibold'>Jet Air - Economy</h3>
                </div>
                <Disclosure.Button>
                    <DropButton />
                </Disclosure.Button>
            </div>

            <div className='flex justify-between md:order-2 order-1'>
                <div className='inline-flex justify-between md:gap-4 gap-0'>
                    <div className='from p-3'>
                        <h2 className='font-bold'>07:00</h2>
                        <h3>JKT</h3>
                    </div>
                    
                    <div className='text-gray-600 flex-col pt-3 text-center'>
                        <h4 className='lg:px-40 md:px-20 border-b-2 max-sm:px-0'>4h 0m</h4>
                        <h4 className='lg:px-40 md:px-20 max-sm:px-4'>direct</h4>
                    </div>

                    <div className='to p-3'>
                        <h2 className='font-bold'>11:00</h2>
                        <h3>MLB</h3>
                    </div>

                    <div className='flex items-center max-sm:w-4'>
                        <Koper />
                    </div>
                </div>

                <div className='flex items-center'>
                    <div className='price max-sm:px-2'>
                        <h2 className='font-semibold text-right'>IDR 4.950.000</h2>
                        <button type='button' className='px-10 max-sm:hidden py-1 hover:bg-purple-600 bg-purple-700 text-white rounded-xl'>Pilih</button>
                    </div>
                </div>
            </div>

                <Disclosure.Panel className='text-gray-500 order-3'>
                    bla bla
                </Disclosure.Panel>
        </Disclosure>

        <Disclosure as='div' className='flex lg:mx-72 border mb-3 md:p-3 rounded-md flex-col'>
            <div className='flex justify-between md:order-1 order-2 max-sm:p-3'>
                <div className='inline-flex gap-2'>
                    <div><img src={Jet}/></div>
                    <h3 className='font-semibold'>Jet Air - Economy</h3>
                </div>
                <Disclosure.Button>
                    <DropButton />
                </Disclosure.Button>
            </div>

            <div className='flex justify-between md:order-2 order-1'>
                <div className='inline-flex justify-between md:gap-4 gap-0'>
                    <div className='from p-3'>
                        <h2 className='font-bold'>07:00</h2>
                        <h3>JKT</h3>
                    </div>
                    
                    <div className='text-gray-600 flex-col pt-3 text-center'>
                        <h4 className='lg:px-40 md:px-20 border-b-2 max-sm:px-0'>4h 0m</h4>
                        <h4 className='lg:px-40 md:px-20 max-sm:px-4'>direct</h4>
                    </div>

                    <div className='to p-3'>
                        <h2 className='font-bold'>11:00</h2>
                        <h3>MLB</h3>
                    </div>

                    <div className='flex items-center max-sm:w-4'>
                        <Koper />
                    </div>
                </div>

                <div className='flex items-center'>
                    <div className='price max-sm:px-2'>
                        <h2 className='font-semibold text-right'>IDR 4.950.000</h2>
                        <button type='button' className='px-10 max-sm:hidden py-1 hover:bg-purple-600 bg-purple-700 text-white rounded-xl'>Pilih</button>
                    </div>
                </div>
            </div>

                <Disclosure.Panel className='text-gray-500 order-3'>
                    bla bla
                </Disclosure.Panel>
        </Disclosure>
    </div>

  )
}

export default FlightOptionCard