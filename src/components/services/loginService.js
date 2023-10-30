import axios from "axios";
import { useNavigate } from "react-router-dom";
const useLogin = () => {
  const endpoint = "/login";
  const apiUrl = process.env.REACT_APP_API_URL + endpoint;
  const navigate = useNavigate();
  const Swal = require("sweetalert2");

  const onSubmitHandler = async ({ payload: userPayload }) => {
    console.log(userPayload);
    try {
      const response = await axios.post(apiUrl, userPayload, {
        headers: {
          "Content-Type": "application/json",
          deviceId: "TECNO-CC9:PPR1.180610.011",
          address:
            " 6 Funsho Ajayi Lnk St, Surulere 101241, Lagos, Nigeria, state: lagos, town: surulere, country: ng, lat: 6.493253, lng: 3.3361274",
        },
      });
      if (response.status === 200 || response.status === 201) {
        Swal.fire({
          title: response.data.message,
          text: "Do you want to continue",
          icon: "success",
          confirmButtonText: "Cool",
        });
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
export default useLogin;
