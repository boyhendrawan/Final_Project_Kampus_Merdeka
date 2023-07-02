import React from 'react';
import useInput from "../../../utilites/customHooks/use-input"
import {toast} from "react-toastify";

const PersonalData = ({next,handleChangeData,valueData}) => {
  const isObjEmpty = (value,object=valueData) =>{
    return object.hasOwnProperty(value);
}
  // custom hooks handle input form
    const {
      value:valueName,
      isInvalid:isInvalidName,
      handlerChange: handlerChangeName,
      handlerBlur:handlerBlurName,
    }=useInput(e=> e.length >5,(isObjEmpty('fullName')) ?valueData.fullName :"");
    const {
      value:valueNumberPhone,
      isInvalid:isInvalidNumberPhone,
      handlerChange: handlerChangeNumberPhone,
      handlerBlur:handlerBlurNumberPhone,
    }=useInput(e=> e.length >11,(isObjEmpty("numberPhone")) ? valueData.numberPhone :"");
    const {
      value:valueNameFamily,
      handlerChange: handlerChangeNameFamily,
      handlerBlur:handlerBlurNameFamily,
    }=useInput(e=> e.length >0,(isObjEmpty("nameFamily")) ? valueData.nameFamily :"");
    
    const handleNext=(e)=>{
      e.preventDefault();
      if(valueName.length <=0 || valueNumberPhone.length <=0){
        return toast.error("Fill before next page", { position: toast.POSITION.TOP_CENTER })
      }
      else if(isInvalidName || isInvalidNumberPhone){
        return toast.error("Still have an error in input", { position: toast.POSITION.TOP_CENTER })
      }
    
      const data ={
        fullName:valueName,
        numberPhone:valueNumberPhone,
        familyName:valueNameFamily
      }
      handleChangeData("PERSONAL",data);
      next();
      
    }
  return (
    <form action="">
      <div className='my-4 grid gap-4 md:grid-cols-2 mb-4'>
        <div>
          <label htmlFor="fullName" className="block mb-2 text-xs md:text-sm font-medium text-gray-900 dark:text-white">Full Name</label>
          <input onChange={handlerChangeName} onBlur={handlerBlurName} value={valueName} type="text" name="fullName" id="fullName" className="bg-gray-50 font-base border transition-all  border-gray-300 text-gray-900 text-sm rounded-lg  focus:border-blue-600 block w-full p-1.5 md:p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="fullName.example" required=""/>
         {isInvalidName && <span className='message-error-input
         '>must more than 5 words</span>}
        </div>
        <div>
          <label htmlFor="nameFamily" className="block mb-2 text-xs md:text-sm font-medium text-gray-900 dark:text-white">Name Family</label>
          <input onChange={handlerChangeNameFamily} onBlur={handlerBlurNameFamily} value={valueNameFamily} type="text" name="nameFamily" id="nameFamily" className="bg-gray-50 font-base border transition-all  border-gray-300 text-gray-900 text-sm rounded-lg  focus:border-blue-600 block w-full p-1.5 md:p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="nameFamily.example" required=""/>
          
        </div>
        <div>
          <label htmlFor="numberPhone" className="block mb-2 text-xs md:text-sm font-medium text-gray-900 dark:text-white">Number Phone</label>
          <input onChange={handlerChangeNumberPhone} onBlur={handlerBlurNumberPhone} value={valueNumberPhone} type="number" name="numberPhone" id="numberPhone" className="bg-gray-50 font-base border transition-all  border-gray-300 text-gray-900 text-sm rounded-lg  focus:border-blue-600 block w-full p-1.5 md:p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="numberPhone.example" required=""/>
          {isInvalidNumberPhone && <span className='message-error-input
         '>must more than 12</span>}
        </div>
        <div>
          <label htmlFor="email" className="block mb-2 text-xs md:text-sm font-medium text-gray-900 dark:text-white">Personal Email</label>
          <input readOnly type="email" name="email" id="email" className="bg-gray-300 font-base border transition-all  border-gray-300 text-gray-900 text-sm rounded-lg  focus:border-blue-600 block w-full p-1.5 md:p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="boyhendrawan" value="boyhendrawan@gmail.com" required=""/>
        </div>
        

      </div>
      <div className='flex justify-end w-full'>
        <button onClick={handleNext} className='text-sm md:text-base font-semibold tracking-wider bg-blue-500 px-4 py-2 hover:bg-blue-600 rounded-lg text-white'>Next</button>
      </div>
    </form>
  )
}

export default PersonalData