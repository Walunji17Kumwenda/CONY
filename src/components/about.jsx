import React from 'react';
 
const About = () => {
    return(
    <div className='flex flex-col bg-gray-300 justify-between h-full p-10'>
        <h1 className='text-4xl text-center font-bold'>About Us</h1>
        <h2 className='text-2xl font-bold mb-4 ' >About <span className='text-blue-950'>CONY</span></h2>
        <p className='text-gray-600 mb-4'>CONY is a web application that helps job seekers find their dream jobs by matching their skills and preferences with available job oppotunities.
            Our app uses advanced algorithm to analyse job descriptions and candidate profiles and provides personalized job recommendations
            based on the user's unique qualifications and career goals.</p>

        <h2 className='font-bold text-2xl mb-2'>Features</h2>
        <ul className='list-disc list-inside mb-2'>
            <li className='text-gray-600 mb-4'><strong>Job Matching Algorithm:</strong>
            Our platform uses sophisticated job matching algorithm to connect job seekers
            with relevant job oppotunities, making the job search experience more efficient and targerted for 
            interns and postgraduates.</li>
            <li className='text-gray-600 mb-4'><strong>Real-time Notifications:</strong>
            Stay up-to-date with the latest job oppotunities and application statuses with our real-time Notification system.Whether you're
            an intern looking for your next oppotunity or a company looking to fill a position, you'll never miss an important update. </li>
            <li className='text-gray-600 mb-4'><strong>Easy Application Process:</strong>
            Applying for jobs has never been easier. Our platform allows job seekers to quickly and easily apply for jobs with just a few clicks.
            plus companies can easily manage and review application in real-time.</li>
            <li className='text-gray-600 mb-4'><strong>Easy Posting Process:</strong>
            Posting jobs has never been easier.Our platform allows companies to quickly and easily post jobs with just a few clicks.
            Companies can easily review job applications and accept the application. </li>
            <li className='text-gray-600 mb-4'><strong>Tailored for Interns, Companies, and Postgraduates:</strong> Our platform is designed to meet unique needs of interns
            , companies and postgraduates.Whether you're looking to gain experience, fill a position, or take the next step in your career, our  platform has you covered.</li>
        </ul>
        <h2 className='text-2xl font-bold mb-2'>Our Mission</h2>
        <p  className='text-gray-600 mb-4'>Our platform aims to address the challenges faced by students and graduates for finding internships and 
        job opportunities. We believe that everyone deserves the opportunity to pursue their passions and build a fulfilling career, and we're commited 
        to making that possible through CONY </p>

        <h2 className='text-2xl font-bold mb-2 text-start'> Contact Us</h2>
        <p className='text-gray-600 mb-4'>If you have any questions,comments, or Feedback, Please don't hesistate to contact us.
            We'd love to hear from you. </p>

    
       
    </div>
    )
}








export default About;