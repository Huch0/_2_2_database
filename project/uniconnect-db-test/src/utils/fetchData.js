import axios from "axios";

export default async function fetchData(endpoint, setState) {
  try {
    const response = await axios.get(`http://localhost:3000${endpoint}`);
    setState(response.data);
  } catch (error) {
    console.error("Error fetching data", error);
  }
}
