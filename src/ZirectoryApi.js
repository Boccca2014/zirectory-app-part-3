import axios from "axios";

const BASE_URL = "http://localhost:4567";

async function getAll() {
  try {
    const response = await axios.get(`${BASE_URL}/api/meetings`);
    return response.data.data;
  } catch (err) {
    console.log(err);
    return [];
  }
}

async function remove(id) {
  try {
    const response = await axios.delete(`${BASE_URL}/api/meetings/${id}`);
    return response.data.data;
  } catch (err) {
    console.log(err);
    return null;
  }
}

async function add(meeting) {
  try {
    const response = await axios.post(`${BASE_URL}/api/meetings`, meeting);
    return response.data.data;
  } catch (err) {
    console.log(err);
    return null;
  }
}

export { getAll, remove, add };
