import React, { useEffect } from 'react';
import { requestDataSide } from '../../../utilites/redux/action/checkout';
import { useSelector } from 'react-redux';
import LoadingRequest from "../../../components/LoadingRequest"
import airplane from "./airplane.svg";
import useGetDifferentTime from '../../../utilites/customHooks/use-get-different-time';
import moment from 'moment';
const SidePage = ({ checkOutData, dataParams, dispatch ,onClickPaid}) => {
    // define all funnction module
    const { dataSidePage } = useSelector(features => features.checkout);
    useEffect(() => {
        dispatch(requestDataSide(dataParams?.uuid_transaction ? dataParams?.uuid_transaction :dataParams?.transaction))
    }, [dataParams.uuid_transaction, dispatch,dataParams.transaction])
    // get distance Time
    const differentTime=useGetDifferentTime(dataSidePage ? dataSidePage[0].arrival_time :"", dataSidePage?dataSidePage[0].departure_time :"");
    const handleClick=(e)=>onClickPaid(e);
    return (
        <div className='order-2 px-6 py-4 bg-white shadow-lg w-full rounded-lg max-w-md lg:max-w-sm '>
            <h1 className='header-title-h1 font-semibold mt-4 mb-2 text-center'>Detail Penerbangan</h1>
            {dataSidePage === null && <LoadingRequest />}
            {dataSidePage &&
                <>
                    <div className='flex justify-between w-full my-4 flex-wrap'>
                        <h1 className='text-xs lg:text-sm font-semibold '>{dataSidePage[0].airplane_name}</h1>
                        <p className='text-xs lg:text-sm font-semibold '>{dataSidePage.reduce((accumulator, current) => accumulator + current.price, 0).toLocaleString('id-ID', { style: 'currency', currency: 'IDR' })}</p>
                    </div>
                    <div className='flex justify-between w-full my-4 flex-wrap'>
                        <div className='flex justify-evenly items-center'>
                            <div className='text-center'>
                                <p className='text-xs lg:text-sm text-slate-500  font-semibold uppercase'>{dataSidePage[0].departure_city}</p>
                                <p className='text-xs lg:text-sm mt-2 text-slate-500 font-base '>{moment(dataSidePage[0].departure_time).format('h.mm')}</p>
                            </div>
                            <img src={airplane} className='text-xs w-8 h-8 rotate-[20deg] mx-4 text-red-600' alt="" />
                            <div className='text-center'>
                                <p className='text-xs lg:text-sm text-slate-500  font-semibold uppercase'>{dataSidePage[0].arrival_city}</p>
                                <p className='text-xs lg:text-sm mt-2 text-slate-500 font-base '>{moment(dataSidePage[0].arrival_time).format('h.mm')}</p>
                            </div>
                        </div>
                        <p className='text-xs md:text-sm mt-2 text-slate-500 font-base self-start'>{dataSidePage.length} penumpang</p>
                    </div>
                    <div className='flex justify-between w-full my-4 flex-wrap'>
                        <div className='flex items-center gap-x-2'>
                            <span className="px-2 py-1 text-xs lg:text-sm bg-primary-darkblue03 text-white rounded-lg font-semibold tracking-wider">{dataSidePage[0].seat_type}</span>
                            <p className='text-xs lg:text-sm  text-slate-500 font-base'>{differentTime}</p>
                        </div>
                    </div>
                    {checkOutData.stepper === 3 &&
                        <button onClick={handleClick} className='bg-emerald-500 font-semibold  py-2 text-white w-full rounded-lg text-sm md:text-base lg:text-lg glance-animation'>Bayar</button>
                    }
                </>
            }
        </div>
    )
}

export default SidePage