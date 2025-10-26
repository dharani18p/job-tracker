import axios from 'axios';


const apiClient = axios.create({
    baseURL: 'https://job-tracker-wv6r.onrender.com/api', // <-- Your new URL
    headers: {
        'Content-Type': 'application/json',
    },
});

export const getAllJobs = async () => {
    const response = await apiClient.get('/jobs');
    return response.data.data;
};

export const getJobById = async (id) => {
    const response = await apiClient.get(`/jobs/${id}`);
    return response.data.data;
};

export const createJob = async (jobData) => {
    const response = await apiClient.post('/jobs', jobData);
    return response.data.data;
};

export const updateJob = async (id, jobData) => {
    const response = await apiClient.patch(`/jobs/${id}`, jobData);
    return response.data.data;
};

export const deleteJob = async (id) => {
    await apiClient.delete(`/jobs/${id}`);
};

const api = {
    getAllJobs,
    getJobById,
    createJob,
    updateJob,
    deleteJob,
};

export default api;
