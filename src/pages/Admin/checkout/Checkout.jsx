import React,{useReducer} from 'react';

// pages
import PersonalData from './PersonalData';
import Pessengers from './Pessengers';
import DonePage from './DonePage';
// end pages
// initial value for each input
const intialData={
  stepper:1,
  personal:{},
  pessengers:[]
}
const reducerData=(state,action)=>{
  switch(action.type){
    case "STEP_NEXT":
      return{...state,stepper:state.stepper+=1};
    case "STEP_PREVIOUS":
      return {...state,stepper:state.stepper+=1 };
    case "PERSONAL":
      return {...state,personal:action.data};
    case "PESSENGERS":
      return {...state,pessengers:action.data};
    default :
    return state;
  } 
};

const Checkout = () => {
    const [checkOutData,dispatch]=useReducer(reducerData,intialData);

    // define important function
    const prevStep=()=>{
      dispatch({type:"STEP_PREVIOUS"});
    }
    const nextStep=()=>{
      dispatch({type:"STEP_NEXT"})
    }
    
    const handleChangeData=(typePage,value)=>{
      // this function handle change from each page and send to the main
      if(typePage ==="PERSONAL"){
        dispatch({type:typePage,data:value});
      }
      else if(typePage==="PESSENGERS"){
        dispatch({type:typePage,data:value});
      }
    }

  // added some logic for stepper function
  let holdPage="";
  switch(checkOutData.stepper){
    case 1:
    holdPage=<PersonalData valueData={checkOutData.personal} next={nextStep} handleChangeData={handleChangeData}/>;
    break;
    case 2:
      holdPage=<Pessengers allValue={checkOutData} next={nextStep} previous={prevStep} handleChangeData={handleChangeData}/>;
      break;
    case 3:
      holdPage=<DonePage valueData={checkOutData} next={nextStep} previous={prevStep} handleChangeData={handleChangeData}/>;
      break;
    default:
      holdPage="";
  }

  
  return(
    <>
    <div className='container mx-auto '>
    <h1 className='font-bold text-md md:text-lg lg:text-xl  my-4 ml-4'>Check Out</h1>
      <div className='px-6 py-4 bg-white shadow-lg w-full rounded-lg'>
        {/* Stepper */}
        <div id="stepper">
       
          <ol className="flex items-center justify-center w-full p-3 space-x-2 text-sm border-none font-medium text-center text-gray-500  rounded-lg  dark:text-gray-400 sm:text-base  sm:p-4 sm:space-x-4">
              <li  className={`flex items-center   ${checkOutData.stepper >=1 ? 
                  (checkOutData.stepper ===1 ?' dot-active' :'dot-success'): 'dot-nonactive' }`}>
                  <span className="stepper-dot rounded-full shrink-0 ">
                      1
                  </span>
                  
                  Personal <span className="hidden sm:inline-flex sm:ml-2">Info</span>
                  <svg aria-hidden="true" className="w-4 h-4strokeLinecap ml-2 sm:ml-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 5l7 7-7 7M5 5l7 7-7 7"></path></svg>
              </li>
              <li className={`flex items-center   ${checkOutData.stepper >=2 ? 
                  (checkOutData.stepper ===2 ?' dot-active' :'dot-success'): 'dot-nonactive' }`}>
                  <span className="stepper-dot rounded-full shrink-0 ">
                      2
                  </span>
                  Pessenger <span className="hidden sm:inline-flex sm:ml-2">Info</span>
                  <svg aria-hidden="true" className="w-4 h-4 ml-2 sm:ml-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 5l7 7-7 7M5 5l7 7-7 7"></path></svg>
              </li>
              <li className={`flex items-center  ${checkOutData.stepper ===3 ? ' dot-active' :' dot-nonactive'}`}>
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
    
    
    </>
  )
}

export default Checkout