import axios from "axios";
import { toast } from "react-toastify";
import { saveAs } from 'file-saver';
// import queryString from 'query-string';
import {
  setParamsNextPage,
  changeStatusLoading,
  setDataUnpaid,
  setDataPaid,
} from "../reducers/checkout";
export const sendCheckout = (body, token) => async (dispatch) => {
  // set loading to be true
  dispatch(changeStatusLoading());
  try {
    // console.log(body)
    const request = await axios.post(
      `${process.env.REACT_APP_API}/TempTransaction/addTempTransaction`,
      body,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `bearer ${token}`,
        },
      }
    );
    if (request.status === 200) {
      const produceData = { data: request.data.datas };
      // console.log();
      // sent to function reducer
      dispatch(setParamsNextPage(produceData));
      toast.success(`${request.data.msg} checkout`, {
        position: toast.POSITION.TOP_CENTER,
      });
    }
    // send to reducer checkout
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error?.response?.message) {
        toast.error(error?.response?.message);
        return;
      }

      toast.error(error?.message);
      return;
    }
    return toast.error(error?.message);
  }
  // to set loading to be true
  dispatch(changeStatusLoading());

  return;
};

export const sendUnpaidCheckout = (data) => async (dispatch, getState) => {
  dispatch(changeStatusLoading());
  try {
    const { token } = getState().auth;
    // console.log( JSON.stringify(data));
    const response = await axios.put(
      `${process.env.REACT_APP_API}/TempTransaction/unpaidCheckout`,
      JSON.stringify(data),
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );
    console.log(response);
    if (response.status !== 200)
      throw new Error(`Opps got Error ${response.status}`);
    // store to
    dispatch(setDataUnpaid(response.data.datas));
    toast.success(`${response.data.msg} UNPAID CHECKOUT`, {
      position: toast.POSITION.TOP_CENTER,
    });
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error?.response?.message) {
        toast.error(error?.response?.message);
        return;
      }

      toast.error(error?.message);
      return;
    }
    return toast.error(error?.message);
  }
  // to set loading to be true
  dispatch(changeStatusLoading());
};

export const paidCheckOut = (data) => async (dispatch,getState) => {
  dispatch(changeStatusLoading());
  try {
    const { token } = getState().auth;
    // console.log( JSON.stringify(data));
    const response = await axios.put(
      `${process.env.REACT_APP_API}/TempTransaction/paidCheckout`,
      JSON.stringify(data),
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );
    console.log(response);
    if (response.status !== 200)throw new Error(`Opps got Error ${response.status}`);
    // store to
    dispatch(setDataPaid(response.data.datas));
    toast.success(`${response.data.msg} PAID CHECKOUT`, {
      position: toast.POSITION.TOP_CENTER,
    });
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error?.response?.message) {
        toast.error(error?.response?.message);
        return;
      }

      toast.error(error?.message);
      return;
    }
    return toast.error(error?.message);
  }
  // to set loading to be true
  dispatch(changeStatusLoading());
};
export const getCetakTiket = (id_transactoin) => async (dispatch,getState) => {
  dispatch(changeStatusLoading());
  try {
    console.log("bener");
    const { token } = getState().auth;
    // console.log( JSON.stringify(data));
    const response = await axios.get(
      `${process.env.REACT_APP_API}/Ticket/${id_transactoin}`,
      {
        responseType: 'arraybuffer',
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/pdf",
        },
      }
    );
    if (response.status !== 200)throw new Error(`Opps got Error ${response.status}`);
    // store to
    const blob = new Blob([response.data], { type: 'application/pdf' });
    saveAs(blob, 'invoice_tiket.pdf');
  
  } catch (error) {
    console.log(error);
    if (axios.isAxiosError(error)) {
      if (error?.response?.message) {
        toast.error(error?.response?.message);
        return;
      }

      toast.error(error?.message);
      return;
    }
    return toast.error(error?.message);
  }
  // to set loading to be true
  dispatch(changeStatusLoading());
};