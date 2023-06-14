import React,{useState,useEffect} from 'react'
import useInput from "../../../utilites/customHooks/use-input"
import { toast } from "react-toastify";

// default value

const templateData={
    title:'',
    fullName:'',
    familyName:'',
    birthDate:'',
    citizen:'',
    numberIdentity:'',
    publisherCountry:'',
    expired:'',
  }
const Pessengers = ({ next, previous, handleChangeData:saveData,allValue }) => {
  const valueData=allValue.pessengers;
  // for firsttime running
  // added useState as container that input
  const [dataUsers,setDataUsers]=useState([]);
  const sumPessenger = 1;
  useEffect(()=>{
    // check if handle change data is available
    if(valueData.length ===sumPessenger) return setDataUsers(valueData);
    const fieldData=[];
    for(let i=0;i<sumPessenger;i++){
      fieldData.push(templateData);
    }
    setDataUsers(fieldData);
  },[sumPessenger,valueData]);
  
  
  
  // validation each input
  const validationField={
    title:{
      validation:(value)=>value.trim().length>=1,
      errorMessage:<span className="message-error-input hidden">Title required to filled</span>
    },
    fullName:{
      validation:(value)=>value.trim().length >=5,
      errorMessage:<span className="message-error-input hidden">Full Name must have at least 5 words </span>
    },
    familyName:{
      validation:(value)=>value.trim().length >=0,
      errorMessage:<span className="message-error-input hidden">Family name not require </span>
    },
    birthDate:{
      validation:(value)=>value.trim() !=='',
      errorMessage:<span className="message-error-input hidden">birth date required to filled </span>
    },
    citizen:{
      validation:(value)=>value.trim().length >=4,
      errorMessage:<span className="message-error-input hidden">Citizen required to filled atleast 4 words</span>
    },
    numberIdentity:{
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
  };
  const handleChangeInput=(index,validationName,event)=>{
    // update input
    const data=event.target.value;
      setDataUsers(prevData=>{
        const updateField=[...prevData];
        updateField[index]={...updateField[index],[validationName]:data}
        // console.log(updateField);
        return updateField;
      })
    // handle show error element
    const errorElement=event.target.nextSibling;
    if(validationField[validationName].validation(event.target.value)){
      errorElement.classList.add("hidden")
    }else{
      errorElement.classList.remove('hidden')
    }
    // // create element for message 
 
  }
  const handleNext = (e) => {
    e.preventDefault();
    for(let [index, object] of dataUsers.entries()){
      let stopLoppingTmp;
      // looping each property element
      for(const key in object){
        // this for field not required
        if(key==='familyName') continue;
        // check if required field still undifined
        if(object[key].trim().length ===0 || !validationField[key].validation(object[key])){
           stopLoppingTmp=true;

           return toast.error(`field ${key} passeger ${index+1} is  ${validationField[key].errorMessage.props.children}`,{ position: toast.POSITION.TOP_CENTER });
        }
      }
      // stop looping if there're undifined input
      if(stopLoppingTmp) return;
    }

    saveData("PESSENGERS",dataUsers)
    // here to do send request to api
    console.log(allValue)
    next();

  }
  const handlePrevious = (e) => {
    e.preventDefault();
    saveData("PESSENGERS",dataUsers)
    previous();
  }
  return (
    <form action="">
      {dataUsers.map((e,i)=>{
      return <div className='mt-8 mb-4 grid gap-4 md:grid-cols-2' key={i}>
        <h2 className='text-sm md:text-md  font-semibold text-gray-600'>Pessenger {i+1}</h2>
        <div className='md:col-span-2'>
          <label htmlFor={`title${i}`} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Title</label>
          <select onChange={e=>handleChangeInput(i,'title',e)}  value={e.title} name="title" id={`title${i}`} className='bg-gray-50 font-base border transition-all  border-gray-300 text-gray-900 text-sm rounded-lg  focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'>
            <option value="">Choosen Your title</option>
            <option value="woman">Mis</option>
            <option value="man">Mr</option>
          </select>
          {validationField['title'].errorMessage}
        </div>
        <div>
          <label htmlFor={`fullName${i}`} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Full Name</label>
          <input  onChange={e=>handleChangeInput(i,'fullName',e)} value={e.fullName} type="text" name="fullName" id={`fullName${i}`} className="bg-gray-50 font-base border transition-all  border-gray-300 text-gray-900 text-sm rounded-lg  focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="fullName.example" required="" />
          {validationField['fullName'].errorMessage}
        </div>
        <div>
          <label htmlFor={`familyName${i}`} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Family Name</label>
          <input onChange={e=>handleChangeInput(i,'familyName',e)}  value={e.familyName} type="text" name="familyName" id={`familyName${i}`} className="bg-gray-50 font-base border transition-all  border-gray-300 text-gray-900 text-sm rounded-lg  focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="fullName.example" required="" />
          {validationField['familyName'].errorMessage}
        </div>
        <div>
          <label htmlFor={`birthDate${i}`} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Born Date</label>
          <input  onChange={e=>handleChangeInput(i,'birthDate',e)} value={e.birthDate} type="date" name="birthDate" id={`birthDate${i}`} className="bg-gray-50 font-base border transition-all  border-gray-300 text-gray-900 text-sm rounded-lg  focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="birthDate.example" required="" />
          {validationField['birthDate'].errorMessage}
        </div>
        <div>
          <label htmlFor={`citizen${i}`} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Citizen</label>
          <input  onChange={e=>handleChangeInput(i,'citizen',e)} value={e.citizen} type="text" name="citizen" id={`citizen${i}`} className="bg-gray-50 font-base border transition-all  border-gray-300 text-gray-900 text-sm rounded-lg  focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="citizen.example" required="" />
          {validationField['citizen'].errorMessage}
        </div>
        <div>
          <label htmlFor={`numberIdentity${i}`} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Number Identity</label>
          <input  onChange={e=>handleChangeInput(i,'numberIdentity',e)} value={e.numberIdentity} type="number" name="numberIdentity" id={`numberIdentity${i}`} className="bg-gray-50 font-base border transition-all  border-gray-300 text-gray-900 text-sm rounded-lg  focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="numberIdentity.example" required="" />
          {validationField['numberIdentity'].errorMessage}
        </div>
        <div>
          <label htmlFor={`publisherCountry${i}`} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Publisher Country</label>
          <input  onChange={e=>handleChangeInput(i,'publisherCountry',e)} value={e.publisherCountry} type="text" name="publisherCountry" id={`publisherCountry${i}`} className="bg-gray-50 font-base border transition-all  border-gray-300 text-gray-900 text-sm rounded-lg  focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="publisherCountry.example" required="" />
          {validationField['publisherCountry'].errorMessage}
        </div>
        <div>
          <label htmlFor={`expired${i}`} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Expired  Tiket</label>
          <input  onChange={e=>handleChangeInput(i,'expired',e)} value={e.expired} type="date" name="expired" id={`expired${i}`} className="bg-gray-50 font-base border transition-all  border-gray-300 text-gray-900 text-sm rounded-lg  focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="expired.example" required="" />
          {validationField['expired'].errorMessage}
        </div>
      </div>
      
      
       })}
       <div className='flex justify-end w-full gap-x-4'>
        <button onClick={handlePrevious} className='bg-blue-500 px-4 py-2 hover:bg-blue-600 rounded-lg text-white'>Back</button>
        <button onClick={handleNext} className='bg-green-500 px-4 py-2 hover:bg-green-600 rounded-lg text-white'>Save</button>
      </div>
    </form>
  )
}

export default Pessengers