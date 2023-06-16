import React, { useReducer } from 'react';

// pages
import PersonalData from './PersonalData';
import Pessengers from './Pessengers';
import DonePage from './DonePage';
import airplane from "./airplane.svg"
// end pages
// initial value for each input
const intialData = {
  stepper: 1,
  personal: {},
  pessengers: []
}
const reducerData = (state, action) => {
  switch (action.type) {
    case "STEP_NEXT":
      return { ...state, stepper: state.stepper += 1 };
    case "STEP_PREVIOUS":
      return { ...state, stepper: state.stepper -=1 };
    case "PERSONAL":
      return { ...state, personal: action.data };
    case "PESSENGERS":
      return { ...state, pessengers: action.data };
    default:
      return state;
  }
};

const Checkout = () => {
  const [checkOutData, dispatch] = useReducer(reducerData, intialData);

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

  // added some logic for stepper function
  let holdPage = "";
  switch (checkOutData.stepper) {
    case 1:
      holdPage = <PersonalData valueData={checkOutData.personal} next={nextStep} handleChangeData={handleChangeData} />;
      break;
    case 2:
      holdPage = <Pessengers allValue={checkOutData} next={nextStep} previous={prevStep} handleChangeData={handleChangeData} />;
      break;
    case 3:
      holdPage = <DonePage valueData={checkOutData} next={nextStep} previous={prevStep} handleChangeData={handleChangeData} />;
      break;
    default:
      holdPage = "";
  }


  return (
    <>
      <div className='container mx-auto mt-32'>
        <h1 className='font-bold text-md md:text-lg lg:text-xl  my-4 ml-4'>Check Out</h1>
        <div className='flex flex-col  items-center w-full gap-y-4 md:flex-row md:items-start md:gap-x-4 justify-center'>
          <div className='order-2 px-6 py-4 bg-white shadow-lg w-full rounded-lg max-w-md lg:max-w-sm'>
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
            {checkOutData.stepper ===3 &&
            <button className='bg-emerald-500 font-semibold  py-2 text-white w-full rounded-lg text-sm md:text-base lg:text-lg glance-animation'>Bayar</button>
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
                  Done
                </li>
              </ol>

            </div>
            {/* end Stepper */}
            {holdPage}

          </div>

        </div>

      </div>


    </>
  )
}

export default Checkout