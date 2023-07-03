import React,{useState,useEffect} from 'react'
import { toast } from "react-toastify";
import { useDispatch,useSelector } from 'react-redux';
import { sendUnpaidCheckout } from '../../../utilites/redux/action/checkout';
import queryString from 'query-string';
// default value

const templateData={
    title:'',
    full_name:'',
    given_name:'',
    birth_date:'',
    citizen:'',
    id_card:'',
    publisherCountry:'',
    expired:'',
  }
const Pessengers = ({ next, previous, handleChangeData:saveData,allValue,setParams,dataParams }) => {
  //  added useState as container that input
  const [dataUsers,setDataUsers]=useState([]);
//  define all function module
  const dispatch=useDispatch();
  const {dataCheckoutUnpaid}= useSelector(Features=>Features.checkout);
  const sumPessenger = dataParams.pessengers;
  useEffect(()=>{
    // // check if handle change data is available
    // if(valueData.length ===sumPessenger) return setDataUsers(valueData);
    const fieldData=[];
    for(let i=0;i<sumPessenger;i++){
      fieldData.push(templateData);
    }
    setDataUsers(fieldData);
  },[sumPessenger]);
  
  // validation each input
  const validationField={
    title:{
      validation:(value)=>value.trim().length>=1,
      errorMessage:<span className="message-error-input hidden">Title required to filled</span>
    },
    full_name:{
      validation:(value)=>value.trim().length >=5,
      errorMessage:<span className="message-error-input hidden">Full Name must have at least 5 words </span>
    },
    given_name:{
      validation:(value)=>value.trim().length >=0,
      errorMessage:<span className="message-error-input hidden">Family name not require </span>
    },
    birth_date:{
      validation:(value)=>value.trim() !=='',
      errorMessage:<span className="message-error-input hidden">birth date required to filled </span>
    },
    citizen:{
      validation:(value)=>value.trim().length >=4,
      errorMessage:<span className="message-error-input hidden">Citizen required to filled atleast 4 words</span>
    },
    id_card:{
      validation:(value)=>value.trim().length >=12,
      errorMessage:<span className="message-error-input hidden">Number Identity required to filled atleast 12 words</span>
    },
    publisherCountry:{
      validation:(value)=>value.trim().length >=4,
      errorMessage:<span className="message-error-input hidden">Publsih Country required to filled atleast 4 words</span>
    },
    expired:{
      validation:(value)=>value.trim() !=='',
      errorMessage:<span className="message-error-input hidden">Expired tiket required to filled </span>
    },
    uuid_transaction:{
      validation:(value)=>value.trim() !=='',
      errorMessage:<span className="message-error-input hidden">Transaction not define</span>
    },
  };
  const handleChangeInput=(index,validationName,event)=>{
    // update input
    const data=event.target.value;
      setDataUsers(prevData=>{
        const updateField=[...prevData];
        updateField[index]={...updateField[index],[validationName]:data}
        return updateField;
      })
    // handle show error element
    const errorElement=event.target.nextSibling;
    if(validationField[validationName].validation(event.target.value)){
      errorElement.classList.add("hidden")
    }else{
      errorElement.classList.remove('hidden')
    }
    // create element for message 
 
  }
  const handleNext = (e) => {
    e.preventDefault();
    for(let [index, object] of dataUsers.entries()){
      let stopLoppingTmp;
      // looping each property element
      for(const key in object){
        // this for field not required
        if(key==='given_name') continue;
        // check if required field still undifined
        if(object[key].trim().length ===0 || !validationField[key].validation(object[key])){
           stopLoppingTmp=true;
           return toast.error(`field ${key} passeger ${index+1} is  ${validationField[key].errorMessage.props.children}`,{ position: toast.POSITION.TOP_CENTER });
        }
      }
      // added each object uuid_transection
      if(sumPessenger>1){
        object.uuid_transaction=dataParams.uuid_transaction[index];
      }else{
        object.uuid_transaction=dataParams.uuid_transaction;
      }
      // delete objct f
      // stop looping if there're undifined input
      if(stopLoppingTmp) return;
    }
    
    // making a request
    dispatch(sendUnpaidCheckout(dataUsers));
    // saveData("PESSENGERS",dataUsers)
    // here to do send request to api
    // next();

  }
  // handle if dataUnpaid updated and redirect to the next
  useEffect(()=>{
    if(dataCheckoutUnpaid !==null){
      // setParams()
      // provide an object
      const objectParams={
        stepper:3,
        transaction:dataCheckoutUnpaid.map(e=>e.uuid_transaction),
        pessengers:dataCheckoutUnpaid.length
      }
      setParams(queryString.stringify(objectParams));

    }
  },[dataCheckoutUnpaid,setParams,dataParams.stepper])

  return (
    <form action="">
      {dataUsers.map((e,i)=>{
      return <div className='mt-8 mb-4 grid gap-4 md:grid-cols-2' key={i}>
        <h2 className='text-sm md:text-md  font-semibold text-gray-600'>Pessenger {i+1}</h2>
        <div className='md:col-span-2'>
          <label htmlFor={`title${i}`} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Title</label>
          <select onChange={e=>handleChangeInput(i,'title',e)}  value={e.title} name="title" id={`title${i}`} className='bg-gray-50 font-base border transition-all  border-gray-300 text-gray-900 text-sm rounded-lg  focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'>
            <option value="">Choosen Your title</option>
            <option value="Mis">Mis</option>
            <option value="Mr">Mr</option>
          </select>
          {validationField['title'].errorMessage}
        </div>
        <div>
          <label htmlFor={`full_name${i}`} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Full Name</label>
          <input  onChange={e=>handleChangeInput(i,'full_name',e)} value={e.full_name} type="text" name="full_name" id={`full_name${i}`} className="bg-gray-50 font-base border transition-all  border-gray-300 text-gray-900 text-sm rounded-lg  focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="full_name.example" required="" />
          {validationField['full_name'].errorMessage}
        </div>
        <div>
          <label htmlFor={`given_name${i}`} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Family Name</label>
          <input onChange={e=>handleChangeInput(i,'given_name',e)}  value={e.given_name} type="text" name="given_name" id={`given_name${i}`} className="bg-gray-50 font-base border transition-all  border-gray-300 text-gray-900 text-sm rounded-lg  focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="full_name.example" required="" />
          {validationField['given_name'].errorMessage}
        </div>
        <div>
          <label htmlFor={`birth_date${i}`} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Born Date</label>
          <input  onChange={e=>handleChangeInput(i,'birth_date',e)} value={e.birth_date} type="date" name="birth_date" id={`birth_date${i}`} className="bg-gray-50 font-base border transition-all  border-gray-300 text-gray-900 text-sm rounded-lg  focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="birth_date.example" required="" />
          {validationField['birth_date'].errorMessage}
        </div>
        <div>
          <label htmlFor={`citizen${i}`} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Citizen</label>
          <input  onChange={e=>handleChangeInput(i,'citizen',e)} value={e.citizen} type="text" name="citizen" id={`citizen${i}`} className="bg-gray-50 font-base border transition-all  border-gray-300 text-gray-900 text-sm rounded-lg  focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="citizen.example" required="" />
          {validationField['citizen'].errorMessage}
        </div>
        <div>
          <label htmlFor={`id_card${i}`} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Number Identity</label>
          <input  onChange={e=>handleChangeInput(i,'id_card',e)} value={e.id_card} type="number" name="id_card" id={`id_card${i}`} className="bg-gray-50 font-base border transition-all  border-gray-300 text-gray-900 text-sm rounded-lg  focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="id_card.example" required="" />
          {validationField['id_card'].errorMessage}
        </div>
        <div>
          <label htmlFor={`publisherCountry${i}`} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Publisher Country</label>
          <input  onChange={e=>handleChangeInput(i,'publisherCountry',e)} value={e.publisherCountry} type="text" name="publisherCountry" id={`publisherCountry${i}`} className="bg-gray-50 font-base border transition-all  border-gray-300 text-gray-900 text-sm rounded-lg  focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="publisherCountry.example" required="" />
          {validationField['publisherCountry'].errorMessage}
        </div>
        <div className='md:col-span-2'>
          <label htmlFor={`expired${i}`} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Expired  Tiket</label>
          <input  onChange={e=>handleChangeInput(i,'expired',e)} value={e.expired} type="date" name="expired" id={`expired${i}`} className="bg-gray-50 font-base border transition-all  border-gray-300 text-gray-900 text-sm rounded-lg  focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="expired.example" required="" />
          {validationField['expired'].errorMessage}
        </div>
      </div>
      
      
       })}
       <div className='flex justify-end w-full gap-x-4'>
        <button onClick={handleNext} className='bg-green-500 px-4 py-2 hover:bg-green-600 rounded-lg text-white'>Save And Next</button>
      </div>
    </form>
  )
}

export default Pessengers