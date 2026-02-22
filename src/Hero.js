import React from 'react';
import './Hero.css';

function Hero() {
  const handleStartTrial = () => {
    alert('Starting Free Trial! 🚀');
  };

  const handleExploreFeatures = () => {
    const featuresSection = document.querySelector('.features-showcase');
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleAskAI = () => {
    alert('AI Assistant activated! 🤖');
  };

  return (
    <section className="hero-section" id="home">
      <div className="hero-wrapper">
        <div className="hero-content">
          <h1>
            Supercharge<br />
            Your Productivity<br />
            with <span className="highlight">AI-Powered</span> Planning
          </h1>
          <p className="hero-subtitle">
            Organize tasks, track progress, and achieve more—effortlessly.
          </p>
          <div className="hero-buttons">
            <button className="btn btn-dark btn-large" onClick={handleStartTrial}>
              Start Free Trial
            </button>
            <button className="btn btn-outline btn-large" onClick={handleExploreFeatures}>
              Explore Features
            </button>
          </div>
        </div>

        {}
        <div className="dashboard-preview-container">
          <div className="dashboard-main">
            {}
            <div className="dashboard-sidebar">
              <div className="user-profile-header">
                <div className="user-avatar">KO</div>
                <div className="user-info">
                  <h4>Keira Ollis</h4>
                  <p>Admin</p>
                </div>
              </div>
              
              <nav className="sidebar-nav">
                <div className="nav-item">📊 Dashboard</div>
                <div className="nav-item">🤖 Taskion AI</div>
                <div className="nav-item">✓ My Task</div>
                <div className="nav-item">📅 Calendar</div>
                <div className="nav-item">
                  💬 Messages
                  <span className="notification-badge">3</span>
                </div>
                <div className="nav-item">📈 Reports</div>
                <div className="nav-item">👥 Team Collaboration</div>
              </nav>

              <div className="projects-section">
                <h5>MY PROJECTS</h5>
                <div className="project-item">
                  <span className="dot orange"></span> Product UI/UX
                </div>
                <div className="project-item">
                  <span className="dot blue"></span> Landing Page
                </div>
                <div className="project-item">
                  <span className="dot green"></span> Full App
                </div>
                <div className="project-item">
                  <span className="dot purple"></span> Logo & Branding
                </div>
              </div>
            </div>

            {}
            <div className="dashboard-content">
              <div className="welcome-card">
                <h3>Welcome Back</h3>
                <p>You have completed 14 awesome productivity</p>
                
                <div className="action-chips">
                  <button className="chip chip-ai" onClick={handleAskAI}>
                    ✨ Ask AI
                  </button>
                  <button className="chip">Get Task Update</button>
                  <button className="chip">Create Workspace</button>
                  <button className="chip">Connect Apps</button>
                </div>
              </div>

              <div className="greeting-section">
                <h3>Hello Keira!</h3>
                <p>What are you will do today?</p>
                
                <div className="project-cards-grid">
                  <div className="project-card-preview">
                    <div className="badges">
                      <span className="badge green">In Progress</span>
                      <span className="badge purple">Analytics</span>
                    </div>
                    <div className="card-image dohari"></div>
                    <h4>Dohari Studio</h4>
                  </div>
                  
                  <div className="project-card-preview">
                    <div className="card-image motion"></div>
                    <h4>Motion Studio</h4>
                  </div>
                </div>
              </div>

              <div className="automations-section">
                <h3>Smart Task Automations</h3>
                <div className="stats-grid">
                  <div className="stat-box">
                    <div className="stat-icon">📄</div>
                    <div>
                      <p className="stat-label">Total Projects</p>
                      <h4>456 Projects</h4>
                      <span className="status-badge done">Done</span>
                    </div>
                  </div>
                  
                  <div className="stat-box">
                    <div className="stat-icon">📋</div>
                    <div>
                      <p className="stat-label">Completed Projects</p>
                      <h4>125 Projects</h4>
                      <span className="status-badge done">Done</span>
                    </div>
                  </div>
                  
                  <div className="stat-box">
                    <div className="stat-icon">⏱️</div>
                    <div>
                      <p className="stat-label">Ongoing Projects</p>
                      <h4>168 Projects</h4>
                      <span className="status-badge progress">In Progress</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {}
            <div className="dashboard-right-sidebar">
              <button className="ask-ai-large" onClick={handleAskAI}>
                ✨ Ask AI
              </button>

              <div className="tasks-widget">
                <h4>All Tasks</h4>
                
                <div className="task-section">
                  <div className="task-header">
                    <span className="task-status-badge blue">Not Started</span>
                  </div>
                  <div className="task-item-card">
                    <span className="task-label blue">Not Started</span>
                    <h5>Motion Studio</h5>
                    <p>Create seamless animations for impactful user experiences and interfaces.</p>
                    <div className="task-meta">
                      <span className="due-date">📅 Due: 12 March 2025</span>
                      <div className="task-stats">
                        <span>💬 11</span>
                        <span>👥 2</span>
                        <span>📎 7/9</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="task-section">
                  <div className="task-header">
                    <span className="task-status-badge orange">On Progress</span>
                    <span className="count">01</span>
                  </div>
                  <div className="task-item-card">
                    <span className="task-label blue">Not Started</span>
                    <h5>Motion Studio</h5>
                    <p>Create seamless animations for next great experiences</p>
                    <div className="task-meta">
                      <span className="due-date green">✓ Due: 14 March 2025</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="reminders-widget">
                <div className="widget-header">
                  <h4>Daily Reminders</h4>
                  <button className="settings-icon">⚙️</button>
                </div>
                
                <div className="reminder-item">
                  <div className="reminder-icon green">📊</div>
                  <div>
                    <h5>Check Daily Progress</h5>
                    <p>Review tasks and updates daily</p>
                    <span className="priority low">● Low</span>
                  </div>
                </div>
                
                <div className="reminder-item">
                  <div className="reminder-icon purple">💬</div>
                  <div>
                    <h5>Provide Feedback Tasks</h5>
                    <p>Comments for task improvements</p>
                    <span className="priority high">● High</span>
                  </div>
                </div>
                
                <div className="reminder-item">
                  <div className="reminder-icon yellow">🎯</div>
                  <div>
                    <h5>Set Tomorrow's Goals</h5>
                    <p>Plan priorities for next day</p>
                    <span className="priority medium">● Medium</span>
                  </div>
                </div>
                
                <div className="reminder-item">
                  <div className="reminder-icon red">📅</div>
                  <div>
                    <h5>Update Project Deadlines</h5>
                    <p>Adjust timelines and schedules</p>
                    <span className="priority high">● High</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;