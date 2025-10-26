import React, { useState, useEffect } from 'react';
import JobForm from '../components/JobForm';
import JobList from '../components/JobList';
import api from '../api/jobApi';

const Home = () => {
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [fetchError, setFetchError] = useState(null);
    const [formError, setFormError] = useState('');

    useEffect(() => {
        const fetchJobs = async () => {
            try {
                const data = await api.getAllJobs();
                setJobs(data);
            } catch (err) {
                setFetchError('Failed to fetch jobs. Please try reloading.');
                console.error(err);
            } finally {
                setLoading(false);
            }
        };
        fetchJobs();
    }, []);

    const handleAddJob = async (jobData) => {
        try {
            setFormError('');
            const newJob = await api.createJob(jobData);
            setJobs([newJob, ...jobs]);
        } catch (err) {
            setFormError(err.response?.data?.error || 'Failed to create job.');
            console.error('Failed to create job:', err);
        }
    };

    const handleDeleteJob = async (id) => {
        if (window.confirm('Are you sure you want to delete this job application?')) {
            try {
                await api.deleteJob(id);
                setJobs(jobs.filter((job) => job._id !== id));
            } catch (err) {
                console.error('Failed to delete job:', err);
                alert('Failed to delete job.');
            }
        }
    };

    if (loading) {
        return <div>Loading applications...</div>;
    }

    if (fetchError) {
        return <div style={{ color: 'red' }}>{fetchError}</div>;
    }

    return (
        <div className="home-layout">
            <div className="form-container">
                <h2>Add New Job</h2>
                <JobForm
                    onSubmit={handleAddJob}
                    serverError={formError}
                />
            </div>
            <div className="list-container">
                <h2>My Applications</h2>
                <JobList
                    jobs={jobs}
                    onDelete={handleDeleteJob}
                />
            </div>
        </div>
    );
};

export default Home;
