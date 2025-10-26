import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import JobForm from '../components/JobForm';
import api from '../api/jobApi';

const EditJob = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [job, setJob] = useState(null);
    const [formError, setFormError] = useState('');

    useEffect(() => {
        const fetchJob = async () => {
            try {
                const data = await api.getJobById(id);
                setJob(data);
            } catch (err) {
                console.error(err);
                setFormError('Failed to load job data.');
            }
        };
        fetchJob();
    }, [id]);

    const handleUpdateJob = async (jobData) => {
        try {
            setFormError('');
            await api.updateJob(id, jobData);
            navigate('/');
        } catch (err) {
            setFormError(err.response?.data?.error || 'Failed to update job.');
            console.error('Failed to update job:', err);
        }
    };

    if (!job) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h2>Edit Job Application</h2>
            <JobForm
                onSubmit={handleUpdateJob}
                initialData={job}
                serverError={formError}
            />
        </div>
    );
};

export default EditJob;
