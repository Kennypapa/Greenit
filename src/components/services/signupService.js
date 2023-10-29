import axios from "axios";
import { useState } from "react";
const useSignup = () => {
  const endpoint = "/create-account";
  const apiUrl = process.env.REACT_APP_API_URL + endpoint;
  const [error, setError] = useState();
//   const [success, setSuccess] = useState('')
  const Swal = require("sweetalert2");


  const onSubmitHandler = async ({ payload: userPayload }) => {
    try {
      const response = await axios.post(apiUrl, userPayload, {
        headers: {
          "Content-Type": "application/json"},
      });
       if(response.status === 200 || response.status === 201) {
        Swal.fire({
            title: response.data.message,
            text: 'Do you want to continue',
            icon: 'success',
            confirmButtonText: 'Cool'
          })
       }else{
           console.log( response.data.message)
       }
    } catch (error) {
      Swal.fire({
        title: error.response.data.message,
        text: 'Do you want to continue',
        icon: 'error',
        confirmButtonText: 'Cool'
      })
    }
    
  };

  return {
    onSubmitHandler,
    error,
  };
};
export default useSignup;
