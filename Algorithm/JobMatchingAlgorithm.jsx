import { useState } from "react";
import JobCard from "../components/JobCard";

const job = [//define a list of jobs
    {title: "Software Engineer",  location: "Mountain View, CA",description: "Lead a team of engineers to develop and maintain software solutions for a global client.", requirements: ['javaScript', 'css', 'java']},
    {title: "Product Manager",  location: "Cupertino, CA", description: "Drive the vision and strategy for a new product line, leading the development of product roadmaps and managing product releases.", requirements: ['java', 'c++', 'csharp']},
    {title: "Marketing Manager", location: "Redmond, WA", description: "Manage the marketing strategy for a leading technology company, driving growth and engagement through innovative marketing campaigns.", requirements: ['java', 'python', 'ruby']}
];

//job matching component that filters and displays matching jobs based on user requirements
const JobMatchingAlgorithm = ({userRequirements}) => {
    const [filteredJobs, setFilteredJobs] = useState([]);// state to stroe the filtered jobs
//function to filter jobs array  to find jobs that have at least one requirement  matching with userRequirements
    const handleFilter = () => {
        const filtered = job.filter((job) => {
            return job.requirements.some((requirement)=> userRequirements.includes(requirement))
        })
        //update the filtered jobs state
        setFilteredJobs(filtered);
}
//render the componet
return(//button to trigger the filter
    <div>
        <button onClick={handleFilter}>Filter Jobs</button>
        <div className="job-cards">
            /**Map the filtered jobs and render a jobcard componetfor each jobb */
        {filteredJobs.map((job, index) => (
            <JobCard key={index} job = {job} />
        ))}
            </div>

    </div>
)
}
export default JobMatchingAlgorithm;//