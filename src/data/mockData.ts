export const mockJobs = [
  {
    id: '1',
    title: 'Senior Financial Analyst',
    company: 'Goldman Sachs',
    location: 'New York, NY',
    type: 'Full-time',
    salary: '$85,000 - $120,000',
    description: 'We are seeking a Senior Financial Analyst to join our dynamic team. The ideal candidate will have strong analytical skills and experience in financial modeling and forecasting. You will be responsible for analyzing financial data, preparing reports, and supporting strategic decision-making processes.',
    postedDate: '2 days ago',
    status: 'active' as const
  },
  {
    id: '2',
    title: 'Audit Manager',
    company: 'KPMG',
    location: 'Chicago, IL',
    type: 'Full-time',
    salary: '$90,000 - $130,000',
    description: 'Join our audit team as an Audit Manager. You will lead audit engagements, manage client relationships, and mentor junior staff. CPA certification and 5+ years of audit experience required. Excellent opportunity for career growth in a leading professional services firm.',
    postedDate: '1 week ago',
    status: 'active' as const
  },
  {
    id: '3',
    title: 'Investment Banking Associate',
    company: 'JPMorgan Chase',
    location: 'San Francisco, CA',
    type: 'Full-time',
    salary: '$110,000 - $150,000',
    description: 'Exciting opportunity for an Investment Banking Associate to join our M&A team. You will work on complex transactions, prepare pitch materials, and conduct financial analysis. Strong modeling skills and investment banking experience preferred.',
    postedDate: '3 days ago',
    status: 'active' as const
  },
  {
    id: '4',
    title: 'Risk Management Specialist',
    company: 'Wells Fargo',
    location: 'Boston, MA',
    type: 'Full-time',
    salary: '$75,000 - $105,000',
    description: 'We are looking for a Risk Management Specialist to assess and mitigate financial risks. The role involves developing risk assessment models, monitoring compliance, and preparing risk reports for senior management. Strong quantitative and analytical skills required.',
    postedDate: '5 days ago',
    status: 'active' as const
  },
  {
    id: '5',
    title: 'Tax Consultant',
    company: 'Deloitte',
    location: 'Remote',
    type: 'Contract',
    salary: '$60 - $80 per hour',
    description: 'Remote Tax Consultant position available for the upcoming tax season. Provide tax planning and compliance services to corporate clients. Must have current CPA license and experience with corporate tax returns. Flexible schedule and competitive hourly rate.',
    postedDate: '1 day ago',
    status: 'active' as const
  },
  {
    id: '6',
    title: 'Compliance Officer',
    company: 'Bank of America',
    location: 'Charlotte, NC',
    type: 'Full-time',
    salary: '$70,000 - $95,000',
    description: 'Join our compliance team to ensure adherence to financial regulations and internal policies. You will conduct compliance reviews, investigate potential violations, and provide training to staff. Knowledge of banking regulations and compliance frameworks essential.',
    postedDate: '1 week ago',
    status: 'active' as const
  }
];

export const mockApplications = [
  {
    id: '1',
    jobId: '1',
    jobTitle: 'Senior Financial Analyst',
    candidateName: 'Sarah Johnson',
    candidateEmail: 'sarah.johnson@email.com',
    appliedDate: '2 days ago',
    status: 'pending' as const
  },
  {
    id: '2',
    jobId: '2',
    jobTitle: 'Audit Manager',
    candidateName: 'Michael Chen',
    candidateEmail: 'michael.chen@email.com',
    appliedDate: '3 days ago',
    status: 'approved' as const
  },
  {
    id: '3',
    jobId: '1',
    jobTitle: 'Senior Financial Analyst',
    candidateName: 'Emily Rodriguez',
    candidateEmail: 'emily.rodriguez@email.com',
    appliedDate: '1 week ago',
    status: 'rejected' as const
  },
  {
    id: '4',
    jobId: '3',
    jobTitle: 'Investment Banking Associate',
    candidateName: 'David Park',
    candidateEmail: 'david.park@email.com',
    appliedDate: '4 days ago',
    status: 'pending' as const
  },
  {
    id: '5',
    jobId: '4',
    jobTitle: 'Risk Management Specialist',
    candidateName: 'Lisa Thompson',
    candidateEmail: 'lisa.thompson@email.com',
    appliedDate: '5 days ago',
    status: 'pending' as const
  }
];