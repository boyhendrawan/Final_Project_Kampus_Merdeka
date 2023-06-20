import './App.css';
import Router from './Router';
import { RouterProvider } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { Provider } from 'react-redux';

import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <>
    <RouterProvider router={Router}/>
    <ToastContainer theme="colored"/>
    </>
    

  );
}

export default App;
