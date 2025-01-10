import React from 'react';
import { Building, Globe2, Rocket, Briefcase, GraduationCap, Heart } from 'lucide-react';
import { JobApplicationModal } from '../components/JobApplicationModal';

export function CareersPage() {
  const [selectedJob, setSelectedJob] = React.useState<string | null>(null);

  const benefits = [
    {
      icon: Globe2,
      title: 'Remote Work Options',
      description: 'Flexibility to work from anywhere in the world'
    },
    {
      icon: GraduationCap,
      title: 'Learning & Development',
      description: 'Continuous learning opportunities and career growth through hands-on experience'
    },
    {
      icon: Rocket,
      title: 'Grow with Us',
      description: 'Be part of a fast-growing startup and shape the future of e-commerce in Morocco'
    }
  ];

  const openings = [
    {
      title: 'Social Media Manager',
      department: 'Marketing',
      location: 'Hybrid',
      type: 'Internship'
    },
    {
      title: 'Video Editor',
      department: 'Content',
      location: 'Hybrid',
      type: 'Internship'
    },
    {
      title: 'CI/CD DevOps',
      department: 'Engineering',
      location: 'Hybrid',
      type: 'Internship'
    }
  ];

  return (
    <div className="min-h-screen bg-white pt-16">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-[#fb7701] to-[#ff9233] text-white py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold mb-6">Join Our Team</h1>
            <p className="text-xl text-purple-100 mb-8">
              Help us shape the future of e-commerce in Morocco. We're always looking for talented individuals to join our growing team.
            </p>
            <button className="bg-white text-[#fb7701] px-6 py-3 rounded-lg font-semibold hover:bg-orange-50 transition-colors">
              View Open Positions
            </button>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Why Join Maamora?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-orange-100 mb-6">
                  <benefit.icon className="w-8 h-8 text-[#fb7701]" />
                </div>
                <h3 className="text-xl font-semibold mb-4">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Open Positions</h2>
          <div className="grid gap-6">
            {openings.map((job) => (
              <div key={job.title} className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{job.title}</h3>
                    <div className="flex items-center gap-4 text-gray-600">
                      <span className="flex items-center gap-1">
                        <Briefcase className="w-4 h-4" />
                        {job.department}
                      </span>
                      <span className="flex items-center gap-1">
                        <Building className="w-4 h-4" />
                        {job.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Rocket className="w-4 h-4" />
                        {job.type}
                      </span>
                    </div>
                  </div>
                  <button 
                    onClick={() => setSelectedJob(job.title)}
                    className="bg-[#fb7701] text-white px-6 py-2 rounded-lg font-semibold hover:bg-[#e66901] transition-colors"
                  >
                    Apply Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <JobApplicationModal
        isOpen={!!selectedJob}
        jobTitle={selectedJob || ''}
        onClose={() => setSelectedJob(null)}
      />
    </div>
  );
}