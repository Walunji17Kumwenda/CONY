import React, { useState } from 'react';

const FeedbackForm = () => {
    const [feedback, setFeedback] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here, you would typically send the feedback to a server
        setSubmitted(true);
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            {submitted ? (
                <div className="text-xl font-semibold text-green-500">
                    Thank you for your feedback!
                </div>
            ) : (
                <form onSubmit={handleSubmit} className="w-full max-w-md p-4 bg-white rounded shadow-md">
                    <label htmlFor="feedback" className="block mb-2 text-sm font-medium text-gray-700">Your Feedback:</label>
                    <textarea
                        id="feedback"
                        value={feedback}
                        onChange={(e) => setFeedback(e.target.value)}
                        required
                        className="w-full p-2 mb-4 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button type="submit" className="w-full px-4 py-2 font-semibold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
                        Submit
                    </button>
                </form>
            )}
        </div>
    );
};

export default FeedbackForm;
