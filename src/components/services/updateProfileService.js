import axios from "axios";
import { useNavigate } from "react-router-dom";
const useUpdateProfile = () => {
  const endpoint = "/update-profile";
  const apiUrl = process.env.REACT_APP_API_URL + endpoint;
  const navigate = useNavigate();
  const Swal = require("sweetalert2");

  const onSubmitHandler = async ({ payload: userPayload }) => {
    console.log(userPayload);
    try {
      const response = await axios.post(apiUrl, userPayload, {
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer 533|V3TXuwWX573o0aqEj4zMZO1MATJP1p2sR4Wk1sof"
        },
      });
      if (response.status === 200 || response.status === 201) {
        Swal.fire({
          title: response.data.message,
          text: "Do you want to continue",
          icon: "success",
          confirmButtonText: "Cool",
        });
        //store data into localstorage
        localStorage.setItem('user_details', JSON.stringify(response.data));
        
        setTimeout(() => {
          navigate("/user-profile");
        }, 2000);
      } else {
        console.log(response.data.message);
      }
    } catch (error) {
      Swal.fire({
        title: error.response.data.message,
        text: "Do you want to continue",
        icon: "error",
        confirmButtonText: "Cool",
      });
      console.log(error.message);
    }
  };
  return {
    onSubmitHandler,
  };
};
export default useUpdateProfile;
