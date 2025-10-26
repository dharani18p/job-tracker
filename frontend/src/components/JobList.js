// frontend/src/components/JobList.js
import React from 'react';
import JobDetails from './JobDetails';

// Receives 'jobs' and 'onDelete' as props from the Home.js page
const JobList = ({ jobs, onDelete }) => {

    if (jobs.length === 0) {
        return <p>No jobs added yet. Add one to get started!</p>;
    }

    return (
        <div className="job-list">
            {jobs.map((job) => (
                // Passes the job data and the delete function down to each card
                <JobDetails
                    key={job._id}
                    job={job}
                    onDelete={onDelete}
                />
            ))}
        </div>
    );
};

export default JobList;