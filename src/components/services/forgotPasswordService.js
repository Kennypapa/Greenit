import axios from "axios";
const useForgotPassword = () => {
  const endpoint = "/forgot-password";
  const apiUrl = process.env.REACT_APP_API_URL + endpoint;
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
        Swal.fire({
          title: response.data.message,
          text: "Do you want to continue",
          icon: "success",
          confirmButtonText: "Cool",
        });
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
export default useForgotPassword;
