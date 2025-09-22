import React, { useState } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { MapPin, Clock, DollarSign, Users, Building, Calendar } from 'lucide-react';
import { mockJobs } from '../data/mockData';
import ApplyModal from '../components/ApplyModal';

const JobDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [showApplyModal, setShowApplyModal] = useState(false);
  
  const job = mockJobs.find(job => job.id === id);

  if (!job) {
    return <Navigate to="/jobs" replace />;
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h1 className="text-3xl font-bold mb-2">{job.title}</h1>
              <div className="flex items-center space-x-2 text-blue-100 mb-4">
                <Building className="h-5 w-5" />
                <span className="text-lg">{job.company}</span>
              </div>
              <div className="flex flex-wrap gap-4 text-blue-100">
                <div className="flex items-center space-x-1">
                  <MapPin className="h-4 w-4" />
                  <span>{job.location}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Clock className="h-4 w-4" />
                  <span>{job.type}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <DollarSign className="h-4 w-4" />
                  <span>{job.salary}</span>
                </div>
              </div>
            </div>
            <div className="mt-6 lg:mt-0">
              <button
                onClick={() => setShowApplyModal(true)}
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold text-lg transition-colors"
              >
                Apply Now
              </button>
            </div>
          </div>
        </div>

        <div className="p-8">
          {/* Job Overview */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <Users className="h-8 w-8 text-blue-600 mx-auto mb-2" />
              <div className="font-semibold text-gray-900">Team Size</div>
              <div className="text-gray-600">5-10 people</div>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <Calendar className="h-8 w-8 text-blue-600 mx-auto mb-2" />
              <div className="font-semibold text-gray-900">Posted</div>
              <div className="text-gray-600">{job.postedDate}</div>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <Clock className="h-8 w-8 text-blue-600 mx-auto mb-2" />
              <div className="font-semibold text-gray-900">Deadline</div>
              <div className="text-gray-600">Open</div>
            </div>
          </div>

          {/* Job Description */}
          <div className="prose prose-lg max-w-none mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">About the Role</h2>
            <div className="text-gray-700 space-y-4">
              <p>{job.description}</p>
              
              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Key Responsibilities</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Lead financial auditing processes for major client portfolios</li>
                <li>Develop and implement comprehensive audit strategies</li>
                <li>Collaborate with cross-functional teams to ensure compliance</li>
                <li>Prepare detailed audit reports and present findings to stakeholders</li>
                <li>Mentor junior team members and provide technical guidance</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Required Qualifications</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Bachelor's degree in Finance, Accounting, or related field</li>
                <li>CPA certification preferred</li>
                <li>5+ years of experience in financial auditing</li>
                <li>Strong analytical and problem-solving skills</li>
                <li>Excellent written and verbal communication abilities</li>
                <li>Proficiency in audit software and financial analysis tools</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">What We Offer</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Competitive salary and performance-based bonuses</li>
                <li>Comprehensive health, dental, and vision insurance</li>
                <li>401(k) with company matching</li>
                <li>Professional development opportunities</li>
                <li>Flexible work arrangements</li>
                <li>Generous paid time off</li>
              </ul>
            </div>
          </div>

          {/* Company Info */}
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">About {job.company}</h3>
            <p className="text-gray-700">
              {job.company} is a leading financial services firm specializing in audit, tax, and advisory services. 
              With over 20 years of experience, we serve clients across various industries, from startups to Fortune 500 companies. 
              Our commitment to excellence and innovation has made us a trusted partner for businesses seeking comprehensive financial solutions.
            </p>
          </div>
        </div>

        {/* Apply Section */}
        <div className="bg-gray-50 px-8 py-6 border-t">
          <div className="flex flex-col sm:flex-row items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Ready to apply?</h3>
              <p className="text-gray-600">Join our team and take your career to the next level.</p>
            </div>
            <button
              onClick={() => setShowApplyModal(true)}
              className="mt-4 sm:mt-0 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Apply for this Position
            </button>
          </div>
        </div>
      </div>

      {/* Apply Modal */}
      {showApplyModal && (
        <ApplyModal
          job={job}
          onClose={() => setShowApplyModal(false)}
        />
      )}
    </div>
  );
};

export default JobDetail;