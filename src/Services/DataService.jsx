
import axios from "axios";

async function DataServices() {
  try {
    const response = await axios.get("/api/v1/news");
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export default DataServices;