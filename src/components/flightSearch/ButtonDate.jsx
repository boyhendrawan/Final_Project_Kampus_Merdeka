import React,{useState,useEffect} from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import moment from 'moment';

const ButtonDate = (props) => {
  // define to save date
  const [getDates,setDates]=useState([]);
  // define to next sevenDay

  useEffect(()=>{
    let startDate = new Date(props.data); // Current date/time
    const activeDate= new Date(props.active);
    startDate.setHours(0, 0, 0, 0); // Set the time to midnight
    activeDate.setHours(0, 0, 0, 0);
    const endDate = new Date(startDate.getTime() + (7 * 24 * 60 * 60 * 1000)); // Add 7 days to the start date
    const loopDates = [];
    for (let currentDate = startDate; currentDate < endDate; currentDate.setDate(currentDate.getDate() + 1)) {
      // setData
      
      const tmpData={
        date:moment(currentDate).format("YYYY-MM-DD"),
        day:moment(currentDate).format("dddd"),
        active: activeDate.getTime() === currentDate.getTime(),
      }
      loopDates.push(tmpData); // Push a new Date object to the loopDates array
    }
    setDates(loopDates);
    
  },[props])
 const handlerClickBtnDate=(e)=>{
  // to make sure only trigger buton
  if(e.target.tagName ==="BUTTON"){
    const date= e.target.dataset.date;
    props.onClickDate(date);
  }
 }
  return (
    <>
      <Swiper
        direction="horizontal"
        slidesPerView={5}
        spaceBetween={20}
        breakpoints={{
          320: {
            slidesPerView: 2.5,
            spaceBetween: 20
          },
          768: {
            slidesPerView: 4.5,
            spaceBetween: 10
          },
          1024: {
            slidesPerView: 6.5,
            spaceBetween: 23
          },
        }}
        className="w-full"
      >
        {
          getDates.map((data,i)=>{

           return <SwiperSlide key={i} onClick={handlerClickBtnDate} >
            <button data-date={data.date} className={`flex flex-col items-center hover:cursor-pointer  px-4 py-2 my-4  hover:bg-purple-600 hover:text-white rounded-md group transition duration-300 btn-date ${data?.active ? 'active-date' :''} `}>
                <span className='font-bold'>{data.day}</span>
                <span className='text-neutral-500 text-xs group-hover:text-neutral-200  transition duration-300'>{data.date}</span>
            </button>
          
          </SwiperSlide>
          })
        }
       
        
        

      </Swiper>
    </>
  )
}

export default ButtonDate