import { useState, useEffect } from 'react';
import { ReactComponent as Left } from '../../assets/fi_arrow-left.svg'
import { ReactComponent as Termurah } from '../../assests/Prefix icon.svg'
import FlightOptionCard from '../../components/FlightOptionCard'
import FilterCard from '../../components/FilterCard'
import { useNavigate, Link, useSearchParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { searchFlights } from '../../utilites/redux/action/flight';
import LoadingRequest from "../../components/LoadingRequest";
import imgNotFound from "../../assets/img_noAvailable.png";
import ButtonDate from '../../components/flightSearch/ButtonDate';
import { getAllCity } from '../../utilites/redux/action/flight';
// import ModalFlightOption from './ModaFlightOption';
import ModalFlightOption from './ModalFlightOption';
const FlightOption = () => {
    // define all the modules
    let [isModalOpen, setIsModalOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();
    const { searchData } = useSelector(features => features.searchFlight);
    // check cities already load ?
    const { dataCity } = useSelector(Features => Features.cities);
    const dispatch = useDispatch();
    //define variable to be used in this component 
    const [searchParams, setParams] = useSearchParams();
    // this function to convert data into a object from params
    const convertAndCheck = (data) => {
        const paramsObject = {};
        for (let [key, value] of data.entries()) {
            if (value.trim().length <= 0) return false;
            paramsObject[key] = value;
        }
        return paramsObject;
    }
    const getDataParams = convertAndCheck(searchParams);
    // running at the frist 
    useEffect(e => {
        const data = convertAndCheck(searchParams);
        // handle if value of params is null
        if (!data) {
            navigate("/");
            return;
        }
        // set loading to be true
        setIsLoading(prev => !prev);
        dispatch(searchFlights(setIsLoading, data))

    }, [searchParams, dispatch, navigate]);

    useEffect(() => {
        if (dataCity === null) {
            dispatch(getAllCity());
        }
    }, [dispatch, dataCity])

    // handle modal
    function closeModal() {
        setIsModalOpen(false)
    }

    function openModal() {
        setIsModalOpen(true)
    }

    const handleClickDate = (newDate) => {
        getDataParams.date = newDate;
        setParams(getDataParams);

    }
    const sumPessegers = parseInt(getDataParams.sumAdults) + parseInt(getDataParams.sumChildren) + parseInt(getDataParams.sumBabies);
    const handleSearchModal = (e) => {
        setParams(e)
    }
    return (
        <>
            <section className='mt-36'>
                <div className='container mx-auto'>
                    <p className=' font-bold text-lg'>Pilih Penerbangan</p>
                    <div className='flex max-sm:flex-wrap items-center justify-between gap-2 md:gap-4 pt-10  '>
                        <div className='inline-flex bg-primary-darkblue05 max-sm:w-full gap-2 py-2 px-2 md:gap-4 rounded-md md:flex-1'>
                            <Link to={"/"} className='flex items-center  hover:bg-primary-darkblue04 hover:rounded-3xl'>
                                <Left />
                            </Link>

                            <ol className='inline-flex  flex-wrap items-center text-xs font-poppins text-neutral-300'>
                                <li>
                                    <span href='#' className='hover:text-white font-bold'>{getDataParams.departure}</span>
                                </li>
                                <li>
                                    <div>
                                        <svg aria-hidden="true" className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
                                    </div>
                                </li>

                                <li>
                                    <span href='#' className='hover:text-white font-bold'>{getDataParams.arrival}</span>
                                </li>

                                <li>
                                    <div>
                                        <svg aria-hidden="true" className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
                                    </div>
                                </li>

                                <li className='hover:text-white font-light'>
                                    {sumPessegers} Penumpang
                                </li>

                                <li>
                                    <div>
                                        <svg aria-hidden="true" className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
                                    </div>
                                </li>

                                <li className='hover:text-white font-light'>
                                    {getDataParams.flightClass}
                                </li>
                            </ol>
                        </div>

                        <button type='button' onClick={openModal} className='bg-emerald-600 hover:bg-emerald-700 max-sm:w-full text-center rounded-md text-white font-bold py-2 md:px-20 focus:border-none '>Ubah Pencarian</button>
                    </div>

                    <div className='inline-flex max-sm:relative md:justify-center border-b-2 w-full md:text-lg text-sm overflow-auto'>
                        <ButtonDate data={getDataParams.date} active={getDataParams.date} onClickDate={handleClickDate} />
                    </div>

                    <div className='flex justify-end max-sm:text-xs'>
                        <button type='button' className=' text-primary-darkblue04 font-medium flex mt-4 flex-row gap-4 border-2 border-primary-darkblue04 px-3 py-2 items-center rounded-3xl'>
                            <Termurah />
                            Termurah
                        </button>
                    </div>

                    {isLoading && dataCity === null && <LoadingRequest />}
                    {!isLoading && dataCity !== null &&
                        <>
                            <div className='grid grid-cols-1 justify-items-center lg:grid-cols-[15%,85%] mt-5 '>
                                <div className='max-lg:hidden '>
                                    <FilterCard />
                                </div>

                                <div className='justify-self-end w-full'>
                                    {searchData?.length > 0 ?
                                        searchData.map((item, i) => (
                                            <FlightOptionCard key={i} index={i}
                                                item={item} pessegers={sumPessegers}
                                            />
                                        ))
                                        :
                                        <>
                                            <div className='mt-10 text-center flex flex-col items-center'>
                                                <img src={imgNotFound} alt="" />
                                                <h1 className='mt-4 text-md md:text-lg lg:text-xl capitalize  font-semibold'>Maaf Tiket Terjual Habis</h1>
                                                <p className='text-xs md:text-sm lg:text-md text-primary-darkblue04 font-semibold'>Coba cari perjalanan lainnya!</p>
                                            </div>
                                        </>


                                    }
                                </div>
                            </div>
                            <ModalFlightOption onClickSearch={handleSearchModal} dataCity={dataCity} isOpen={isModalOpen} onCloseModal={closeModal} data={getDataParams} />
                        </>
                    }
                </div>
            </section>

        </>
    )
}

export default FlightOption

