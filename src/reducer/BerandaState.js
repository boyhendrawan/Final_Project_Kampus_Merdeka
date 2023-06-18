const currentDate = new Date().toISOString().split("T")[0];
// Initial state for the reducer
const initialState = {
  showPassengerModal: false,
  showDepartureModal: false,
  showArrivalModal: false,
  showClassModal: false,
  jumlahDewasa: 1,
  jumlahAnak: 0,
  jumlahBayi: 0,
  departure: "Option 1",
  arrival: "Option 2",
  flightClass: "Economy",
  date: currentDate,
  switched: false,
};

// Reducer function to handle state changes
const berandaReducer = (state = initialState, action) => {
  switch (action.type) {
    case "TOGGLE_PASSENGER_MODAL":
      return { ...state, showPassengerModal: !state.showPassengerModal };
    case "TOGGLE_DEPARTURE_MODAL":
      return { ...state, showDepartureModal: !state.showDepartureModal };
    case "TOGGLE_ARRIVAL_MODAL":
      return { ...state, showArrivalModal: !state.showArrivalModal };
    case "TOGGLE_CLASS_MODAL":
      return { ...state, showClassModal: !state.showClassModal };
    case "INCREASE_DEWASA":
      return { ...state, jumlahDewasa: state.jumlahDewasa + 1 };
    case "DECREASE_DEWASA":
      return { ...state, jumlahDewasa: state.jumlahDewasa - 1 };
    case "INCREASE_ANAK":
      return { ...state, jumlahAnak: state.jumlahAnak + 1 };
    case "DECREASE_ANAK":
      return { ...state, jumlahAnak: state.jumlahAnak - 1 };
    case "INCREASE_BAYI":
      return { ...state, jumlahBayi: state.jumlahBayi + 1 };
    case "DECREASE_BAYI":
      return { ...state, jumlahBayi: state.jumlahBayi - 1 };
    case "SET_DEPARTURE":
      return { ...state, departure: action.payload };
    case "SET_ARRIVAL":
      return { ...state, arrival: action.payload };
    case "SET_FLIGHT_CLASS":
      return { ...state, flightClass: action.payload };
    case "SET_DATE":
      return { ...state, date: action.payload };
    case "TOGGLE_SWITCHED":
      const temp = state.departure;
      return {
        ...state,
        switched: !state.switched,
        departure: state.arrival,
        arrival: temp,
      };
    default:
      return state;
  }
};

export { berandaReducer, initialState };
