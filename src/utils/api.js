import axios from "axios";
// import dotenv from "dotenv";

// Uncomment the following two lines if using dotenv
// dotenv.config();

export const fetchDataFromApi = async (url) => {
  try {
    const { data } = await axios.get(
      process.env.REACT_APP_API_URL + url,
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: "bearer " + process.env.REACT_APP_STRIPE_APP_KEY,
        },
      }
    );
    console.log(data);
    return data; // Return the fetched data from the API
  } catch (err) {
    console.error("Error fetching data:", err);
    throw err; // Rethrow the error to handle it in the calling function
  }
};

export const makePaymentRequest = axios.create({
  baseURL : process.env.REACT_APP_API_URL,
  headers: {
    'Content-Type': 'application/json',
    Authorization: "bearer " + process.env.REACT_APP_STRIPE_APP_KEY,
  },
})