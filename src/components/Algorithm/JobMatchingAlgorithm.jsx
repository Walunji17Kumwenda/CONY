import React, { useEffect } from "react";
import { useState } from "react";
import JobCard from "../JobCard";



let job = [//define a list of jobs
    { image: <img src="/netflix.jpeg" alt="netflix pic" className="rounded-full border-2 border-gray-200" />, title: "Software Engineer", company: "NETFLIX", location: "Mountain View, CA", description: "Lead a team of engineers to develop and maintain software solutions for a global client.", requirements: ['javaScript ', ' css ', ' java '] },
    { image: <img src="/Starbucks.jpeg" alt="starbucks" className="rounded-full border-2 border-gray-200" />, title: "Product Manager", company: "Starbucks", location: "Cupertino, CA", description: "Drive the vision and strategy for a new product line, leading the development of product roadmaps and managing product releases.", requirements: [' java ', ' c++ ', ' c sharp'] },
    { image: <img src="/van.jpeg" alt="van" className="rounded-full h-[200px] w-[200px] border-2 border-gray-200" />, title: "Marketing Manager", company: "OldMutual", location: "Redmond, WA", description: "Manage the marketing strategy for a leading technology company, driving growth and engagement through innovative marketing campaigns.", requirements: ['java ', ' python ', ' ruby '] },
    { image: <img src="/google.jpeg" alt="google" className="rounded-full h-[200px] w-[200px] border-2 border-gray-200" />, title: "Frontend Developer", company: "Google", location: "blantyre, Soche", description: "to design UI and Ux websites", requirements: ['HTML ', 'CSS', ' JavaScript', ' java'] },
    { image: <img src="/WORD ART.jpeg" alt="word art" className="rounded-full border-2 border-gray-200" />, title: "Backend Developer", company: "Escom", location: "Zomba", description: "to design the backend of the software", requirements: ['java ', 'Spring', ' MySQL'] },
    { image: <img src="/Premium.jpeg" alt="premium" className="rounded-full border-2 border-gray-200" />, title: "Full Stack Developer", company: "Premium", location: "Mchinji", description: "to design the full stack of the software", requirements: ['java ', 'Spring', ' MySQL', 'HTML', 'CSS', ' javaScript'] },
    { image: <img src="/profile.png" alt="profile" className="rounded-full border-2 border-gray-200" />, title: "Mobile Developer", company: "Walunji Dealers", location: "Lilongwe", description: "to design the mobile app of the software", requirements: ['java ', 'Spring', ' MySQL', ' Android', ' iOS'] }
];


//job matching component that filters and displays matching jobs based on user requirements
const JobMatchingAlgorithm = ({ userRequirements = ['java ', 'Spring', ' MySQL', ' Android', ' iOS'] }) => {
    const [filteredJobs, setFilteredJobs] = useState([]);
    useEffect(() => {
        const filtered = job.filter((job) => {
            return job.requirements.some((requirement) => userRequirements.includes(requirement))
        })
        //update the filtered jobs state

        setFilteredJobs(filtered);
      }, []);

    

    //render the componet
    return (//button to trigger the filter/*Map the filtered jobs and render a jobcard componetfor each job*/

        <div>
            <div>

                {filteredJobs.map((job, index) => (
                    <JobCard key={index} job={job} />

                ))}

            </div>

        </div>

    )
}
export default JobMatchingAlgorithm;//