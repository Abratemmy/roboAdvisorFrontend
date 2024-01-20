import axios from 'axios';

const data = "https://roboadvisorserver.onrender.com/risktolerance";

export const fetchRisk = () => axios.get(data);
export const createRisk = (newPost) => axios.post(data, newPost);