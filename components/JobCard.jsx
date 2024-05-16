import React from "react";
import './JobCard.css';

const JobCard = ({ job }) => {
    return (
        <div className="job-card">
            
                <h3 className="title">{job.title}</h3>
                <p className="description">{job.description}</p>
                <p className="location">{job.location}</p>
                <div className="job-requirements">
                    {job.requirements.map((requirement, index) =>
                     (
                        <span key = {index}>{requirement}</span>
                     )
                )
                    }
                </div>
            </div>
            )
}
export default JobCard;