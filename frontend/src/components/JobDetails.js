import React from 'react';
import { Link } from 'react-router-dom';

const JobDetails = ({ job, onDelete }) => {
    const formattedDate = new Date(job.dateApplied).toLocaleDateString();

    return (
        <div className={`job-card status-${job.status}`}>
            <div className="job-card-header">
                <h3>{job.position}</h3>
                <span className="job-status">{job.status}</span>
            </div>
            <p className="job-company">{job.company}</p>
            <p className="job-date">Applied on: {formattedDate}</p>
            <div className="job-actions">
                <Link to={`/edit/${job._id}`} className="btn btn-edit">
                    Edit
                </Link>
                <button onClick={() => onDelete(job._id)} className="btn btn-delete">
                    Delete
                </button>
            </div>
        </div>
    );
};

export default JobDetails;
