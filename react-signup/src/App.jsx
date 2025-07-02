import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { FaUser, FaGlobe, FaLightbulb, FaUsers, FaLink, FaIdBadge } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import './App.css';

function Navbar() {
  const navigate = useNavigate();
  return (
    <nav className="navbar">
      <div className="navbar-logo">USUALS.AI</div>
      <button className="navbar-signup" onClick={() => navigate('/signup')}>Sign Up</button>
    </nav>
  );
}

function IconInput({ icon, ...props }) {
  return (
    <div className="icon-input-wrapper">
      <span className="icon-input-icon">{icon}</span>
      <input {...props} className={"dummy-input " + (props.className || "")}/>
    </div>
  );
}

function IconSelect({ icon, children, ...props }) {
  return (
    <div className="icon-input-wrapper">
      <span className="icon-input-icon">{icon}</span>
      <select {...props} className={"dummy-input " + (props.className || "")}>
        {children}
      </select>
    </div>
  );
}

function App() {
  const location = useLocation();
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

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleRegister = (e) => {
    e.preventDefault();
    setAnimating(true);
    setTimeout(() => {
      setStep(2);
      setAnimating(false);
    }, 400); // match CSS transition duration
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
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
        mode: 'no-cors'
      });
      setSubmitStatus('success');
      setFormData({
        fullName: '',
        email: '',
        useCase: '',
        teamSize: '',
        role: ''
      });
      setStep(1);
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Navbar />
      {location.pathname === '/signup' ? (
        <div className="signup-container">
          <div className="signup-left">
            <h1>
              Create, Translate, and Personalize <span className="highlight">Videos</span> in <span className="highlight">Minutes</span>
            </h1>
            <p className="subheadline">
              Create stunning videos with ease. Create your own or choose from our library of AI avatars and voices
            </p>
            <div className="video-wrapper">
              <div className="video-bg-green"></div>
              <video controls poster="https://images.unsplash.com/photo-1519125323398-675f0ddb6308" style={{borderRadius: '16px'}}>
                <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
          <div className="signup-right">
            <form className="form-box" onSubmit={step === 1 ? handleRegister : handleSubmit}>
              <h2>Sign up to get started</h2>
              {step === 1 && (
                <div className={`form-step ${!animating ? 'form-step-active' : 'form-step-hidden'}`}>
                  <IconInput
                    type="text"
                    placeholder="Full Name"
                    icon={<FaUser />}
                    value={formData.fullName}
                    onChange={e => handleInputChange('fullName', e.target.value)}
                    required
                  />
                  <IconInput
                    type="email"
                    placeholder="Email"
                    icon={<MdEmail />}
                    value={formData.email}
                    onChange={e => handleInputChange('email', e.target.value)}
                    required
                  />
                  <button type="submit" className="send-btn" disabled={isSubmitting}>
                    {isSubmitting ? 'Submitting...' : 'Register'}
                  </button>
                </div>
              )}
              {step === 2 && (
                <div className={`form-step ${!animating ? 'form-step-active' : 'form-step-hidden'}`}>
                  <IconSelect
                    icon={<FaLightbulb />}
                    value={formData.useCase}
                    onChange={e => handleInputChange('useCase', e.target.value)}
                    required
                  >
                    <option value="">Use Case</option>
                    <option value="Work">Work</option>
                    <option value="Personal">Personal</option>
                    <option value="School">School</option>
                    <option value="Agency">Agency</option>
                    <option value="Other">Other</option>
                  </IconSelect>
                  <IconSelect
                    icon={<FaUsers />}
                    value={formData.teamSize}
                    onChange={e => handleInputChange('teamSize', e.target.value)}
                    required
                  >
                    <option value="">Team Size</option>
                    <option value="Just me">Just me</option>
                    <option value="2-9">2-9</option>
                    <option value="10-49">10-49</option>
                    <option value="50-199">50-199</option>
                    <option value="200-499">200-499</option>
                    <option value="500-999">500-999</option>
                  </IconSelect>
                  <IconSelect
                    icon={<FaIdBadge />}
                    value={formData.role}
                    onChange={e => handleInputChange('role', e.target.value)}
                    required
                  >
                    <option value="">Role</option>
                    <option value="Marketer">Marketer</option>
                    <option value="Business Owner">Business Owner</option>
                    <option value="Creative Director">Creative Director</option>
                    <option value="Digital Marketing Agency">Digital Marketing Agency</option>
                    <option value="Content Creator">Content Creator</option>
                    <option value="Developer">Developer</option>
                    <option value="Other">Other</option>
                  </IconSelect>
                  <button type="submit" className="send-btn" disabled={isSubmitting}>
                    {isSubmitting ? 'Submitting...' : 'Submit'}
                  </button>
                </div>
              )}
              {submitStatus === 'success' && (
                <div className="success-message">Thank you! Your registration was successful.</div>
              )}
              {submitStatus === 'error' && (
                <div className="error-message">Something went wrong. Please try again.</div>
              )}
            </form>
          </div>
        </div>
      ) : (
        <div style={{ minHeight: '80vh' }}></div>
      )}
    </>
  );
}

export default App;
