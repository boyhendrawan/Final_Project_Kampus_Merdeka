import React from 'react'
import { Accordion } from 'flowbite-react';
const DonePage = (props) => {
  const personal = props?.valueData?.personal;
  const pessegers = props?.valueData?.pessengers;

  return (

    <div>
      <div className='flex w-full gap-6 mt-4 justify-center mb-4'>
        <h1 className='font-semibold text-base md:text-lg lg:text-3xl '>Summary Order Tiket</h1>
      </div>
      <h1 className='header-title-h2  text-center '><span className=' px-2 py-1 text-xs lg:text-sm bg-primary-darkblue03 text-white rounded-lg font-semibold tracking-wider'>CODE</span></h1>

      <div className='  w-full grid grid-cols-2  gap-x-5 gap-y-1 mt-6 mb-4  '>
        <div className='col-span-2 flex gap-x-2 justify-self-start items-center text-primary-darkblue03'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 md:w-6 md:h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
          </svg>

          <h1 className=' text-sm md:text-lg font-bold text-black'> Customer</h1>
        </div>
        <div className='flex flex-col  px-5 gap-y-2  text-xs md:text-base lg:text-base text-gray-500  '>
          <p className=''>Hello, <span className='font-bold'>{personal.fullName}</span></p>
          <p className=''>{personal.numberPhone}</p>
        </div>
        <div className='flex flex-col px-5  gap-y-2 justify-self-end text-xs md:text-base lg:text-base text-gray-500 '>
          <p className=''>boyhendrawan@gmial.com</p>
          <p className=' text-end'>{personal.familyName.length > 0 ? personal.familyName : "-"}</p>
        </div>

        <div className='col-span-2 flex gap-x-2 justify-self-start items-center text-primary-darkblue03 mt-8'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 md:w-6 md:h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
          </svg>


          <h1 className='  text-sm md:text-lg font-bold text-black'> Pessengers</h1>
        </div>
        <Accordion collapseAll className='col-span-2 border-none flex flex-col '>
          {pessegers.map(e => {
            return <Accordion.Panel>
              <Accordion.Title className='text-xs md:text-base lg:text-base tracking-wider font-bold text-start'>
                {e.title}.{e?.fullName} - <span>{e?.familyName.length > 0 ? e?.familyName : ""}</span>
              </Accordion.Title>
              <Accordion.Content className='mt-2 '>
                <div className=' w-full grid grid-cols-2 px-2  gap-x-5 gap-y-1 mb-4 gap text-gray-500 dark:text-gray-400 text-xs md:text-base lg:text-base'>
                  <div className='flex flex-col gap-y-2'>
                    <p className=''>{e?.birthDate}</p>
                    <p className=''>{e?.numberIdentity}</p>
                    <p>Expired Date</p>
                  </div>
                  <div className='flex flex-col gap-y-2 justify-self-end text-end'>
                    <p className=''>{e?.citizen}</p>
                    <p className=' text-end'>{e?.publisherCountry}</p>
                    <p>{e?.expired}</p>
                  </div>
                </div>
                <p className="mb-2 ">

                </p>

              </Accordion.Content>
            </Accordion.Panel>
          })}
        </Accordion>
      </div>

      <div>

      </div>


    </div>

  )
}

export default DonePage