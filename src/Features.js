import React from 'react';
import './Features.css';

function Features() {
  return (
    <div className="features-complete">
      {}
      <section className="features-grid-section" id="features-grid">
        <div className="feature-row">
          {}
          <div className="feature-large-card left">
            <div className="feature-visual-large">
              <div className="kanban-board">
                <div className="kanban-column">
                  <div className="column-header">
                    <h4>Not Started</h4>
                    <span className="count-badge blue">2</span>
                  </div>
                  <div className="kanban-task-card">
                    <span className="task-badge blue">Not Started</span>
                    <h5>Motion Studio</h5>
                    <p>Create seamless animations for impactful user experiences and interfaces.</p>
                    <div className="task-footer-info">
                      <span className="due-indicator red">📅 Due: 12 March 2025</span>
                      <div className="task-avatars">
                        <div className="avatar pink"></div>
                        <div className="avatar blue"></div>
                      </div>
                    </div>
                    <div className="task-mini-stats">
                      <span>💬 11 Comments</span>
                      <span>👥 2 Likes</span>
                      <span>📎 7/9</span>
                    </div>
                  </div>
                </div>
                
                <div className="kanban-column">
                  <div className="column-header">
                    <h4>On Progress</h4>
                    <span className="count-badge orange">01</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="feature-text-content">
              <h2>Smart Task Management</h2>
              <p>AI organizes, prioritizes, and auto-suggests tasks.</p>
            </div>
          </div>
        </div>

        <div className="feature-row reverse">
          {}
          <div className="feature-large-card right">
            <div className="feature-text-content">
              <h2>Automated Scheduling</h2>
              <p>AI schedules tasks based on your habits and deadlines.</p>
            </div>
            <div className="feature-visual-large">
              <div className="calendar-widget">
                <div className="calendar-header-bar">
                  <h4>Projects</h4>
                  <div className="view-controls">
                    <button className="view-btn">Weekly ▼</button>
                    <button className="icon-btn">📅</button>
                    <button className="icon-btn">📊</button>
                  </div>
                </div>
                
                <div className="calendar-grid-layout">
                  <div className="time-col">
                    <div className="time-slot">GMT +7</div>
                    <div className="time-slot">08:00 am</div>
                  </div>
                  
                  <div className="day-col">
                    <div className="day-header">Monday 10</div>
                  </div>
                  
                  <div className="day-col">
                    <div className="day-header">Tuesday 11</div>
                    <div className="calendar-event blue">
                      <h6>Client Consultation Calls</h6>
                      <p>⏰ 08:00 am - 09:00 am</p>
                      <button className="reschedule-btn">Reschedule</button>
                    </div>
                  </div>
                  
                  <div className="day-col">
                    <div className="day-header">Wednesday 12</div>
                    <div className="calendar-event green">
                      <h6>Project Management Check-in</h6>
                      <p>⏰ 10:00 am - 09:00 am</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="feature-row">
          {}
          <div className="feature-large-card left">
            <div className="feature-visual-large">
              <div className="insights-dashboard">
                <div className="insight-circle-item">
                  <div className="progress-circle green">
                    <svg width="140" height="140">
                      <circle cx="70" cy="70" r="60" className="bg-circle" />
                      <circle cx="70" cy="70" r="60" className="progress-circle-line green" 
                        strokeDasharray="377" strokeDashoffset="94" />
                    </svg>
                    <div className="circle-center-icon">✓</div>
                  </div>
                  <h5>On-Time Completion</h5>
                </div>
                
                <div className="insight-circle-item">
                  <div className="progress-circle purple">
                    <svg width="140" height="140">
                      <circle cx="70" cy="70" r="60" className="bg-circle" />
                      <circle cx="70" cy="70" r="60" className="progress-circle-line purple" 
                        strokeDasharray="377" strokeDashoffset="151" />
                    </svg>
                    <div className="circle-center-icon">⏱️</div>
                  </div>
                  <h5>Average Task Duration</h5>
                </div>
                
                <div className="insight-circle-item">
                  <div className="progress-circle black">
                    <svg width="140" height="140">
                      <circle cx="70" cy="70" r="60" className="bg-circle" />
                      <circle cx="70" cy="70" r="60" className="progress-circle-line black" 
                        strokeDasharray="377" strokeDashoffset="188" />
                    </svg>
                    <div className="circle-center-icon">💻</div>
                  </div>
                  <h5>Most Productive Time</h5>
                </div>
              </div>
            </div>
            <div className="feature-text-content">
              <h2>Intelligent Insights</h2>
              <p>Track progress with AI-driven analytics and reports.</p>
            </div>
          </div>
        </div>

        <div className="feature-row reverse">
          {}
          <div className="feature-large-card right">
            <div className="feature-text-content">
              <h2>Seamless Integrations</h2>
              <p>AI organizes, prioritizes, and auto-suggests tasks.</p>
            </div>
            <div className="feature-visual-large">
              <div className="integrations-panel">
                <h4>Integration Tools</h4>
                
                <div className="response-time-display">
                  <p className="label">Avg Response Time :</p>
                  <div className="time-value">
                    <h3>365</h3>
                    <span className="percentage-badge">84.89%</span>
                  </div>
                  <p className="unit">Second</p>
                </div>
                
                <div className="app-icons-grid">
                  <div className="app-icon">📘</div>
                  <div className="app-icon">💬</div>
                  <div className="app-icon">📧</div>
                  <div className="app-icon google-apps">
                    <span className="g-icon">G</span>
                    <span>Gmail Applications</span>
                    <span className="notif-dot">12</span>
                  </div>
                </div>
                
                <div className="visit-statistics">
                  <h5>Visit Statistic</h5>
                  <p className="visitor-label">Visitor</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {}
      <section className="features-showcase" id="features-showcase">
        <div className="showcase-header-center">
          <p className="features-eyebrow">FEATURES</p>
          <h2>Maximize Productivity with<br />AI-Driven Planning</h2>
          <p className="showcase-subtitle">AI-powered planning for smarter, faster task management.</p>
        </div>

        <div className="showcase-layout">
          <div className="showcase-image-area">
            <div className="main-showcase-image">
              <div className="person-placeholder">
                {}
                <div className="person-frame"></div>
              </div>
              
              <div className="floating-widget left-widget">
                <h4>To-Do <span className="widget-count">8</span></h4>
                <div className="todo-items">
                  <div className="todo-row">
                    <input type="checkbox" checked readOnly />
                    <div className="progress-bar orange-progress"></div>
                  </div>
                  <div className="todo-row">
                    <input type="checkbox" readOnly />
                    <div className="progress-bar red-progress"></div>
                  </div>
                  <div className="todo-row">
                    <input type="checkbox" readOnly />
                    <div className="progress-bar grey-progress"></div>
                  </div>
                </div>
              </div>
              
              <div className="floating-widget center-widget">
                <h4>On Progress <span className="widget-count orange">9</span></h4>
                <div className="todo-items">
                  <div className="todo-row">
                    <input type="checkbox" readOnly />
                    <div className="progress-bar purple-progress"></div>
                  </div>
                  <div className="todo-row">
                    <input type="checkbox" checked readOnly />
                    <div className="progress-bar green-progress"></div>
                  </div>
                  <div className="todo-row">
                    <input type="checkbox" readOnly />
                    <div className="progress-bar grey-progress"></div>
                  </div>
                </div>
              </div>
              
              <div className="floating-widget right-widget-stack">
                <div className="mini-task-card purple-card">
                  <span className="card-time">⏰</span>
                  <div className="card-users">
                    <div className="user-avatar-mini pink"></div>
                    <span>+2</span>
                  </div>
                </div>
                <div className="mini-task-card blue-card">
                  <span className="card-time">⏰</span>
                  <div className="card-users">
                    <div className="user-avatar-mini blue"></div>
                    <span>+2</span>
                  </div>
                </div>
                <div className="mini-task-card green-card">
                  <span className="card-time">⏰</span>
                  <div className="card-users">
                    <div className="user-avatar-mini green"></div>
                    <span>+2</span>
                  </div>
                </div>
              </div>
            </div>
            
            <p className="showcase-caption">Smart Fast Focused Efficient</p>
          </div>

          <div className="showcase-features-list">
            <div className="mini-feature-card purple-feature">
              <div className="feature-icon-circle">👤</div>
              <div>
                <h4>Personalized Productivity</h4>
                <p>Track progress with AI-driven analytics and reports.</p>
              </div>
            </div>
            
            <div className="mini-feature-card blue-feature">
              <div className="feature-icon-circle">🎯</div>
              <div>
                <h4>AI Task Prioritization</h4>
                <p>Track progress with AI-driven analytics and reports.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {}
      <section className="applications-section" id="applications">
        <div className="applications-header-center">
          <h2>Real-World Applications of<br />AI-Powered Task Management</h2>
          <p>Enhance efficiency with AI-driven solutions for seamless task management.</p>
        </div>

        <div className="applications-grid-layout">
          <div className="application-hero-card">
            <div className="app-card-content">
              <h3>For Professionals</h3>
              <p>Stay organized automate planning boost focus improve efficiency enhance productivity manage tasks optimize workflow achieve goals</p>
              <button className="btn btn-outline">Explore Features</button>
            </div>
            <div className="app-card-visual">
              <div className="mobile-mockup">
                {}
                <div className="mobile-frame"></div>
              </div>
            </div>
          </div>

          <div className="application-details-cards">
            <div className="detail-card">
              <div className="detail-card-header">
                <h4>In Progress</h4>
                <button className="close-x">✕</button>
              </div>
              <h3>Learning App Redesign</h3>
              <div className="detail-row">
                <span className="detail-label">⏰ Created Time</span>
                <span>15 November 2024</span>
              </div>
              <div className="detail-row">
                <span className="detail-label">📊 Status</span>
                <span className="status-tag orange">⚫ Ongoing</span>
              </div>
              <div className="detail-row">
                <span className="detail-label">📅 Due Date</span>
                <span>3 December 2024 | 09:00 pm</span>
              </div>
            </div>

            <div className="detail-card reminders-card-app">
              <div className="detail-card-header">
                <h4>Daily Reminders</h4>
                <button className="settings-icon-btn">⚙️</button>
              </div>
              
              <div className="reminder-row-app">
                <div className="reminder-icon-app green">📊</div>
                <div>
                  <h5>Check Daily Progress</h5>
                  <p>Review tasks and updates daily</p>
                  <span className="priority-tag low">● Low</span>
                </div>
              </div>
              
              <div className="reminder-row-app">
                <div className="reminder-icon-app pink">💬</div>
                <div>
                  <h5>Provide Feedback Tasks</h5>
                  <p>Comments for task improvements</p>
                  <span className="priority-tag high">● High</span>
                </div>
              </div>
              
              <div className="reminder-row-app">
                <div className="reminder-icon-app yellow">🎯</div>
                <div>
                  <h5>Set Tomorrow's Goals</h5>
                  <p>Plan priorities for next day</p>
                  <span className="priority-tag medium">● Medium</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Features;