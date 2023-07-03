import React, {useCallback, useEffect,useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { sendCheckout } from "../../../utilites/redux/action/checkout";
import queryString from 'query-string';
import LoadingRequest from "../../../components/LoadingRequest"
const PersonalData = ({ next, handleChangeData, valueData, dataParams,setParams }) => {
  // define
  // const [isLoading, setIsloading] = useState(false);
  const { dataUser, token } = useSelector(features => features.auth);
  const {dataCheckout}=useSelector(features=>features.checkout);
  const inputElement=useRef();
  const dispatch = useDispatch();
 
  //  provide request body
  const produceBodyRequest = useCallback((pessegers, uuid_user, schedule_uid, seats_id = 2) => {
    const collectData = [];
    for (let i = 0; i < pessegers; i++) {
      const constructData = {
        "uuid_user": uuid_user,
        "schedule_uid": schedule_uid,
        "seats_id": seats_id
      }
      collectData.push(constructData);
    }
    return collectData;
  }, []);

  // custom hooks handle input form

  const handleNext = (e) => {
    e.preventDefault();
  
    const data = {
      fullName: dataUser?.full_name,
      numberPhone:  dataUser?.phone,
      familyName: inputElement.current.value,
    }
    handleChangeData("PERSONAL", data);
    // save checkout
    // provide request bodyf
    const requireRequest = produceBodyRequest(dataParams.pessegers, dataUser.uuid_user, dataParams.schedule);
    // making a request
    dispatch(sendCheckout(JSON.stringify(requireRequest), token,setParams));
  }
  // get if loading already done and set new params
  useEffect(()=>{
    if( dataCheckout !==null){
      setParams(queryString.stringify(dataCheckout));
    }
  },[dataCheckout,setParams])
  return (
   <>
    {!dataUser && <LoadingRequest/>}
    {dataUser &&
    <form action="">
      
      <div className='my-4 grid gap-4 md:grid-cols-2 mb-4'>
        <div>
          <label htmlFor="fullName" className="block mb-2 text-xs md:text-sm font-medium text-gray-900 dark:text-white">Full Name</label>
          <input value={dataUser?.full_name} readOnly  type="text" name="fullName" id="fullName" className="bg-gray-300 font-base border transition-all  border-gray-300 text-gray-900 text-sm rounded-lg  focus:border-blue-600 block w-full p-1.5 md:p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="fullName.example" required="" />
          
        </div>
        <div>
          <label htmlFor="nameFamily" className="block mb-2 text-xs md:text-sm font-medium text-gray-900 dark:text-white">Name Family</label>
          <input  type="text"  ref={inputElement}  name="nameFamily" id="nameFamily" className="bg-gray-50 font-base border transition-all  border-gray-300 text-gray-900 text-sm rounded-lg  focus:border-blue-600 block w-full p-1.5 md:p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="nameFamily.example" required="" />

        </div>
        <div>
          <label htmlFor="numberPhone" className="block mb-2 text-xs md:text-sm font-medium text-gray-900 dark:text-white">Number Phone</label>
          <input  value={dataUser?.phone} readOnly  type="text" name="numberPhone" id="numberPhone" className="bg-gray-300 font-base border transition-all  border-gray-300 text-gray-900 text-sm rounded-lg  focus:border-blue-600 block w-full p-1.5 md:p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="numberPhone.example" required="" />
       
        </div>
        <div>
          <label htmlFor="email" className="block mb-2 text-xs md:text-sm font-medium text-gray-900 dark:text-white">Personal Email</label>
          <input readOnly type="email" name="email" id="email" className="bg-gray-300 font-base border transition-all  border-gray-300 text-gray-900 text-sm rounded-lg  focus:border-blue-600 block w-full p-1.5 md:p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="boyhendrawan" value={dataUser.email} required="" />
        </div>


      </div>
      <div className='flex justify-end w-full'>
        <button onClick={handleNext} className='text-sm md:text-base font-semibold tracking-wider bg-emerald-500 px-4 py-2 hover:bg-emerald-600 rounded-lg text-white'>Save And Next</button>
      </div>
    </form>
    }
    </>
  )
}

export default PersonalData