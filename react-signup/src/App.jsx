import { useState } from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import { User, Mail, Lightbulb, Users, CreditCard, ArrowRight, CheckCircle } from 'lucide-react';

function Navbar() {
  const navigate = useNavigate();
  return (
    <nav className="w-full fixed top-0 left-0 bg-black/30 backdrop-blur-xl border-b border-white/10 flex items-center justify-between py-4 px-4 sm:px-8 z-50">
      <div className="text-xl sm:text-2xl font-light tracking-wide text-white bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent cursor-pointer" onClick={() => navigate('/')}>Usuals.ai</div>
      <button 
        className="bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-full px-6 py-2 hover:from-blue-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl" 
        onClick={() => navigate('/signup')}
      >
        Sign Up
      </button>
    </nav>
  );
}

function IconInput({ icon, ...props }) {
  return (
    <div className="relative w-full mb-6">
      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-blue-400 text-lg opacity-80 z-10">
        {icon}
      </span>
      <input 
        {...props} 
        className={`pl-12 pr-4 py-4 w-full rounded-2xl border border-white/20 bg-white/5 backdrop-blur-sm text-white placeholder-gray-400 font-medium focus:outline-none focus:ring-2 focus:ring-blue-400/50 focus:border-blue-400/50 focus:bg-white/10 transition-all duration-300 ${props.className || ""}`}
      />
    </div>
  );
}

function IconSelect({ icon, children, ...props }) {
  return (
    <div className="relative w-full mb-6">
      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-blue-400 text-lg opacity-80 z-10">
        {icon}
      </span>
      <select 
        {...props} 
        className={`pl-12 pr-10 py-4 w-full rounded-2xl border border-white/20 bg-white/5 backdrop-blur-sm text-white font-medium focus:outline-none focus:ring-2 focus:ring-blue-400/50 focus:border-blue-400/50 focus:bg-white/10 transition-all duration-300 appearance-none cursor-pointer ${props.className || ""}`}
      >
        {children}
      </select>
      <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none text-sm">▼</span>
    </div>
  );
}

function AnimatedBackground() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
    </div>
  );
}

function HomePage() {
  const navigate = useNavigate();
  return (
    <div 
      className="min-h-screen flex flex-col relative overflow-hidden"
      style={{ background: 'radial-gradient(ellipse at center, #1a2332 0%, #0f1419 50%, #0a0d11 100%)' }}
    >
      <AnimatedBackground />
      <main className="flex-1 flex flex-col justify-center items-center text-center px-4 sm:px-8 min-h-screen relative z-10 ">
        <div className="max-w-5xl mx-auto">
          <div className="mb-8 animate-fade-in">
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-light text-white mb-6 leading-tight tracking-tight">
              One prompt.<br />
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-pulse">One video.</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-400 font-normal mb-12 max-w-3xl mx-auto leading-relaxed">
              Create polished reels, ads, or shorts in minutes with AI-powered video generation.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <button 
              onClick={() => navigate('/signup')}
              className="group bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-full px-8 py-4 hover:from-blue-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl text-lg flex items-center gap-2"
            >
              Start free
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
            </button>
            <button 
              className="text-white/80 hover:text-white font-medium px-8 py-4 rounded-full border border-white/20 hover:border-white/40 transition-all duration-300 text-lg"
            >
              Watch Demo
            </button>
          </div>
        </div>
      </main>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm flex items-center gap-2 group">
          Why Usuals.ai
          <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
        </a>
      </div>
    </div>
  );
}

function SignupPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    useCase: '',
    teamSize: '',
    role: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [step, setStep] = useState(1);
  const [animating, setAnimating] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleRegister = (e) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email) return;
    setAnimating(true);
    setTimeout(() => {
      setStep(2);
      setAnimating(false);
    }, 400);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.useCase || !formData.teamSize || !formData.role) return;
    setIsSubmitting(true);
    setSubmitStatus(null);
    try {
      const googleFormUrl = 'https://docs.google.com/forms/d/e/1FAIpQLScmtb68T0PE9ux3jc7uT6spr_sKuRXzrneT5qniPIuHjwuA-A/formResponse';
      const formDataToSend = new FormData();
      formDataToSend.append('entry.1885883987', formData.fullName);
      formDataToSend.append('entry.1234487408', formData.email);
      formDataToSend.append('entry.755360426', formData.useCase);
      formDataToSend.append('entry.803028115', formData.teamSize);
      formDataToSend.append('entry.1737138215', formData.role);
      await fetch(googleFormUrl, {
        method: 'POST',
        body: formDataToSend,
        mode: 'no-cors',
      });
      setSubmitStatus('success');
      setTimeout(() => {
        setFormData({ fullName: '', email: '', useCase: '', teamSize: '', role: '' });
        setStep(1);
        setIsSubmitting(false);
        setSubmitStatus(null);
        navigate('/');
      }, 3000);
    } catch {
      setSubmitStatus('error');
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden " style={{ background: 'radial-gradient(ellipse at center, #1a2332 0%, #0f1419 50%, #0a0d11 100%)' }}>
      <AnimatedBackground />
      <div className="w-full min-h-2 flex flex-col xl:flex-row items-center justify-center pt-20 pb-8 px-2 sm:px-4 relative z-10 gap-6 xl:gap-9 max-w-7xl mx-auto mt-6">
        {/* Left Card */}
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-4 sm:p-6 lg:p-12 flex flex-col justify-center w-full xl:w-2/3 shadow-2xl mb-6 xl:mb-0">
          <div className="mb-8">
            <h1 className="text-2xl sm:text-3xl lg:text-5xl xl:text-4xl font-bold text-white mb-6 leading-tight">
              Create, Translate, and Personalize{' '}
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Videos</span>{' '}
              in{' '}
              <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">Minutes</span>
            </h1>
            <p className="text-gray-400 text-base sm:text-lg max-w-2xl leading-relaxed">
              Create stunning videos with ease. Create your own or choose from our library of AI avatars and voices to bring your content to life.
            </p>
          </div>
          <div className="relative flex ">
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-500/20 via-purple-500/10 to-pink-500/20 opacity-60 pointer-events-none blur-xl" />
            <div className="p-4 sm:p-6 lg:p-8 w-full max-w-2xl relative">
              <div className="aspect-video bg-gradient-to-br from-blue-900/50 via-purple-900/50 to-pink-900/50 rounded-2xl flex items-center justify-center border border-white/10 relative overflow-hidden group cursor-pointer">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="text-white/80 text-3xl sm:text-4xl lg:text-6xl group-hover:scale-110 transition-transform duration-500 relative z-10">▶</div>
              </div>
              <div className="flex items-center justify-between mt-4">
                <div className="flex gap-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
                  <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
                  <div className="w-2 h-2 bg-pink-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Right Form */}
        <div className="flex flex-col justify-center w-full xl:w-1/3 xl:mt-[-16vh]">
          <div className="p-4 sm:p-6 shadow-2xl bg-transparent">
            {submitStatus === 'success' ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle size={32} className="text-green-400" />
                </div>
                <h2 className="text-2xl font-semibold text-white mb-4">Welcome to Usuals.ai!</h2>
                <p className="text-gray-300 mb-6">Your registration was successful. We're redirecting you to get started...</p>
                <div className="w-full bg-white/10 rounded-full h-2">
                  <div className="bg-gradient-to-r from-green-400 to-blue-500 h-2 rounded-full animate-pulse" style={{ width: '100%' }}></div>
                </div>
              </div>
            ) : (
              <div className="w-full">
                <div className="text-center mb-8">
                  <h2 className="text-2xl lg:text-3xl font-semibold text-white mb-2">
                    {step === 1 ? 'Get Started' : 'Tell us about yourself'}
                  </h2>
                  <p className="text-gray-400">
                    {step === 1 ? 'Create your account to start making videos' : 'Help us personalize your experience'}
                  </p>
                  {/* Progress indicator */}
                  <div className="flex justify-center mt-6 mb-2">
                    <div className="flex gap-2">
                      <div className={`w-3 h-3 rounded-full transition-all duration-300 ${step >= 1 ? 'bg-blue-500' : 'bg-white/20'}`} />
                      <div className={`w-3 h-3 rounded-full transition-all duration-300 ${step >= 2 ? 'bg-blue-500' : 'bg-white/20'}`} />
                    </div>
                  </div>
                  <p className="text-xs text-gray-500">Step {step} of 2</p>
                </div>
                {step === 1 && (
                  <div className={`transition-all duration-400 ${!animating ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'}`}> 
                    <IconInput
                      type="text"
                      placeholder="Full Name"
                      icon={<User size={18} />}
                      value={formData.fullName}
                      onChange={e => handleInputChange('fullName', e.target.value)}
                      required
                    />
                    <IconInput
                      type="email"
                      placeholder="Email Address"
                      icon={<Mail size={18} />}
                      value={formData.email}
                      onChange={e => handleInputChange('email', e.target.value)}
                      required
                    />
                    <button 
                      type="button" 
                      className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-2xl px-6 py-4 mt-4 hover:from-blue-600 hover:to-purple-700 transform hover:scale-[1.02] transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100" 
                      disabled={!formData.fullName || !formData.email || isSubmitting}
                      onClick={handleRegister}
                    >
                      Register
                      <ArrowRight size={18} className="inline ml-2" />
                    </button>
                  </div>
                )}
                {step === 2 && (
                  <div className={`transition-all duration-400 ${!animating ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'}`}> 
                    <IconSelect
                      icon={<Lightbulb size={18} />}
                      value={formData.useCase}
                      onChange={e => handleInputChange('useCase', e.target.value)}
                      required
                    >
                      <option value="" className="bg-gray-800 text-white">What's your primary use case?</option>
                      <option value="Work" className="bg-gray-800 text-white">Work</option>
                      <option value="Personal" className="bg-gray-800 text-white">Personal</option>
                      <option value="School" className="bg-gray-800 text-white">School</option>
                      <option value="Agency" className="bg-gray-800 text-white">Agency</option>
                      <option value="Other" className="bg-gray-800 text-white">Other</option>
                    </IconSelect>
                    <IconSelect
                      icon={<Users size={18} />}
                      value={formData.teamSize}
                      onChange={e => handleInputChange('teamSize', e.target.value)}
                      required
                    >
                      <option value="" className="bg-gray-800 text-white">What's your team size?</option>
                      <option value="Just me" className="bg-gray-800 text-white">Just me</option>
                      <option value="2-9" className="bg-gray-800 text-white">2-9 people</option>
                      <option value="10-49" className="bg-gray-800 text-white">10-49 people</option>
                      <option value="50-199" className="bg-gray-800 text-white">50-199 people</option>
                      <option value="200-499" className="bg-gray-800 text-white">200-499 people</option>
                      <option value="500-999" className="bg-gray-800 text-white">500-999 people</option>
                      <option value="1000+" className="bg-gray-800 text-white">1000+ people</option>
                    </IconSelect>
                    <IconSelect
                      icon={<CreditCard size={18} />}
                      value={formData.role}
                      onChange={e => handleInputChange('role', e.target.value)}
                      required
                    >
                      <option value="" className="bg-gray-800 text-white">What's your role?</option>
                      <option value="Marketer" className="bg-gray-800 text-white">Marketer</option>
                      <option value="Business Owner" className="bg-gray-800 text-white">Business Owner</option>
                      <option value="Creative Director" className="bg-gray-800 text-white">Creative Director</option>
                      <option value="Digital Marketing Agency" className="bg-gray-800 text-white">Digital Marketing Agency</option>
                      <option value="Content Creator" className="bg-gray-800 text-white">Content Creator</option>
                      <option value="Developer" className="bg-gray-800 text-white">Developer</option>
                      <option value="Student" className="bg-gray-800 text-white">Student</option>
                      <option value="Other" className="bg-gray-800 text-white">Other</option>
                    </IconSelect>
                    <div className="flex gap-3">
                      <button 
                        type="button"
                        className="flex-1 bg-white/10 backdrop-blur-sm text-white font-medium rounded-2xl px-6 py-4 border border-white/20 hover:bg-white/20 transition-all duration-300"
                        onClick={() => {
                          setAnimating(true);
                          setTimeout(() => {
                            setStep(1);
                            setAnimating(false);
                          }, 400);
                        }}
                      >
                        Back
                      </button>
                      <button 
                        type="button" 
                        className="flex-[2] bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-2xl px-6 py-4 hover:from-blue-600 hover:to-purple-700 transform hover:scale-[1.02] transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-2" 
                        disabled={!formData.useCase || !formData.teamSize || !formData.role || isSubmitting}
                        onClick={handleSubmit}
                      >
                        {isSubmitting ? (
                          <>
                            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                            Creating Account...
                          </>
                        ) : (
                          <>
                            Complete Registration
                            <CheckCircle size={18} />
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<><Navbar /><HomePage /></>} />
      <Route path="/signup" element={<><Navbar /><SignupPage /></>} />
    </Routes>
  );
}

export default App;