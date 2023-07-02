import { Disclosure } from '@headlessui/react'
import { ReactComponent as DropButton } from '../assets/Neutral_button.svg'
import { ReactComponent as Koper } from '../assets/Group.svg'
import useGetDifferentTime from '../utilites/customHooks/use-get-different-time';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Jet from '../assets/Image.svg'
import React from 'react';
import queryString from 'query-string';
import moment from 'moment';

const FlightOptionCard = ({ index, item,pessegers },props) => {

    const differentTime=useGetDifferentTime(item.arrival_time,item.departure_time);
    // get Token
    const {token}=useSelector(features=>features.auth);
    //check the token
    const tmpQuery={
        schedule:item.uuid_schedules,
        pessegers,
        stepper:1,
    }
    let linkUrl;
   if(token ===null){
    linkUrl="/auth/login/";
   } else{
    linkUrl="/user/checkout/";

   }
//    console.log(tmpQuery);
    const queryParams=queryString.stringify(tmpQuery);
    const price=new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 3 }).format(item.price)
    return (
        <div className='max-sm:pt-2 md:pb-4 lg:pb-6 max-sm:text-xs font-poppins' key={index}>
            <Disclosure as='div' className='flex border md:p-3 rounded-md flex-col'>
                <div className='flex justify-between md:order-1 order-2 max-sm:p-3'>
                    <div className='inline-flex gap-2'>
                        <div><img src={Jet} alt='foto pesawat' /></div>
                        <h3 className='font-semibold'>{`${item?.airplane_id}`}</h3>
                    </div>
                    <Disclosure.Button>
                        <DropButton />
                    </Disclosure.Button>
                </div>

                <div className='flex justify-between md:order-2 order-1'>
                    <div className='inline-flex justify-between md:gap-4 gap-0 flex-wrap'>
                        <div className='from p-3'>
                            <h2 className='font-bold'>{`${moment(item.departure_time).format('LLL')}`}</h2>
                            <h3>{`${item?.departure_city}`}</h3>
                        </div>

                        <div className='text-gray-600 flex-col pt-3 text-center'>
                            <h4 className='lg:px-28 md:px-20 border-b-2 max-sm:px-0'>{ differentTime}</h4>
                            <h4 className='lg:px-28 md:px-20 max-sm:px-4'>direct</h4>
                        </div>

                        <div className='to p-3'>
                            <h2 className='font-bold'>{`${moment(item?.arrival_time).format('LLL')}`}</h2>
                            <h3>{`${item?.arrival_city}`}</h3>
                        </div>
                    </div>

                    <div className='flex items-center'>
                        <div className='flex items-center max-sm:w-4 px-4'>
                            <Koper />
                        </div>
                        <div className='price flex flex-col gap-2 max-sm:px-2'>
                            <h2 className='font-semibold text-right'>Rp.{price}</h2>
                            <Link to={`${linkUrl}allData?${queryParams}`} className='px-10 max-sm:hidden py-1 hover:bg-purple-600 bg-purple-700 text-white rounded-xl'>Pilih</Link>
                        </div>
                    </div>
                </div>

                <Disclosure.Panel className='order-3'>
                    <h1 className='text-sm md:text-base lg:text-lg text-primary-darkblue04 font-bold my-4'>Detail Penerbangan</h1>
                    <div className='grid grid-cols-2 mt-4'>
                        <div>
                            <p className='text-xs md:text-sm lg:text-base font-semibold'>{moment(item.departure_time).format('LLL')}</p>
                            <p className='text-xs md:text-sm lg:text-base font-semibold'>{item.departure_airport}</p>
                        </div>
                        <div className='justify-items-end'>
                            <p className='text-xs text-end md:text-sm lg:text-base font-semibold text-primary-darkblue04'>Departure</p>
                        </div>
                        <div className='col-span-2 px-6 my-4 '>
                            <hr className='mb-2 text-lg'/>
                            <div className='flex gap-x-2'><img src={Jet} alt='foto pesawat' /><h1 className='text-sm md:text-base lg:text-lg font-semibold  '>{item.airplane_id}</h1></div>
                            
                            <h1 className='text-sm md:text-base lg:text-lg font-semibold  '>{item.iata_code}</h1>
                            
                            <h1 className='text-sm md:text-base lg:text-lg font-semibold mt-6 '>Information :</h1>
                          
                            <p>Bagagage 20Kg</p>
                            <p>Cabin Bagagge 5Kg</p>
                            <hr className='mt-2'/>
                        </div>
                        <div>
                            <p className='text-xs md:text-sm lg:text-base font-semibold'>{moment(item.arrival_time).format('LLL')}</p>
                            <p className='text-xs md:text-sm lg:text-base font-semibold'>{item.arrival_airport}</p>
                        </div>
                        <div className='justify-items-end'>
                            <p className='text-xs text-end md:text-sm lg:text-base font-semibold text-primary-darkblue04'>Arrival</p>
                        </div>
                    </div>
                   
                </Disclosure.Panel>
            </Disclosure>
        </div>
    )
}

export default FlightOptionCard