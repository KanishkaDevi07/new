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
          <p>Currently pursuing my degree in Sri Krishna College of Engineering and Technology.
            Hereby I am Buiding my portfolio.
          </p>
        </section>

        <section id="projects" className="section">
          <h2>Projects</h2>
        
            
                <div class="project_container">
                    <h2>Automated traffic Surveillance using UAV</h2>
                    <p class="descrption">The UAV-based traffic surveillance system is an advanced solution designed to monitor and control traffic autonomously without human intervention. The system features a rechargeable UAV equipped with a wireless charging mechanism, enabling it to return to its docking station automatically when battery levels are low, ensuring uninterrupted operation. Compact and agile, the UAV is optimized for urban environments, capable of navigating narrow streets and hovering in congested areas while withstanding diverse weather conditions.</p>
                </div>
                <div class="project_container">
                    <h2>People Counting Using IR Sensor and Embedded Systems</h2>
                    <p class="descrption">This project utilizes Infrared (IR) sensors and embedded systems to develop a people-counting device. The system detects the entry and exit of individuals by using IR beams and processes the count data in real-time. Applications include automating occupancy tracking in rooms, malls, or offices, and implementing crowd control measures. The embedded system ensures accuracy and low power consumption, making it suitable for smart monitoring systems.</p>
                </div>
                <div class="project_container">
                    <h2>Smart Lock System</h2>
                    <p class="descrption">This embedded system project features a secure smart lock controlled via a keypad. Users input a password, which the microcontroller (AT89C51) verifies to lock or unlock a mechanism. The system includes an LCD for user feedback, displaying lock status or prompting for the password. It's a practical application of microcontroller interfacing, emphasizing security, ease of use, and real-world embedded solutions.</p>
                </div>
                <div class="project_container">
                    <h2>Smart Home Automation</h2>
                    <p class="descrption">The Smart Home Automation project focuses on creating a system to control home appliances such as lights, fans, or other devices remotely. Using microcontrollers or Arduino, the system integrates sensors and communication modules (e.g., Bluetooth, Wi-Fi) to enable control via a smartphone or voice commands. This project highlights the growing trend of IoT in making homes energy-efficient, convenient, and futuristic.</p>
            
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
