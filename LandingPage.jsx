import { useState } from 'react'
import './LandingPage.css'
import aafaLogo from '/aafa-bg.png'
import careVector from '/carevector.png'

function LandingPage({ onGetStarted, onProviderJoin }) {
  const [activeFeature, setActiveFeature] = useState(0)

  const features = [
    {
      icon: '💪',
      title: 'Expert Trainers',
      description: 'Certified fitness professionals to guide your journey'
    },
    {
      icon: '🏋️',
      title: 'Personalized Plans',
      description: 'Custom workout and nutrition plans tailored to you'
    },
    {
      icon: '📱',
      title: 'Easy Booking',
      description: 'Book sessions instantly with our simple platform'
    },
    {
      icon: '⭐',
      title: 'Track Progress',
      description: 'Monitor your fitness journey with detailed analytics'
    }
  ]

  const services = [
    { name: 'Nursing Care', icon: '🏥' },
    { name: 'Elder Care', icon: '👴' },
    { name: 'Mental Care', icon: '🧠' },
    { name: 'Physiotherapy', icon: '💆' },
    { name: 'Diet & Nutrition', icon: '🥗' },
    { name: 'Doctor Consultation', icon: '👨‍⚕️' }
  ]

  const stats = [
    { number: '10K+', label: 'Active Members' },
    { number: '500+', label: 'Expert Trainers' },
    { number: '50+', label: 'Services Offered' },
    { number: '4.9', label: 'Average Rating' }
  ]

  return (
    <div className="landing-page">
      {/* Navigation */}
      <nav className="landing-nav">
        <div className="nav-container">
          <div className="nav-logo">
            <img src={aafaLogo} alt="AAFA" className="logo-img" />
            <span className="logo-text">Active Aid Fitness Academy</span>
          </div>
          <button className="nav-cta" onClick={onGetStarted}>
            Get Started
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-background">
          <div className="gradient-orb orb-1"></div>
          <div className="gradient-orb orb-2"></div>
          <div className="gradient-orb orb-3"></div>
        </div>
        <div className="hero-content">
          <div className="hero-badge">
            <span className="badge-text">Transform Your Life Today</span>
          </div>
          <h1 className="hero-title">
            Your Journey to
            <span className="gradient-text"> Better Health</span>
            <br />
            Starts Here
          </h1>
          <p className="hero-description">
            Join thousands who have transformed their lives with personalized fitness and wellness services. 
            Expert care, delivered to your doorstep.
          </p>
          <div className="hero-actions">
            <button className="btn-primary" onClick={onGetStarted}>
              Get Started as User
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button className="btn-secondary" onClick={onProviderJoin || (() => window.open('https://aafa.mycartly.in/service-provider', '_blank'))}>
              Join as Service Provider
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="2"/>
                <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
          <div className="hero-stats">
            {stats.map((stat, index) => (
              <div key={index} className="stat-item">
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="section-container">
          <div className="section-header">
            <h2 className="section-title">Why Choose Us</h2>
            <p className="section-subtitle">
              Experience the difference with our comprehensive wellness platform
            </p>
          </div>
          <div className="features-grid">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className={`feature-card ${activeFeature === index ? 'active' : ''}`}
                onMouseEnter={() => setActiveFeature(index)}
              >
                <div className="feature-icon">{feature.icon}</div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <div className="section-container">
          <div className="section-header">
            <h2 className="section-title">Our Services</h2>
            <p className="section-subtitle">
              Comprehensive wellness solutions for every need
            </p>
          </div>
          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className="service-card">
                <div className="service-icon">{service.icon}</div>
                <h3 className="service-name">{service.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Provider Section */}
      <section className="provider-section">
        <div className="section-container">
          <div className="provider-content">
            <div className="provider-text">
              <div className="provider-badge">
                <span className="badge-text">For Professionals</span>
              </div>
              <h2 className="provider-title">
                Become a <span className="gradient-text">Service Provider</span>
              </h2>
              <p className="provider-description">
                Join our network of certified professionals and start earning by providing quality healthcare and wellness services. 
                Set your own schedule, reach more clients, and grow your practice.
              </p>
              <div className="provider-benefits">
                <div className="benefit-item">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <polyline points="22 4 12 14.01 9 11.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span>Flexible Schedule</span>
                </div>
                <div className="benefit-item">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <polyline points="22 4 12 14.01 9 11.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span>Competitive Earnings</span>
                </div>
                <div className="benefit-item">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <polyline points="22 4 12 14.01 9 11.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span>Support & Training</span>
                </div>
                <div className="benefit-item">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <polyline points="22 4 12 14.01 9 11.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span>Easy Registration</span>
                </div>
              </div>
              <button className="btn-provider" onClick={onProviderJoin || (() => window.open('https://aafa.mycartly.in/service-provider', '_blank'))}>
                Join as Service Provider
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
            <div className="provider-visual">
              <div className="provider-card-visual">
                <div className="visual-icon">👨‍⚕️</div>
                <div className="visual-text">Professional Network</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-background">
          <img src={careVector} alt="Care" className="cta-illustration" />
        </div>
        <div className="cta-content">
          <h2 className="cta-title">Ready to Transform Your Life?</h2>
          <p className="cta-description">
            Join Active Aid Fitness Academy today and take the first step towards a healthier, happier you.
          </p>
          <div className="cta-buttons">
            <button className="btn-primary btn-large" onClick={onGetStarted}>
              Get Started as User
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button className="btn-secondary btn-large" onClick={onProviderJoin || (() => window.open('https://aafa.mycartly.in/service-provider', '_blank'))}>
              Join as Provider
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="landing-footer">
        <div className="footer-container">
          <div className="footer-brand">
            <img src={aafaLogo} alt="AAFA" className="footer-logo" />
            <p className="footer-tagline">Active Aid Fitness Academy</p>
            <p className="footer-description">
              Your trusted partner in health and wellness
            </p>
          </div>
          <div className="footer-links">
            <div className="footer-column">
              <h4 className="footer-heading">Services</h4>
              <a href="#" className="footer-link">Nursing Care</a>
              <a href="#" className="footer-link">Elder Care</a>
              <a href="#" className="footer-link">Mental Care</a>
              <a href="#" className="footer-link">Physiotherapy</a>
            </div>
            <div className="footer-column">
              <h4 className="footer-heading">Company</h4>
              <a href="#" className="footer-link">About Us</a>
              <a href="#" className="footer-link">Contact</a>
              <a href="#" className="footer-link">Privacy Policy</a>
              <a href="#" className="footer-link">Terms of Service</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 Active Aid Fitness Academy. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default LandingPage

