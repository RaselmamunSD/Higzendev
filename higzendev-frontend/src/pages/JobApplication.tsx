import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ArrowLeft, Upload } from 'lucide-react';
import { Link } from 'react-router-dom';

const JobApplication = () => {
  const { jobId } = useParams();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    experience: '',
    expectedSalary: '',
    availableFrom: '',
    coverLetter: '',
    portfolio: '',
    linkedin: '',
    github: ''
  });

  const jobs = {
    'senior-frontend': { title: 'Senior Frontend Developer', department: 'Engineering' },
    'backend-engineer': { title: 'Backend Engineer', department: 'Engineering' },
    'ui-ux-designer': { title: 'UX/UI Designer', department: 'Design' },
    'project-manager': { title: 'Project Manager', department: 'Management' },
    'devops-engineer': { title: 'DevOps Engineer', department: 'Engineering' },
    'data-scientist': { title: 'Data Scientist', department: 'Data & Analytics' },
    'mobile-developer': { title: 'Mobile Developer', department: 'Engineering' },
    'qa-engineer': { title: 'QA Engineer', department: 'Quality Assurance' },
    'product-manager': { title: 'Product Manager', department: 'Product' },
    'business-analyst': { title: 'Business Analyst', department: 'Business' },
    'tech-lead': { title: 'Technical Lead', department: 'Engineering' },
    'cloud-architect': { title: 'Cloud Architect', department: 'Engineering' },
    'security-engineer': { title: 'Security Engineer', department: 'Security' },
    'ai-engineer': { title: 'AI/ML Engineer', department: 'AI & Machine Learning' },
    'sales-executive': { title: 'Sales Executive', department: 'Sales' }
  };

  const job = jobs[jobId as keyof typeof jobs];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Application submitted:', formData);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  if (!job) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow bg-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl font-bold mb-4">Job Not Found</h1>
            <Link to="/careers">
              <Button className="bg-softgreen hover:bg-softgreen/80">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Careers
              </Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow bg-white">
        {/* Header */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <Link to="/careers" className="inline-flex items-center text-softgreen hover:underline mb-6">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Careers
            </Link>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Apply for {job.title}</h1>
            <p className="text-lg text-gray-600">{job.department} Department</p>
          </div>
        </section>

        {/* Application Form */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Personal Information */}
                <div>
                  <h2 className="text-2xl font-bold mb-6">Personal Information</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">First Name *</label>
                      <Input
                        value={formData.firstName}
                        onChange={(e) => handleInputChange('firstName', e.target.value)}
                        placeholder="Enter your first name"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Last Name *</label>
                      <Input
                        value={formData.lastName}
                        onChange={(e) => handleInputChange('lastName', e.target.value)}
                        placeholder="Enter your last name"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Email *</label>
                      <Input
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        placeholder="Enter your email"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Phone Number *</label>
                      <Input
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        placeholder="Enter your phone number"
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Professional Information */}
                <div>
                  <h2 className="text-2xl font-bold mb-6">Professional Information</h2>
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">Years of Experience *</label>
                      <Select value={formData.experience} onValueChange={(value) => handleInputChange('experience', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select years of experience" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="0-1">0-1 years</SelectItem>
                          <SelectItem value="2-3">2-3 years</SelectItem>
                          <SelectItem value="4-5">4-5 years</SelectItem>
                          <SelectItem value="6-8">6-8 years</SelectItem>
                          <SelectItem value="9-12">9-12 years</SelectItem>
                          <SelectItem value="12+">12+ years</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium mb-2">Expected Salary</label>
                        <Input
                          value={formData.expectedSalary}
                          onChange={(e) => handleInputChange('expectedSalary', e.target.value)}
                          placeholder="e.g., $80,000 - $100,000"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Available From</label>
                        <Input
                          type="date"
                          value={formData.availableFrom}
                          onChange={(e) => handleInputChange('availableFrom', e.target.value)}
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Cover Letter *</label>
                      <Textarea
                        value={formData.coverLetter}
                        onChange={(e) => handleInputChange('coverLetter', e.target.value)}
                        placeholder="Tell us why you're perfect for this role..."
                        rows={6}
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Links & Portfolio */}
                <div>
                  <h2 className="text-2xl font-bold mb-6">Portfolio & Links</h2>
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">Portfolio/Website</label>
                      <Input
                        value={formData.portfolio}
                        onChange={(e) => handleInputChange('portfolio', e.target.value)}
                        placeholder="https://your-portfolio.com"
                      />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium mb-2">LinkedIn Profile</label>
                        <Input
                          value={formData.linkedin}
                          onChange={(e) => handleInputChange('linkedin', e.target.value)}
                          placeholder="https://linkedin.com/in/yourprofile"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">GitHub Profile</label>
                        <Input
                          value={formData.github}
                          onChange={(e) => handleInputChange('github', e.target.value)}
                          placeholder="https://github.com/yourusername"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* File Upload */}
                <div>
                  <h2 className="text-2xl font-bold mb-6">Documents</h2>
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">Resume/CV *</label>
                      <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                        <Upload className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                        <p className="text-sm text-gray-600 mb-2">Click to upload or drag and drop</p>
                        <p className="text-xs text-gray-500">PDF, DOC, DOCX (Max 5MB)</p>
                        <Button type="button" variant="outline" className="mt-4">
                          Choose File
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Submit */}
                <div className="pt-6">
                  <Button type="submit" className="w-full bg-softgreen hover:bg-softgreen/80" size="lg">
                    Submit Application
                  </Button>
                  <p className="text-sm text-gray-600 text-center mt-4">
                    By submitting this application, you agree to our privacy policy and terms of service.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default JobApplication;