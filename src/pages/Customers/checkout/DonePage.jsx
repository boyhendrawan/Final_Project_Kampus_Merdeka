import React,{useEffect} from 'react'
import { Accordion } from 'flowbite-react';
import { useDispatch, useSelector } from 'react-redux';
import LoadingRequest from "../../../components/LoadingRequest";
import { requestDataSide } from '../../../utilites/redux/action/checkout';
import moment from 'moment';
const DonePage = ({dataParams},props) => {
  // define all funciton
  const dispatch=useDispatch();
  // get datauser
  const { dataUser} = useSelector(features => features.auth);
  const { dataSidePage } = useSelector(features => features.checkout);
  useEffect(() => {
    dispatch(requestDataSide(dataParams.transaction))
}, [dataParams.transaction, dispatch])
  return (
    <>
    {!dataUser &&dataSidePage ==null && <LoadingRequest/>}
    {dataUser && dataSidePage &&
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
            <p className=''>Hello, <span className='font-bold'>{dataUser.full_name}</span></p>
            <p className=''>{dataUser.phone}</p>
          </div>
          <div className='flex flex-col px-5  gap-y-2 justify-self-end text-xs md:text-base lg:text-base text-gray-500 '>
            <p className=''>{dataUser.email}</p>
            <p className=' text-end'>-</p>
          </div>

          <div className='col-span-2 flex gap-x-2 justify-self-start items-center text-primary-darkblue03 mt-8'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 md:w-6 md:h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
            </svg>


            <h1 className='  text-sm md:text-lg font-bold text-black'> Pessengers</h1>
          </div>
          <Accordion collapseAll className='col-span-2 border-none flex flex-col '>
            {dataSidePage.map((e,id) => {
              return <Accordion.Panel key={id}>
                <Accordion.Title className='text-xs md:text-base lg:text-base tracking-wider font-bold text-start'>
                  {e.title}.{e?.full_name} - <span>{e?.given_name}</span>
                </Accordion.Title>
                <Accordion.Content className='mt-2 '>
                  <div className=' w-full grid grid-cols-2 px-2  gap-x-5 gap-y-1 mb-4 gap text-gray-500 dark:text-gray-400 text-xs md:text-base lg:text-base'>
                    <div className='flex flex-col gap-y-2'>
                      <p className=''>{moment(e?.birth_date).format("L")}</p>
                      <p className=''>{e?.id_card}</p>
                      <p>Expired Date</p>
                    </div>
                    <div className='flex flex-col gap-y-2 justify-self-end text-end'>
                      <p className=''>Indonesia</p>
                      <p className=' text-end'>IND</p>
                      <p>{e?.valid_until}</p>
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
    } 
    </>


  )
}

export default DonePage