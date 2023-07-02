import React, { useReducer,useEffect, useCallback } from 'react';
// pages
import PersonalData from './PersonalData';
import Pessengers from './Pessengers';
import DonePage from './DonePage';
import airplane from "./airplane.svg";
import { useSearchParams,Link,useNavigate } from 'react-router-dom';
import { useSelector, useDispatch} from 'react-redux';
import { paidCheckOut,getCetakTiket } from '../../../utilites/redux/action/checkout';
import queryString from 'query-string';
import imgDone from "../../../assets/doneCheckout.svg";
// end pages
// initial value for each input
const intialData = {
  stepper: null,
  personal: {},
  pessengers: [],
}
const reducerData = (state, action) => {
  switch (action.type) {
    case "STEP_NEXT":
      return { ...state, stepper: state.stepper += 1 };
    case "STEP_PREVIOUS":
      return { ...state, stepper: state.stepper -= 1 };
    case "PERSONAL":
      return { ...state, personal: action.data };
    case "PESSENGERS":
      return { ...state, pessengers: action.data };
    case "UPDATE_STEPPER":
      return {...state,stepper:action.data}
    default:
      return state;
  }
};

const Checkout = () => {
  // define all intial from module
  const [checkOutData, dispatch] = useReducer(reducerData, intialData);
  const navigate=useNavigate();
  const [allParams,setParams]=useSearchParams();
  // convert params into 
  const convertAndCheck = useCallback((data)=>{
    const paramsObject = {};
    for (let [key, value] of data.entries()) {
        if (value.trim().length <= 0) return false;
        paramsObject[key] = value;
    }
    return paramsObject;
  },[]);
  // get data from params
  const allParamsConvert=convertAndCheck(allParams);
  useEffect(()=>{
    // send to the server this schedul is order
    const convertParams=convertAndCheck(allParams);
    if(!convertParams) return navigate("/");
    dispatch({type:"UPDATE_STEPPER",data: parseInt(convertParams.stepper)});
    // make an request to get uuid_transsection and make an checkoutfor this user
  },[allParams,convertAndCheck,navigate])

  // define important function
  const prevStep = () => {
    dispatch({ type: "STEP_PREVIOUS" });
  }
  const nextStep = () => {
    dispatch({ type: "STEP_NEXT" })
  }

  const handleChangeData = (typePage, value) => {
    // this function handle change from each page and send to the main
    if (typePage === "PERSONAL") {
      dispatch({ type: typePage, data: value });
    }
    else if (typePage === "PESSENGERS") {
      dispatch({ type: typePage, data: value });
    }
  }
  // checkoutPaid
  const dispatchApi=useDispatch();
  const {isLoading,dataCheckoutPaid} =useSelector(features=>features.checkout);

  // provide BodyRequest for Paid
  const produceBodyRequestPaid = useCallback((pessegers,transaction) => {
    const collectData = [];
    for (let i = 0; i < pessegers; i++) {
      const constructData = {
        "uuid_transaction": transaction,
      }
      collectData.push(constructData);
    }
    return collectData;
  }, []);
  const handlePaidCheckout=()=>{
    // console.log(allParamsConvert);
    const dataRequestPaid=produceBodyRequestPaid(parseInt(allParamsConvert.pessengers),allParamsConvert.transaction);
    dispatchApi(paidCheckOut(dataRequestPaid));
  }
  useEffect(()=>{
    // console.log(isLoading,dataCheckoutPaid);
    if(allParamsConvert.stepper ==="3" && !isLoading && dataCheckoutPaid){
      // produce new url
      const newParams={
        stepper:4,
        pessengers:dataCheckoutPaid.length,
        transaction:dataCheckoutPaid[0].uuid_transaction
      }
      setParams(queryString.stringify(newParams));
    }
  },[allParamsConvert.stepper,dataCheckoutPaid,isLoading,setParams])

  const handlerCetakTiket=()=>{
    console.log(allParamsConvert)
    dispatchApi(getCetakTiket(allParamsConvert.transaction))
  }
  // added some logic for stepper function
  let holdPage = "";
  switch (parseInt(checkOutData?.stepper)) {
    case 1:
      holdPage = <PersonalData setParams={setParams} dataParams={allParamsConvert}  valueData={checkOutData.personal} next={nextStep} handleChangeData={handleChangeData} />;
      break;
    case 2:
      holdPage = <Pessengers setParams={setParams} dataParams={allParamsConvert} allValue={checkOutData} next={nextStep} previous={prevStep} handleChangeData={handleChangeData} />;
      break;
    case 3:
      holdPage = <DonePage valueData={checkOutData} handleChangeData={handleChangeData} />;
      break;
    default:
      holdPage = "1";
  }
  // console.log(checkOutData?.stepper);
  
  return (
    <>
    {/* chcek its done */}
    {parseInt(checkOutData?.stepper) !==4 &&
      <div className='container mx-auto mt-32'>
        <h1 className='font-bold text-md md:text-lg lg:text-xl  my-4 ml-4'>Check Out</h1>
        <div className='flex flex-col  items-center w-full gap-y-4 lg:flex-row lg:items-start lg:gap-x-4 justify-center'>
          <div className='order-2 px-6 py-4 bg-white shadow-lg w-full rounded-lg max-w-md lg:max-w-sm '>
            <h1 className='header-title-h1 font-semibold mt-4 mb-2 text-center'>Detail Penerbangan</h1>
            <div className='flex justify-between w-full my-4 flex-wrap'>
              <h1 className='text-xs lg:text-sm font-semibold '>JT-AIR 101</h1>
              <p className='text-xs lg:text-sm font-semibold '>Rp.109.000</p>
            </div>
            <div className='flex justify-between w-full my-4 flex-wrap'>
              <div className='flex justify-evenly items-center'>
                <div className='text-center'>
                  <p className='text-xs lg:text-sm text-slate-500  font-semibold uppercase'>PWT</p>
                  <p className='text-xs lg:text-sm mt-2 text-slate-500 font-base '>14.00</p>
                </div>
                <img src={airplane} className='text-xs w-8 h-8 rotate-[20deg] mx-4 text-red-600' alt="" />
                <div className='text-center'>
                  <p className='text-xs lg:text-sm text-slate-500  font-semibold uppercase'>PWT</p>
                  <p className='text-xs lg:text-sm mt-2 text-slate-500 font-base '>14.00</p>
                </div>
              </div>
              <p className='text-xs md:text-sm mt-2 text-slate-500 font-base self-start'>1 penumpang</p>
            </div>
            <div className='flex justify-between w-full my-4 flex-wrap'>
              <div className='flex items-center gap-x-2'>
                <span className="px-2 py-1 text-xs lg:text-sm bg-primary-darkblue03 text-white rounded-lg font-semibold tracking-wider">Economy</span>
                <p className='text-xs lg:text-sm  text-slate-500 font-base'>3 Jam 59 Menit</p>
              </div>
            </div>
            {checkOutData.stepper === 3 &&
              <button onClick={handlePaidCheckout} className='bg-emerald-500 font-semibold  py-2 text-white w-full rounded-lg text-sm md:text-base lg:text-lg glance-animation'>Bayar</button>
            }
          </div>
          <div className='order-1 px-6 py-4 bg-white shadow-lg w-full rounded-lg'>
            {/* Stepper */}
            <div id="stepper">

              <ol className="flex items-center justify-center w-full p-3 space-x-2 text-xs border-none font-medium text-center text-gray-500  rounded-lg sm:text-base  sm:p-4 sm:space-x-4">
                <li className={`flex items-center   ${checkOutData.stepper >= 1 ?
                  (checkOutData.stepper === 1 ? ' dot-active' : 'dot-success') : 'dot-nonactive'}`}>
                  <span className="stepper-dot rounded-full shrink-0 ">
                    1
                  </span>

                  Personal <span className="hidden sm:inline-flex sm:ml-2">Info</span>
                  <svg aria-hidden="true" className="w-4 h-4strokeLinecap ml-2 sm:ml-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 5l7 7-7 7M5 5l7 7-7 7"></path></svg>
                </li>
                <li className={`flex items-center   ${checkOutData.stepper >= 2 ?
                  (checkOutData.stepper === 2 ? ' dot-active' : 'dot-success') : 'dot-nonactive'}`}>
                  <span className="stepper-dot rounded-full shrink-0 ">
                    2
                  </span>
                  Pessenger <span className="hidden sm:inline-flex sm:ml-2">Info</span>
                  <svg aria-hidden="true" className="w-4 h-4 ml-2 sm:ml-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 5l7 7-7 7M5 5l7 7-7 7"></path></svg>
                </li>
                <li className={`flex items-center  ${checkOutData.stepper === 3 ? ' dot-active' : ' dot-nonactive'}`}>
                  <span className="stepper-dot rounded-full shrink-0">
                    3
                  </span>
                  Paid
                </li>
              </ol>

            </div>
            {/* end Stepper */}
            {holdPage}

          </div>

        </div>

      </div>
    }{
      parseInt(checkOutData?.stepper) ===4 &&
      <div className='container mx-auto mt-32'>
         <h1 className='font-bold text-md md:text-lg lg:text-xl  my-4 ml-4'>Selesai Bayar</h1>
         <div className='grid grid-cols-1 justify-items-center mt-10'>
          <img src={imgDone} className='justify-self-center w-12/12 h-12/12' alt="" />
          <p className='mt-5'>Transaksi Pembayaran Selesai</p>
         <div className='w-full max-w-xs  mt-10'>
          <button onClick={handlerCetakTiket} className='bg-primary-darkblue04 text-white max-w-xl w-full rounded-lg py-3 glance-animation'>Cetak Tiket</button>

          <Link to="/" className='bg-primary-darkblue03 block text-center mt-4 mb-10 text-white max-w-xl w-full rounded-lg py-3 glance-animation'>Back To Home</Link>
         </div>
         </div>
      </div>
    }

    </>
  )
}

export default Checkout