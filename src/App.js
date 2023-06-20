import './App.css';
import "react-toastify/dist/ReactToastify.css";

import { Provider } from 'react-redux';
import Router from './Router';
import { RouterProvider } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import store from "./utilites/redux/store";

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={Router} />
      <ToastContainer theme="colored" />
    </Provider>
    

  );
}

export default App;
