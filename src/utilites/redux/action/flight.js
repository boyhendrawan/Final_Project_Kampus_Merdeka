import axios from "axios";
import {toast} from "react-toastify";
import { setData } from "../reducers/searchFlight";
import { setCity,setStatusLoading } from "../reducers/cities";
// redux thunk with return async function '

export const searchFlights=(setIsloading,dataUtilites)=>async (distpatch)=>{
    try{
        // destructuring 
        let {departure,arrival,date}=dataUtilites;
        const pesseger= parseInt(dataUtilites.sumAdults) + parseInt(dataUtilites.sumChildren) + parseInt(dataUtilites.sumBabies);
        
        const request=await axios.get(`${process.env.REACT_APP_API}/Schedules/findTiket/${departure}/${arrival}/${date}/${pesseger}`,{
            headers:{
                "Content-Type":"Application/json"
            }
        });
        // handle if status is not 200 OR success
        if(request.status !==200) throw new Error(`Opps Error occurred ${request.data.msg} ${request.data.status} `);
        // store data flight to redux
        // console.log(request.data.datas);
         distpatch(setData(request.data.datas));
    //  return;
        
    }
    catch(error){
        if(axios.isAxiosError(error)){
            if(error?.response?.message) {
                toast.error(error?.response?.message);
                return;
            }
            
            toast.error(error?.message);
            return;
        }
        return toast.error(error?.message);
    }
    // to set loading to be true
    setIsloading(prev=>!prev);

    return;
}
export const getAllCity=()=>async(distpatch,getSate)=>
{
    //state loading true
    distpatch(setStatusLoading(true))
    try{
        const response=await axios.get(`${process.env.REACT_APP_API}/City/findAll`,{
            headers:{
                "Content-Type":"application/json",
            }
        });
        if(response?.status !== 200) throw new Error("Opps, Error When trying request");
        // this section definetly have status 200
        distpatch(setCity(response?.data?.datas));
    } catch(error){
        if(axios.isAxiosError(error)){
            if(error?.response?.message) {
                toast.error(error?.response?.message);
                return;
            }
            
            toast.error(error?.message);
            return;
        }
        return toast.error(error?.message);
    }

    //state loading false
    distpatch(setStatusLoading(false))
}