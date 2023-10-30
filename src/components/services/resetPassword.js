import axios from "axios";
import { useNavigate } from "react-router-dom";

const useResetPassword = () => {
  const endpoint = "/reset-password";
  const apiUrl = process.env.REACT_APP_API_URL + endpoint;
  const navigate = useNavigate();
  // const [error, setError] = useState();
  const Swal = require("sweetalert2");

  const onSubmitHandler = async ({ payload: userPayload }) => {
    console.log(userPayload);
    try {
      const response = await axios.post(apiUrl, userPayload, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.status === 200 || response.status === 201) {
        setTimeout(() => {
          Swal.fire({
            title: response.data.message,
            icon: "success",
          });
        }, 1900);
        setTimeout(() => {
          navigate("/login");
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
export default useResetPassword;
