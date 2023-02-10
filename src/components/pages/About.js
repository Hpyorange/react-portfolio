import React from 'react';
import photo from '../Images/my-pic.png';

export default function About() {
  return (
    <div class="content" id='about'>
      <h1 class="title">About <span>Me</span></h1>
      <div class="photo d-flex flex-column flex-md-row align-items-center justify-content-center col-12">      
        <img src={photo} alt="Jasper" />
        <p class="container mx-4 aboutText col-12 col-md-6">
      UI/UX Designer & Front End Developer
      with B.S. in computer science and certificates from UofT SCS UX/UI and full stack web development Boot Camp. Skilled in most Adobe suite software, Figma, HTML5, CSS, JavaScript, TypeScript, Bootstrap, jQuery and React. Strengthened in user problem-solving and believed that understanding the needs and frustrations is the key to improving user experience. Specializing in creating and coding beautiful and functional websites and digital interfaces, I am a very passionate designer/developer who always wants to grow, learn, and explore something new.
      </p>
      </div>

    </div>
  );
}
