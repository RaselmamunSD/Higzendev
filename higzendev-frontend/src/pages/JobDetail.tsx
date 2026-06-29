import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { ArrowLeft, Briefcase, Clock, DollarSign, MapPin } from 'lucide-react';
import { useToast } from '../hooks/use-toast';

const JobDetail = () => {
  const { jobId } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    linkedIn: '',
    portfolio: '',
    coverLetter: '',
    resume: null as File | null
  });

  const jobs: Record<string, any> = {
    "senior-ai-engineer": {
      title: "Senior AI Engineer",
      department: "Engineering",
      type: "Full-time",
      location: "San Francisco, CA / Remote",
      experience: "5+ years",
      salary: "$150,000 - $200,000",
      description: "We're looking for an experienced AI Engineer to help build and scale our mental health AI systems.",
      responsibilities: [
        "Design and implement machine learning models for emotion detection",
        "Collaborate with clinical team to ensure AI accuracy and safety",
        "Optimize AI performance and scalability",
        "Stay current with latest AI research and technologies"
      ],
      requirements: [
        "PhD or Master's in Computer Science, AI, or related field",
        "5+ years of experience in machine learning and AI",
        "Strong programming skills in Python and TensorFlow/PyTorch",
        "Experience with healthcare AI is a plus"
      ]
    },
    "senior-frontend-developer": {
      title: "Senior Frontend Developer",
      department: "Engineering",
      type: "Full-time",
      location: "Remote",
      experience: "4+ years",
      salary: "$120,000 - $160,000",
      description: "Build beautiful and intuitive user interfaces for our mental health platform.",
      responsibilities: [
        "Develop responsive web applications using React and TypeScript",
        "Create accessible and inclusive user interfaces",
        "Optimize application performance and user experience",
        "Collaborate with designers and backend engineers"
      ],
      requirements: [
        "4+ years of experience with React and modern JavaScript",
        "Strong understanding of web accessibility standards",
        "Experience with TypeScript and state management",
        "Portfolio demonstrating excellent UI/UX work"
      ]
    },
    "product-designer": {
      title: "Product Designer",
      department: "Design",
      type: "Full-time",
      location: "New York / Remote",
      experience: "3+ years",
      salary: "$100,000 - $140,000",
      description: "Design empathetic and accessible experiences for users seeking mental health support.",
      responsibilities: [
        "Create user-centered designs for web and mobile applications",
        "Conduct user research and usability testing",
        "Develop design systems and maintain brand consistency",
        "Collaborate with product and engineering teams"
      ],
      requirements: [
        "3+ years of experience in product design",
        "Strong portfolio showcasing UX/UI design work",
        "Proficiency in Figma and design tools",
        "Understanding of accessibility and inclusive design principles"
      ]
    },
    "backend-engineer": {
      title: "Backend Engineer",
      department: "Engineering",
      type: "Full-time",
      location: "Remote",
      experience: "3+ years",
      salary: "$110,000 - $150,000",
      description: "Build scalable and secure backend systems for our healthcare platform.",
      responsibilities: [
        "Design and implement RESTful APIs and microservices",
        "Ensure system security and HIPAA compliance",
        "Optimize database queries and system performance",
        "Write clean, maintainable, and well-tested code"
      ],
      requirements: [
        "3+ years of backend development experience",
        "Strong knowledge of Node.js, Python, or similar languages",
        "Experience with databases (PostgreSQL, MongoDB)",
        "Understanding of healthcare data security standards"
      ]
    },
    "data-scientist": {
      title: "Data Scientist",
      department: "Data & Analytics",
      type: "Full-time",
      location: "Boston / Remote",
      experience: "4+ years",
      salary: "$130,000 - $170,000",
      description: "Analyze user data to improve mental health outcomes and AI model performance.",
      responsibilities: [
        "Build predictive models to improve user outcomes",
        "Analyze large datasets to extract meaningful insights",
        "Collaborate with AI and product teams on data strategies",
        "Create data visualizations and reports for stakeholders"
      ],
      requirements: [
        "Master's or PhD in Data Science, Statistics, or related field",
        "4+ years of experience in data science and analytics",
        "Proficiency in Python, R, and SQL",
        "Experience with machine learning frameworks and statistical modeling"
      ]
    },
    "clinical-psychologist": {
      title: "Clinical Psychologist",
      department: "Clinical",
      type: "Full-time",
      location: "Remote",
      experience: "Licensed",
      salary: "$90,000 - $130,000",
      description: "Provide clinical oversight and ensure our AI systems meet therapeutic standards.",
      responsibilities: [
        "Review AI-generated content for clinical accuracy",
        "Provide guidance on mental health best practices",
        "Collaborate with product team on feature development",
        "Ensure compliance with clinical and ethical standards"
      ],
      requirements: [
        "Licensed Clinical Psychologist (PhD or PsyD)",
        "3+ years of clinical experience",
        "Understanding of digital mental health tools",
        "Strong communication and collaboration skills"
      ]
    }
  };

  const job = jobs[jobId || ''];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData(prev => ({ ...prev, resume: e.target.files![0] }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Application Submitted!",
      description: "We'll review your application and get back to you soon.",
    });
    navigate('/careers');
  };

  if (!job) {
    return (
      <div className="min-h-screen flex flex-col bg-background">
        <Header />
        <main className="flex-grow py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl font-bold mb-4 text-foreground">Job Not Found</h1>
            <Link to="/careers">
              <Button>Back to Careers</Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-grow py-20">
        <div className="container mx-auto px-4 max-w-5xl">
          <Link to="/careers">
            <Button variant="ghost" className="mb-8">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Careers
            </Button>
          </Link>

          <div className="bg-card p-8 md:p-12 rounded-lg border border-border mb-8">
            <div className="flex flex-wrap gap-3 mb-6">
              <span className="px-4 py-2 bg-primary/10 text-primary text-sm font-medium rounded-full">
                {job.department}
              </span>
              <span className="px-4 py-2 bg-secondary/10 text-secondary text-sm font-medium rounded-full">
                {job.type}
              </span>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
              {job.title}
            </h1>

            <div className="flex flex-wrap gap-6 mb-8 text-muted-foreground">
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                <span>{job.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                <span>{job.experience}</span>
              </div>
              <div className="flex items-center gap-2">
                <DollarSign className="w-5 h-5" />
                <span>{job.salary}</span>
              </div>
            </div>

            <p className="text-lg text-foreground mb-8">{job.description}</p>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h2 className="text-2xl font-semibold mb-4 text-foreground">Key Responsibilities:</h2>
                <ul className="space-y-3">
                  {job.responsibilities.map((item: string, index: number) => (
                    <li key={index} className="flex items-start gap-3 text-muted-foreground">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-4 text-foreground">Requirements:</h2>
                <ul className="space-y-3">
                  {job.requirements.map((item: string, index: number) => (
                    <li key={index} className="flex items-start gap-3 text-muted-foreground">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {!showForm && (
              <Button 
                onClick={() => setShowForm(true)}
                className="w-full md:w-auto glow-effect"
                size="lg"
              >
                Apply Now
              </Button>
            )}
          </div>

          {showForm && (
            <div className="bg-card p-8 md:p-12 rounded-lg border border-border">
              <h2 className="text-2xl font-bold mb-6 text-foreground">Application Form</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2 text-foreground">Full Name *</label>
                    <Input 
                      required
                      value={formData.fullName}
                      onChange={(e) => handleInputChange('fullName', e.target.value)}
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-foreground">Email *</label>
                    <Input 
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2 text-foreground">Phone</label>
                    <Input 
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-foreground">LinkedIn Profile</label>
                    <Input 
                      value={formData.linkedIn}
                      onChange={(e) => handleInputChange('linkedIn', e.target.value)}
                      placeholder="linkedin.com/in/johndoe"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-foreground">Portfolio / Website</label>
                  <Input 
                    value={formData.portfolio}
                    onChange={(e) => handleInputChange('portfolio', e.target.value)}
                    placeholder="https://johndoe.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-foreground">Cover Letter *</label>
                  <Textarea 
                    required
                    value={formData.coverLetter}
                    onChange={(e) => handleInputChange('coverLetter', e.target.value)}
                    placeholder="Tell us why you're interested in this position..."
                    rows={6}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-foreground">Resume / CV *</label>
                  <Input 
                    type="file"
                    required
                    onChange={handleFileChange}
                    accept=".pdf,.doc,.docx"
                  />
                  <p className="text-xs text-muted-foreground mt-2">Accepted formats: PDF, DOC, DOCX (Max 5MB)</p>
                </div>

                <div className="flex gap-4">
                  <Button type="submit" className="glow-effect" size="lg">
                    Submit Application
                  </Button>
                  <Button 
                    type="button" 
                    variant="outline" 
                    onClick={() => setShowForm(false)}
                    size="lg"
                  >
                    Cancel
                  </Button>
                </div>
              </form>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default JobDetail;
