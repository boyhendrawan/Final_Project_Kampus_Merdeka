import {useState} from 'react'

function useInput(validateInput,defaultValue="") {
    // define to handle valueInput
    const [getValue,setValue]=useState(defaultValue);
    const [touchField,setTouchField]=useState(false);
    // validation value of input using callback
    const validationInput=validateInput(getValue);
    // handle for value invalid
    const invalidInputValue=!validationInput && touchField;


    // event listener for input
    const handlerChange=e=>setValue(e.target.value);
    const handlerBlur=()=>setTouchField(true);
    const reset=()=>{
        setValue("");
        setTouchField(false);
    }
    return{
        value:getValue,
        validationInput,
        isInvalid:invalidInputValue,
        handlerChange,
        handlerBlur,
        reset
    }
}

export default useInput