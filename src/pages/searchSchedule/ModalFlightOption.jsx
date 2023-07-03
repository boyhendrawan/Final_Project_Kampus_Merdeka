import { Dialog, Transition, Menu, Listbox } from '@headlessui/react'
import { Fragment, useEffect } from 'react'
import { berandaReducer } from "../../reducer/BerandaState";
import { useReducer } from 'react';
import { MagnifyingGlassIcon,CheckIcon, ChevronUpDownIcon, ArrowPathIcon,PaperAirplaneIcon,UserGroupIcon } from '@heroicons/react/20/solid'
const initialState = {
  jumlahDewasa: null,
  jumlahAnak: null,
  jumlahBayi: null,
  departure: null,
  arrival: null,
  flightClass: null,
  date: null,
}
const dataClass=[
  {
    classes_name:"Economy",
  },
  {
    classes_name:"Bisnis",
  }
]

export default function ModalFlightOption(props) {
  const [state, dispatch] = useReducer(berandaReducer, initialState);
  // define
  const dataCity=props.dataCity;
 
  useEffect(()=>{
    // prodive a object as intial state from the params
    const newParams={
      arrival:props.data.arrival,
      jumlahDewasa: parseInt(props.data.sumAdults),
      jumlahAnak: parseInt(props.data.sumChildren),
      jumlahBayi:parseInt( props.data.sumBabies),
      departure: props.data.departure,
      flightClass: props.data.flightClass,
      date: props.data.date,
    }
    dispatch({type:"UPDATE_ALL_REDUX",payload:newParams});
  },[props.data]);
 

  const handleDepartureSelect = (selectedDeparture) => {
    dispatch({ type: "SET_DEPARTURE", payload: selectedDeparture });
  };

  const handleClassSelect = (selectedClass) => {
    dispatch({ type: "SET_FLIGHT_CLASS", payload: selectedClass });
    dispatch({ type: "TOGGLE_CLASS_MODAL" });
  };

  const handleArrivalSelect = (selectedArrival) => {
    dispatch({ type: "SET_ARRIVAL", payload: selectedArrival });
  };

  const handleSwitch = () => {
    dispatch({ type: "TOGGLE_SWITCHED" });
  };

  const handleChangeDate = (event) => {
    const selectedDate = event.target.value;
    dispatch({ type: "SET_DATE", payload: selectedDate });
  };

  const handleSearch=(data)=>{
    data.preventDefault();
    // provide new params
    const newParams ={
      arrival:state.arrival,
      sumAdults: state.jumlahDewasa,
      sumChildren: state.jumlahAnak,
      sumBabies:state.jumlahBayi,
      departure: state.departure,
      flightClass: state.flightClass,
      date: state.date,
    }
    // send to parent and close this modal
    props.onClickSearch(newParams);
    props.onCloseModal();
  }

  return (
    <>
      <Transition appear show={props.isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={props.onCloseModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-start mt-16 justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-4xl transform  rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg text-center text-primary-darkblue04  font-semibold leading-6"
                  >
                    Search Your Flight
                  </Dialog.Title>
                  <div className="mt-6">
                    <form action="">
                      <div className='grid grid-cols-[47%,5%,47%]  gap-x-2 bg-white px-5  '>
                        <div className='w-full'>
                          <label className="font-semibold text-gray-700">Depature</label>
                          <div className="w-full">
                            <Listbox value={state.departure} onChange={handleDepartureSelect}>
                              <div className="relative mt-1">
                                <Listbox.Button className="relative w-full cursor-default  bg-white py-2 pl-3 pr-10 text-left border-b focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-primary-darkblue04 sm:text-sm">
                                  <span className="block truncate">{state.departure}</span>
                                  <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                                    <PaperAirplaneIcon
                                      className="h-5 w-5 text-primary-darkblue04 -rotate-45"
                                      aria-hidden="true"
                                    />
                                  </span>
                                </Listbox.Button>
                                <Transition
                                  as={Fragment}
                                  leave="transition ease-in duration-100"
                                  leaveFrom="opacity-100"
                                  leaveTo="opacity-0"
                                >
                                  <Listbox.Options className="absolute mt-1 z-50 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">

                                    {dataCity.map((city, cityIdx) => (
                                      <Listbox.Option
                                        key={cityIdx}
                                        className={({ active }) =>
                                          `relative cursor-default select-none py-2 pl-10 pr-4 ${active ? 'bg-primary-darkblue02 text-primary-darkblue04' : 'text-gray-900'
                                          }`
                                        }
                                        value={city.city_name}
                                      >
                                        {({ selected }) => (
                                          <>
                                            <span
                                              className={`block truncate ${selected ? 'font-medium' : 'font-normal'
                                                }`}
                                            >
                                              {city.city_name}
                                            </span>
                                            {selected ? (
                                              <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-primary-darkblue04">
                                                <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                              </span>
                                            ) : null}
                                          </>
                                        )}
                                      </Listbox.Option>
                                    ))}
                                  </Listbox.Options>
                                </Transition>
                              </div>
                            </Listbox>
                          </div>
                        </div>
                        <div className='self-end flex justify-center'>
                          <button onClick={(e)=>{
                            e.preventDefault();
                            const svg=document.getElementById("svg");
                            svg.classList.add('animate-[spin_450ms_ease-in-out]');
                            setTimeout(()=>{
                              svg.classList.remove("animate-[spin_450ms_ease-in-out]")
                            },500)
                            handleSwitch();
                          }} className='rounded-full border hover:bg-slate-50 p-2 group'>
                            <ArrowPathIcon id='svg' className='h-5 w-5 group-hover:text-primary-darkblue04 ' />
                          </button>

                        </div>
                        <div className='w-full justify-self-end'>
                          <label className="font-semibold text-gray-700">Arrival</label>
                          <div className="w-full">
                            <Listbox value={state.arrival} onChange={handleArrivalSelect}>
                              <div className="relative mt-1">
                                <Listbox.Button className="relative w-full cursor-default  bg-white py-2 pl-3 pr-10 text-left border-b focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-primary-darkblue04 sm:text-sm">
                                  <span className="block truncate">{state.arrival}</span>
                                  <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                                  <PaperAirplaneIcon
                                      className="h-5 w-5 text-primary-darkblue04 rotate-45"
                                      aria-hidden="true"
                                    />
                                  </span>
                                </Listbox.Button>
                                <Transition
                                  as={Fragment}
                                  leave="transition ease-in duration-100"
                                  leaveFrom="opacity-100"
                                  leaveTo="opacity-0"
                                >
                                  <Listbox.Options className="absolute mt-1 z-50 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">

                                    {dataCity.map((city, cityIdx) => (
                                      <Listbox.Option
                                        key={cityIdx}
                                        className={({ active }) =>
                                          `relative cursor-default select-none py-2 pl-10 pr-4 ${active ? 'bg-primary-darkblue02 text-primary-darkblue04' : 'text-gray-900'
                                          }`
                                        }
                                        value={city.city_name}
                                      >
                                        {({ selected }) => (
                                          <>
                                            <span
                                              className={`block truncate ${selected ? 'font-medium' : 'font-normal'
                                                }`}
                                            >
                                              {city.city_name}
                                            </span>
                                            {selected ? (
                                              <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-primary-darkblue04">
                                                <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                              </span>
                                            ) : null}
                                          </>
                                        )}
                                      </Listbox.Option>
                                    ))}
                                  </Listbox.Options>
                                </Transition>
                              </div>
                            </Listbox>
                          </div>
                        </div>
                      </div>
                      <div className="grid gap-1 bg-white rounded-t-2xl">
                        <div className="px-5 py-3 grid">
                          <label className="font-semibold text-gray-700">Date</label>
                          <input
                            onChange={handleChangeDate}
                            type="date"
                            className="mb-2 w-full border-b  border-0 focus:border-0 focus:border-b focus:ring-0"
                            value={state.date}
                          />
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-3 bg-white px-5 py-3 ">
                        <div className="">
                          <label className="text-gray-700 font-semibold">
                            Passengers
                          </label>
                          <div className=" w-full ">
                            <Menu as="div" className="relative w-full inline-block text-left">
                              <div className=''>
                                <Menu.Button className=" inline-flex w-full gap-x-2 border-0 border-b focus:ring-0    px-4 py-3 text-sm   focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                                 <p className='order-2 !font-base'>Jumlah Penumpang  <span className='font-semibold'> {state.jumlahDewasa +state.jumlahAnak+state.jumlahBayi}</span></p> 
                                  <UserGroupIcon
                                    className=" order-1 -ml-2 h-5 w-5 text-primary-darkblue04"
                                    aria-hidden="true"
                                  />
                                </Menu.Button>
                              </div>
                              <Transition
                                as={Fragment}
                                enter="transition ease-out duration-100"
                                enterFrom="transform opacity-0 scale-95"
                                enterTo="transform opacity-100 scale-100"
                                leave="transition ease-in duration-75"
                                leaveFrom="transform opacity-100 scale-100"
                                leaveTo="transform opacity-0 scale-95"
                              >
                                <Menu.Items className="absolute right-0 mt-2  w-full origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                  <div className="pt-2 pb-4 px-4 grid grid-cols-2 ">
                                    <div className='flex items-center flex-wrap'>
                                      <p className='w-full'>Dewasa</p>
                                      <p className='text-xs text-slate-500 italic'>(Diatas 12 tahun)</p>
                                    </div>
                                    <div className="flex  justify-end items-center border mx-auto border-slate-400 rounded-lg p-2">
                                      <button
                                        className="text-purple-700 text-lg"
                                        onClick={(e) => {
                                          e.preventDefault();
                                          dispatch({ type: "DECREASE_DEWASA" })
                                        }}
                                      >
                                        -
                                      </button>
                                      <span className="mx-2">{state.jumlahDewasa}</span>
                                      <button
                                        className="text-purple-700 text-lg"
                                        onClick={(e) => {
                                          e.preventDefault();
                                          dispatch({ type: "INCREASE_DEWASA" })
                                        }}
                                        
                                      >
                                        +
                                      </button>
                                    </div>
                                    <div className="border-b border-slate-600 h-0 w-full col-span-2 my-2"></div>
                                    <div className='flex items-center flex-wrap'>
                                      <p className='w-full'>Anak</p>
                                      <p className='text-xs text-slate-500 italic'>(1-11 tahun)</p>
                                    </div>
                                    <div className="flex items-center border mx-auto border-slate-400 rounded-lg p-2">
                                      <button
                                        className="text-purple-700 text-lg"
                                        onClick={(e) => {
                                          e.preventDefault();
                                           dispatch({ type: "DECREASE_ANAK" })
                                          }}
                                      >
                                        -
                                      </button>
                                      <span className="mx-2">{state.jumlahAnak}</span>
                                      <button
                                        className="text-purple-700 text-lg"
                                        onClick={(e) => {
                                          e.preventDefault();
                                           dispatch({ type: "INCREASE_ANAK" })
                                          }}
                                      >
                                        +
                                      </button>
                                    </div>
                                    <div className="border-b border-slate-600 h-0 w-full col-span-2 my-2"></div>
                                    <div className='flex items-center flex-wrap'>
                                      <p className='w-full'>Bayi</p>
                                      <p className='text-xs text-slate-500 italic'>(5 tahun)</p>
                                    </div>
                                    <div className="flex items-center border mx-auto border-slate-400 rounded-lg p-2">
                                      <button
                                        className="text-purple-700 text-lg"
                                        onClick={(e) => {
                                          e.preventDefault();
                                           dispatch({ type: "DECREASE_BAYI" })
                                          }}
                                      >
                                        -
                                      </button>
                                      <span className="mx-2">{state.jumlahBayi}</span>
                                      <button
                                        className="text-purple-700 text-lg"
                                        onClick={(e) => {
                                          e.preventDefault();
                                           dispatch({ type: "INCREASE_BAYI" })
                                          }}
                                      >
                                        +
                                      </button>
                                    </div>
                                    <div className="border-b border-slate-600 h-0 w-full col-span-2 my-2"></div>
                                  </div>
                                </Menu.Items>
                              </Transition>
                            </Menu>
                          </div>
                        </div>
                        <div className="">
                          <label className="text-gray-700 font-semibold">Class</label>
                          <div className="w-full">
                            <Listbox value={state.flightClass} onChange={handleClassSelect}>
                              <div className="relative mt-1">
                                <Listbox.Button className="relative w-full cursor-default  bg-white py-2.5 pl-3 pr-10 text-left border-b focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-primary-darkblue04 sm:text-sm">
                                  <span className="block truncate">{state.flightClass}</span>
                                  <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                                    <ChevronUpDownIcon
                                      className="h-5 w-5 text-primary-darkblue04"
                                      aria-hidden="true"
                                    />
                                  </span>
                                </Listbox.Button>
                                <Transition
                                  as={Fragment}
                                  leave="transition ease-in duration-100"
                                  leaveFrom="opacity-100"
                                  leaveTo="opacity-0"
                                >
                                  <Listbox.Options className="absolute mt-1 z-50 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">

                                    {dataClass.map((clases, clasesIdx) => (
                                      <Listbox.Option
                                        key={clasesIdx}
                                        className={({ active }) =>
                                          `relative cursor-default select-none py-2 pl-10 pr-4 ${active ? 'bg-primary-darkblue02 text-primary-darkblue04' : 'text-gray-900'
                                          }`
                                        }
                                        value={clases.classes_name}
                                      >
                                        {({ selected }) => (
                                          <>
                                            <span
                                              className={`block truncate ${selected ? 'font-medium' : 'font-normal'
                                                }`}
                                            >
                                              {clases.classes_name}
                                            </span>
                                            {selected ? (
                                              <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-primary-darkblue04">
                                                <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                              </span>
                                            ) : null}
                                          </>
                                        )}
                                      </Listbox.Option>
                                    ))}
                                  </Listbox.Options>
                                </Transition>
                              </div>
                            </Listbox>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>

                  <div className="mt-4 flex w-full justify-end">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                    // onClick={props.onCloseModal}
                    onClick={handleSearch}
                    // onClickCapture={}
                    >
                    <MagnifyingGlassIcon className='w-5 h-5 font-bold'/>   Search Flights
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}
