import React, { useState, useEffect } from 'react';

const JobForm = ({ onSubmit, initialData, serverError }) => {
    const [company, setCompany] = useState('');
    const [position, setPosition] = useState('');
    const [status, setStatus] = useState('Applied');
    const [dateApplied, setDateApplied] = useState(new Date().toISOString().split('T')[0]);
    const [error, setError] = useState('');

    useEffect(() => {
        if (initialData) {
            setCompany(initialData.company);
            setPosition(initialData.position);
            setStatus(initialData.status);
            setDateApplied(new Date(initialData.dateApplied).toISOString().split('T')[0]);
        }
    }, [initialData]);

    const handleSubmit = (e) => {
        e.preventDefault();
        setError('');

        if (!company || !position || !dateApplied) {
            setError('Please fill in all required fields.');
            return;
        }
        if (company.length < 3) {
            setError('Company name must be at least 3 characters.');
            return;
        }
        const today = new Date();
        today.setHours(23, 59, 59, 999);
        if (new Date(dateApplied) > today) {
            setError('Application date cannot be in the future.');
            return;
        }

        onSubmit({ company, position, status, dateApplied });

        if (!initialData) {
            setCompany('');
            setPosition('');
            setStatus('Applied');
            setDateApplied(new Date().toISOString().split('T')[0]);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="job-form">
            {(error || serverError) && (
                <p style={{ color: 'red', fontWeight: 'bold' }}>{error || serverError}</p>
            )}

            <div className="form-group">
                <label htmlFor="company">Company Name</label>
                <input
                    type="text"
                    id="company"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                />
            </div>
            <div className="form-group">
                <label htmlFor="position">Job Title</label>
                <input
                    type="text"
                    id="position"
                    value={position}
                    onChange={(e) => setPosition(e.target.value)}
                />
            </div>
            <div className="form-group">
                <label htmlFor="dateApplied">Application Date</label>
                <input
                    type="date"
                    id="dateApplied"
                    value={dateApplied}
                    onChange={(e) => setDateApplied(e.target.value)}
                />
            </div>
            <div className="form-group">
                <label htmlFor="status">Status</label>
                <select
                    id="status"
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                >
                    <option value="Applied">Applied</option>
                    <option value="Interview">Interview</option>
                    <option value="Offer">Offer</option>
                    <option value="Rejected">Rejected</option>
                </select>
            </div>
            <button type="submit" className="btn btn-primary">
                {initialData ? 'Update Job' : 'Add Job'}
            </button>
        </form>
    );
};

export default JobForm;
