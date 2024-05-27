import React from 'react';
import JobList from './pages/JobList';
import 'tailwindcss/tailwind.css';
export default function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <JobList />
    </div>
  );
}