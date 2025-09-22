import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Clock, DollarSign, Building } from 'lucide-react';

interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  type: string;
  salary: string;
  description: string;
  postedDate: string;
  status: 'active' | 'closed';
}

interface JobCardProps {
  job: Job;
}

const JobCard: React.FC<JobCardProps> = ({ job }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow duration-200">
      <div className="flex justify-between items-start mb-4">
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-gray-900 mb-2 hover:text-blue-600 transition-colors">
            <Link to={`/jobs/${job.id}`}>{job.title}</Link>
          </h3>
          <div className="flex items-center text-gray-600 mb-2">
            <Building className="h-4 w-4 mr-1" />
            <span className="text-sm font-medium">{job.company}</span>
          </div>
        </div>
        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
          job.status === 'active' 
            ? 'bg-green-100 text-green-800' 
            : 'bg-gray-100 text-gray-800'
        }`}>
          {job.status === 'active' ? 'Open' : 'Closed'}
        </span>
      </div>
      
      <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-4">
        <div className="flex items-center">
          <MapPin className="h-4 w-4 mr-1" />
          <span>{job.location}</span>
        </div>
        <div className="flex items-center">
          <Clock className="h-4 w-4 mr-1" />
          <span>{job.type}</span>
        </div>
        <div className="flex items-center">
          <DollarSign className="h-4 w-4 mr-1" />
          <span>{job.salary}</span>
        </div>
      </div>
      
      <p className="text-gray-700 text-sm mb-4 line-clamp-3">
        {job.description}
      </p>
      
      <div className="flex justify-between items-center">
        <span className="text-xs text-gray-500">Posted {job.postedDate}</span>
        <Link
          to={`/jobs/${job.id}`}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default JobCard;