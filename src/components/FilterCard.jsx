import React from 'react'
import { ReactComponent as Kotak } from '../assests/fi_box.svg'
import { ReactComponent as Hati } from '../assests/fi_heart.svg'
import { ReactComponent as Dolar } from '../assests/fi_dollar-sign.svg'

const FilterCard = () => {
  return (
    <div className='flex flex-col gap-6 p-4 border-2 shadow-md rounded-xl px-6'>
        <div className='font-medium'>Filter</div>

        <div className='inline-flex gap-4 border-b-2 p-2 pr-10 hover:underline hover:cursor-pointer'>
            <Kotak />Transit</div>
        <div className='inline-flex gap-4 border-b-2 p-2 pr-10 hover:underline hover:cursor-pointer'>
            <Hati />Fasilitas</div>
        <div className='inline-flex gap-4 border-b-2 p-2 pr-10 hover:underline hover:cursor-pointer'>
            <Dolar />Harga</div>    
    </div>
  )
}

export default FilterCard