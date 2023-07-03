import React, { useReducer,useEffect, useCallback } from 'react';
// pages
import PersonalData from './PersonalData';
import Pessengers from './Pessengers';
import DonePage from './DonePage';
import { useSearchParams,Link,useNavigate } from 'react-router-dom';
import { useSelector, useDispatch} from 'react-redux';
import { paidCheckOut,getCetakTiket } from '../../../utilites/redux/action/checkout';
import queryString from 'query-string';
import imgDone from "../../../assets/doneCheckout.svg";
import SidePage from './SidePage';
import LoadingRequest from '../../../components/LoadingRequest';
// end pages
// initial value for each input
const intialData = {
  stepper: null,
  personal: {},
  AllParamsConvert:{},
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
    case "UPDATE_PARAMS":
        return {...state,stepper:parseInt(action.data.stepper),AllParamsConvert:action.data}
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

  // get data from params
  useEffect(()=>{
    const paramsObject = {};
    for (const [key, value] of allParams.entries()) {
      // check if value null
      if (value.trim().length <= 0) return false;
      if (paramsObject[key]) {
        // If the key already exists, convert the value into an array
        paramsObject[key] = Array.isArray(paramsObject[key])
          ? [...paramsObject[key], value]
          : [paramsObject[key], value];
      } else {
        // If the key doesn't exist, create a new key-value pair
        paramsObject[key] = value;
      }
    }
    if(!paramsObject) navigate("/");
    else dispatch({type:"UPDATE_PARAMS",data:paramsObject});
  },[allParams,navigate])

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
      let constructData;
      if(pessegers >1){
       constructData = {
          "uuid_transaction": transaction[i],
        }
      }else{
       constructData = {
          "uuid_transaction": transaction,
        }
      }
      collectData.push(constructData);
    }
    return collectData;
  }, []);
  // console.log(produceBodyRequestPaid(parseInt(checkOutData.AllParamsConvert.pessengers),checkOutData.AllParamsConvert.transaction));
  const handlePaidCheckout=(e)=>{
    const dataRequestPaid=produceBodyRequestPaid(parseInt(checkOutData.AllParamsConvert.pessengers),checkOutData.AllParamsConvert.transaction);
    dispatchApi(paidCheckOut(dataRequestPaid));
  }
  useEffect(()=>{
    if(checkOutData.AllParamsConvert.stepper ==="3" && !isLoading && dataCheckoutPaid){
      // produce new url
      const newParams={
        stepper:4,
        pessengers:dataCheckoutPaid.length,
        transaction:dataCheckoutPaid[0].uuid_transaction
      }
      setParams(queryString.stringify(newParams));
    }
  },[checkOutData.AllParamsConvert.stepper,dataCheckoutPaid,isLoading,setParams])

  const handlerCetakTiket=()=>{
    dispatchApi(getCetakTiket(checkOutData.AllParamsConvert.transaction))
  }
  // added some logic for stepper function
  let holdPage = "";
  switch (parseInt(checkOutData?.stepper)) {
    case 1:
      holdPage = <PersonalData setParams={setParams} dataParams={checkOutData.AllParamsConvert}  valueData={checkOutData.personal} next={nextStep} handleChangeData={handleChangeData} />;
      break;
    case 2:
      holdPage = <Pessengers setParams={setParams} dataParams={checkOutData.AllParamsConvert} allValue={checkOutData} next={nextStep} previous={prevStep} handleChangeData={handleChangeData} />;
      break;
    case 3:
      holdPage = <DonePage valueData={checkOutData} handleChangeData={handleChangeData} dataParams={checkOutData.AllParamsConvert} />;
      break;
    default:
      holdPage = "1";
  }
  
  return (
    <>
    {/* chcek its done */}
    {parseInt(checkOutData?.stepper) !==4 &&
      <div className='container mx-auto mt-32'>
        <h1 className='font-bold text-md md:text-lg lg:text-xl  my-4 ml-4'>Check Out</h1>
        <div className='flex flex-col  items-center w-full gap-y-4 lg:flex-row lg:items-start lg:gap-x-4 justify-center'>
         {parseInt(checkOutData?.stepper) >=2 &&
         <SidePage checkOutData={checkOutData} onClickPaid={handlePaidCheckout} dataParams={checkOutData.AllParamsConvert} dispatch={dispatchApi} />
         }
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
          {isLoading && <LoadingRequest/>}
          {!isLoading &&
          <>
            <button onClick={handlerCetakTiket} className='bg-primary-darkblue04 text-white max-w-xl w-full rounded-lg py-3 glance-animation'>Cetak Tiket</button>
            <Link to="/" className='bg-primary-darkblue03 block text-center mt-4 mb-10 text-white max-w-xl w-full rounded-lg py-3 glance-animation'>Back To Home</Link>
          </>
          
          }
         </div>
         </div>
      </div>
    }

    </>
  )
}

export default Checkout