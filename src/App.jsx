import React, { useState, useEffect } from 'react';
import { 
  BookOpen, 
  Users, 
  Award, 
  Phone, 
  Mail, 
  MapPin, 
  Menu, 
  X, 
  ChevronRight, 
  CheckCircle2, 
  Github, 
  Twitter, 
  Linkedin,
  Clock,
  Star,
  Target
} from 'lucide-react';

// --- Components ---

const Navbar = ({ currentPage, setCurrentPage }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Courses', id: 'courses' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => setCurrentPage('home')}>
            <div className="bg-indigo-600 p-2 rounded-lg">
              <BookOpen className="text-white w-6 h-6" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-blue-500 bg-clip-text text-transparent">
              Acaday
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => setCurrentPage(link.id)}
                className={`text-sm font-medium transition-colors hover:text-indigo-600 ${
                  currentPage === link.id ? 'text-indigo-600' : 'text-slate-600'
                }`}
              >
                {link.name}
              </button>
            ))}
            <button 
              onClick={() => setCurrentPage('contact')}
              className="bg-indigo-600 text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-200"
            >
              Enroll Now
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-600 p-2">
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-slate-100 animate-in slide-in-from-top duration-300">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => {
                  setCurrentPage(link.id);
                  setIsOpen(false);
                }}
                className="block w-full text-left px-4 py-3 text-base font-medium text-slate-600 hover:bg-indigo-50 hover:text-indigo-600 rounded-xl"
              >
                {link.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

const Footer = ({ setCurrentPage }) => (
  <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <div className="bg-indigo-600 p-1.5 rounded-md">
              <BookOpen className="text-white w-5 h-5" />
            </div>
            <span className="text-xl font-bold text-white">Acaday</span>
          </div>
          <p className="text-sm leading-relaxed">
            Empowering the next generation of creators and innovators through world-class technical education.
          </p>
          <div className="flex gap-4">
            <Twitter className="w-5 h-5 cursor-pointer hover:text-white transition-colors" />
            <Linkedin className="w-5 h-5 cursor-pointer hover:text-white transition-colors" />
            <Github className="w-5 h-5 cursor-pointer hover:text-white transition-colors" />
          </div>
        </div>
        
        <div>
          <h4 className="text-white font-semibold mb-6">Quick Links</h4>
          <ul className="space-y-3 text-sm">
            <li><button onClick={() => setCurrentPage('home')} className="hover:text-white">Home</button></li>
            <li><button onClick={() => setCurrentPage('about')} className="hover:text-white">About Us</button></li>
            <li><button onClick={() => setCurrentPage('courses')} className="hover:text-white">Our Courses</button></li>
            <li><button onClick={() => setCurrentPage('contact')} className="hover:text-white">Contact</button></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-6">Programs</h4>
          <ul className="space-y-3 text-sm">
            <li className="hover:text-white cursor-pointer">Web Development</li>
            <li className="hover:text-white cursor-pointer">Data Science</li>
            <li className="hover:text-white cursor-pointer">UI/UX Design</li>
            <li className="hover:text-white cursor-pointer">Cyber Security</li>
            <li className="hover:text-white cursor-pointer">AI & Prompt Engineering</li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-6">Contact Us</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-indigo-400 shrink-0" />
              <span>Mogadishu, Banadir, Somalia</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-indigo-400 shrink-0" />
              <span>+252 614538131</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-indigo-400 shrink-0" />
              <span>engsantuur@gmail.com</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-slate-800 pt-8 text-center text-xs">
        <p>© {new Date().getFullYear()} Acaday Institute. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

// --- Page Content ---

const HomePage = ({ setCurrentPage }) => (
  <div className="animate-in fade-in duration-500">
    {/* Hero Section */}
    <section className="pt-32 pb-20 lg:pt-48 lg:pb-32 bg-gradient-to-b from-indigo-50/50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 text-center lg:text-left">
            <span className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wide text-indigo-600 uppercase bg-indigo-100 rounded-full">
              The Future of Learning
            </span>
            <h1 className="text-5xl lg:text-7xl font-extrabold text-slate-900 leading-tight mb-6">
              Master the Skills that <span className="text-indigo-600 underline decoration-indigo-200 underline-offset-8">Matter</span>
            </h1>
            <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Join 10,000+ students learning the most in-demand technologies from industry experts. Your journey to a tech career starts here.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button 
                onClick={() => setCurrentPage('courses')}
                className="px-8 py-4 bg-indigo-600 text-white rounded-2xl font-bold hover:bg-indigo-700 transition-all flex items-center justify-center gap-2 shadow-xl shadow-indigo-200"
              >
                Browse Courses <ChevronRight className="w-5 h-5" />
              </button>
              <button 
                onClick={() => setCurrentPage('about')}
                className="px-8 py-4 bg-white text-slate-700 border border-slate-200 rounded-2xl font-bold hover:bg-slate-50 transition-all shadow-sm"
              >
                Learn More
              </button>
            </div>
          </div>
          <div className="flex-1 relative">
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop" 
                alt="Students learning" 
                className="w-full h-full object-cover aspect-[4/3]"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-blue-100 rounded-full mix-blend-multiply opacity-70 animate-blob"></div>
            <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-indigo-100 rounded-full mix-blend-multiply opacity-70 animate-blob animation-delay-2000"></div>
          </div>
        </div>
      </div>
    </section>

    {/* Stats Section */}
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8">
        {[
          { label: 'Graduates', value: '10K+' },
          { label: 'Expert Mentors', value: '150+' },
          { label: 'Partnerships', value: '45+' },
          { label: 'Success Rate', value: '94%' },
        ].map((stat, i) => (
          <div key={i} className="text-center p-6 rounded-2xl bg-slate-50 hover:bg-indigo-50 transition-colors">
            <div className="text-3xl font-bold text-indigo-600 mb-1">{stat.value}</div>
            <div className="text-sm text-slate-500 font-medium uppercase tracking-wider">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>

    {/* Featured Courses Preview */}
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Popular Programs</h2>
            <p className="text-slate-600">Specially designed curricula to get you hired.</p>
          </div>
          <button 
            onClick={() => setCurrentPage('courses')}
            className="hidden md:flex items-center gap-2 text-indigo-600 font-semibold hover:gap-3 transition-all"
          >
            View all courses <ChevronRight className="w-4 h-4" />
          </button>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { 
              title: "Full-Stack Engineering", 
              category: "Software", 
              level: "Advanced",
              duration: "24 Weeks",
              rating: "4.9",
              img: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=80&w=1931&auto=format&fit=crop"
            },
            { 
              title: "UX Strategy & Design", 
              category: "Design", 
              level: "Beginner",
              duration: "12 Weeks",
              rating: "4.8",
              img: "https://images.unsplash.com/photo-1586717791821-3f44a563dc4c?q=80&w=2070&auto=format&fit=crop"
            },
            { 
              title: "Prompt Engineering", 
              category: "AI", 
              level: "Beginner",
              duration: "8 Weeks",
              rating: "4.9",
              img: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?q=80&w=2070&auto=format&fit=crop"
            }
          ].map((course, i) => (
            <div key={i} className="group bg-white rounded-3xl overflow-hidden border border-slate-200 hover:shadow-2xl transition-all duration-300">
              <div className="h-48 overflow-hidden relative">
                <img src={course.img} alt={course.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <span className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-lg text-xs font-bold text-indigo-600 uppercase">
                  {course.category}
                </span>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs font-medium text-slate-400">{course.level}</span>
                  <div className="flex items-center gap-1 text-orange-400 text-sm font-bold">
                    <Star className="w-3 h-3 fill-current" /> {course.rating}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-indigo-600 transition-colors">
                  {course.title}
                </h3>
                <div className="flex items-center gap-4 text-slate-500 text-sm mb-6">
                  <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> {course.duration}</span>
                  <span className="flex items-center gap-1"><Users className="w-4 h-4" /> 2.4k+</span>
                </div>
                <button 
                  onClick={() => setCurrentPage('courses')}
                  className="w-full py-3 bg-slate-50 text-slate-700 font-semibold rounded-xl hover:bg-indigo-600 hover:text-white transition-all"
                >
                  See Curriculum
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  </div>
);

const AboutPage = () => (
  <div className="pt-32 pb-20 animate-in fade-in duration-500">
    <div className="max-w-7xl mx-auto px-4">
      <div className="text-center mb-20">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Redefining Education for the Digital Age</h1>
        <p className="text-xl text-slate-600 max-w-3xl mx-auto">
          Founded in 2018, Acaday Institute was born out of a desire to bridge the gap between academic learning and industry requirements.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
        <div>
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Our Mission</h2>
          <div className="space-y-6">
            <div className="flex gap-4 p-6 rounded-2xl bg-indigo-50/50">
              <div className="shrink-0 w-12 h-12 rounded-xl bg-indigo-600 flex items-center justify-center text-white">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <h4 className="fon
                t-bold text-slate-900 mb-1">Quality Excellence</h4>
                <p className="text-slate-600">Maintaining the highest standards in technical training and curriculum design.</p>
              </div>
            </div>
            <div className="flex gap-4 p-6 rounded-2xl bg-indigo-50/50">
              <div className="shrink-0 w-12 h-12 rounded-xl bg-indigo-600 flex items-center justify-center text-white">
                <Users className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 mb-1">Inclusivity</h4>
                <p className="text-slate-600">Making tech education accessible to everyone, regardless of their background.</p>
              </div>
            </div>
            <div className="flex gap-4 p-6 rounded-2xl bg-indigo-50/50">
              <div className="shrink-0 w-12 h-12 rounded-xl bg-indigo-600 flex items-center justify-center text-white">
                <Target className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 mb-1">Attracting People</h4>
                <p className="text-slate-600">Drawing in talented individuals from diverse backgrounds to build a vibrant learning community.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <img src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=1974&auto=format&fit=crop" className="rounded-3xl h-64 w-full object-cover mt-8" alt="Team working" />
          <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop" className="rounded-3xl h-64 w-full object-cover" alt="Team laughing" />
        </div>
      </div>
    </div>
  </div>
);

const CoursesPage = () => {
  const [filter, setFilter] = useState('All');
  const categories = ['All', 'Software', 'Design', 'Data', 'Security', 'AI'];
  
  const courses = [
    { title: "React & Next.js Masterclass", category: "Software", price: "$59", duration: "10 Weeks", img: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=2070&auto=format&fit=crop" },
    { title: "Python for Data Science", category: "Data", price: "$59", duration: "12 Weeks", img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop" },
    { title: "UX Strategy & Design", category: "Design", price: "$59", duration: "12 Weeks", img: "https://images.unsplash.com/photo-1586717791821-3f44a563dc4c?q=80&w=2070&auto=format&fit=crop" },
    { title: "Ethical Hacking 101", category: "Security", price: "$59", duration: "16 Weeks", img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop" },
    { title: "Backend with Node.js", category: "Software", price: "$50", duration: "10 Weeks", img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2070&auto=format&fit=crop" },
    { title: "Machine Learning A-Z", category: "Data", price: "$50", duration: "20 Weeks", img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop" },
    { title: "Prompt Engineering", category: "AI", price: "$59", duration: "8 Weeks", img: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?q=80&w=2070&auto=format&fit=crop" },
  ];

  const filteredCourses = filter === 'All' ? courses : courses.filter(c => c.category === filter);

  return (
    <div className="pt-32 pb-20 animate-in fade-in duration-500">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
          <div>
            <h1 className="text-4xl font-bold text-slate-900 mb-2">Our Courses</h1>
            <p className="text-slate-600">Explore our professional development programs.</p>
          </div>
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${
                  filter === cat 
                    ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-200' 
                    : 'bg-white text-slate-600 border border-slate-200 hover:border-indigo-300'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map((course, i) => (
            <div key={i} className="bg-white border border-slate-200 p-8 rounded-3xl hover:border-indigo-500 transition-all duration-300 group">
              <div className="h-48 overflow-hidden relative mb-6 rounded-2xl">
                <img src={course.img} alt={course.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="mb-6 flex justify-between items-start">
                <span className="px-3 py-1 bg-indigo-50 text-indigo-600 rounded-lg text-xs font-bold uppercase tracking-wider">
                  {course.category}
                </span>
                <span className="text-xl font-bold text-slate-900">{course.price}</span>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-indigo-600 transition-colors">
                {course.title}
              </h3>
              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-3 text-slate-500 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  Industry recognized certification
                </div>
                <div className="flex items-center gap-3 text-slate-500 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  Live expert sessions
                </div>
                <div className="flex items-center gap-3 text-slate-500 text-sm">
                  <Clock className="w-4 h-4 text-indigo-400" />
                  {course.duration}
                </div>
              </div>
              <button className="w-full py-4 bg-indigo-600 text-white rounded-2xl font-bold hover:bg-indigo-700 transition-all">
                Enroll Today
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const ContactPage = () => {
  const [formState, setFormState] = useState('idle');

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormState('submitting');
    setTimeout(() => setFormState('success'), 1500);
  };

  return (
    <div className="pt-32 pb-20 animate-in fade-in duration-500">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h1 className="text-4xl font-bold text-slate-900 mb-6">Get in Touch</h1>
            <p className="text-xl text-slate-600 mb-12">
              Have questions about our programs or the enrollment process? We're here to help you navigate your tech career.
            </p>
            
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="shrink-0 w-12 h-12 rounded-2xl bg-indigo-100 flex items-center justify-center text-indigo-600">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">Email Us</h4>
                  <p className="text-slate-500">engsantuur@gmail.com</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="shrink-0 w-12 h-12 rounded-2xl bg-indigo-100 flex items-center justify-center text-indigo-600">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">Call Us</h4>
                  <p className="text-slate-500">+252 614538131</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="shrink-0 w-12 h-12 rounded-2xl bg-indigo-100 flex items-center justify-center text-indigo-600">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">Visit Campus</h4>
                  <p className="text-slate-500"></p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 md:p-12 rounded-[40px] shadow-2xl shadow-indigo-100 border border-slate-100">
            {formState === 'success' ? (
              <div className="text-center py-12">
                <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Message Sent!</h3>
                <p className="text-slate-600 mb-8">We'll get back to you within 24 hours.</p>
                <button 
                  onClick={() => setFormState('idle')}
                  className="px-8 py-3 bg-indigo-600 text-white rounded-xl font-bold"
                >
                  Send another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Full Name</label>
                    <input 
                      required 
                      className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all" 
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Email Address</label>
                    <input 
                      required 
                      type="email" 
                      className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all" 
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Subject</label>
                  <select className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all appearance-none">
                    <option>General Inquiry</option>
                    <option>Enrollment Questions</option>
                    <option>Partnership</option>
                    <option>Course Information</option>
                    <option>Career Counseling</option>
                    <option>Technical Support</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Message</label>
                  <textarea 
                    required 
                    rows={4} 
                    className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all" 
                    placeholder="Tell us how we can help..."
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  disabled={formState === 'submitting'}
                  className="w-full py-5 bg-indigo-600 text-white rounded-2xl font-bold hover:bg-indigo-700 transition-all flex items-center justify-center gap-2"
                >
                  {formState === 'submitting' ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

// --- Main App Controller ---

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const renderContent = () => {
    switch (currentPage) {
      case 'home': return <HomePage setCurrentPage={setCurrentPage} />;
      case 'about': return <AboutPage />;
      case 'courses': return <CoursesPage />;
      case 'contact': return <ContactPage />;
      default: return <HomePage setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-indigo-100 selection:text-indigo-900">
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      
      <main>
        {renderContent()}
      </main>

      <Footer setCurrentPage={setCurrentPage} />
    </div>
  );
}