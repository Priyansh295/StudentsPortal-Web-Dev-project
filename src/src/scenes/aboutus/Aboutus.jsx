// AboutUs.js
import React from 'react';
import './Page.css';

function AboutUs() {
  return (
    <div className="about-us-page">
      <header>
        <h1>Welcome to Our Student Portal</h1>
      </header>

      <section>
        <h2>Who We Are</h2>
        <p p className="about-content">We are the Student Portal team, a group of dedicated individuals passionate about creating an enriching and empowering environment for students. Our goal is to provide a centralized platform that enhances the overall student experience and facilitates seamless communication and collaboration.</p>
      </section>

      <section>
        <h2>Our Mission</h2>
        <p className="about-content">At Student Portal, we aim to simplify the academic journey by offering a comprehensive suite of tools and resources. Whether you're a student managing coursework, an instructor facilitating learning, or an administrator overseeing operations, our mission is to support you in achieving your goals.</p>
      </section>

      <section>
        <h2>Key Features</h2>
        <ul>
          <li className='func'><strong>Dashboard:</strong> Personalized dashboards for students and faculty to view important information at a glance.</li>
          <li className='func'><strong>Collaboration:</strong> Tools for group projects, discussions, and collaborative learning experiences.</li>
          <li className='func'><strong>Calendar:</strong> Stay organized with a dynamic calendar featuring important dates, events, and deadlines.</li>
          <li className='func'><strong>Communication:</strong> Seamless communication channels for students, faculty, and administrators.</li>
          <li className='func'><strong>Resources:</strong> Access to a rich repository of educational resources, documents, and learning materials.</li>
        </ul>
      </section>
      <footer>
        <p className="about-content">Thank you for choosing Student Portal as your academic companion. Let's embark on this learning journey together!</p>
      </footer>
    </div>
  );
}

export default AboutUs;
