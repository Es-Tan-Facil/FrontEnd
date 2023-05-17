import axios from 'axios';
import AuthHeader from './AuthHeader';

function HTTPService () {

  const url = 'http://localhost:8080/api/v1/news';

  const getAllData = async () => {
    const response = await axios.get(`${url}`);
    return response.data;
  };

  const getDataById = async (id) => {
    const response = await axios.get(`${url}/${id}`, { headers:{ "Authorization": AuthHeader() }});
    return response.data;

  };
  

  const createData = async (data) => {
    console.log(data);
    
    const response = await axios.post(`${url}`,data, {headers:{"Content-Type" : "application/json",  "Authorization":  AuthHeader() }});
  
    return response.data;

  };

  const updateData = async (id, data) => {
    const response = await axios.put(`${url}/${id}`, data, { headers:{ "Authorization": AuthHeader() }});
    return response.data;

  };

  const deleteData = async (id) => {
    const response = await axios.delete(`${url}/${id}`, { headers:{ "Authorization": AuthHeader() }});
    return response.data;

  };

  return {
    getAllData,
    getDataById,
    createData,
    updateData,
    deleteData,
    url

  };
};

export default HTTPService;