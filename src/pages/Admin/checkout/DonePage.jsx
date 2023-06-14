import React from 'react'
import PersonalData from './PersonalData'
import Pessengers from './Pessengers'
const DonePage = (props) => {
  return(
    
    <div>
        <div className='flex w-full gap-6 my-4'>
            <h1 className='font-semibold text-md md:text-lg lg:text-xl  '>Summary Order Tiket</h1>
            <span className='bg-red-500 text-white py-1 px-2 rounded-full'>Unpaid</span>
        </div>
        <h1 className='header-title-h1 mt-2'>BookingCode</h1>
        <h3 className='header-title-h2 mt-4'>JET AIR - Economy JT-UHY</h3>
        <div className=' w-full grid grid-cols-2 justify-items-center gap-x-5 my-4'>
            <h1 className='text-center col-span-2 '>information Depature And Arrival</h1>
            <div className=''>
             keberangkatan    
            </div> 
            <div className=''>
             kepulangan  
            </div> 
        </div>
        <div>

        </div>

        
    </div>
    
  )
}

export default DonePage