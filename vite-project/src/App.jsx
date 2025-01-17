import React from 'react';
import './App.css';

const App = () => {
  return (
    <div className="app">
      <header className="header">
        <h1>Welcome to My Portfolio</h1>
        <nav>
          <ul className="nav-list">
            <li><a href="#about">About Me</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#Cert">Certifications</a></li>
            
          </ul>
        </nav>
      </header>

      <main>
        <section id="about" className="section">
          <h2>About Me</h2>
          <p>Hello! I am Kanishka devi, an aspiring Electronics and Communication Engineering (ECE) student with a passion for 
            innovation and problem-solving in the fields of electronics, communication, and embedded systems. 
            I am driven by a curiosity to explore cutting-edge technologies and contribute to creating smarter, more efficient solutions for real-world challenges.
          </p>
          <p>Currently I'm an 19 year old teen pursuing my degree in Sri Krishna College of Engineering and Technology.
            Hereby I am Buiding my portfolio.
          </p>
        </section>

        <section id="projects" className="section">
          <h2>Projects</h2>
        
          <div className="project">
            <h3>Smart Home Automation:</h3>
            <p>Description of project 1.</p>
          </div>
          <div className="project">
            <h3>Microbial Detection in dairy products:</h3>
            <p>Description of project 2.</p>
          </div>
          <div className="project">
            <h3>Project 3</h3>
            <p>Description of project 3.</p>
          </div>
        </section>

        <section id="contact" className="section">
          <h2>Contact</h2>
          <p>Email me at: <a href="mailto:kanishkadevi45@gmail.com">kanishkadevi45@gmail.com</a></p>
          <div class="badge-base LI-profile-badge" data-locale="en_US" data-size="medium" data-theme="light" data-type="HORIZONTAL" data-vanity="kanishka-devi-aa397332a" data-version="v1">LinkedIn: <a class="badge-base__link LI-simple-link" href="https://in.linkedin.com/in/kanishka-devi-aa397332a?trk=profile-badge">Kanishka Devi</a></div>
              
        </section>
        <section id ="Cert" className="section">
          <h2>Certiications</h2>
          <ul>
            <li>Soft Skill(NPTEL)</li>
            <li>Ethics in Engineering(NPTEL)</li>
            <li>Gen AI course</li>
            <li>Infosys Springboard(c++,java)</li>
          </ul>
        </section>
      </main>

      <footer className="footer">
        <p>&copy; 2025 Your Name. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
