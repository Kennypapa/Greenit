import axios from "axios";
import { useState } from "react";
const useLogin = () => {
  const endpoint = "/login";
  const apiUrl = process.env.REACT_APP_API_URL + endpoint;
  const [error, setError] = useState();
  const Swal = require("sweetalert2");

  const onSubmitHandler = async ({ payload: userPayload }) => {
    console.log(userPayload);

    try {
      const response = await axios.post(apiUrl, userPayload, {
        headers: {
          "Content-Type": "application/json", // Set the content type in headers,
          'Authorization': 'Bearer YourAuthToken', // Set your authorization token if needed
        },
      });
      console.log(response.message);
      // if(response.status === 401) {
      //   alert("401")
      // }else{
      //   console.log(error.message);
      // }
    } catch (error) {
      console.log(error.message);
    }
  };

  return {
    onSubmitHandler,
    error,
  };
};
export default useLogin;
